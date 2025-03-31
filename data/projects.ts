import type { TranslationKey } from "@/lib/translations";

export interface Project {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
  image: string;
  link?: string;
  gallery?: string[];
  technologies?: string[];
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-whitelabel",
    title: "projects.ecommerceWhitelabel.title",
    description: "projects.ecommerceWhitelabel.description",
    image: "/project-images/whitelabel-marketplace-1.PNG",
    link: "https://ecommerce-front-delta.vercel.app/",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    gallery: [
      "/project-images/whitelabel-marketplace-1.PNG",
      "/project-images/whitelabel-marketplace-2.PNG",
      "/project-images/whitelabel-marketplace-3.PNG",
      "/project-images/whitelabel-marketplace-4.PNG",
      "/project-images/whitelabel-marketplace-5.PNG",
      "/project-images/whitelabel-marketplace-6.PNG",
    ],
  },
  {
    id: "njord-store",
    title: "projects.njordStore.title",
    description: "projects.njordStore.description",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://store-dev.njord.com.br/auth/login?redirect=/melissa/home",
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Node.js"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "clube-animadores",
    title: "projects.clubeAnimadores.title",
    description: "projects.clubeAnimadores.description",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.clubedosanimadores.com.br/",
    technologies: ["Next.js", "React", "TypeScript"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "chat-hunter",
    title: "projects.chatHunter.title",
    description: "projects.chatHunter.description",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://clinicas.chathunterai.com.br/",
    technologies: ["Next.js", "React", "TypeScript"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "hug-psicologia",
    title: "projects.hugPsicologia.title",
    description: "projects.hugPsicologia.description",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.hugpsicologia.com.br/",
    technologies: ["Next.js", "React", "TypeScript"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "zero-veneno",
    title: "projects.zeroVeneno.title",
    description: "projects.zeroVeneno.description",
    image:
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-inicio-mobile.jpeg",
    link: "https://zero-veneno-ecommerce.vercel.app/",
    technologies: ["React", "Next.js", "Node.js", "NestJS", "Redux", "AWS"],
    gallery: [
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-login-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-carrinho-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-inicio-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-menu-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-produt-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-carrinho-web.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-login-web.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-pesquisa-web.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/zero-veneno-sobre-web.png",
    ],
  },
  {
    id: "izi-beneficios",
    title: "projects.iziBeneficios.title",
    description: "projects.iziBeneficios.description",
    image:
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-home-desktop.png",
    technologies: ["React", "Next.js", "PWA", "Push Notifications", "Redux"],
    gallery: [
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-login-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-registro-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-ob1-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-ob2-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-ob4-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-ob5-mobile.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-login-desktop.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-home-desktop.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/izi-categoria-desktop.png",
    ],
  },
  {
    id: "elosun",
    title: "projects.elosun.title",
    description: "projects.elosun.description",
    image:
      "https://valderyportfolio.s3.amazonaws.com/projetos/elosun-inicio.png",
    link: "https://elosun.com.br",
    technologies: ["React", "PWA"],
    gallery: [
      "https://valderyportfolio.s3.amazonaws.com/projetos/elosun-inicio-mobile.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/elosun-inicio.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/elosun-contato.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/elosun-faq.png",
    ],
  },
  {
    id: "jogo-luna",
    title: "projects.jogoLuna.title",
    description: "projects.jogoLuna.description",
    image:
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-inicio.jpeg",
    link: "https://github.com/lavesan/LunaGame",
    technologies: ["React Native", "Expo"],
    gallery: [
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-apresentacao.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-inicio.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-primeira-fase.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-segunda-fase.jpeg",
      "https://valderyportfolio.s3.amazonaws.com/projetos/luna-final.jpeg",
    ],
  },
  {
    id: "movfit",
    title: "projects.movfit.title",
    description: "projects.movfit.description",
    image:
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-web-1.png",
    technologies: ["Vue.js", "Quasar", "Redux"],
    gallery: [
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-mobile-3.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-web-2.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-mobile-2.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-mobile-1.png",
      "https://valderyportfolio.s3.amazonaws.com/projetos/movfit-web-1.png",
    ],
  },
];
