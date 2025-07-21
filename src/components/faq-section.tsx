import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Accordion } from "./ui";

export const FAQSection = component$(() => {
  const faqs = [
    {
      q: _`faq1q`,
      a: _`faq1a`,
    },
    {
      q: _`faq2q`,
      a: _`faq2a`,
    },
    {
      q: _`faq3q`,
      a: _`faq3a`,
    },
    {
      q: _`faq4q`,
      a: _`faq4a`,
    },
    {
      q: _`faq5q`,
      a: _`faq5a`,
    },
    {
      q: _`faq6q`,
      a: _`faq6a`,
    },
  ];
  return (
    <section class="py-16 md:py-24 bg-[#F5F7FA]">
      <div class="container max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">{_`faqTitle`}</h2>
          <p class="text-xl text-gray-500">{_`faqSubtitle`}</p>
        </div>
        <Accordion.Root behavior="single" collapsible class="w-full">
          {faqs.map((faq, i) => (
            <Accordion.Item id={`faq-${i}`} key={i}>
              <Accordion.Trigger header="h3" class="text-left text-lg font-semibold hover:text-[#1e3a8a]">
                {faq.q}
              </Accordion.Trigger>
              <Accordion.Content>
                <div class="text-gray-600 text-base">{faq.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}); 