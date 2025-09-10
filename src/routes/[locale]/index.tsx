import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../../components/hero";
import { MethodologySection } from "../../components/methodology";
import { ProgramsSection } from "../../components/programs-section";
import { GettingStartedSection } from "../../components/getting-started-section";
import { TestimonialsSection } from "../../components/testimonials-section";
import { FAQSection } from "../../components/faq-section";
import { AboutSection } from "../../components/about-section";

export default component$(() => {
  return (
    <>
      <Hero />
      <MethodologySection />
      <ProgramsSection />
      <GettingStartedSection />
      <TestimonialsSection />
      <section class="mx-auto max-w-7xl px-4 py-12">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Videos
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="w-full overflow-hidden rounded-xl shadow">
            <video
              class="h-full w-full"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/1.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <div class="w-full overflow-hidden rounded-xl shadow">
            <video
              class="h-full w-full"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/2.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <div class="w-full overflow-hidden rounded-xl shadow">
            <video
              class="h-full w-full"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/3.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>
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
