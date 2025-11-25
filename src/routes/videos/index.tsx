import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  const videoFiles = [
    { src: "/videos/1.mp4", title: "Caminata de oso" },
    { src: "/videos/2.mp4", title: "Remo invertido con banda" },
    { src: "/videos/3.mp4", title: "Buenos días con barra" },
    { src: "/videos/4.mp4", title: "Hip Thrust" }
  ];

  return (
    <>
      {/* Header Section */}
      <section class="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div class="mx-auto max-w-7xl px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            🎁 Contenido Gratuito
          </h1>
          <p class="text-xl text-white/90 mb-6">
            Únete a nuestra comunidad y entrena conmigo
          </p>
          <p class="text-lg text-white/80 max-w-3xl mx-auto">
            Videos de entrenamiento, tips y motivación para tu transformación. 
            Contenido actualizado semanalmente para mantenerte motivado y en forma.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section class="mx-auto max-w-7xl px-4 py-12">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Videos de Entrenamiento
          </h2>
          <p class="text-gray-600">
            Selecciona un video y comienza tu entrenamiento ahora mismo
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {videoFiles.map((video) => (
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" key={video.src}>
              <div class="aspect-[3/4]">
                <video class="h-full w-full object-cover" controls preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p class="text-gray-600 text-sm">
                  Video de entrenamiento gratuito para tu rutina diaria
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div class="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            ¿Te gusta el contenido?
          </h3>
          <p class="text-gray-600 mb-6">
            Únete a nuestra comunidad y accede a más contenido gratuito, tips exclusivos y la motivación que necesitas.
          </p>
          <Link href={`/${loc.params.locale}/contenido-gratuito`} class="inline-block">
            <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Más Contenido Gratuito
            </button>
          </Link>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = ({ params }) => {
  const locale = params.locale || 'es';
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/${locale}/videos`;
  const imageUrl = `${baseUrl}/assets/images/2.jpeg`;

  let title, description, keywords;

  if (locale === 'en') {
    title = "Videos - Coach Fabian Avendaño";
    description = "Watch all the training videos from Coach Fabian Avendaño.";
    keywords = "training videos, fitness videos, workout videos, free training videos, exercise videos";
  } else {
    title = "Videos - Coach Fabian Avendaño";
    description = "Mira todos los videos de entrenamiento del Coach Fabian Avendaño.";
    keywords = "videos entrenamiento, videos fitness, videos rutinas, videos ejercicio, videos gratuitos";
  }

  return {
    title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: "Fabián Avendaño",
      },
      // Open Graph
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: imageUrl,
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
        content: currentUrl,
      },
      {
        property: "og:site_name",
        content: "Coach Fabián Avendaño",
      },
      {
        property: "og:locale",
        content: locale,
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: currentUrl,
      },
      {
        rel: "alternate",
        hreflang: "es",
        href: `${baseUrl}/es/videos`,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${baseUrl}/en/videos`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${baseUrl}/es/videos`,
      },
    ],
  };
};


