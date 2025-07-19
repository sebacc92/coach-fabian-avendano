import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
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
