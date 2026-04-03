import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });

  } catch {
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
