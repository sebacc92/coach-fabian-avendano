import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { LuChevronUp } from "@qwikest/icons/lucide";

export const ScrollToTop = component$(() => {
  const show = useSignal(false);

  useVisibleTask$(() => {
    const onScroll = () => {
      show.value = window.scrollY > 120;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick$={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      class={`fixed z-50 bottom-6 right-6 bg-[#1e3a8a] text-white rounded-full shadow-lg p-3 transition-opacity duration-300 hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${show.value ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <LuChevronUp class="h-6 w-6" />
    </button>
  );
}); 