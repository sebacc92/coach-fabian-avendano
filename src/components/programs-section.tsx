import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { Button } from "./ui/button/button";

import Program1Img from '~/assets/images/fabian-gym-training.webp?jsx';
import Program2Img from '~/assets/images/fabian-handstand-reto2.webp?jsx';
import Program3Img from '~/assets/images/fabian-kettlebell.webp?jsx';
import Program4Img from '~/assets/images/1.jpeg?jsx';
import Program5Img from '~/assets/images/hiit-basico-3-dias.webp?jsx';
import Program6Img from '~/assets/images/hip-thrust.webp?jsx';
import Program7Img from '~/assets/images/programa-fuerza-6-semanas.webp?jsx';

export const ProgramsSection = component$(() => {
  const sectionRef = useSignal<HTMLElement>();

  const programs = [
    {
      slug: "reto-1-transformacion",
      img: Program1Img,
      alt: "Fabián Avendaño en el gimnasio - Reto 28 Días",
      price: "30.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "NIVEL INICIAL",
      levelColor: "bg-[#1e3a8a]",
      title: "Reto 1: TU TRANSFORMACIÓN EMPIEZA HOY",
      subtitle: "Comienza con 7 Días de Acceso Totalmente Gratis",
      desc: "Un plan probado que combina fuerza, cardio y calma activa. Entrena desde cero o potencia tus resultados con rutinas de 45 minutos que puedes hacer en casa o en el gym.",
      cta: "Ver detalles",
    },
    {
      slug: "reto-2-progreso",
      img: Program2Img,
      alt: "Fabián Avendaño haciendo handstand - Reto 2",
      price: "50.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "NIVEL BASICO/INTERMEDIO",
      levelColor: "bg-[#1e3a8a]",
      title: "Reto 2: DEL PROGRESO A LA TRANSFORMACIÓN",
      subtitle: "Comienza con 7 Días de Acceso Totalmente Gratis",
      desc: "Este programa es la continuación natural del Reto 1. Si ya diste el primer paso, ahora es momento de llevar tu progreso a una verdadera transformación. Descubrí técnicas avanzadas, mayor intensidad y un plan pensado para quienes buscan el siguiente nivel.",
      featuresLabel: "Incluye:",
      features: "Fuerza · Resistencia · Calma · Movimiento Libre",
      cta: "Ver detalles",
    },
    {
      slug: "fuerza-base",
      img: Program3Img,
      alt: "Fabián Avendaño - Programa Fuerza Base",
      price: "60.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "FUERZA BASE",
      levelColor: "bg-[#1e3a8a]",
      title: "Fuerza Base: Presencia Física (5 semanas)",
      subtitle: "Construyendo fuerza y estabilidad desde lo simple",
      desc: "Programa de fuerza de 5 semanas (2 días por semana) con enfoque full body. Día 1 centrado en empujes y Día 2 en tracciones. Se prioriza un ejercicio básico por sesión con más series para progresar en carga.",
      cta: "Ver detalles",
    },
    {
      slug: "hiit-compacto",
      img: Program4Img,
      alt: "Fabián Avendaño - Programa HIIT Compacto",
      price: "30.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "HIIT 2D",
      levelColor: "bg-[#1e3a8a]",
      title: "HIIT 4 semanas (2 días)",
      subtitle: "Máxima intensidad en mínimo tiempo",
      desc: "Programa de entrenamiento intervalico de alta intensidad de 4 semanas, 2 días por semana. Perfecto para personas con poco tiempo que buscan resultados efectivos.",
      featuresLabel: "Incluye:",
      features: "2 Días · Full Body · 45 min · Entrada en Calor",
      cta: "Ver detalles",
    },
    {
      slug: "hiit-basico",
      img: Program5Img,
      alt: "Fabián Avendaño en la playa - HIIT Básico",
      price: "40.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "HIIT 3D",
      levelColor: "bg-[#1e3a8a]",
      title: "HIIT 4 semanas (3 días)",
      subtitle: "Intensidad completa para resultados máximos",
      desc: "Programa de entrenamiento intervalico de alta intensidad de 4 semanas, 3 días por semana. Para quienes buscan transformación acelerada.",
      cta: "Ver detalles",
    },
    {
      slug: "piernas-frecuencia",
      img: Program6Img,
      alt: "Fabián Avendaño - Programa Piernas Frecuencia Glútea",
      price: "50.000 ARS",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "PIERNAS",
      levelColor: "bg-[#1e3a8a]",
      title: "Piernas 6 semanas (2 por semana)",
      subtitle: "Especialización completa en miembros inferiores",
      desc: "Programa especializado de 6 semanas para el desarrollo completo de piernas y glúteos. 3 días semanales con progresión sistemática.",
      featuresLabel: "Incluye:",
      features: "Hip Thrust · Sentadillas · Peso Muerto · Step Training",
      cta: "Ver detalles",
    },
    {
      slug: "fuerza-6-semanas",
      img: Program7Img,
      alt: "Programa de fuerza 6 semanas - Coach Fabian Avendaño",
      price: "$70.000",
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "FUERZA 6 SEMANAS",
      levelColor: "bg-[#1e3a8a]",
      title: "Programa de fuerza de 6 semanas (4 días por semana)",
      subtitle: "Desarrolla tu fuerza máxima con entrenamiento especializado",
      desc: "Programa de fuerza de 6 semanas (4 días por semana) estructurado por movimientos: Día 1 centrado en empujes, Día 2 en tracciones, Día 3 movimientos accesorios y Día 4 piernas. Cada sesión prioriza un ejercicio básico como eje, acompañado de complementarios para trabajar la fuerza y la hipertrofia de manera equilibrada.",
      cta: "Comenzar Programa",
    },
  ];

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
          {programs.map((p, i) => (
            <div
              key={i}
              class={`group border-2 ${p.borderColor} shadow-lg hover:shadow-2xl rounded-xl flex flex-col bg-white overflow-hidden transition-safe duration-500 ease-out opacity-0 translate-y-10 scale-95 animate-element stagger-${i + 1}`}
              style={{ '--stagger-delay': `${(i + 1) * 0.2}s` }}
            >
              <div class="relative h-64 md:h-80 overflow-hidden">
                <p.img
                  alt={p.alt}
                  class={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 5 ? 'object-[0_30%]' : i === 3 ? 'object-center' : 'object-top'}`}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-xl"></div>
                <div class="absolute top-3 right-3 z-10">
                  <span class={`${p.priceColor} text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm`}>{p.price}</span>
                </div>
                <div class="absolute bottom-3 left-3 z-10 text-white">
                  <span class={`${p.levelColor} px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm`}>{p.level}</span>
                </div>
              </div>
              <div class="p-5 md:p-6 flex-1 flex flex-col">
                <h3 class={`text-xl md:text-2xl font-bold font-['Poppins'] mb-3 leading-tight ${p.titleColor} group-hover:text-[#1e40af] transition-colors`}>{p.title}</h3>
                <h4 class={`text-lg font-semibold mb-4 ${p.subtitleColor} group-hover:text-gray-600 transition-colors`}>{p.subtitle}</h4>
                <p class="text-base mb-4 text-[#4B4B4B] leading-relaxed line-clamp-3">{p.desc}</p>
                {p.features && (
                  <div class="mb-6">
                    <p class={`text-sm font-semibold mb-2 ${p.titleColor}`}>{p.featuresLabel}</p>
                    <p class="text-sm text-[#4B4B4B] line-clamp-2">{p.features}</p>
                  </div>
                )}
                <a href={`/program/${p.slug}`} class="inline-block w-full mt-auto group-hover:translate-y-[-2px] transition-transform duration-300">
                  <Button class={`${p.buttonColor} ${p.buttonHover} text-white px-4 py-3 text-sm md:text-base font-semibold rounded-lg transition-safe transform hover:scale-105 w-full min-h-[48px] flex items-center justify-center shadow-md hover:shadow-lg`}>
                    {p.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 