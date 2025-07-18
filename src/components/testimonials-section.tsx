import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { LuStar } from "@qwikest/icons/lucide";

export const TestimonialsSection = component$(() => {
  const testimonials = [
    {
      img: "/images/ana-testimonial.jpeg",
      alt: "Ana Gómez",
      name: "Ana Gómez",
      subtitle: _`testimonial1Subtitle`,
      subtitleColor: "text-[#8A2BE2]",
      nameColor: "text-[#6A0DAD]",
      text: _`testimonial1`,
    },
    {
      img: "/images/sebastian-testimonial.jpg",
      alt: "Sebastian Cardoso",
      name: "Sebastian Cardoso",
      subtitle: _`testimonial2Subtitle`,
      subtitleColor: "text-[#8A2BE2]",
      nameColor: "text-[#6A0DAD]",
      text: _`testimonial2`,
    },
    {
      img: "/images/maria-testimonial.jpeg",
      alt: "María López",
      name: "María López",
      subtitle: _`testimonial3Subtitle`,
      subtitleColor: "text-[#8A2BE2]",
      nameColor: "text-[#6A0DAD]",
      text: _`testimonial3`,
    },
  ];
  return (
    <section id="testimonios" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center mb-16 text-[#1A1A1A]">
          {_`testimonialsTitle`}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} class="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-2xl transition-shadow">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#6A0DAD]">
                <img src={t.img} alt={t.alt} width={80} height={80} class="object-cover w-full h-full" />
              </div>
              <h3 class={`font-bold text-lg mb-2 ${t.nameColor}`}>{t.name}</h3>
              <p class={`font-semibold mb-3 ${t.subtitleColor}`}>{t.subtitle}</p>
              <div class="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <LuStar key={i} class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p class="text-[#4B4B4B] text-sm italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 