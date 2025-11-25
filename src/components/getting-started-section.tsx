import { component$ } from "@builder.io/qwik";

import Step1Img from '~/assets/images/getting-started-step1.webp?jsx';
import Step2Img from '~/assets/images/getting-started-step2.webp?jsx';
import Step3Img from '~/assets/images/getting-started-step3.webp?jsx';
import Step4Img from '~/assets/images/getting-started-step4.webp?jsx';

export const GettingStartedSection = component$(() => {
  const steps = [
    {
      id: 1,
      title: "¡Comienza tu prueba gratuita de 7 días!",
      description: "Accede completamente gratis por 7 días a cualquiera de nuestros programas de transformación",
      img: Step1Img
    },
    {
      id: 2,
      title: "Accede a la plataforma",
      description: "Recibe acceso directo a nuestra plataforma de entrenamiento",
      img: Step2Img
    },
    {
      id: 3,
      title: "Comienza a entrenar",
      description: "Sigue las rutinas, registra tu progreso y únete a la comunidad",
      img: Step3Img
    },
    {
      id: 4,
      title: "Registra tu evolución",
      description: "Lleva un seguimiento detallado de tu progreso con métricas, fotos y logros",
      img: Step4Img
    }
  ];

  return (
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            COMENZAR ES FÁCIL
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Solo 4 pasos para transformar tu vida
          </p>
        </div>

        {/* Steps */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} class="text-center group relative">
              {/* Step Number with improved styling and symmetric lines */}
              <div class="relative mb-6">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-full flex items-center justify-center mx-auto text-white text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-safe duration-300 border-4 border-white relative z-10">
                  {step.id}
                </div>
                {/* Connecting Lines - Symmetric and properly positioned */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal line for desktop - centered and symmetric */}
                    <div class="hidden lg:block absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    {/* Vertical line for mobile/tablet - centered and symmetric */}
                    <div class="hidden sm:block lg:hidden absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                  </>
                )}
                {/* Special line for the last step (4) to complete the flow */}
                {index === steps.length - 1 && (
                  <>
                    {/* Horizontal line for desktop - extends to the right */}
                    <div class="hidden lg:block absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    {/* Vertical line for mobile/tablet - extends downward */}
                    <div class="hidden sm:block lg:hidden absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                  </>
                )}
              </div>

              {/* Image with pure transparency - no background container */}
              <div class="mb-6 relative flex justify-center">
                <step.img
                  alt={`${step.title} - Paso ${step.id}`}
                  class="w-full max-w-xs h-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                  style="background: transparent; mix-blend-mode: multiply;"
                />
              </div>

              {/* Content */}
              <div class="px-2 md:px-4">
                <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 