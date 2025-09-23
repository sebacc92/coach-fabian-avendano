import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";

export default component$(() => {
  const videoFiles = [
    { src: "/videos/1.mp4", title: "Caminata de oso" },
    { src: "/videos/2.mp4", title: "Remo invertido con banda" },
    { src: "/videos/3.mp4", title: "Buenos días con barra" },
    { src: "/videos/4.mp4", title: "Hip Thrust" },
    { src: "/videos/30.mp4", title: "Caminata de granjero" },
    { src: "/videos/16.mp4", title: "Remo Pendlay" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="/images/2.jpeg"
            alt="Entrenamiento con Coach Fabian"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            ¡Sumate a la Comunidad!
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Entrena conmigo de forma gratuita. Videos de entrenamiento, tips y motivación para tu transformación.
          </p>
          
          <div class="mb-8">
            <p class="text-lg text-white/80 mb-4">
              <strong>Contenido actualizado semanalmente</strong>
            </p>
          </div>
          
          <a href="#videos">
            <Button class="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-4 text-lg font-bold rounded-lg transition-safe transform hover:scale-105">
              Ver Videos Gratuitos
            </Button>
          </a>
        </div>
      </section>
      
      {/* Videos Section */}
      <section id="videos" class="py-16 md:py-24 bg-white">
        <div class="mx-auto max-w-7xl px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Videos de Entrenamiento
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Selecciona un video y comienza tu entrenamiento ahora mismo. 
              Cada ejercicio está diseñado para maximizar tus resultados.
            </p>
          </div>
          
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {videoFiles.map((video) => (
              <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100" key={video.src}>
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
                    {video.title === "Remo Pendlay"
                      ? "Ejercicio fundamental para desarrollar la espalda y mejorar la fuerza de tracción"
                      : "Video de entrenamiento gratuito para tu rutina diaria"
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ¿Por qué unirte a nuestra comunidad?
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              No estás solo en tu transformación. Forma parte de una comunidad que te apoya y motiva cada día.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">🎥</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Videos Semanales</h3>
              <p class="text-gray-600">Nuevo contenido cada semana con entrenamientos variados y efectivos.</p>
            </div>
            
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">💡</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Tips y Consejos</h3>
              <p class="text-gray-600">Aprende las mejores técnicas y consejos de entrenamiento.</p>
            </div>
            
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Comunidad Activa</h3>
              <p class="text-gray-600">Conecta con personas que comparten tus mismos objetivos y motivaciones.</p>
            </div>
            
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">🏠</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Desde Casa</h3>
              <p class="text-gray-600">Entrena en la comodidad de tu hogar, sin necesidad de equipos costosos.</p>
            </div>
            
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">⚡</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Rutinas Efectivas</h3>
              <p class="text-gray-600">Entrenamientos diseñados para maximizar resultados en poco tiempo.</p>
            </div>
            
            <div class="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Objetivos Claros</h3>
              <p class="text-gray-600">Cada video tiene un propósito específico para tu progreso.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section class="py-16 md:py-24 bg-gray-800">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            ¡No esperes más!
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu transformación hoy mismo. Contenido 100% gratuito y actualizado semanalmente.
          </p>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = ({ params }) => {
  const locale = params.locale || 'es';
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/${locale}/contenido-gratuito`;
  const imageUrl = `${baseUrl}/assets/images/2.jpeg`;

  let title, description, keywords;

  if (locale === 'en') {
    title = "Free Content - Coach Fabian Avendaño";
    description = "Join our community and access free workouts and motivation for your physical transformation.";
    keywords = "free content, free workouts, fitness community, free training, motivation";
  } else {
    title = "Contenido Gratuito - Coach Fabian Avendaño";
    description = "Únete a nuestra comunidad y accede a entrenamientos gratuitos y motivación para tu transformación física.";
    keywords = "contenido gratuito, entrenamientos gratis, comunidad fitness, entrenamiento gratuito, motivación";
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
        href: `${baseUrl}/es/contenido-gratuito`,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${baseUrl}/en/contenido-gratuito`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${baseUrl}/es/contenido-gratuito`,
      },
    ],
  };
};
