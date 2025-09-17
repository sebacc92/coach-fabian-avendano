import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { LuDumbbell, LuMenu, LuX } from "@qwikest/icons/lucide";
import { _, getLocale } from "compiled-i18n";
import { Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const currentLocale = getLocale();
    const menuOpen = useSignal(false);
    const languageDropdownOpen = useSignal(false);
    const scrolled = useSignal(false);
    const loc = useLocation();
    const isHome = loc.url.pathname === `/${currentLocale}` || loc.url.pathname === `/${currentLocale}/`;
    const menuItems = [
        { label: _`Programas`, href: '#programa', anchor: true },
        { label: _`Testimonios`, href: '#testimonios', anchor: true },
        { label: _`Acerca de`, href: '#acerca', anchor: true },
        { label: _`Contacto`, href: `/${currentLocale}/contacto` },
    ];

    useVisibleTask$(({ cleanup }) => {
        const handleScroll = () => {
            scrolled.value = window.scrollY > 100;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        cleanup(() => {
            window.removeEventListener('scroll', handleScroll);
        });
    });

    // Cerrar dropdown al hacer click fuera
    useVisibleTask$(({ cleanup }) => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.language-dropdown')) {
                languageDropdownOpen.value = false;
            }
        };

        document.addEventListener('click', handleClickOutside);
        cleanup(() => document.removeEventListener('click', handleClickOutside));
    });

    return (
        <header class={`fixed top-[env(safe-area-inset-top)] left-0 right-0 z-50 px-6 py-4 pt-[env(safe-area-inset-top)] transition-all duration-300 ease-in-out ${
            scrolled.value
                ? 'bg-white text-gray-900 drop-shadow-none border-b border-gray-200'
                : 'bg-transparent text-white drop-shadow-lg'
        }`}>
            <div class="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/">
                    <div class="flex items-center">
                        <LuDumbbell class="h-10 w-10 text-[#6A0DAD] mr-3" />
                        <span class={`font-bold text-xl hidden sm:inline transition-colors duration-300 ${
                            scrolled.value ? 'text-gray-900' : 'text-white'
                        }`}>Coach Fabian Avendaño</span>
                        <span class={`font-bold text-lg sm:hidden transition-colors duration-300 ${
                            scrolled.value ? 'text-gray-900' : 'text-white'
                        }`}>F. Avendaño</span>
                    </div>
                </Link>
                
                {/* Navigation Desktop - Centered */}
                <nav class="hidden md:flex flex-1 justify-center">
                    <ul class="flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                {item.anchor ? (
                                    isHome ? (
                                        <a
                                            href={item.href}
                                            class={`font-medium text-xl transition-colors duration-300 ${
                                                scrolled.value
                                                    ? 'text-gray-700 hover:text-[#2563eb] hover:font-bold'
                                                    : 'text-white hover:text-[#2563eb] hover:font-bold'
                                            }`}
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
                                        <a
                                            href={`/${currentLocale}${item.href}`}
                                            class={`font-medium text-xl transition-colors duration-300 ${
                                                scrolled.value
                                                    ? 'text-gray-700 hover:text-[#2563eb] hover:font-bold'
                                                    : 'text-white hover:text-[#2563eb] hover:font-bold'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ) : (
                                    <a href={item.href} class={`font-medium text-xl transition-colors duration-300 ${
                                        scrolled.value
                                            ? 'text-gray-700 hover:text-[#2563eb] hover:font-bold'
                                            : 'text-white hover:text-[#2563eb] hover:font-bold'
                                    }`}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Desktop Right: Button + Language */}
                <div class="hidden md:flex items-center space-x-4">
                    <Link href={`/${currentLocale}/contenido-gratuito`}>
                        <button class="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                            Comienza a entrenar
                        </button>
                    </Link>
                </div>
                
                {/* Hamburger Mobile */}
                <button
                    class={`md:hidden p-2 rounded focus:outline-none focus:ring-2 transition-colors duration-300 ${
                        scrolled.value ? 'focus:ring-blue-500' : 'focus:ring-white'
                    }`}
                    aria-label="Open menu"
                    onClick$={() => (menuOpen.value = true)}
                >
                    <LuMenu class={`h-7 w-7 transition-colors duration-300 ${
                        scrolled.value ? 'text-[#6A0DAD]' : 'text-white'
                    }`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen.value && (
                <div class="fixed inset-0 z-40 bg-black/80 flex flex-col md:hidden" onClick$={() => (menuOpen.value = false)}>
                    <nav
                        class="flex-1 w-full p-8 flex flex-col justify-between relative"
                        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(26,26,26,0.95) 100%)' }}
                        onClick$={e => e.stopPropagation()}
                    >
                        {/* Header with logo and close */}
                        <div class="flex justify-between items-center mb-12">
                            <div class="flex items-center">
                                <LuDumbbell class="h-8 w-8 text-[#6A0DAD] mr-3" />
                                <span class="font-bold text-xl text-white">F. Avendaño</span>
                            </div>
                            <button
                                class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] transition-colors"
                                aria-label="Close menu"
                                onClick$={() => (menuOpen.value = false)}
                            >
                                <LuX class="h-8 w-8 text-white hover:text-[#6A0DAD]" />
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <ul class="flex flex-col gap-6 mb-auto">
                            {menuItems.map((item, index) => (
                                <li key={item.href}>
                                    {item.anchor ? (
                                        isHome ? (
                                            <a
                                                href={item.href}
                                                class={`text-2xl font-semibold transition-all duration-300 text-white hover:text-[#2563eb] hover:font-bold flex items-center py-2 opacity-0 translate-x-[-20px] ${
                                                    `animate-menu-item-${index}`
                                                }`}
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
                                                    }, 300);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <a
                                                href={`/${currentLocale}${item.href}`}
                                                class={`text-2xl font-semibold transition-all duration-300 text-white hover:text-[#2563eb] hover:font-bold hover:scale-105 flex items-center py-2 opacity-0 translate-x-[-20px] ${
                                                    `animate-menu-item-${index}`
                                                }`}
                                                onClick$={() => { menuOpen.value = false; }}
                                            >
                                                {item.label}
                                            </a>
                                        )
                                    ) : (
                                        <a
                                            href={item.href}
                                            class={`text-2xl font-semibold transition-all duration-300 text-white hover:text-[#2563eb] hover:font-bold hover:scale-105 flex items-center py-2 opacity-0 translate-x-[-20px] ${
                                                `animate-menu-item-${index}`
                                            }`}
                                            onClick$={() => (menuOpen.value = false)}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button at Bottom */}
                        <div class="mt-auto pt-8">
                            <Link href={`/${currentLocale}/contenido-gratuito`}>
                                <button class="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] opacity-0 translate-y-10 animate-menu-cta">
                                    Comienza a entrenar
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
            {menuOpen.value && (
                <style>
                    {`
                        @keyframes menuSlideIn {
                            from {
                                opacity: 0;
                                transform: translateX(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }
                        .animate-menu-item-0 { animation: menuSlideIn 0.4s ease-out 0.2s forwards; }
                        .animate-menu-item-1 { animation: menuSlideIn 0.4s ease-out 0.3s forwards; }
                        .animate-menu-item-2 { animation: menuSlideIn 0.4s ease-out 0.4s forwards; }
                        .animate-menu-item-3 { animation: menuSlideIn 0.4s ease-out 0.5s forwards; }
                        @keyframes ctaSlideIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        .animate-menu-cta { animation: ctaSlideIn 0.4s ease-out 0.6s forwards; }
                    `}
                </style>
            )}
        </header>
    );
});