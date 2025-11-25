
import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Label, Input } from '~/components/ui';
import emailjs from '@emailjs/browser';

export const head: DocumentHead = () => {
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/contacto`;
  const imageUrl = `${baseUrl}/assets/images/fabian-beach-about.jpg`;

  const title = "Contacto - Coach Fabian Avendaño";
  const description = "Tenés dudas, consultas o querés entrenar conmigo? Completá el formulario y te responderé a la brevedad.";
  const keywords = "contacto, contacto entrenador personal, consultas fitness, dudas entrenamiento";

  return {
    title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: "Fabián Avendaño",
      },
      // Open Graph
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: imageUrl,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: currentUrl,
      },
      {
        property: "og:site_name",
        content: "Coach Fabián Avendaño",
      },
      {
        property: "og:locale",
        content: "es_ES",
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: currentUrl,
      },
    ],
  };
};

export default component$(() => {
  const isSubmitted = useSignal(false);
  const loading = useSignal(false);
  const error = useSignal<string | null>(null);
  const formRef = useSignal<HTMLFormElement>();

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();
    loading.value = true;
    error.value = null;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      error.value = 'Faltan credenciales de EmailJS';
      loading.value = false;
      return;
    }

    const form = formRef.value;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          phone,
          message,
        },
        PUBLIC_KEY
      );
      isSubmitted.value = true;
      form.reset();
    } catch (err: any) {
      error.value = 'Error al enviar: ' + (err?.message || 'Desconocido');
    } finally {
      loading.value = false;
    }
  });

  return (
    <section class="min-h-screen bg-white flex flex-col justify-center">
      {/* Header azul con sombra y subtítulo */}
      <div class="w-full bg-[#1e3a8a] py-16 shadow-lg shadow-blue-200/40 flex flex-col items-center justify-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-wider text-center uppercase drop-shadow-lg">CONTACTO</h1>
        <p class="mt-4 text-lg md:text-xl text-white/90 font-medium text-center max-w-2xl drop-shadow-sm">¿Tenés dudas, consultas o querés entrenar conmigo? Completá el formulario y te responderé a la brevedad.</p>
      </div>
      {/* Formulario */}
      <div class="flex-1 flex items-center justify-center py-12 md:py-20">
        <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form
            ref={formRef}
            onSubmit$={handleSubmit}
            class="space-y-7"
          >
            <div>
              <Label for="name" class="font-semibold text-[#1e3a8a]">Nombre</Label>
              <Input id="name" name="name" type="text" placeholder="Tu nombre" required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="email" class="font-semibold text-[#1e3a8a]">Email</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="phone" class="font-semibold text-[#1e3a8a]">Teléfono (Opcional)</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+54 9 11 1234 5678" class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="message" class="font-semibold text-[#1e3a8a]">Mensaje</Label>
              <textarea id="message" name="message" placeholder="Escribe tu mensaje..." required class="mt-2 h-32 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200 w-full resize-none" />
            </div>
            <button
              type="submit"
              class="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 uppercase tracking-wide text-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2"
              disabled={loading.value}
            >
              {loading.value ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
          {isSubmitted.value && (
            <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-800 font-medium">¡Mensaje enviado exitosamente! Te responderé pronto.</p>
            </div>
          )}
          {error.value && (
            <div class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-800 font-medium">{error.value}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});