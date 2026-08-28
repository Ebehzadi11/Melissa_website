/**
 * Melissa Oliveira — bilingual content model (single source of truth).
 * Every string is a { pt, en } pair. Use `t(locale, field)` to resolve.
 */

export type Locale = "pt" | "en";
export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

/** A localized string. */
export type L = { pt: string; en: string };

export const t = (locale: Locale, field: L): string => field[locale];

/* ------------------------------------------------------------------ */
/* brand / contact                                                     */
/* ------------------------------------------------------------------ */
export const brand = {
  name: "Melissa Oliveira",
  monogram: "MO",
  role: {
    pt: "Modelo Comercial · UGC Creator",
    en: "Commercial Model · UGC Creator",
  } as L,
  location: { pt: "São Paulo · Brasil", en: "São Paulo · Brazil" } as L,
  tagline: {
    pt: "Autenticidade que conecta marcas e pessoas.",
    en: "Authenticity that connects brands and people.",
  } as L,
  email: "moliveira.ugc@gmail.com",
  whatsapp: "5511949829304",
  whatsappText:
    "Olá, Melissa! Vi seu portfólio UGC e gostaria de conversar sobre uma possível colaboração.",
  instagram: "https://www.instagram.com/eusoumelbr/",
  linkedin:
    "https://www.linkedin.com/in/melissa-ferreira-de-oliveira-489708211/",
};

export const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
  brand.whatsappText,
)}`;
export const mailtoUrl = `mailto:${brand.email}`;
export const mailtoPortfolioUrl = `mailto:${brand.email}?subject=${encodeURIComponent(
  "Solicitação de portfólio",
)}`;

/* ------------------------------------------------------------------ */
/* media assets (public/media)                                         */
/* ------------------------------------------------------------------ */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: L;
  objectPosition?: string;
};

export const heroImage: ImageAsset = {
  src: "/media/hero.jpg",
  width: 1600,
  height: 2400,
  alt: {
    pt: "Melissa Oliveira em produção editorial, jaqueta jeans, corpo inteiro, olhar direto para a câmera",
    en: "Melissa Oliveira in an editorial shoot, denim jacket, full body, looking straight at the camera",
  },
};

export const aboutImage: ImageAsset = {
  src: "/media/about.jpg",
  width: 1000,
  height: 1217,
  alt: {
    pt: "Retrato próximo de Melissa Oliveira, expressão natural",
    en: "Close portrait of Melissa Oliveira, natural expression",
  },
};

// The portfolio gallery is generated from the images in
// public/media/portfolio/ — run `npm run portfolio` after adding photos.
export { portfolioImages } from "./portfolio-images";

export const measurementsImage: ImageAsset = {
  src: "/media/measurements.jpg",
  width: 720,
  height: 1280,
  alt: {
    pt: "Melissa Oliveira, model card de corpo inteiro, fundo azul",
    en: "Melissa Oliveira, full-body model card, blue backdrop",
  },
};

export type VideoAsset = {
  src: string;
  poster: string;
  label: L;
  ariaLabel: L;
};

export const videos: VideoAsset[] = [
  {
    src: "/media/video-ugc.mp4",
    poster: "/media/video-ugc-poster.jpg",
    label: { pt: "UGC", en: "UGC" },
    ariaLabel: {
      pt: "Vídeo UGC de Melissa Oliveira",
      en: "UGC video of Melissa Oliveira",
    },
  },
  {
    src: "/media/video-commercial.mp4",
    poster: "/media/video-commercial-poster.jpg",
    label: { pt: "Comercial", en: "Commercial" },
    ariaLabel: {
      pt: "Vídeo comercial de Melissa Oliveira",
      en: "Commercial video of Melissa Oliveira",
    },
  },
];

/* ------------------------------------------------------------------ */
/* navigation                                                          */
/* ------------------------------------------------------------------ */
export const navLinks: { href: string; label: L }[] = [
  { href: "#portfolio", label: { pt: "Portfólio", en: "Portfolio" } },
  { href: "#videos", label: { pt: "Vídeos", en: "Videos" } },
  { href: "#sobre", label: { pt: "Sobre", en: "About" } },
  { href: "#contato", label: { pt: "Contato", en: "Contact" } },
];

/* ------------------------------------------------------------------ */
/* sections                                                            */
/* ------------------------------------------------------------------ */
export const hero = {
  ctaPortfolio: { pt: "Ver Portfólio", en: "View Portfolio" } as L,
  ctaWork: { pt: "Trabalhe Comigo", en: "Work With Me" } as L,
};

export const manifesto = {
  title: { pt: "Mais do que uma imagem.", en: "More than an image." } as L,
  paragraphs: [
    {
      pt: "Acredito que as campanhas mais memoráveis são aquelas que fazem as pessoas sentir alguma coisa.",
      en: "I believe the most memorable campaigns are the ones that make people feel something.",
    },
    {
      pt: "Meu trabalho combina presença diante das câmeras, autenticidade e sensibilidade criativa para transformar produtos, serviços e experiências em histórias visuais capazes de criar conexão.",
      en: "My work blends on-camera presence, authenticity and creative sensitivity to turn products, services and experiences into visual stories that create connection.",
    },
  ] as L[],
};

export const about = {
  eyebrow: { pt: "Sobre mim", en: "About me" } as L,
  title: { pt: "Sou Melissa Oliveira", en: "I'm Melissa Oliveira" } as L,
  paragraphs: [
    {
      pt: "Modelo comercial e UGC Creator vivendo em São Paulo, Brasil — disponível também para trabalhos internacionais.",
      en: "Commercial model and UGC Creator based in São Paulo, Brazil — also available for international work.",
    },
    {
      pt: "Minha trajetória reúne comunicação, criatividade, performance e experiência profissional em diferentes áreas. Minha formação e vivência em Recursos Humanos, processos e atendimento me deram um olhar estratégico sobre marcas e pessoas.",
      en: "My path brings together communication, creativity, performance and professional experience across different fields. My background in Human Resources, processes and client relations gave me a strategic eye for brands and people.",
    },
    {
      pt: "Minha experiência com canto, dança e performance também faz parte da minha expressão artística e contribui para minha presença, interpretação e naturalidade diante das câmeras.",
      en: "My experience with singing, dancing and performance is part of my artistic expression and adds to my presence, interpretation and ease in front of the camera.",
    },
    {
      pt: "Hoje, canalizo essa combinação para criar imagens e conteúdos que representem marcas de maneira autêntica, sofisticada e comercial.",
      en: "Today, I channel that combination into images and content that represent brands in an authentic, sophisticated and commercial way.",
    },
  ] as L[],
};

export const services = {
  title: {
    pt: "O que posso criar para sua marca",
    en: "What I can create for your brand",
  } as L,
  items: [
    {
      num: "01",
      title: { pt: "Modelo Comercial", en: "Commercial Model" },
      body: {
        pt: "Campanhas publicitárias, e-commerce, editoriais, lançamentos e produção de imagens para marcas.",
        en: "Advertising campaigns, e-commerce, editorials, launches and image production for brands.",
      },
    },
    {
      num: "02",
      title: { pt: "UGC & Conteúdo", en: "UGC & Content" },
      body: {
        pt: "Vídeos e fotografias naturais, autênticos e pensados para redes sociais e comunicação digital.",
        en: "Natural, authentic videos and photography made for social media and digital communication.",
      },
    },
    {
      num: "03",
      title: { pt: "Lifestyle", en: "Lifestyle" },
      body: {
        pt: "Conteúdos que apresentam produtos e experiências dentro de situações reais e aspiracionais.",
        en: "Content that presents products and experiences within real, aspirational situations.",
      },
    },
    {
      num: "04",
      title: { pt: "Beleza & Moda", en: "Beauty & Fashion" },
      body: {
        pt: "Conteúdos de produto, demonstrações, rotina, styling, campanhas e storytelling visual.",
        en: "Product content, demonstrations, routines, styling, campaigns and visual storytelling.",
      },
    },
    {
      num: "05",
      title: { pt: "Campanhas Digitais", en: "Digital Campaigns" },
      body: {
        pt: "Conteúdo desenvolvido para Reels, TikTok, anúncios e presença digital de marcas.",
        en: "Content built for Reels, TikTok, ads and the digital presence of brands.",
      },
    },
  ] as { num: string; title: L; body: L }[],
};

export const differentiators = {
  items: [
    {
      num: "01",
      title: { pt: "Autenticidade", en: "Authenticity" },
      body: {
        pt: "Comunicação natural que cria identificação e aproxima marcas de pessoas.",
        en: "Natural communication that builds identification and brings brands closer to people.",
      },
    },
    {
      num: "02",
      title: { pt: "Versatilidade", en: "Versatility" },
      body: {
        pt: "Capacidade de interpretar diferentes conceitos, linguagens e segmentos, mantendo a identidade de cada campanha.",
        en: "The ability to interpret different concepts, languages and segments while keeping each campaign's identity.",
      },
    },
    {
      num: "03",
      title: { pt: "Visão Comercial", en: "Commercial Vision" },
      body: {
        pt: "Experiência além da câmera, com compreensão de comunicação, público, processos e objetivos de negócio.",
        en: "Experience beyond the camera, with an understanding of communication, audience, processes and business goals.",
      },
    },
  ] as { num: string; title: L; body: L }[],
};

export const portfolio = {
  title: { pt: "Portfólio", en: "Portfolio" } as L,
  seeMore: { pt: "Ver galeria completa", en: "See full gallery" } as L,
  /** number of images shown on the homepage teaser */
  featuredCount: 6,
  galleryTitle: { pt: "Galeria", en: "Gallery" } as L,
  gallerySubtitle: {
    pt: "Uma seleção de campanhas, editoriais e conteúdo autoral.",
    en: "A selection of campaigns, editorials and original content.",
  } as L,
  back: { pt: "Voltar ao início", en: "Back to home" } as L,
};

export const videosSection = {
  eyebrow: { pt: "Em movimento", en: "In motion" } as L,
  title: {
    pt: "Conheça meu trabalho além da fotografia.",
    en: "Discover my work beyond photography.",
  } as L,
};

export const niche = {
  title: { pt: "Universos que me inspiram", en: "Worlds that inspire me" } as L,
  pills: [
    { pt: "Moda", en: "Fashion" },
    { pt: "Beleza", en: "Beauty" },
    { pt: "Lifestyle", en: "Lifestyle" },
    { pt: "Turismo & Hospitalidade", en: "Travel & Hospitality" },
    { pt: "Bem-estar", en: "Wellness" },
    { pt: "Gastronomia", en: "Food & Dining" },
    { pt: "Tecnologia", en: "Technology" },
    { pt: "Casa & Design", en: "Home & Design" },
    { pt: "Fitness", en: "Fitness" },
  ] as L[],
};

export const clients = {
  title: {
    pt: "Marcas que buscam mais do que visibilidade",
    en: "Brands looking for more than visibility",
  } as L,
  subtitle: {
    pt: "Para marcas que entendem que autenticidade também é estratégia.",
    en: "For brands that understand authenticity is also strategy.",
  } as L,
  items: [
    { pt: "Marcas de moda", en: "Fashion brands" },
    { pt: "Beleza & cosméticos", en: "Beauty & cosmetics" },
    { pt: "Hotéis & experiências", en: "Hotels & experiences" },
    { pt: "Lifestyle", en: "Lifestyle" },
    { pt: "Gastronomia", en: "Food & dining" },
    { pt: "Tecnologia", en: "Technology" },
    { pt: "Bem-estar", en: "Wellness" },
    { pt: "E-commerce", en: "E-commerce" },
    { pt: "Agências & produtoras", en: "Agencies & production" },
  ] as L[],
};

export const measurements = {
  title: { pt: "Medidas", en: "Measurements" } as L,
  subtitle: { pt: "Model Card", en: "Model Card" } as L,
  items: [
    { label: { pt: "Altura", en: "Height" }, value: { pt: "1,75 m", en: "1.75 m" } },
    { label: { pt: "Busto", en: "Bust" }, value: { pt: "96 cm", en: "96 cm" } },
    { label: { pt: "Cintura", en: "Waist" }, value: { pt: "75 cm", en: "75 cm" } },
    { label: { pt: "Quadril", en: "Hips" }, value: { pt: "98 cm", en: "98 cm" } },
    { label: { pt: "Manequim", en: "Dress" }, value: { pt: "40", en: "40 (BR)" } },
    { label: { pt: "Calçado", en: "Shoe" }, value: { pt: "38", en: "38 (BR)" } },
    {
      label: { pt: "Base", en: "Based in" },
      value: { pt: "São Paulo · Brasil", en: "São Paulo · Brazil" },
      wide: true,
    },
  ] as { label: L; value: L; wide?: boolean }[],
};

export const performance = {
  title: { pt: "Experiência & Performance", en: "Experience & Performance" } as L,
  items: [
    {
      image: {
        src: "/media/performance-canto.jpg",
        width: 900,
        height: 1600,
        alt: {
          pt: "Melissa Oliveira segurando um microfone",
          en: "Melissa Oliveira holding a microphone",
        },
      } as ImageAsset,
      title: { pt: "Canto", en: "Singing" },
      body: {
        pt: "Experiência com aulas de canto, grupo de louvor e coral.",
        en: "Experience with singing lessons, worship group and choir.",
      },
    },
    {
      image: {
        src: "/media/performance-danca.jpg",
        width: 900,
        height: 1200,
        alt: {
          pt: "Melissa Oliveira em pose de dança na praia, ao pôr do sol",
          en: "Melissa Oliveira in a dance pose on the beach at sunset",
        },
      } as ImageAsset,
      title: { pt: "Dança", en: "Dance" },
      body: {
        pt: "Experiência com dança, coreografia e performance.",
        en: "Experience with dance, choreography and performance.",
      },
    },
    {
      image: {
        src: "/media/performance-camera.jpg",
        width: 900,
        height: 1200,
        alt: {
          pt: "Melissa Oliveira em participação de TV, nos bastidores",
          en: "Melissa Oliveira on a TV appearance, behind the scenes",
        },
      } as ImageAsset,
      title: { pt: "Câmera", en: "On Camera" },
      body: {
        pt: "Naturalidade diante das câmeras e adaptação a diferentes propostas de conteúdo.",
        en: "Ease in front of the camera and adaptability to different content briefs.",
      },
    },
  ] as { image: ImageAsset; title: L; body: L }[],
};

export const philosophy = {
  title: { pt: "Muito além da imagem.", en: "Far beyond the image." } as L,
  lines: [
    { pt: "Uma boa campanha chama atenção.", en: "A good campaign grabs attention." },
    { pt: "Uma grande campanha permanece na memória.", en: "A great campaign stays in memory." },
  ] as L[],
  closing: {
    pt: "É por isso que acredito em conteúdos que não apenas apresentam um produto, mas criam uma sensação, uma história e uma conexão.",
    en: "That's why I believe in content that doesn't just present a product, but creates a feeling, a story and a connection.",
  } as L,
};

export const cta = {
  title: { pt: "Vamos criar algo juntos?", en: "Shall we create something together?" } as L,
  subtitle: {
    pt: "Estou disponível para campanhas, produções, UGC, publicidade e projetos internacionais.",
    en: "I'm available for campaigns, productions, UGC, advertising and international projects.",
  } as L,
  requestPortfolio: { pt: "Solicitar Portfólio", en: "Request Portfolio" } as L,
  whatsapp: { pt: "Falar no WhatsApp", en: "Chat on WhatsApp" } as L,
  email: { pt: "Enviar E-mail", en: "Send Email" } as L,
};

export const footer = {
  copy: { pt: "© 2026 Melissa Oliveira", en: "© 2026 Melissa Oliveira" } as L,
};

/** Keywords for the scrolling marquee band. */
export const marqueeWords: L[] = [
  { pt: "Modelo Comercial", en: "Commercial Model" },
  { pt: "UGC Creator", en: "UGC Creator" },
  { pt: "Beleza", en: "Beauty" },
  { pt: "Lifestyle", en: "Lifestyle" },
  { pt: "Moda", en: "Fashion" },
  { pt: "Campanhas", en: "Campaigns" },
  { pt: "Editorial", en: "Editorial" },
];
