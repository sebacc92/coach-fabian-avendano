import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { Button } from "./ui/button/button";
import type { Program } from "~/types/strapi";

// Props interface
interface ProgramsSectionProps {
  programs: Program[];
}

// Color scheme type
interface ColorScheme {
  priceColor: string;
  borderColor: string;
  titleColor: string;
  subtitleColor: string;
  buttonColor: string;
  buttonHover: string;
  levelColor: string;
}

/**
 * Get color scheme based on program level
 */
function getColorsByLevel(level: string): ColorScheme {
  const levelUpper = level.toUpperCase();

  // NIVEL INICIAL - Blue
  if (levelUpper.includes("INICIAL")) {
    return {
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      levelColor: "bg-[#1e3a8a]",
    };
  }

  // NIVEL BASICO/INTERMEDIO - Green
  if (levelUpper.includes("BASICO") || levelUpper.includes("INTERMEDIO")) {
    return {
      priceColor: "bg-[#16a34a]",
      borderColor: "border-[#16a34a]",
      titleColor: "text-[#16a34a]",
      subtitleColor: "text-[#16a34a]",
      buttonColor: "bg-[#16a34a]",
      buttonHover: "hover:bg-[#15803d]",
      levelColor: "bg-[#16a34a]",
    };
  }

  // FUERZA BASE - Orange
  if (levelUpper.includes("FUERZA") && levelUpper.includes("BASE")) {
    return {
      priceColor: "bg-[#ea580c]",
      borderColor: "border-[#ea580c]",
      titleColor: "text-[#ea580c]",
      subtitleColor: "text-[#ea580c]",
      buttonColor: "bg-[#ea580c]",
      buttonHover: "hover:bg-[#c2410c]",
      levelColor: "bg-[#ea580c]",
    };
  }

  // HIIT - Purple
  if (levelUpper.includes("HIIT")) {
    return {
      priceColor: "bg-[#9C27B0]",
      borderColor: "border-[#9C27B0]",
      titleColor: "text-[#9C27B0]",
      subtitleColor: "text-[#9C27B0]",
      buttonColor: "bg-[#9C27B0]",
      buttonHover: "hover:bg-[#7B1FA2]",
      levelColor: "bg-[#9C27B0]",
    };
  }

  // PIERNAS - Pink
  if (levelUpper.includes("PIERNAS")) {
    return {
      priceColor: "bg-[#db2777]",
      borderColor: "border-[#db2777]",
      titleColor: "text-[#db2777]",
      subtitleColor: "text-[#db2777]",
      buttonColor: "bg-[#db2777]",
      buttonHover: "hover:bg-[#be185d]",
      levelColor: "bg-[#db2777]",
    };
  }

  // FUERZA 6 SEMANAS - Red
  if (levelUpper.includes("FUERZA") && levelUpper.includes("6")) {
    return {
      priceColor: "bg-[#dc2626]",
      borderColor: "border-[#dc2626]",
      titleColor: "text-[#dc2626]",
      subtitleColor: "text-[#dc2626]",
      buttonColor: "bg-[#dc2626]",
      buttonHover: "hover:bg-[#b91c1c]",
      levelColor: "bg-[#dc2626]",
    };
  }

  // Default - Blue
  return {
    priceColor: "bg-[#1e3a8a]",
    borderColor: "border-[#1e3a8a]",
    titleColor: "text-[#1e3a8a]",
    subtitleColor: "text-[#1e3a8a]",
    buttonColor: "bg-[#1e3a8a]",
    buttonHover: "hover:bg-[#1e40af]",
    levelColor: "bg-[#1e3a8a]",
  };
}

export const ProgramsSection = component$<ProgramsSectionProps>(({ programs }) => {
  const sectionRef = useSignal<HTMLElement>();
  const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!sectionRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const animateElements = section.querySelectorAll('.animate-element');

            // ✅ Batch: Agrupar todas las ops en requestAnimationFrame
            requestAnimationFrame(() => {
              animateElements.forEach((el, index) => {
                const elAsHTMLElement = el as HTMLElement;
                // Remover style.transitionDelay; usar CSS keyframes para stagger
                elAsHTMLElement.classList.remove(
                  'opacity-0',
                  'translate-y-10',
                  'scale-95'
                );
                elAsHTMLElement.classList.add(
                  'opacity-100',
                  'translate-y-0',
                  'scale-100',
                  `stagger-${index}`  // Nueva clase para CSS stagger
                );
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(sectionRef.value);

    return () => observer.disconnect();
  });
  return (
    <section id="programa" class="py-12 md:py-16 lg:py-24" ref={sectionRef}>
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center mb-12 md:mb-16 text-[#1A1A1A] animate-element stagger-0" style="--stagger-delay: 0s;">
          Nuestros Programas de Transformación
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, i) => {
            const colors = getColorsByLevel(program.nivel);
            const imageUrl = program.CoverImage
              ? `${strapiUrl}${program.CoverImage.url}`
              : '/images/placeholder.jpg';
            const imageAlt = program.CoverImage?.alternativeText || program.Title;

            return (
              <div
                key={program.id}
                class={`group border-2 ${colors.borderColor} shadow-lg hover:shadow-2xl rounded-xl flex flex-col bg-white overflow-hidden transition-safe duration-500 ease-out opacity-0 translate-y-10 scale-95 animate-element stagger-${i + 1}`}
                style={{ '--stagger-delay': `${(i + 1) * 0.2}s` }}
              >
                <div class="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    width={program.CoverImage?.width || 600}
                    height={program.CoverImage?.height || 400}
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-xl"></div>
                  <div class="absolute top-3 right-3 z-10">
                    <span class={`${colors.priceColor} text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm`}>
                      {program.Price}
                    </span>
                  </div>
                  <div class="absolute bottom-3 left-3 z-10 text-white">
                    <span class={`${colors.levelColor} px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm`}>
                      {program.Level}
                    </span>
                  </div>
                </div>
                <div class="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 class={`text-xl md:text-2xl font-bold font-['Poppins'] mb-3 leading-tight ${colors.titleColor} group-hover:text-[#1e40af] transition-colors`}>
                    {program.Title}
                  </h3>
                  <p class="text-base mb-4 text-[#4B4B4B] leading-relaxed line-clamp-3">
                    {program.Description}
                  </p>
                  {program.Duration && program.Frequency && (
                    <div class="mb-4">
                      <p class={`text-sm font-semibold mb-2 ${colors.titleColor}`}>Detalles:</p>
                      <p class="text-sm text-[#4B4B4B]">
                        {program.Duration} · {program.Frequency}
                      </p>
                    </div>
                  )}
                  <a
                    href={`/program/${program.Slug}`}
                    class="inline-block w-full mt-auto group-hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    <Button class={`${colors.buttonColor} ${colors.buttonHover} text-white px-4 py-3 text-sm md:text-base font-semibold rounded-lg transition-safe transform hover:scale-105 w-full min-h-[48px] flex items-center justify-center shadow-md hover:shadow-lg`}>
                      Ver detalles
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}); 