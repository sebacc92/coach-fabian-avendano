import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";

import DemoImg1 from '~/assets/images/fabian-gym-training.webp?jsx';
import DemoImg2 from '~/assets/images/fabian-handstand-reto2.webp?jsx';
import DemoImg3 from '~/assets/images/fabian-kettlebell.webp?jsx';
import DemoImg4 from '~/assets/images/1.jpeg?jsx';
import DemoImg5 from '~/assets/images/hip-thrust.webp?jsx';

export default component$(() => {
  const programs = [
    {
      id: 1,
      img: DemoImg1,
      alt: "Reto 1 - Transformación",
      title: "Reto 1: TU TRANSFORMACIÓN EMPIEZA HOY",
      subtitle: "Comienza con 7 Días de Acceso Totalmente Gratis",
      desc: "Un plan probado que combina fuerza, cardio y calma activa. Entrena desde cero o potencia tus resultados con rutinas de 45 minutos.",
      price: "30.000 ARS",
      cta: "¡QUIERO EMPEZAR GRATIS!",
      level: "NIVEL INICIAL",
      color: "purple",
      features: "Fuerza · Cardio · Calma Activa"
    },
    {
      id: 2,
      img: DemoImg2,
      alt: "Reto 2 - Progreso",
      title: "Reto 2: DEL PROGRESO A LA TRANSFORMACIÓN",
      subtitle: "Comienza con 7 Días de Acceso Totalmente Gratis",
      desc: "Este programa es la continuación natural del Reto 1. Descubrí técnicas avanzadas, mayor intensidad y un plan pensado para quienes buscan el siguiente nivel.",
      price: "50.000 ARS",
      cta: "¡QUIERO EMPEZAR GRATIS!",
      level: "NIVEL BASICO/INTERMEDIO",
      color: "purple",
      features: "Fuerza · Resistencia · Calma · Movimiento Libre"
    },
    {
      id: 3,
      img: DemoImg3,
      alt: "Fuerza Base",
      title: "Fuerza Base: Presencia Física",
      subtitle: "Construyendo fuerza y estabilidad desde lo simple",
      desc: "Programa de fuerza de 5 semanas (2 días por semana) con enfoque full body. Día 1 centrado en empujes y Día 2 en tracciones.",
      price: "60.000 ARS",
      cta: "ACCEDER A FUERZA BASE",
      level: "FUERZA BASE",
      color: "orange",
      features: "Enfoque en fuerza base · Progresión sistemática"
    },
    {
      id: 4,
      img: DemoImg4,
      alt: "HIIT Compacto",
      title: "HIIT 4 semanas (2 días)",
      subtitle: "Máxima intensidad en mínimo tiempo",
      desc: "Programa de entrenamiento intervalico de alta intensidad de 4 semanas, 2 días por semana. Perfecto para personas con poco tiempo.",
      price: "30.000 ARS",
      cta: "ACCEDER A HIIT COMPACTO",
      level: "HIIT 2D",
      color: "pink",
      features: "2 Días · Full Body · 45 min · Entrada en Calor"
    },
    {
      id: 5,
      img: DemoImg5,
      alt: "Piernas",
      title: "Piernas 6 semanas (2 por semana)",
      subtitle: "Especialización completa en miembros inferiores",
      desc: "Programa especializado de 6 semanas para el desarrollo completo de piernas y glúteos. 3 días semanales con progresión sistemática.",
      price: "40.000 ARS",
      cta: "ACCEDER A PIERNAS",
      level: "PIERNAS",
      color: "pink",
      features: "Hip Thrust · Sentadillas · Peso Muerto · Step Training"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          bg: "bg-purple-600",
          text: "text-purple-600",
          border: "border-purple-600",
          hover: "hover:bg-purple-700"
        };
      case "orange":
        return {
          bg: "bg-orange-500",
          text: "text-orange-500",
          border: "border-orange-500",
          hover: "hover:bg-orange-600"
        };
      case "pink":
        return {
          bg: "bg-pink-500",
          text: "text-pink-500",
          border: "border-pink-500",
          hover: "hover:bg-pink-600"
        };
      default:
        return {
          bg: "bg-blue-600",
          text: "text-blue-600",
          border: "border-blue-600",
          hover: "hover:bg-blue-700"
        };
    }
  };

  return (
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-4">
          Diseños de Cards - Programas
        </h1>
        <p class="text-lg text-center text-gray-600 mb-12">
          Ejemplos de diferentes estilos para mostrar los programas
        </p>

        {/* Design 1: Classic Card with Overlay */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 1: Card Clásica con Overlay</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-safe duration-300">
                  <div class="relative h-48">
                    <program.img alt={program.alt} class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute top-4 left-4">
                      <span class={`${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {program.level}
                      </span>
                    </div>
                    <div class="absolute top-4 right-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                        {program.price}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-sm text-gray-600 mb-3">{program.subtitle}</p>
                    <p class="text-gray-700 mb-4">{program.desc}</p>
                    <div class="mb-4">
                      <span class="text-xs text-gray-500">Incluye:</span>
                      <p class="text-sm text-gray-700">{program.features}</p>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 3: Image Background Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 2: Card con Fondo de Imagen</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="relative h-80 rounded-2xl overflow-hidden group">
                  <program.img alt={program.alt} class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div class="flex items-center justify-between mb-2">
                      <span class={`${colors.bg} px-2 py-1 rounded text-xs font-semibold`}>
                        {program.level}
                      </span>
                      <span class="text-lg font-bold">{program.price}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">{program.title}</h3>
                    <p class="text-sm text-white/90 mb-3">{program.subtitle}</p>
                    <p class="text-xs text-white/80 mb-4">{program.desc}</p>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-2 rounded-lg text-sm font-medium`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 4: Horizontal Card - Desktop Only */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 3: Card Horizontal (Solo Desktop)</h2>
          <div class="hidden md:block space-y-6">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-xl shadow-lg overflow-hidden flex h-56">
                  <div class="w-48 flex-shrink-0">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="flex-1 p-6 flex flex-col">
                    <div class="flex items-center justify-between mb-3">
                      <span class={`${colors.text} text-sm font-medium`}>{program.level}</span>
                      <span class="text-xl font-bold text-gray-800">{program.price}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-3">{program.subtitle}</p>
                    <p class="text-sm text-gray-700 mb-4 flex-1">{program.desc}</p>
                    <div class="flex items-center justify-between mt-auto">
                      <div class="text-sm text-gray-600 flex-1 mr-4">
                        <span class="font-medium">Incluye:</span> {program.features}
                      </div>
                      <Button class={`${colors.bg} ${colors.hover} text-white px-6 py-2 rounded-lg text-sm font-medium flex-shrink-0`}>
                        {program.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="md:hidden text-center py-8">
            <p class="text-gray-600">Este diseño solo se muestra en computadoras</p>
          </div>
        </section>

        {/* Design 7: Compact Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 4: Card Compacta</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div class="w-full h-32 rounded-lg overflow-hidden mb-3">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="flex items-center justify-between mb-2">
                    <span class={`${colors.text} text-xs font-medium`}>{program.level}</span>
                    <span class="text-sm font-bold text-gray-800">{program.price}</span>
                  </div>
                  <h3 class="text-sm font-bold text-gray-800 mb-1">{program.title}</h3>
                  <p class="text-xs text-gray-600 mb-3">{program.subtitle}</p>
                  <Button class={`${colors.bg} ${colors.hover} text-white w-full py-2 rounded text-xs font-medium`}>
                    {program.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 8: Feature Highlight Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 5: Card con Destacado de Características</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div class="relative">
                    <program.img alt={program.alt} class="w-full h-48 object-cover object-top" />
                    <div class="absolute top-4 left-4">
                      <span class={`${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {program.level}
                      </span>
                    </div>
                    <div class="absolute top-4 right-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                        {program.price}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-4">{program.subtitle}</p>
                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 class="text-sm font-semibold text-gray-700 mb-2">Características principales:</h4>
                      <div class="space-y-1">
                        {program.features.split(' · ').map((feature, index) => (
                          <div key={index} class="flex items-center text-sm text-gray-600">
                            <span class={`${colors.bg} w-2 h-2 rounded-full mr-2`}></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 9: Pricing Focus Card - Modified */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 6: Card con Precio Sutil</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div class="relative h-48">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute top-4 left-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="text-right mb-4">
                      <span class="text-sm text-gray-600">{program.price}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-4">{program.subtitle}</p>
                    <p class="text-sm text-gray-700 mb-4">{program.desc}</p>
                    <div class="text-center mb-6">
                      <p class="text-xs text-gray-500 mb-1">Incluye:</p>
                      <p class="text-sm text-gray-700">{program.features}</p>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 10: Modern Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 7: Card Moderna</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-safe duration-300">
                  <div class="relative h-56">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute top-4 left-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                    </div>
                    <div class="absolute top-4 right-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                        {program.price}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-3">{program.subtitle}</p>
                    <p class="text-sm text-gray-700 mb-4">{program.desc}</p>
                    <div class="mb-6">
                      <div class="flex flex-wrap gap-2">
                        {program.features.split(' · ').map((feature, index) => (
                          <span key={index} class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold transform group-hover:scale-105 transition-transform`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 11: Corner Badge Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 8: Card con Badge en Esquina</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-xl shadow-lg overflow-hidden relative">
                  <div class="relative h-48">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-black/30"></div>
                    <div class="absolute top-0 right-0">
                      <div class={`${colors.bg} text-white px-4 py-2 rounded-bl-lg`}>
                        <span class="text-sm font-bold">{program.price}</span>
                      </div>
                    </div>
                    <div class="absolute bottom-4 left-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-3">{program.subtitle}</p>
                    <p class="text-sm text-gray-700 mb-4">{program.desc}</p>
                    <div class="mb-4">
                      <p class="text-xs text-gray-500 mb-1">Incluye:</p>
                      <p class="text-sm text-gray-700">{program.features}</p>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 12: Split Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 9: Card Dividida</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div class="relative h-40">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    <div class="absolute top-4 left-4">
                      <span class={`${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                      <h3 class="text-lg font-bold text-gray-800">{program.title}</h3>
                      <span class="text-sm text-gray-600">{program.price}</span>
                    </div>
                    <p class="text-gray-600 mb-3 text-sm">{program.subtitle}</p>
                    <p class="text-xs text-gray-700 mb-4">{program.desc}</p>
                    <div class="mb-4">
                      <p class="text-xs text-gray-500 mb-1">Incluye:</p>
                      <p class="text-xs text-gray-700">{program.features}</p>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-2 rounded-lg text-sm font-medium`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design 13: Floating Elements Card */}
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Diseño 10: Card con Elementos Flotantes</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={program.id} class="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
                  <div class="relative h-52">
                    <program.img alt={program.alt} class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute -top-2 -right-2">
                      <div class={`${colors.bg} text-white px-4 py-2 rounded-full shadow-lg`}>
                        <span class="text-sm font-bold">{program.price}</span>
                      </div>
                    </div>
                    <div class="absolute bottom-4 left-4">
                      <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p class="text-gray-600 mb-3">{program.subtitle}</p>
                    <p class="text-sm text-gray-700 mb-4">{program.desc}</p>
                    <div class="mb-4">
                      <p class="text-xs text-gray-500 mb-1">Incluye:</p>
                      <p class="text-sm text-gray-700">{program.features}</p>
                    </div>
                    <Button class={`${colors.bg} ${colors.hover} text-white w-full py-3 rounded-lg font-semibold transform group-hover:scale-105 transition-transform`}>
                      {program.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Diseños de Cards - Programas",
  meta: [
    {
      name: "description",
      content: "Ejemplos de diferentes diseños de cards para mostrar los programas de entrenamiento"
    }
  ]
}; 