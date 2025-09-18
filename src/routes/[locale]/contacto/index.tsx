
import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Label, Input } from '~/components/ui';
import { _ } from 'compiled-i18n';
import emailjs from '@emailjs/browser';

export const head: DocumentHead = ({ params }) => {
  const locale = params.locale || 'es';
  const baseUrl = "https://coach-fabian-avendano.netlify.app";
  const currentUrl = `${baseUrl}/${locale}/contacto`;
  const imageUrl = `${baseUrl}/assets/images/fabian-beach-about.jpg`;

  let title, description, keywords;

  if (locale === 'en') {
    title = "Contact - Coach Fabian Avendano";
    description = "Have questions, inquiries, or want to train with me? Fill out the form and I'll get back to you as soon as possible.";
    keywords = "contact, personal training contact, fitness coach contact, training inquiries";
  } else {
    title = "Contacto - Coach Fabian Avendano";
    description = "Tenés dudas, consultas o querés entrenar conmigo? Completá el formulario y te responderé a la brevedad.";
    keywords = "contacto, contacto entrenador personal, consultas fitness, dudas entrenamiento";
  }

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
        content: locale,
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
      {
        rel: "alternate",
        hreflang: "es",
        href: `${baseUrl}/es/contacto`,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${baseUrl}/en/contacto`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${baseUrl}/es/contacto`,
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
    console.log('SERVICE_ID', SERVICE_ID)
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    console.log('TEMPLATE_ID', TEMPLATE_ID)
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    console.log('PUBLIC_KEY', PUBLIC_KEY)

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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-wider text-center uppercase drop-shadow-lg">{_`contactTitle`}</h1>
        <p class="mt-4 text-lg md:text-xl text-white/90 font-medium text-center max-w-2xl drop-shadow-sm">{_`contactSubtitle` ?? '¿Tenés dudas, consultas o querés entrenar conmigo? Completá el formulario y te responderé a la brevedad.'}</p>
      </div>
      {/* Formulario */}
      <div class="flex-1 flex items-center justify-center py-12 md:py-20">
        <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form
            ref={formRef}
            preventdefault:submit
            onSubmit$={handleSubmit}
            class="space-y-7"
          >
            <div>
              <Label for="name" class="font-semibold text-[#1e3a8a]">{_`contactNameLabel` ?? _`Nombre`}</Label>
              <Input id="name" name="name" type="text" placeholder={_`contactNamePlaceholder` ?? 'Tu nombre'} required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="email" class="font-semibold text-[#1e3a8a]">{_`contactEmailLabel` ?? 'Email'}</Label>
              <Input id="email" name="email" type="email" placeholder={_`contactEmailPlaceholder` ?? 'tu@email.com'} required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="phone" class="font-semibold text-[#1e3a8a]">{_`contactPhoneLabel`}</Label>
              <Input id="phone" name="phone" type="tel" placeholder={_`contactPhonePlaceholder`} class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200" />
            </div>
            <div>
              <Label for="message" class="font-semibold text-[#1e3a8a]">{_`contactMessageLabel` ?? 'Mensaje'}</Label>
              <textarea id="message" name="message" placeholder={_`contactMessagePlaceholder` ?? 'Escribe tu mensaje...'} required class="mt-2 h-32 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition-all duration-200 w-full resize-none" />
            </div>
            <button
              type="submit"
              class="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 uppercase tracking-wide text-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2"
              disabled={loading