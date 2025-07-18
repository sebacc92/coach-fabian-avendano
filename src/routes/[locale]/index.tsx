import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
        <Button>PRUEBA</Button>
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  const title = _`Welcome to Qwik`;
  return {
    title,
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  }
};
