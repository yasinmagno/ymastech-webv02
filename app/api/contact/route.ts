import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeProjectType = projectType ? escapeHtml(projectType) : "";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: "YmasTech <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "ymastechmz@gmail.com"],
      subject: `[YmasTech] Novo contacto de ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">

          <div style="background:#E63946;padding:24px;text-align:center;border-radius:8px 8px 0 0">
            <h1 style="color:white;margin:0;font-size:24px;letter-spacing:2px">YMASTECH</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:13px">Novo contacto do website</p>
          </div>

          <div style="background:white;padding:32px;border-radius:0 0 8px 8px;border:1px solid #eee">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;font-weight:bold;text-transform:uppercase;width:120px">Nome</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#222;font-size:15px">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;font-weight:bold;text-transform:uppercase">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#E63946;font-size:15px">${safeEmail}</td>
              </tr>
              ${safeCompany ? `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;font-weight:bold;text-transform:uppercase">Empresa</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#222;font-size:15px">${safeCompany}</td>
              </tr>` : ""}
              ${safeProjectType ? `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;font-weight:bold;text-transform:uppercase">Projecto</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#222;font-size:15px">${safeProjectType}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top:24px">
              <p style="color:#888;font-size:12px;font-weight:bold;text-transform:uppercase;margin-bottom:10px">Mensagem</p>
              <div style="background:#f8f8f8;border-left:3px solid #E63946;padding:16px;color:#333;font-size:14px;line-height:1.7">
                ${safeMessage}
              </div>
            </div>

            <div style="margin-top:28px;text-align:center">
              <a href="mailto:${safeEmail}" style="display:inline-block;background:#E63946;color:white;padding:12px 28px;border-radius:4px;text-decoration:none;font-size:13px;font-weight:bold;text-transform:uppercase">
                Responder a ${safeName}
              </a>
            </div>
          </div>

          <p style="text-align:center;color:#bbb;font-size:11px;margin-top:20px">
            YmasTech · Maputo, Moçambique 🇲🇿
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}