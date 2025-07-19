import { component$, useSignal } from '@builder.io/qwik';
import { LuLanguages, LuDumbbell, LuMenu, LuX } from "@qwikest/icons/lucide";
import { _, getLocale, locales } from "compiled-i18n";
import { Popover, buttonVariants } from './ui';

export default component$(() => {
    const currentLocale = getLocale();
    const menuOpen = useSignal(false);
    const menuItems = [
        { label: _`Programas`, href: '#programa', anchor: true },
        { label: _`Testimonios`, href: '#testimonios', anchor: true },
        { label: _`Acerca de`, href: '#acerca', anchor: true },
        { label: _`Contacto`, href: '/contacto' },
    ];

    // Para evitar hydration issues, solo usar scroll en el browser
    return (
        <header class="flex items-center justify-between px-6 py-4 bg-white shadow relative">
            {/* Logo */}
            <div class="flex items-center">
                <LuDumbbell class="h-10 w-10 text-[#6A0DAD] mr-3" />
                <span class="font-bold text-xl hidden sm:inline">Coach Fabian Avendaño</span>
                <span class="font-bold text-lg sm:hidden">F. Avendaño</span>
            </div>
            {/* Navigation Desktop */}
            <nav class="hidden md:block">
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
            {/* Language Toggle Desktop */}
            <div class="hidden md:block">
                <Popover.Root flip={false} gutter={8}>
                    <Popover.Trigger class={buttonVariants({ look: 'outline' })}>
                        <LuLanguages />
                    </Popover.Trigger>
                    <Popover.Panel style={{ marginRight: '12px' }}>
                        {locales.map((locale) => (
                            <a
                                key={locale}
                                class={`flex items-center px-4 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors ${locale === currentLocale ? 'font-semibold text-[#6A0DAD] bg-gray-50' : 'text-gray-900'}`}
                                href={`/${locale}`}
                            >
                                {locale === currentLocale && (
                                    <span class="mr-2 text-lg">✓</span>
                                )}
                                {locale === 'es' ? 'Español' : 'English'}
                            </a>
                        ))}
                    </Popover.Panel>
                </Popover.Root>
            </div>
            {/* Hamburger Mobile */}
            <button
                class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                aria-label="Open menu"
                onClick$={() => (menuOpen.value = true)}
            >
                <LuMenu class="h-7 w-7 text-[#6A0DAD]" />
            </button>
            {/* Mobile Menu Overlay */}
            {menuOpen.value && (
                <div class="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden" onClick$={() => (menuOpen.value = false)}>
                    <nav
                        class="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-6 relative"
                        onClick$={e => e.stopPropagation()}
                    >
                        <button
                            class="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                            aria-label="Close menu"
                            onClick$={() => (menuOpen.value = false)}
                        >
                            <LuX class="h-6 w-6 text-[#6A0DAD]" />
                        </button>
                        <div class="flex items-center mb-8 mt-2">
                            <LuDumbbell class="h-8 w-8 text-[#6A0DAD] mr-2" />
                            <span class="font-bold text-lg">F. Avendaño</span>
                        </div>
                        <ul class="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    {item.anchor ? (
                                        <a
                                            href={item.href}
                                            class="text-gray-700 hover:text-blue-600 text-lg"
                                            preventdefault:click
                                            onClick$={() => {
                                                menuOpen.value = false;
                                                setTimeout(() => {
                                                    const el = document.getElementById(item.href.replace('#', ''));
                                                    if (el) {
                                                        el.scrollIntoView({ behavior: 'smooth' });
                                                    } else {
                                                        window.location.href = item.href;
                                                    }
                                                }, 100);
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <a href={item.href} class="text-gray-700 hover:text-blue-600 text-lg">
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div class="mt-8">
                            <Popover.Root flip={false} gutter={8}>
                                <Popover.Trigger class={buttonVariants({ look: 'outline' })}>
                                    <LuLanguages />
                                </Popover.Trigger>
                                <Popover.Panel style={{ marginRight: '12px' }}>
                                    {locales.map((locale) => (
                                        <a
                                            key={locale}
                                            class={`flex items-center px-4 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors ${locale === currentLocale ? 'font-semibold text-[#6A0DAD] bg-gray-50' : 'text-gray-900'}`}
                                            href={`/${locale}`}
                                        >
                                            {locale === currentLocale && (
                                                <span class="mr-2 text-lg">✓</span>
                                            )}
                                            {locale === 'es' ? 'Español' : 'English'}
                                        </a>
                                    ))}
                                </Popover.Panel>
                            </Popover.Root>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
});