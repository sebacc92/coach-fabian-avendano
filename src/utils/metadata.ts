

export interface ProgramMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  price?: string;
  duration?: string;
  level?: string;
}

export const generateProgramMetadata = (program: any, slug: string): ProgramMetadata => {
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/program/${slug}/`;

  return {
    title: `${program.title} - Fabián Avendaño`,
    description: program.desc,
    image: `${baseUrl}${program.img}`,
    url: currentUrl,
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
        content: "entrenamiento, fitness, programa, Fabián Avendaño, coach personal",
      },
      {
        name: "author",
        content: "Fabián Avendaño",
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
        content: "es_ES",
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