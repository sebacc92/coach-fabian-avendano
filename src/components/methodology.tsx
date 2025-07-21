import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { LuDumbbell, LuHeart, LuFlower2, LuActivity, LuUsers } from "@qwikest/icons/lucide";

export const MethodologySection = component$(() => {
  const days = [
    {
      icon: LuDumbbell,
      title: _`monday`,
      desc: _`mondayDesc`,
      color: "bg-[#1e3a8a]",
    },
    {
      icon: LuHeart,
      title: _`tuesday`,
      desc: _`tuesdayDesc`,
      color: "bg-[#1e3a8a]",
    },
    {
      icon: LuDumbbell,
      title: _`wednesday`,
      desc: _`wednesdayDesc`,
      color: "bg-[#1e3a8a]",
    },
    {
      icon: LuFlower2,
      title: _`thursday`,
      desc: _`thursdayDesc`,
      color: "bg-[#1e3a8a]",
    },
    {
      icon: LuActivity,
      title: _`friday`,
      desc: _`fridayDesc`,
      color: "bg-[#1e3a8a]",
    },
    {
      icon: LuUsers,
      title: _`saturday`,
      desc: _`saturdayDesc`,
      color: "bg-[#1e3a8a]",
    },
  ];
  return (
    <section class="py-12 md:py-16 lg:py-24 bg-[#F5F5F7]">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center mb-12 md:mb-16 text-[#1A1A1A]">
          {_`methodologyTitle`}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {days.map((day, idx) => {
            const Icon = day.icon;
            return (
              <div class="text-center" key={idx}>
                <div class="w-16 h-16 mx-auto mb-4 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                  <Icon class="h-8 w-8 text-white" />
                </div>
                <h3 class="text-lg font-bold font-['Poppins'] mb-2 text-[#1e3a8a]">{day.title}</h3>
                <p class="text-[#4B4B4B] text-sm">{day.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}); 