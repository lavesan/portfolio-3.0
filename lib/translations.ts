export type Locale = "pt-BR" | "en";

export type TranslationKey =
  | "header.about"
  | "header.projects"
  | "header.contact"
  | "hero.title"
  | "hero.subtitle"
  | "hero.description"
  | "hero.cta"
  | "about.title"
  | "about.paragraph1"
  | "about.paragraph2"
  | "about.paragraph3"
  | "about.quote"
  | "howItWorks.title"
  | "howItWorks.subtitle"
  | "howItWorks.description"
  | "howItWorks.youReceive"
  | "howItWorks.bulletPoint1"
  | "howItWorks.bulletPoint2"
  | "howItWorks.bulletPoint3"
  | "howItWorks.bulletPoint4"
  | "howItWorks.bulletPoint5"
  | "howItWorks.price"
  | "howItWorks.cta"
  | "projects.title"
  | "projects.description"
  | "projects.ecommerceWhitelabel.title"
  | "projects.ecommerceWhitelabel.description"
  | "projects.njordStore.title"
  | "projects.njordStore.description"
  | "projects.clubeAnimadores.title"
  | "projects.clubeAnimadores.description"
  | "projects.chatHunter.title"
  | "projects.chatHunter.description"
  | "projects.hugPsicologia.title"
  | "projects.hugPsicologia.description"
  | "projects.zeroVeneno.title"
  | "projects.zeroVeneno.description"
  | "projects.iziBeneficios.title"
  | "projects.iziBeneficios.description"
  | "projects.elosun.title"
  | "projects.elosun.description"
  | "projects.jogoLuna.title"
  | "projects.jogoLuna.description"
  | "projects.movfit.title"
  | "projects.movfit.description"
  | "projects.marketplace.title"
  | "projects.marketplace.description"
  | "projects.landing.title"
  | "projects.landing.description"
  | "projects.ecommerce.title"
  | "projects.ecommerce.description"
  | "projects.admin.title"
  | "projects.admin.description"
  | "projects.legacy.title"
  | "projects.legacy.description"
  | "cta.title"
  | "cta.paragraph1"
  | "cta.paragraph2"
  | "cta.button"
  | "footer.copyright"
  | "trustedCompanies.title"
  | "projects.viewGallery"
  | "projects.visitSite"
  | "projects.close"
  | "projects.image"
  | "projects.technologies"
  | "howItWorks.step1.title"
  | "howItWorks.step1.description"
  | "howItWorks.step2.title"
  | "howItWorks.step2.description"
  | "howItWorks.step3.title"
  | "howItWorks.step3.description"
  | "howItWorks.step3.items.analysis"
  | "howItWorks.step3.items.tech"
  | "howItWorks.step3.items.improvements"
  | "howItWorks.step3.items.estimate"
  | "howItWorks.step3.items.proposal"
  | "howItWorks.step4.title"
  | "howItWorks.step4.description"
  | "howItWorks.step4.items.contract"
  | "howItWorks.step4.items.payment"
  | "howItWorks.step4.items.start"
  | "howItWorks.promo.special"
  | "howItWorks.promo.discount"
  | "howItWorks.promo.cta";

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  "pt-BR": {
    "header.about": "Sobre mim",
    "header.projects": "Projetos",
    "header.contact": "Solicitar Diagnóstico",

    "hero.title":
      "Desenvolvimento sob medida para negócios que não podem errar.",
    "hero.subtitle":
      "Sites, sistemas e apps pensados para escalar com eficiência — sem amadorismo, sem gambiarra.",
    "hero.description":
      "Com mais de 8 anos de experiência e passagens por Vivo, Accenture, Sicredi e startups, eu ajudo empresas a lançarem e manterem produtos digitais com foco em performance, estabilidade e resultado.",
    "hero.cta": "Solicitar Diagnóstico do Projeto",

    "about.title": "Por trás do código: Valdery Alves",
    "about.paragraph1":
      "Desenvolvedor fullstack com mais de 8 anos de experiência.",
    "about.paragraph2":
      "Já atuei com empresas como Vivo, Sicredi, Accenture e atualmente integro o time da DBC Company.",
    "about.paragraph3":
      "Entrego soluções robustas — desde o início até melhorias em plataformas já existentes — com domínio técnico em React, Node, TypeScript e foco total no que importa: entregar valor real para o negócio.",
    "about.quote": "",

    "trustedCompanies.title": "Empresas que já confiam no meu trabalho:",

    "howItWorks.title": "Antes de programar, eu analiso.",
    "howItWorks.subtitle":
      "Seu projeto precisa de estratégia, não de adivinhação.",
    "howItWorks.description":
      "Para garantir que você receba uma solução sob medida — e evitar desperdício de tempo com reuniões improdutivas — ofereço um Diagnóstico Técnico Profissional com base nas informações que você envia pelo chat.",
    "howItWorks.youReceive": "Você recebe um material visual e direto com:",
    "howItWorks.bulletPoint1": "Análise técnica do seu cenário ou ideia",
    "howItWorks.bulletPoint2": "Sugestão de tecnologias e arquitetura",
    "howItWorks.bulletPoint3": "Pontos de melhoria ou refatoração",
    "howItWorks.bulletPoint4": "Estimativa de investimento e manutenção",
    "howItWorks.bulletPoint5": "Proposta formal com base no diagnóstico",
    "howItWorks.price":
      "Valor: R$ 197 (descontado do valor total se fecharmos o projeto)",
    "howItWorks.cta": "Quero solicitar meu diagnóstico",

    "projects.title": "Projetos que entregam resultado",
    "projects.description":
      "Aqui estão algumas soluções que desenvolvi para empresas e empreendedores em diferentes estágios. Tudo feito sob medida, com foco em performance, usabilidade e estabilidade.",

    "projects.ecommerceWhitelabel.title": "Marketplace Whitelabel",
    "projects.ecommerceWhitelabel.description":
      "Solução pronta para ecommerce ou marketplace multivendedor. Projeto modular e personalizável para diferentes nichos.",

    "projects.njordStore.title": "Njord Store",
    "projects.njordStore.description":
      "Plataforma whitelabel para ecommerce com login, dashboard, estatísticas e gerenciamento de vendas. Backend estruturado com GraphQL.",

    "projects.clubeAnimadores.title": "Clube dos Animadores",
    "projects.clubeAnimadores.description":
      "Página comercial para venda de curso sobre criação de vídeos com IA. Também apresenta acesso a ferramentas exclusivas de inteligência artificial.",

    "projects.chatHunter.title": "Chat Hunter AI",
    "projects.chatHunter.description":
      "Landing de vendas para plataforma de automação de chats com inteligência artificial. Estrutura focada em geração de leads e performance.",

    "projects.hugPsicologia.title": "HUG Psicologia",
    "projects.hugPsicologia.description":
      "Página institucional para plataforma que conecta psicólogos a empresas. Foco em credibilidade, conversão e usabilidade.",

    "projects.zeroVeneno.title": "Ecommerce Zero-Veneno",
    "projects.zeroVeneno.description":
      "Ecommerce completo para loja com alta demanda. Desenvolvido com painel administrativo para gestão total de pedidos, produtos e promoções.",

    "projects.iziBeneficios.title": "Izi Benefícios",
    "projects.iziBeneficios.description":
      "Plataforma B2B com benefícios corporativos, onde atuei como fullstack. Estrutura migrada para Next.js, com onboarding customizado e otimização SEO.",

    "projects.elosun.title": "Elosun",
    "projects.elosun.description":
      "Landing page institucional com foco em performance mobile. Desenvolvida com PWA e design responsivo, simulando usabilidade de aplicativo.",

    "projects.jogoLuna.title": "Jogo Luna",
    "projects.jogoLuna.description":
      "Jogo educacional infantil apresentado como MVP em São Paulo. Desenvolvido com React Native, possui fases e elementos gamificados.",

    "projects.movfit.title": "Movfit",
    "projects.movfit.description":
      "Plataforma web responsiva para acesso a academias via empresas. Participei do design e do front-end com Vue e Quasar.",

    "projects.marketplace.title": "Marketplace funcional",
    "projects.marketplace.description":
      "Sistema que conecta compradores e vendedores com gestão de transações.",
    "projects.landing.title": "Landing pages otimizadas",
    "projects.landing.description":
      "3 online - Páginas de conversão com alto desempenho e otimizadas para SEO.",
    "projects.ecommerce.title": "E-commerce personalizado",
    "projects.ecommerce.description":
      "Plataforma de vendas online com gestão de produtos e pagamentos integrados.",
    "projects.admin.title": "Plataforma com painel administrativo",
    "projects.admin.description":
      "Dashboards e sistemas administrativos para gestão empresarial.",
    "projects.legacy.title": "Manutenção de sistemas legados",
    "projects.legacy.description":
      "Refatoração e modernização de sistemas existentes.",
    "projects.viewGallery": "Ver galeria",
    "projects.visitSite": "Visitar site",
    "projects.close": "Fechar",
    "projects.image": "Imagem",
    "projects.technologies": "Tecnologias:",

    "cta.title": "Vamos começar com clareza e profissionalismo?",
    "cta.paragraph1":
      "Se você está em busca de um desenvolvedor que entende do negócio e entrega soluções sólidas, o primeiro passo é o diagnóstico.",
    "cta.paragraph2":
      "Rápido, objetivo e aplicável de verdade. Se fizer sentido, seguimos com o projeto completo.",
    "cta.button": "Solicitar Diagnóstico do Projeto",

    "footer.copyright": "Todos os direitos reservados.",

    "howItWorks.step1.title": "Você escolhe como prefere começar",
    "howItWorks.step1.description":
      "Pelo Chat: Preenche um fluxo interativo com perguntas sobre seu projeto. Rápido, direto ao ponto — e você já conhece meu processo por dentro.\n\nPor Reunião: Prefere conversar? A gente marca uma call de 30 a 40 minutos pra entender melhor sua ideia e tirar dúvidas pontuais.",
    "howItWorks.step2.title": "Pagamento do Diagnóstico Técnico",
    "howItWorks.step2.description":
      "Este valor será abatido do projeto completo caso sigamos juntos.\nAssim que o pagamento for confirmado, agendamos a reunião ou já começamos a análise com base no que você nos enviou.",
    "howItWorks.step3.title": "Recebimento do Diagnóstico Profissional",
    "howItWorks.step3.description":
      "Você recebe um documento personalizado com:",
    "howItWorks.step3.items.analysis":
      "Análise técnica do seu cenário ou ideia",
    "howItWorks.step3.items.tech": "Sugestão de tecnologias e arquitetura",
    "howItWorks.step3.items.improvements": "Pontos de melhoria ou refatoração",
    "howItWorks.step3.items.estimate":
      "Estimativa de investimento e manutenção",
    "howItWorks.step3.items.proposal": "Proposta formal baseada na análise",
    "howItWorks.step4.title": "Fechamento do Projeto",
    "howItWorks.step4.description": "Se decidirmos seguir juntos:",
    "howItWorks.step4.items.contract":
      "Eu preparo e envio um contrato formal com todos os detalhes alinhados",
    "howItWorks.step4.items.payment":
      "Após a assinatura, você realiza o pagamento inicial",
    "howItWorks.step4.items.start":
      "Iniciamos o desenvolvimento do projeto, com total acompanhamento técnico e cronograma claro",
    "howItWorks.promo.special": "⚡ Preço especial válido até %date%!",
    "howItWorks.promo.discount":
      "Este valor é descontado do projeto final caso fechemos o negócio!",
    "howItWorks.promo.cta": "Quero solicitar meu diagnóstico",
  },
  en: {
    "header.about": "About me",
    "header.projects": "Projects",
    "header.contact": "Request Diagnosis",

    "hero.title":
      "Custom development for businesses that cannot afford to make mistakes.",
    "hero.subtitle":
      "Websites, systems, and apps designed to scale efficiently — without amateurism, without workarounds.",
    "hero.description":
      "With over 8 years of experience and work at Vivo, Accenture, Sicredi, and startups, I help companies launch and maintain digital products with a focus on performance, stability, and results.",
    "hero.cta": "Request Project Diagnosis",

    "about.title": "Behind the code: Valdery Alves",
    "about.paragraph1": "Fullstack developer with over 8 years of experience.",
    "about.paragraph2":
      "I've worked with companies like Vivo, Sicredi, Accenture, and currently I'm part of the DBC Company team.",
    "about.paragraph3":
      "I deliver robust solutions — from scratch to improvements on existing platforms — with technical expertise in React, Node, TypeScript, and a complete focus on what matters: delivering real value to the business.",
    "about.quote": "",

    "trustedCompanies.title": "Companies that trust my work:",

    "howItWorks.title": "Before programming, I analyze.",
    "howItWorks.subtitle": "Your project needs strategy, not guesswork.",
    "howItWorks.description":
      "To ensure you receive a tailored solution — and avoid wasting time with unproductive meetings — I offer a Professional Technical Diagnosis based on the information you send through chat.",
    "howItWorks.youReceive": "You receive a visual and direct material with:",
    "howItWorks.bulletPoint1": "Technical analysis of your scenario or idea",
    "howItWorks.bulletPoint2": "Suggestion of technologies and architecture",
    "howItWorks.bulletPoint3": "Improvement or refactoring points",
    "howItWorks.bulletPoint4": "Investment and maintenance estimate",
    "howItWorks.bulletPoint5": "Formal proposal based on the diagnosis",
    "howItWorks.price":
      "Price: $40 (discounted from the total if we close the project)",
    "howItWorks.cta": "I want to request my diagnosis",

    "projects.title": "Projects that deliver results",
    "projects.description":
      "Here are some solutions I've developed for companies and entrepreneurs at different stages. All custom-made, focusing on performance, usability, and stability.",

    "projects.ecommerceWhitelabel.title": "Whitelabel Marketplace",
    "projects.ecommerceWhitelabel.description":
      "Ready-to-use solution for ecommerce or multi-vendor marketplace. Modular and customizable project for different niches.",

    "projects.njordStore.title": "Njord Store",
    "projects.njordStore.description":
      "Whitelabel ecommerce platform with login, dashboard, statistics, and sales management. Backend structured with GraphQL.",

    "projects.clubeAnimadores.title": "Animators Club",
    "projects.clubeAnimadores.description":
      "Commercial page for selling a course on creating videos with AI. Also provides access to exclusive artificial intelligence tools.",

    "projects.chatHunter.title": "Chat Hunter AI",
    "projects.chatHunter.description":
      "Sales landing page for an AI chat automation platform. Structure focused on lead generation and performance.",

    "projects.hugPsicologia.title": "HUG Psychology",
    "projects.hugPsicologia.description":
      "Institutional page for a platform that connects psychologists to companies. Focus on credibility, conversion, and usability.",

    "projects.zeroVeneno.title": "Zero-Veneno Ecommerce",
    "projects.zeroVeneno.description":
      "Complete ecommerce for a high-demand store. Developed with an administrative panel for total management of orders, products, and promotions.",

    "projects.iziBeneficios.title": "Izi Benefits",
    "projects.iziBeneficios.description":
      "B2B platform with corporate benefits, where I worked as a fullstack developer. Structure migrated to Next.js, with customized onboarding and SEO optimization.",

    "projects.elosun.title": "Elosun",
    "projects.elosun.description":
      "Institutional landing page with a focus on mobile performance. Developed with PWA and responsive design, simulating app usability.",

    "projects.jogoLuna.title": "Luna Game",
    "projects.jogoLuna.description":
      "Educational children's game presented as an MVP in São Paulo. Developed with React Native, it has phases and gamified elements.",

    "projects.movfit.title": "Movfit",
    "projects.movfit.description":
      "Responsive web platform for accessing gyms via companies. I participated in the design and front-end with Vue and Quasar.",

    "projects.marketplace.title": "Functional marketplace",
    "projects.marketplace.description":
      "System that connects buyers and sellers with transaction management.",
    "projects.landing.title": "Optimized landing pages",
    "projects.landing.description":
      "3 online - High-performance conversion pages optimized for SEO.",
    "projects.ecommerce.title": "Custom e-commerce",
    "projects.ecommerce.description":
      "Online sales platform with integrated product management and payments.",
    "projects.admin.title": "Platform with administrative panel",
    "projects.admin.description":
      "Dashboards and administrative systems for business management.",
    "projects.legacy.title": "Legacy system maintenance",
    "projects.legacy.description":
      "Refactoring and modernization of existing systems.",
    "projects.viewGallery": "View gallery",
    "projects.visitSite": "Visit site",
    "projects.close": "Close",
    "projects.image": "Image",
    "projects.technologies": "Technologies:",

    "cta.title": "Shall we start with clarity and professionalism?",
    "cta.paragraph1":
      "If you're looking for a developer who understands the business and delivers solid solutions, the first step is diagnosis.",
    "cta.paragraph2":
      "Quick, objective, and truly applicable. If it makes sense, we proceed with the complete project.",
    "cta.button": "Request Project Diagnosis",

    "footer.copyright": "All rights reserved.",

    "howItWorks.step1.title": "Choose how you prefer to start",
    "howItWorks.step1.description":
      "By Chat: Fill out an interactive flow with questions about your project. Quick, straight to the point — and you'll get to know my process from the inside.\n\nBy Meeting: Prefer to talk? We'll schedule a 30-40 minute call to better understand your idea and address specific questions.",
    "howItWorks.step2.title": "Technical Diagnosis Payment",
    "howItWorks.step2.description":
      "This amount will be deducted from the complete project if we move forward together.\n\nOnce the payment is confirmed, we'll schedule the meeting or start the analysis based on what you've sent us.",
    "howItWorks.step3.title": "Professional Diagnosis Receipt",
    "howItWorks.step3.description": "You receive a personalized document with:",
    "howItWorks.step3.items.analysis":
      "Technical analysis of your scenario or idea",
    "howItWorks.step3.items.tech": "Technology and architecture suggestions",
    "howItWorks.step3.items.improvements": "Improvement or refactoring points",
    "howItWorks.step3.items.estimate": "Investment and maintenance estimates",
    "howItWorks.step3.items.proposal": "Formal proposal based on the analysis",
    "howItWorks.step4.title": "Project Closure",
    "howItWorks.step4.description": "If we decide to move forward together:",
    "howItWorks.step4.items.contract":
      "I prepare and send a formal contract with all aligned details",
    "howItWorks.step4.items.payment":
      "After signing, you make the initial payment",
    "howItWorks.step4.items.start":
      "We begin project development, with full technical monitoring and clear timeline",
    "howItWorks.promo.special": "⚡ Special price valid until %date%!",
    "howItWorks.promo.discount":
      "This amount will be discounted from the final project if we close the deal!",
    "howItWorks.promo.cta": "I want to request my diagnosis",
  },
};
