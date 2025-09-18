import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";
import { generateProgramMetadata, createProgramHead } from "~/utils/metadata";

import FuerzaImg from '~/assets/images/fabian-kettlebell.webp?jsx';

export default component$(() => {
  const currentTestimonial = useSignal(0);

  const testimonials = [
    "Gané fuerza real que se nota en todo lo que hago.",
    "El programa de fuerza base cambió mi forma de entrenar."
  ];

  const program = {
    img: FuerzaImg,
    alt: _`program3ImgAlt`,
    price: _`program3Price`,
    priceColor: "bg-[#FF6B35]",
    borderColor: "border-[#FF6B35]",
    titleColor: "text-[#FF6B35]",
    subtitleColor: "text-[#D55A2A]",
    buttonColor: "bg-[#FF6B35]",
    buttonHover: "hover:bg-[#E55A2A]",
    level: "FUERZA BASE",
    levelColor: "bg-[#FF6B35]",
    title: "Fuerza Base: Presencia Física (5 semanas)",
    subtitle: "Construyendo fuerza y estabilidad desde lo simple",
    desc: "Programa de fuerza de 5 semanas (2 días por semana) con enfoque full body. Día 1 centrado en empujes y Día 2 en tracciones. Se prioriza un ejercicio básico por sesión con más series para progresar en carga.",
    cta: _`program3Cta`,
    link: "https://mpago.la/17rjJve",
    duration: "5 semanas",
    frequency: "2 días por semana",
    equipment: ["Barbell", "Dumbbells", "Squat Rack", "Bench"],
    benefits: [
      "Enfoque en fuerza base",
      "Progresión sistemática",
      "Movimientos funcionales",
      "Desarrollo de estabilidad",
      "Rutinas de 60 minutos"
    ]
  };

  const nextTestimonial = $(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
  });

  const prevTestimonial = $(() => {
    currentTestimonial.value = currentTestimonial.value === 0
      ? testimonials.length - 1
      : currentTestimonial.value - 1;
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <program.img
            alt={program.alt}
            class="w-full h-full object-cover object-top"
          />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div class={`inline-block ${program.levelColor} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
            {program.level}
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {program.title}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {program.subtitle}
          </p>
          
          {/* Platform Information */}
          <div class="mb-6 md:mb-8">
            <p class="text-sm md:text-base text-white/80 mb-2">
              {_`platformInfo`}
            </p>
            <p class="text-xs md:text-sm text-white/70 max-w-2xl mx-auto">
              {_`platformTrust`}
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div class={`${program.priceColor} text-white px-8 py-4 rounded-full text-2xl font-bold`}>
              {program.price}
            </div>
            <a href={program.link} target="_blank" rel="noopener noreferrer">
              <Button class={`${program.buttonColor} ${program.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-safe transform hover:scale-105`}>
                {program.cta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {program.title}
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {program.desc}
              </p>
            </div>
            <div class="relative">
              <program.img
                alt={program.alt}
                class="rounded-2xl shadow-2xl"
              />
              <div class={`absolute -top-4 -right-4 ${program.priceColor} text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg`}>
                {program.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            {_`programBenefitsTitle`}
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.benefits.map((benefit, index) => (
              <div key={index} class="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div class={`w-16 h-16 ${program.buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span class="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <p class="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 max-w-6xl">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            {_`programDetailsTitle`}
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class={`w-16 h-16 ${program.buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">{_`programDuration`}</h3>
              <p class="text-gray-600">{program.duration}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class={`w-16 h-16 ${program.buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">{_`programFrequency`}</h3>
              <p class="text-gray-600">{program.frequency}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class={`w-16 h-16 ${program.buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">{_`programEquipment`}</h3>
              <div class="flex flex-wrap justify-center gap-2">
                {program.equipment.map((item, index) => (
                  <span key={index} class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            {_`programTestimonialsTitle`}
          </h2>
          <div class="relative">
            <div class="bg-gray-50 p-8 md:p-12 rounded-2xl text-center">
              <div class="mb-6">
                <svg class="w-12 h-12 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p class="text-lg md:text-xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial.value]}"
              </p>
              <div class="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick$={() => currentTestimonial.value = index}
                    class={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial.value ? program.buttonColor : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick$={prevTestimonial}
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick$={nextTestimonial}
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 md:py-24 bg-gray-800">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            {_`programCtaTitleFuerza`}
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {_`programCtaDescFuerza`}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div class={`${program.priceColor} text-white px-8 py-4 rounded-full text-2xl font-bold`}>
              {program.price}
            </div>
            <a href={program.link} target="_blank" rel="noopener noreferrer">
              <Button class={`${program.buttonColor} ${program.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-safe transform hover:scale-105`}>
                {program.cta}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = () => {
  const program = {
    alt: _`program3ImgAlt`,
    price: _`program3Price`,
    priceColor: "bg-[#FF6B35]",
    borderColor: "border-[#FF6B35]",
    titleColor: "text-[#FF6B35]",
    subtitleColor: "text-[#D55A2A]",
    buttonColor: "bg-[#FF6B35]",
    buttonHover: "hover:bg-[#E55A2A]",
    level: "FUERZA BASE",
    levelColor: "bg-[#FF6B35]",
    title: "Fuerza Base: Presencia Física (5 semanas)",
    subtitle: "Construyendo fuerza y estabilidad desde lo simple",
    desc: "Programa de fuerza de 5 semanas (2 días por semana) con enfoque full body. Día 1 centrado en empujes y Día 2 en tracciones. Se prioriza un ejercicio básico por sesión con más series para progresar en carga.",
    cta: _`program3Cta`,
    link: "https://mpago.la/17rjJve",
    duration: "5 semanas",
    frequency: "2 días por semana",
    equipment: ["Barbell", "Dumbbells", "Squat Rack", "Bench"],
    benefits: [
      "Enfoque en fuerza base",
      "Progresión sistemática",
      "Movimientos funcionales",
      "Desarrollo de estabilidad",
      "Rutinas de 60 minutos"
    ]
  };

  const metadata = generateProgramMetadata(program, "fuerza-base");
  return createProgramHead(metadata);
}; 