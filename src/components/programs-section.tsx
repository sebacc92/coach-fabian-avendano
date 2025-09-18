import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "./ui/button/button";

import Program1Img from '~/assets/images/fabian-gym-training.webp?jsx';
import Program2Img from '~/assets/images/fabian-handstand-reto2.webp?jsx';
import Program3Img from '~/assets/images/fabian-kettlebell.webp?jsx';
import Program4Img from '~/assets/images/1.jpeg?jsx';
import Program5Img from '~/assets/images/hiit-basico-3-dias.webp?jsx';
import Program6Img from '~/assets/images/hip-thrust.webp?jsx';

export const ProgramsSection = component$(() => {
  const sectionRef = useSignal<HTMLElement>();

  const programs = [
    {
      slug: "reto-1-transformacion",
      img: Program1Img,
      alt: _`program1ImgAlt`,
      price: _`program1Price`,
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "NIVEL INICIAL",
      levelColor: "bg-[#1e3a8a]",
      title: _`program1Title`,
      subtitle: _`program1Subtitle`,
      desc: _`program1Desc`,
      cta: _`verDetalles`,
    },
    {
      slug: "reto-2-progreso",
      img: Program2Img,
      alt: _`program2ImgAlt`,
      price: _`program2Price`,
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "NIVEL BASICO/INTERMEDIO",
      levelColor: "bg-[#1e3a8a]",
      title: _`program2Title`,
      subtitle: _`program2Subtitle`,
      desc: _`program2Desc`,
      featuresLabel: _`program2FeaturesLabel`,
      features: _`program2Features`,
      cta: _`verDetalles`,
    },
    {
      slug: "fuerza-base",
      img: Program3Img,
      alt: _`program3ImgAlt`,
      price: _`program3Price`,
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
      cta: _`verDetalles`,
    },
    {
      slug: "hiit-compacto",
      img: Program4Img,
      alt: _`program4ImgAlt`,
      price: _`program4Price`,
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "HIIT 2D",
      levelColor: "bg-[#1e3a8a]",
      title: _`program4Title`,
      subtitle: _`program4Subtitle`,
      desc: _`program4Desc`,
      featuresLabel: _`program4FeaturesLabel`,
      features: _`program4Features`,
      cta: _`verDetalles`,
    },
    {
      slug: "hiit-basico",
      img: Program5Img,
      alt: _`program5ImgAlt`,
      price: _`program5Price`,
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "HIIT 3D",
      levelColor: "bg-[#1e3a8a]",
      title: _`program5Title`,
      subtitle: _`program5Subtitle`,
      desc: _`program5Desc`,
      cta: _`verDetalles`,
    },
    {
      slug: "piernas-frecuencia",
      img: Program6Img,
      alt: _`program6ImgAlt`,
      price: _`program6Price`,
      priceColor: "bg-[#1e3a8a]",
      borderColor: "border-[#1e3a8a]",
      titleColor: "text-[#1e3a8a]",
      subtitleColor: "text-[#1e3a8a]",
      buttonColor: "bg-[#1e3a8a]",
      buttonHover: "hover:bg-[#1e40af]",
      level: "PIERNAS",
      levelColor: "bg-[#1e3a8a]",
      title: _`program6Title`,
      subtitle: _`program6Subtitle`,
      desc: _`program6Desc`,
      featuresLabel: _`program6FeaturesLabel`,
      features: _`program6Features`,
      cta: _`verDetalles`,
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
          {_`programsTitle`}
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
                <a href={`/es/program/${p.slug}`} class="inline-block w-full mt-auto group-hover:translate-y-[-2px] transition-transform duration-300">
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