import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

interface DropdownProps {
  class?: string;
  triggerClass?: string;
  panelClass?: string;
}

const Root = component$<DropdownProps>(({ class: className, triggerClass, panelClass }) => {
  const isOpen = useSignal(false);
  const triggerRef = useSignal<HTMLElement>();
  const panelRef = useSignal<HTMLElement>();

  // Cerrar dropdown al hacer click fuera
  useVisibleTask$(({ cleanup }) => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.value &&
        panelRef.value &&
        !triggerRef.value.contains(event.target as Node) &&
        !panelRef.value.contains(event.target as Node)
      ) {
        isOpen.value = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    cleanup(() => document.removeEventListener('click', handleClickOutside));
  });

  // Cerrar dropdown al presionar Escape
  useVisibleTask$(({ cleanup }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen.value) {
        isOpen.value = false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    cleanup(() => document.removeEventListener('keydown', handleKeyDown));
  });

  const toggleDropdown = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <div class={cn("relative", className)}>
      <button
        ref={triggerRef}
        onClick$={toggleDropdown}
        class={cn(
          "flex items-center justify-center p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 transition-colors",
          triggerClass
        )}
        aria-expanded={isOpen.value}
        aria-haspopup="true"
      >
        <Slot name="trigger" />
      </button>
      
      {isOpen.value && (
        <div
          ref={panelRef}
          class={cn(
            "absolute right-0 mt-2 min-w-[180px] bg-white border border-gray-200 shadow-xl rounded-lg p-2 z-50",
            panelClass
          )}
        >
          <Slot />
        </div>
      )}
    </div>
  );
});

const Item = component$<PropsOf<'a'> & { class?: string }>(({ class: className, ...props }) => {
  return (
    <a
      {...props}
      class={cn(
        "block w-full text-left px-4 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors cursor-pointer",
        className
      )}
    />
  );
});

export const Dropdown = {
  Root,
  Item,
}; 