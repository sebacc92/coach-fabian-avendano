import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _, getLocale } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";
import { generateProgramMetadata, createProgramHead } from "~/utils/metadata";

export default component$(() => {
  const currentTestimonial = useSignal(0);
  const currentLocale = getLocale();
  
  // Function to get equipment based on locale
  const getEquipment = () => {
    return currentLocale === 'en' 
      ? ["Barbell", "Dumbbells", "Resistance Bands", "Step", "Bench"]
      : ["Barra", "Mancuernas", "Bandas de Resistencia", "Step", "Banco"];
  };

  const program = {
    img: "/images/hip-thrust.webp",
    alt: _`program6ImgAlt`,
    price: _`program6Price`,
    priceColor: "bg-[#E91E63]",
    borderColor: "border-[#E91E63]",
    titleColor: "text-[#E91E63]",
    subtitleColor: "text-[#C2185B]",
    buttonColor: "bg-[#E91E63]",
    buttonHover: "hover:bg-[#C2185B]",
    level: "PIERNAS",
    levelColor: "bg-[#E91E63]",
    title: _`program6Title`,
    subtitle: _`program6Subtitle`,
    desc: _`program6Desc`,
    featuresLabel: _`program6FeaturesLabel`,
    features: _`program6Features`,
    cta: _`program6Cta`,
    link: "https://mpago.la/1B8SeYt",
    duration: "6 semanas",
    frequency: "3 días por semana",
    equipment: getEquipment(),
    benefits: [
      "Especialización completa en miembros inferiores",
      "Progresión sistemática",
      "3 días semanales",
      "Desarrollo de glúteos y piernas",
      "Técnicas avanzadas"
    ],
    testimonials: [
      "El programa de piernas transformó completamente mis glúteos y piernas.",
      "Nunca había visto resultados tan buenos en mis piernas. ¡Increíble programa!"
    ]
  };

  const nextTestimonial = $(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % program.testimonials.length;
  });

  const prevTestimonial = $(() => {
    currentTestimonial.value = currentTestimonial.value === 0 
      ? program.testimonials.length - 1 
      : currentTestimonial.value - 1;
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={program.img} 
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
              <Button class={`${program.buttonColor} ${program.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105`}>
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
              {program.features && (
                <div class="mb-8">
                  <h3 class={`text-lg font-semibold mb-3 ${program.titleColor}`}>
                    {program.featuresLabel}
                  </h3>
                  <p class="text-gray-600">{program.features}</p>
                </div>
              )}
            </div>
            <div class="relative">
              <img 
                src={program.img} 
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
                "{program.testimonials[currentTestimonial.value]}"
              </p>
              <div class="flex justify-center space-x-2">
                {program.testimonials.map((_, index) => (
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
            {_`programCtaTitlePiernas`}
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {_`programCtaDescPiernas`}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div class={`${program.priceColor} text-white px-8 py-4 rounded-full text-2xl font-bold`}>
              {program.price}
            </div>
            <a href={program.link} target="_blank" rel="noopener noreferrer">
              <Button class={`${program.buttonColor} ${program.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105`}>
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
  const currentLocale = getLocale();
  
  // Function to get equipment based on locale
  const getEquipment = () => {
    return currentLocale === 'en' 
      ? ["Barbell", "Dumbbells", "Resistance Bands", "Step", "Bench"]
      : ["Barra", "Mancuernas", "Bandas de Resistencia", "Step", "Banco"];
  };

  const program = {
    img: "/images/hip-thrust.webp",
    alt: _`program6ImgAlt`,
    price: _`program6Price`,
    priceColor: "bg-[#E91E63]",
    borderColor: "border-[#E91E63]",
    titleColor: "text-[#E91E63]",
    subtitleColor: "text-[#C2185B]",
    buttonColor: "bg-[#E91E63]",
    buttonHover: "hover:bg-[#C2185B]",
    level: "PIERNAS",
    levelColor: "bg-[#E91E63]",
    title: _`program6Title`,
    subtitle: _`program6Subtitle`,
    desc: _`program6Desc`,
    featuresLabel: _`program6FeaturesLabel`,
    features: _`program6Features`,
    cta: _`program6Cta`,
    link: "https://mpago.la/1B8SeYt",
    duration: "6 semanas",
    frequency: "3 días por semana",
    equipment: getEquipment(),
    benefits: [
      "Especialización completa en miembros inferiores",
      "Progresión sistemática",
      "3 días semanales",
      "Desarrollo de glúteos y piernas",
      "Técnicas avanzadas"
    ],
    testimonials: [
      "El programa de piernas transformó completamente mis glúteos y piernas.",
      "Nunca había visto resultados tan buenos en mis piernas. ¡Increíble programa!"
    ]
  };

  const metadata = generateProgramMetadata(program, "piernas-frecuencia");
  return createProgramHead(metadata);
}; 