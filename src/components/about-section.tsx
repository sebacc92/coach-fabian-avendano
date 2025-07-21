import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export const AboutSection = component$(() => {
  return (
    <section id="acerca" class="py-16 md:py-24 bg-[#F5F5F7]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagen */}
          <div class="order-2 lg:order-1">
            <div class="relative h-96 md:h-[500px] rounded-lg overflow-hidden group">
              <img
                src="/images/10.jpeg"
                alt={_`aboutImgAlt`}
                class="object-cover w-full h-full rounded-lg shadow-2xl border border-[#e5e7eb] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay decorativo opcional */}
              <div class="absolute inset-0 pointer-events-none rounded-lg group-hover:bg-white/5 transition duration-500"></div>
            </div>
          </div>
          {/* Contenido */}
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4 text-[#1e3a8a]">
              {_`aboutTitle`}
            </h2>
            <h3 class="text-xl md:text-2xl font-semibold mb-6 text-[#1e3a8a]">{_`aboutSubtitle`}</h3>
            <div class="mb-8">
              <span class="inline-block text-lg font-bold text-[#1e3a8a] tracking-wide uppercase">{_`Functional Training Coach`}</span>
            </div>
            <div class="space-y-4 text-[#4B4B4B] leading-relaxed">
              <p>{_`aboutP1`}</p>
              <p>{_`aboutP2`}</p>
              <p class="font-semibold text-[#1e3a8a]">{_`aboutP3`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 