import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "./ui/button/button";

export const Hero = component$(() => {
  return (
    <section class="relative min-h-screen flex items-center justify-center px-4">
      {/* Background image and overlay */}
      <div class="absolute inset-0">
        {/* Usar una imagen de fondo, cambiar src cuando esté disponible */}
        <img
          src="/images/fabian-kettlebell.jpg"
          alt={_`Fabián Avendaño entrenando intensamente con kettlebells en el gimnasio`}
          class="object-cover w-full h-full absolute inset-0"
          style="z-index:0;"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/60 to-[#2563eb]/60"></div>
      </div>
      {/* Content */}
      <div class="relative z-10 text-center text-white max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] mb-4 md:mb-6 leading-tight">
          {_`hero_title`}
        </h1>
        <p class="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          {_`hero_subtitle`}
        </p>
        <a
          href="https://mpago.la/1rjmWz3"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block"
        >
          <Button class="bg-white hover:bg-gray-100 text-[#2563eb] hover:text-[#1e3a8a] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all transform hover:scale-105">
            {_`hero_cta`}
          </Button>
        </a>
      </div>
    </section>
  );
}); 