import { component$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { Label, Input } from '~/components/ui';

export const useContact = routeAction$(async () => {
  // Aquí podrías enviar un email, guardar en DB, etc.
  // Por ahora solo simula éxito
  return { success: true };
});

export default component$(() => {
  const action = useContact();
  return (
    <section class="py-16 md:py-24 bg-[#F5F7FA] min-h-screen flex items-center justify-center">
      <div class="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1e3a8a]">Contacto</h1>
        <Form action={action} class="space-y-6">
          <div>
            <Label for="name">Nombre</Label>
            <Input id="name" name="name" type="text" placeholder="Tu nombre" required class="mt-1" />
          </div>
          <div>
            <Label for="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" required class="mt-1" />
          </div>
          <div>
            <Label for="message">Mensaje</Label>
            <textarea id="message" name="message" placeholder="Escribe tu mensaje..." required class="mt-1 h-32 resize-none w-full rounded-base border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          <button type="submit" class="w-full bg-[#2563eb] hover:bg-[#1e3a8a] text-white font-semibold py-3 rounded-lg transition-colors">Enviar</button>
          {action.value?.success && (
            <p class="text-green-600 text-center font-semibold mt-4">¡Mensaje enviado correctamente!</p>
          )}
        </Form>
      </div>
    </section>
  );
}); 