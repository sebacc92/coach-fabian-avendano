

export interface ProgramMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  locale: string;
  price?: string;
  duration?: string;
  level?: string;
}

export const generateProgramMetadata = (program: any, slug: string, locale: string): ProgramMetadata => {
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/${locale}/program/${slug}/`;
  
  return {
    title: `${program.title} - ${locale === 'en' ? 'Fabian Avendano' : 'Fabián Avendaño'}`,
    description: program.desc,
    image: `${baseUrl}${program.img}`,
    url: currentUrl,
    locale,
    price: program.price,
    duration: program.duration,
    level: program.level,
  };
};

export const createProgramHead = (metadata: ProgramMetadata) => {
  return {
    title: metadata.title,
    meta: [
      {
        name: "description",
        content: metadata.description,
      },
      {
        name: "keywords",
        content: metadata.locale === 'en' ? "training, fitness, program, Fabian Avendano, personal coach" : "entrenamiento, fitness, programa, Fabián Avendaño, coach personal",
      },
      {
        name: "author",
        content: metadata.locale === 'en' ? "Fabian Avendano" : "Fabián Avendaño",
      },
      // Open Graph tags for Facebook, WhatsApp, etc.
      {
        property: "og:title",
        content: metadata.title,
      },
      {
        property: "og:description",
        content: metadata.description,
      },
      {
        property: "og:image",
        content: metadata.image,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: metadata.url,
      },
      {
        property: "og:site_name",
        content: "Coach Fabián Avendaño",
      },
      {
        property: "og:locale",
        content: metadata.locale,
      },
      // Twitter Card tags
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: metadata.title,
      },
      {
        name: "twitter:description",
        content: metadata.description,
      },
      {
        name: "twitter:image",
        content: metadata.image,
      },
    ],
  };
};