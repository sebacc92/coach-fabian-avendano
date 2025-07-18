import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Hero } from "../../components/hero";
import { MethodologySection } from "../../components/methodology";
import { ProgramsSection } from "../../components/programs-section";
import { TestimonialsSection } from "../../components/testimonials-section";

export default component$(() => {
  return (
    <>
      <Hero />
      <MethodologySection />
      <ProgramsSection />
      <TestimonialsSection />
    </>
  );
});

export const head: DocumentHead = () => {
  const title = _`Welcome to Qwik`;
  return {
    title,
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  };
};
