import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../../components/hero";
import { MethodologySection } from "../../components/methodology";
import { ProgramsSection } from "../../components/programs-section";
import { TestimonialsSection } from "../../components/testimonials-section";
import { FAQSection } from "../../components/faq-section";
import { AboutSection } from "../../components/about-section";

export default component$(() => {
  return (
    <>
      <Hero />
      <MethodologySection />
      <ProgramsSection />
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
