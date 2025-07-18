import { component$ } from '@builder.io/qwik';
import { LuLanguages } from "@qwikest/icons/lucide";
import { _, getLocale, locales } from "compiled-i18n";
import { Popover, buttonVariants } from './ui';

export default component$(() => {
    const currentLocale = getLocale();
    const menuItems = [
        { label: _`Programas`, href: '#programa', anchor: true },
        { label: _`Testimonios`, href: '#testimonios', anchor: true },
        { label: _`Acerca de`, href: '/acerca-de' },
        { label: _`Contacto`, href: '/contacto' },
    ];

    // Para evitar hydration issues, solo usar scroll en el browser
    return (
        <header class="flex items-center justify-between px-6 py-4 bg-white shadow">
            {/* Logo */}
            <div class="flex items-center">
                <img src="/logo.png" alt="Logo" class="h-10 w-auto mr-3" />
                <span class="font-bold text-xl">Coach Fabian Avendaño</span>
            </div>
            {/* Navigation */}
            <nav>
                <ul class="flex space-x-6">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            {item.anchor ? (
                                <a
                                    href={item.href}
                                    class="text-gray-700 hover:text-blue-600 cursor-pointer"
                                    preventdefault:click
                                    onClick$={() => {
                                        const el = document.getElementById(item.href.replace('#', ''));
                                        if (el) {
                                            el.scrollIntoView({ behavior: 'smooth' });
                                        } else {
                                            window.location.href = item.href;
                                        }
                                    }}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <a href={item.href} class="text-gray-700 hover:text-blue-600">
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Language Toggle */}
            <Popover.Root flip={false} gutter={8}>
                <Popover.Trigger class={buttonVariants({ look: 'outline' })}>
                    <LuLanguages />
                </Popover.Trigger>
                <Popover.Panel>
                    {locales.map((locale) => (
                        <a
                            key={locale}
                            class={buttonVariants({ look: 'ghost' })}
                            href={`/${locale}`}
                        >
                            {locale === currentLocale && (
                                <span class="ml-2">✓</span>
                            )}
                            {locale === 'es' ? 'Español' : 'English'}
                        </a>
                    ))}
                </Popover.Panel>
            </Popover.Root>
        </header>
    );
});