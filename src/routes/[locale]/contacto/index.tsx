import { component$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { Label, Input } from '~/components/ui';
import { _ } from 'compiled-i18n';

export const useContact = routeAction$(async () => {
  // Aquí podrías enviar un email, guardar en DB, etc.
  // Por ahora solo simula éxito
  return { success: true };
});

export default component$(() => {
  const action = useContact();
  return (
    <section class="min-h-screen bg-white flex flex-col justify-center">
      {/* Header azul con sombra y subtítulo */}
      <div class="w-full bg-[#2563eb] py-16 shadow-lg shadow-blue-200/40 flex flex-col items-center justify-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-wider text-center uppercase drop-shadow-lg">{_`contactTitle`}</h1>
        <p class="mt-4 text-lg md:text-xl text-white/90 font-medium text-center max-w-2xl drop-shadow-sm">{_`contactSubtitle` ?? '¿Tenés dudas, consultas o querés entrenar conmigo? Completá el formulario y te responderé a la brevedad.'}</p>
      </div>
      {/* Formulario */}
      <div class="flex-1 flex items-center justify-center py-12 md:py-20">
        <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <Form action={action} class="space-y-7">
            <div>
              <Label for="name" class="font-semibold text-[#2563eb]">{_`contactNameLabel` ?? _`Nombre`}</Label>
              <Input id="name" name="name" type="text" placeholder={_`contactNamePlaceholder` ?? 'Tu nombre'} required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200" />
            </div>
            <div>
              <Label for="email" class="font-semibold text-[#2563eb]">{_`contactEmailLabel` ?? 'Email'}</Label>
              <Input id="email" name="email" type="email" placeholder={_`contactEmailPlaceholder` ?? 'tu@email.com'} required class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200" />
            </div>
            <div>
              <Label for="phone" class="font-semibold text-[#2563eb]">{_`contactPhoneLabel`}</Label>
              <Input id="phone" name="phone" type="tel" placeholder={_`contactPhonePlaceholder`} class="mt-2 h-12 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200" />
            </div>
            <div>
              <Label for="message" class="font-semibold text-[#2563eb]">{_`contactMessageLabel` ?? 'Mensaje'}</Label>
              <textarea id="message" name="message" placeholder={_`contactMessagePlaceholder` ?? 'Escribe tu mensaje...'} required class="mt-2 h-32 bg-[#f5f7fa] border border-gray-200 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-all duration-200 w-full resize-none" />
            </div>
            <button type="submit" class="w-full bg-[#2563eb] hover:bg-[#1e3a8a] text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 uppercase tracking-wide text-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2">{_`contactSendButton` ?? 'Enviar'}</button>
            {action.value?.success && (
              <p class="text-green-600 text-center font-semibold mt-4 animate-fade-in">{_`contactSuccessMessage` ?? '¡Mensaje enviado correctamente!'}</p>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}); 