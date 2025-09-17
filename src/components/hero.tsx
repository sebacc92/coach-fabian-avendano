import { component$ } from "@builder.io/qwik";
import { _, getLocale } from "compiled-i18n";
import { Button } from "./ui/button/button";
import { Link } from "@builder.io/qwik-city";

export const Hero = component$(() => {
  const currentLocale = getLocale();

  // Define the link based on locale
  const heroLink = currentLocale === 'en'
    ? "https://my.playbookapp.io/fabian-avendano/programs/challange-1-your-transformation-starts-today/33404"
    : "https://app.harbiz.io/checkout-form/fabianavendao1?product=invitation&lang=es";

  return (
    <section class="relative min-h-screen flex items-center justify-start px-6 pt-20">
      {/* Background image and overlay */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 animate-hero-zoom">
          {/* Usar una imagen de fondo, cambiar src cuando esté disponible */}
          <img
            src="/images/fabian-kettlebell.webp"
            alt={_`Fabián Avendaño entrenando intensamente con kettlebells en el gimnasio`}
            class="object-cover object-top w-full h-full absolute inset-0"
            style="z-index:0;"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      {/* Content */}
      <div class="relative z-10 max-w-7xl mx-auto w-full">
        <div class="text-left text-white">
          <h1 class="text-3xl md:text-6xl lg:text-7xl font-bold font-['Orbitron'] mb-4 md:mb-6 leading-tight max-w-5xl">
            {_`hero_title`}
          </h1>
          <p class="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed max-w-4xl">
            {_`hero_subtitle`}
          </p>

          <Link
            href={heroLink}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block"
          >
            <Button class="bg-white hover:bg-gray-100 text-[#2563eb] hover:text-[#1e3a8a] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all transform hover:scale-105">
              {_`hero_cta`}
            </Button>
          </Link>
        </div>
      </div>

      {/* Animated Words at Bottom */}
      <div class="absolute bottom-8 left-0 right-0">
        <div class="bg-[#1e3a8a]/90 backdrop-blur-sm overflow-hidden h-16 flex items-center px-6">
          <div class="whitespace-nowrap">
            <div class="inline-flex animate-marquee">
              <span class="text-white text-xl font-semibold">Cree en ti mismo</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Vida saludable</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Mantente activo</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Nunca te rindas</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Supera tus límites</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Cada día cuenta</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Eres más fuerte</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Sin excusas</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Hazlo posible</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Siéntete orgulloso</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Sé humilde</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Entrena duro</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Mente positiva</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Constancia total</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Fuerza interior</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Actitud ganadora</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Disciplina diaria</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Vive saludable</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Transforma tu cuerpo</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Energía pura</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Rompe barreras</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Sé imparable</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Mejora cada día</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Desafía lo imposible</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Eres un guerrero</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Pasión y dedicación</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Fortalece tu mente</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Supérate hoy</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Vive el momento</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Conquista tus metas</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Poder mental</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Determinación total</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Sé la diferencia</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Voluntad de acero</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Abraza el desafío</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Fuerza imparable</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Logra lo extraordinario</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Persiste siempre</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Sé tu mejor versión</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Esfuerzo constante</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Mentalidad ganadora</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Cuerpo y alma</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Entrena con pasión</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Resistencia total</span>
              <span class="text-white text-xl mx-6">⚡</span>
              <span class="text-white text-xl font-semibold">Vence la pereza</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Compromiso real</span>
              <span class="text-white text-xl mx-6">🔥</span>
              <span class="text-white text-xl font-semibold">Mantente enfocado</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Victoria segura</span>
              <span class="text-white text-xl mx-6">🏆</span>
              <span class="text-white text-xl font-semibold">Impulso positivo</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Respira y avanza</span>
              <span class="text-white text-xl mx-6">🌟</span>
              <span class="text-white text-xl font-semibold">Forja tu destino</span>
              <span class="text-white text-xl mx-6">💪</span>
              <span class="text-white text-xl font-semibold">Sin rendirse jamás</span>
              <span class="text-white text-xl mx-6">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 
