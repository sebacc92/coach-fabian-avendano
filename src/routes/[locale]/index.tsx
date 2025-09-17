import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Hero } from "../../components/hero";
import { MethodologySection } from "../../components/methodology";
import { ProgramsSection } from "../../components/programs-section";
import { GettingStartedSection } from "../../components/getting-started-section";
import { TestimonialsSection } from "../../components/testimonials-section";
import { FAQSection } from "../../components/faq-section";
import { AboutSection } from "../../components/about-section";

export default component$(() => {
  const loc = useLocation();
  const videosPath = `/${loc.params.locale}/contenido-gratuito#videos`;
  return (
    <>
      <Hero />
      <MethodologySection />
      <ProgramsSection />
      <GettingStartedSection />
      {/* Videos Cover Section */}
      <section class="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div class="mx-auto max-w-7xl px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎁 CONTENIDO GRATUITO
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ¡Entrena conmigo!
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Únete a nuestra comunidad y accede a videos de entrenamiento gratuitos, 
                y la motivación que necesitas para tu transformación.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <Link href={videosPath}>
                  <button class="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                    Ver Videos Gratuitos
                  </button>
                </Link>
                <div class="flex items-center text-sm text-gray-500">
                  <span class="mr-2">📅</span>
                  Contenido actualizado semanalmente
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="aspect-video relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/2.jpeg"
                  alt="Videos de entrenamiento"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div class="text-center text-white">
                    <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p class="text-lg font-semibold">Videos de Entrenamiento</p>
                    <p class="text-sm opacity-90">Gratuitos para toda la comunidad</p>
                  </div>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 bg-[#1e3a8a] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ¡GRATIS!
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
    </>
  );
});

export const head: DocumentHead = () => {
  const title = "Coach Fabian Avendaño - Programas de Entrenamiento Personalizado | Transformación Física y Mental";
  return {
    title,
    meta: [
      {
        name: "description",
        content: "Descubre programas de entrenamiento personalizado con Coach Fabian Avendaño. Retos de transformación, HIIT, fuerza base y más. Transforma tu cuerpo y mente con metodología probada.",
      },
      {
        name: "keywords",
        content: "entrenamiento personal, coach personal, transformación física, retos fitness, HIIT, fuerza base, entrenamiento en casa, fitness online",
      },
      {
        property: "og:title",
        content: "Coach Fabian Avendaño - Programas de Entrenamiento Personalizado",
      },
      {
        property: "og:description",
        content: "Programas de entrenamiento personalizado para transformar tu cuerpo y mente. Retos, HIIT, fuerza base y más.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  };
};
