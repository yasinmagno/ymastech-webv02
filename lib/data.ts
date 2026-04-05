export type Lang = "pt" | "en";

export const content = {
  nav: {
    pt: { services: "Serviços", about: "Sobre Nós", portfolio: "Portfólio", process: "Processo", pricing: "Preços", cta: "Falar Connosco" },
    en: { services: "Services", about: "About Us", portfolio: "Portfolio", process: "Process", pricing: "Pricing", cta: "Talk to Us" },
  },
  hero: {
    pt: {
      badge: "DISPONÍVEL PARA NOVOS PROJECTOS",
      eyebrow: "Desenvolvimento de Software · Moçambique",
      line1: "Tecnologia Inteligente", line2: "para Negocios que Crescem", line3: "Sem Limites.",
      sub: "Desenvolvemos sistemas Desktop, Web e Mobile para empresas e lojas em Moçambique que querem crescer sem limites.",
      cta1: "Vamos Conversar", cta2: "Ver Serviços", scroll: "Scroll",
    },
    en: {
      badge: "AVAILABLE FOR NEW PROJECTS",
      eyebrow: "Software Development · Mozambique",
      line1: "Intelligent Technologies", line2: "for Evolving Businesses", line3: "Without Limits.",
      sub: "We build Desktop, Web and Mobile systems for businesses and shops in Mozambique that want to grow without limits.",
      cta1: "Let's Talk", cta2: "Our Services", scroll: "Scroll",
    },
  },
 stats: {
  pt: [
    { value: 17,  suffix: "+", label: "Projectos Concluídos" },
    { value: 12,  suffix: "+", label: "Clientes Satisfeitos" },
    { value: 3,   suffix: "",  label: "Anos de Experiência" },
    { value: 100, suffix: "%", label: "Compromisso" },
  ],
  en: [
    { value: 17,  suffix: "+", label: "Projects Completed" },
    { value: 12,  suffix: "+", label: "Happy Clients" },
    { value: 3,   suffix: "",  label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Commitment" },
  ],
},
 services: {
  pt: {
    tag: "O Que Fazemos", title: "Soluções Digitais\npara o seu Negócio",
    sub: "Da ideia ao produto final — com precisão e no prazo.",
    items: [
      { num:"01", icon:"web",     title:"Desenvolvimento Web",  desc:"Websites e aplicações web modernas, rápidas e escaláveis com as tecnologias mais recentes do mercado.", tags:[], link:"Saber mais →" },
      { num:"02", icon:"mobile",  title:"Apps Mobile",          desc:"Aplicações móveis nativas e cross-platform para iOS e Android com experiências de utilizador excepcionais.", tags:[], link:"Saber mais →" },
      { num:"03", icon:"desktop", title:"Sistemas Desktop",    desc:"Sistemas de gestão e plataformas personalizadas para automatizar processos e resolver os desafios únicos do teu negócio.", tags:[], link:"Saber mais →" },
      { num:"04", icon:"uiux", title:"Desenvolvimento de Plataformas SaaS", desc:"Criamos plataformas web escaláveis baseadas em subscrição, prontas para crescer com o teu negócio.", tags:[], link:"Saber mais →" },
      { num:"05", icon:"api",     title:"Integração de APIs",   desc:"Conectamos os teus sistemas e plataformas para criar fluxos de trabalho eficientes e automatizados.", tags:[], link:"Saber mais →" },
      { num:"06", icon:"cloud",   title:"Suporte & DevOps",       desc:"Acompanhamento contínuo, actualizações e suporte pós-entrega.", tags:[], link:"Saber mais →" },
    ],
  },
  en: {
    tag: "What We Do", title: "Digital Solutions\nfor your Business",
    sub: "From idea to final product — with precision and on time.",
    items: [
      { num:"01", icon:"web",     title:"Web Development",   desc:"Modern, fast and scalable websites and web applications using the latest technologies.", tags:[], link:"Learn more →" },
      { num:"02", icon:"mobile",  title:"Mobile Apps",       desc:"Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.", tags:[], link:"Learn more →" },
      { num:"03", icon:"desktop", title:"Desktop Systems",   desc:"Custom systems and platforms to automate processes and solve your business's unique challenges.", tags:[], link:"Learn more →" },
     { num:"04", icon:"uiux", title:"SaaS Platform Development", desc:"We build scalable subscription-based web platforms, ready to grow with your business.", tags:[], link:"Learn more →" },
      { num:"05", icon:"api",     title:"API Integration",   desc:"We connect your systems and platforms to create efficient and automated workflows.", tags:[], link:"Learn more →" },
      { num:"06", icon:"cloud",   title:"Support & DevOps",    desc:"Continuous support, updates and post-delivery care.", tags:[], link:"Learn more →" },
    ],
  },
},
  about: {
    pt: {
      tag: "Sobre Nós", title: "Tecnologia que\nmove negócios",
      sub: "A YMASTECH é uma empresa moçambicana de desenvolvimento de software. Combinamos talento local com padrões internacionais.",
      badge: { num: "3+", label: "Anos" },
      items: [
        "Equipa multidisciplinar com experiência em projetos nacionais e internacionais",
        "Metodologias ágeis para entregas rápidas e de qualidade garantida",
        "Suporte contínuo e manutenção após o lançamento de cada projeto",
        "Foco total nos objetivos de negócio do cliente, não apenas no código",
      ],
    },
    en: {
      tag: "About Us", title: "Technology that\nmoves businesses",
      sub: "YMASTECH is a Mozambican software development company. We combine local talent with international standards.",
      badge: { num: "3+", label: "Years" },
      items: [
        "Multidisciplinary team with national and international project experience",
        "Agile methodologies for fast deliveries and guaranteed quality",
        "Continuous support and maintenance after each project launch",
        "Total focus on client business objectives, not just code",
      ],
    },
  },
  portfolio: {
  pt: {
    tag: "Trabalho Recente",
    title: "Portfólio",
    viewAll: "Ver Todos os Projetos",
   items: [
       { tag: "Sistema de Gestão Ferragem", name: "Gestão e Facturação",     tech: "", image: "/images/projecto1.png" },
      { tag: "Sistema de Gestão BottleStore",   name: "Gestão de Stocks",  tech: "", image: "/images/projecto2.png" },
      { tag: "Plataforma Web",    name: "Loja Online",             tech: "", image: "/images/projecto3.png" },

    ],
  },
  en: {
    tag: "Recent Work",
    title: "Portfolio",
    viewAll: "See All Projects",
    items: [
        { tag: "Management System Ferragem", name: "Management & Billing", tech: "", image: "/images/projecto1.png" },
        { tag: "Management System BottleStore", name: "Stock Management",      tech: "", image: "/images/projecto2.png" },
        { tag: "Web Platform",      name: "Online Store",           tech: "", image: "/images/projecto3.png" },
      ],
  },
},
  process: {
    pt: {
      tag: "Como Trabalhamos", title: "Do Conceito ao Código.\nSem Surpresas.",
      steps: [
        { num:"01", title:"Diagnóstico",     desc:"Reunião gratuita para entender o negócio, problemas e objectivos reais." },
        { num:"02", title:"Proposta",        desc:"Solução clara com prazo, tecnologia e investimento definidos." },
        { num:"03", title:"Desenvolvimento", desc:"Sprints ágeis com actualizações semanais. O cliente acompanha tudo." },
        { num:"04", title:"Entrega",         desc:"Formação, documentação e suporte pós-lançamento incluídos." },
      ],
    },
    en: {
      tag: "How We Work", title: "From Concept to Code.\nNo Surprises.",
      steps: [
        { num:"01", title:"Discovery",    desc:"Free meeting to understand your business, challenges and real goals." },
        { num:"02", title:"Proposal",     desc:"Clear solution with defined timeline, technology and investment." },
        { num:"03", title:"Development",  desc:"Agile sprints with weekly updates. The client follows every step." },
        { num:"04", title:"Delivery",     desc:"Training, documentation and post-launch support included." },
      ],
    },
  },
  pricing: {
    pt: {
      tag: "Investimento", title: "Planos para cada fase\ndo seu negócio",
      sub: "Preços pensados para empresas moçambicanas. Sem taxas escondidas.",
      plans: [
        { tier:"Starter",    price:"Essencial",    unit:"por projecto", desc:"Para pequenos negócios que querem presença digital.", hot:false, features:["Site institucional (até 5 páginas)","Design responsivo","Formulário de contacto","3 meses de suporte","Entrega em 2-3 semanas"], cta:"Pedir Orçamento" },
        { tier:"Business",   price:"Profissional", unit:"sob medida",   desc:"Para empresas que precisam de sistemas completos.", hot:true, badge:"MAIS POPULAR", features:["Sistema Web ou Desktop completo","Base de dados incluída","Autenticação e segurança","Dashboard de gestão","6 meses de suporte","Formação da equipa"], cta:"Começar Agora" },
        { tier:"Enterprise", price:"Premium",      unit:"solução completa", desc:"Para empresas com necessidades complexas.", hot:false, features:["Web + Mobile + Desktop","Arquitectura escalável","Integrações de terceiros","Relatórios e analytics","Suporte prioritário 1 ano","SLA garantido"], cta:"Pedir Orçamento" },
      ],
    },
    en: {
      tag: "Investment", title: "Plans for every stage\nof your business",
      sub: "Prices designed for Mozambican businesses. No hidden fees.",
      plans: [
        { tier:"Starter",    price:"Essential",    unit:"per project",      desc:"For small businesses wanting digital presence.", hot:false, features:["Corporate website (up to 5 pages)","Responsive design","Contact form","3 months support","Delivery in 2-3 weeks"], cta:"Request Quote" },
        { tier:"Business",   price:"Professional", unit:"tailor-made",      desc:"For companies needing complete and robust systems.", hot:true, badge:"MOST POPULAR", features:["Full Web or Desktop system","Database included","Authentication and security","Management dashboard","6 months support","Team training"], cta:"Start Now" },
        { tier:"Enterprise", price:"Premium",      unit:"complete solution", desc:"For companies with complex needs.", hot:false, features:["Web + Mobile + Desktop","Scalable architecture","Third-party integrations","Reports and analytics","Priority support 1 year","Guaranteed SLA"], cta:"Request Quote" },
      ],
    },
  },
  contact: {
    pt: {
      tag: "Vamos Trabalhar Juntos", title: "Fala Connosco",
      sub: "Tens um projeto em mente? Respondemos em menos de 24 horas.",
      details: [
        { label:"Email",       value:"ymastechmz@gmail.com", icon:"email" },
        { label:"WhatsApp",    value:"+258 85 715 8718",      icon:"phone" },
        { label:"Localização", value:"Maputo, Moçambique",    icon:"location" },
      ],
      form: { name:"Nome", email:"Email", company:"Empresa", projectType:"Tipo de Projeto", message:"Mensagem", submit:"Enviar Mensagem →", types: ["Selecionar...","Website / App Web","App Mobile","Sistema Desktop","Plataforma SaaS","Outro"], },
    },
    en: {
      tag: "Let's Work Together", title: "Get in Touch",
      sub: "Have a project in mind? We reply in less than 24 hours.",
      details: [
        { label:"Email",    value:"ymastechmz@gmail.com", icon:"email" },
        { label:"WhatsApp", value:"+258 85 715 8718",      icon:"phone" },
        { label:"Location", value:"Maputo, Mozambique",    icon:"location" },
      ],
      form: { name:"Name", email:"Email", company:"Company", projectType:"Project Type", message:"Message", submit:"Send Message →", types: ["Select...","Website / Web App","Mobile App","Desktop System","SaaS Platform","Other"], },
    },
  },
  cta: {
    pt: { tag:"Pronto para Começar?", line1:"A sua ideia merece", line2:"o melhor software.", sub:"Consulta gratuita. Sem compromisso. Respondemos em menos de 24 horas.", cta1:"Falar no WhatsApp", cta2:"Enviar Email" },
    en: { tag:"Ready to Start?",      line1:"Your idea deserves", line2:"the best software.", sub:"Free consultation. No commitment. We reply in less than 24 hours.",   cta1:"WhatsApp Us",        cta2:"Send Email" },
  },
  footer: {
    pt: { tagline:"Construímos o futuro digital de empresas moçambicanas com software de alta performance.", copy:"Todos os direitos reservados.", madeIn:"Feito com precisão em Moçambique 🇲🇿" },
    en: { tagline:"We build the digital future of Mozambican businesses with high-performance software.",   copy:"All rights reserved.",           madeIn:"Made with precision in Mozambique 🇲🇿" },
  },
};