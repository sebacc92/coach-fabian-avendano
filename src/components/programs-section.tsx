import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "./ui/button/button";

export const ProgramsSection = component$(() => {
    const programs = [
      {
        img: "/images/fabian-gym-program.jpg",
        alt: _`program1ImgAlt`,
        price: _`program1Price`,
        priceColor: "bg-[#6A0DAD]",
        borderColor: "border-[#6A0DAD]",
        titleColor: "text-[#6A0DAD]",
        subtitleColor: "text-[#8A2BE2]",
        buttonColor: "bg-[#6A0DAD]",
        buttonHover: "hover:bg-[#5A0B9D]",
        level: "NIVEL INICIAL",
        levelColor: "bg-[#6A0DAD]",
        title: _`program1Title`,
        subtitle: _`program1Subtitle`,
        desc: _`program1Desc`,
        cta: _`program1Cta`,
        link: "https://mpago.la/1rjmWz3",
      },
      {
        img: "/images/fabian-handstand-reto2.jpeg",
        alt: _`program2ImgAlt`,
        price: _`program2Price`,
        priceColor: "bg-[#8A2BE2]",
        borderColor: "border-[#8A2BE2]",
        titleColor: "text-[#8A2BE2]",
        subtitleColor: "text-[#6A0DAD]",
        buttonColor: "bg-[#8A2BE2]",
        buttonHover: "hover:bg-[#7B1FA2]",
        level: "NIVEL BASICO/INTERMEDIO",
        levelColor: "bg-[#8A2BE2]",
        title: _`program2Title`,
        subtitle: _`program2Subtitle`,
        desc: _`program2Desc`,
        featuresLabel: _`program2FeaturesLabel`,
        features: _`program2Features`,
        cta: _`program2Cta`,
        link: "https://mpago.la/2axULch",
      },
      {
        img: "/images/fabian-kettlebell.jpg",
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
        title: _`program3Title`,
        subtitle: _`program3Subtitle`,
        desc: _`program3Desc`,
        cta: _`program3Cta`,
        link: "https://mpago.la/17rjJve",
      },
      {
        img: "/images/fabian-gym-training.jpg",
        alt: _`program4ImgAlt`,
        price: _`program4Price`,
        priceColor: "bg-[#9C27B0]",
        borderColor: "border-[#9C27B0]",
        titleColor: "text-[#9C27B0]",
        subtitleColor: "text-[#7B1FA2]",
        buttonColor: "bg-[#9C27B0]",
        buttonHover: "hover:bg-[#7B1FA2]",
        level: "HIIT 2D",
        levelColor: "bg-[#9C27B0]",
        title: _`program4Title`,
        subtitle: _`program4Subtitle`,
        desc: _`program4Desc`,
        featuresLabel: _`program4FeaturesLabel`,
        features: _`program4Features`,
        cta: _`program4Cta`,
        link: "https://mpago.la/1LjB1z5",
      },
      {
        img: "/images/fabian-beach-about.jpg",
        alt: _`program5ImgAlt`,
        price: _`program5Price`,
        priceColor: "bg-[#00C896]",
        borderColor: "border-[#00C896]",
        titleColor: "text-[#00C896]",
        subtitleColor: "text-[#00A876]",
        buttonColor: "bg-[#00C896]",
        buttonHover: "hover:bg-[#00A876]",
        level: "HIIT 3D",
        levelColor: "bg-[#00C896]",
        title: _`program5Title`,
        subtitle: _`program5Subtitle`,
        desc: _`program5Desc`,
        cta: _`program5Cta`,
        link: "https://mpago.la/1FoSTny",
      },
      {
        img: "/images/hip-thrust.jpeg",
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
        link: "https://mpago.la/1TGNuEC",
      },
    ];
  return (
    <section id="programa" class="py-12 md:py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center mb-12 md:mb-16 text-[#1A1A1A]">
          {_`programsTitle`}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((p, i) => (
            <div key={i} class={`border-2 ${p.borderColor} shadow-2xl rounded-lg flex flex-col bg-white`}>
              <div class="relative h-64 md:h-80 rounded-t-lg overflow-hidden">
                <img src={p.img} alt={p.alt} class={`w-full h-full rounded-t-lg ${i === 5 ? 'object-[0_30%]' : 'object-top'}`} />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
                <div class="absolute top-4 right-4">
                  <span class={`${p.priceColor} text-white px-3 py-1 rounded-full text-lg font-bold`}>{p.price}</span>
                </div>
                <div class="absolute bottom-4 left-4 text-white">
                  <span class={`${p.levelColor} px-3 py-1 rounded-full text-sm font-semibold`}>{p.level}</span>
                </div>
              </div>
              <div class="p-4 md:p-6 flex-1 flex flex-col">
                <h3 class={`text-xl md:text-2xl font-bold font-['Poppins'] mb-3 leading-tight ${p.titleColor}`}>{p.title}</h3>
                <h4 class={`text-lg font-semibold mb-4 ${p.subtitleColor}`}>{p.subtitle}</h4>
                <p class="text-base mb-4 text-[#4B4B4B] leading-relaxed">{p.desc}</p>
                {p.features && (
                  <div class="mb-6">
                    <p class={`text-sm font-semibold mb-2 ${p.titleColor}`}>{p.featuresLabel}</p>
                    <p class="text-sm text-[#4B4B4B]">{p.features}</p>
                  </div>
                )}
                <a href={p.link} target="_blank" rel="noopener noreferrer" class="inline-block w-full mt-auto">
                  <Button class={`${p.buttonColor} ${p.buttonHover} text-white px-4 py-3 text-sm md:text-base font-semibold rounded-lg transition-all transform hover:scale-105 w-full min-h-[48px] flex items-center justify-center`}>
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