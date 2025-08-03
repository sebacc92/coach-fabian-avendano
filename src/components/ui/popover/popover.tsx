import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Popover as HeadlessPopover } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

const Root = component$<PropsOf<typeof HeadlessPopover.Root>>(
  ({ ...props }) => {
    return (
      <HeadlessPopover.Root {...props}>
        <Slot />
      </HeadlessPopover.Root>
    );
  },
);

const Trigger = component$<PropsOf<typeof HeadlessPopover.Trigger>>(
  ({ ...props }) => {
    return (
      <HeadlessPopover.Trigger {...props}>
        <Slot />
      </HeadlessPopover.Trigger>
    );
  },
);

const Panel = component$<PropsOf<typeof HeadlessPopover.Panel>>(
  ({ ...props }) => {
    return (
      <HeadlessPopover.Panel
        {...props}
        class={cn(
          "min-w-[180px] bg-white border border-gray-200 shadow-xl rounded-lg p-2 flex flex-col gap-1",
          props.class,
        )}
      >
        {/* Los hijos (idiomas) deben tener buen padding y hover */}
        <Slot />
      </HeadlessPopover.Panel>
    );
  },
);

export const Popover = {
  Root,
  Trigger,
  Panel,
};
