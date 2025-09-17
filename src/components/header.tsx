import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { LuLanguages, LuDumbbell, LuMenu, LuX } from "@qwikest/icons/lucide";
import { _, getLocale, locales } from "compiled-i18n";
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

    const toggleLanguageDropdown = $(() => {
        languageDropdownOpen.value = !languageDropdownOpen.value;
    });

    return (
        <header class={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out ${
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
                                                    ? 'text-gray-700 hover:text-blue-600'
                                                    : 'text-white hover:text-gray-200'
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
                                                    ? 'text-gray-700 hover:text-blue-600'
                                                    : 'text-white hover:text-gray-200'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ) : (
                                    <a href={item.href} class={`font-medium text-xl transition-colors duration-300 ${
                                        scrolled.value
                                            ? 'text-gray-700 hover:text-blue-600'
                                            : 'text-white hover:text-gray-200'
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
                <div class="fixed inset-0 z-40 bg-black/40 flex justify-end md:hidden" onClick$={() => (menuOpen.value = false)}>
                    <nav
                        class={`w-64 h-full p-6 flex flex-col gap-6 relative transition-all duration-300 ${
                            scrolled.value
                                ? 'bg-white text-gray-900 shadow-lg'
                                : 'bg-transparent text-white drop-shadow-lg'
                        }`}
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
                            <span class={`font-bold text-lg transition-colors duration-300 ${
                                scrolled.value ? 'text-gray-900' : 'text-white'
                            }`}>F. Avendaño</span>
                        </div>
                        <ul class="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    {item.anchor ? (
                                        isHome ? (
                                            <a
                                                href={item.href}
                                                class={`text-xl transition-colors duration-300 ${
                                                    scrolled.value
                                                        ? 'text-gray-700 hover:text-blue-600'
                                                        : 'text-white hover:text-gray-200'
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
                                                    }, 100);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <a
                                                href={`/${currentLocale}${item.href}`}
                                                class={`text-xl transition-colors duration-300 ${
                                                    scrolled.value
                                                        ? 'text-gray-700 hover:text-blue-600'
                                                        : 'text-white hover:text-gray-200'
                                                }`}
                                                onClick$={() => { menuOpen.value = false; }}
                                            >
                                                {item.label}
                                            </a>
                                        )
                                    ) : (
                                        <a href={item.href} class={`text-xl transition-colors duration-300 ${
                                            scrolled.value
                                                ? 'text-gray-700 hover:text-blue-600'
                                                : 'text-white hover:text-gray-200'
                                        }`}>
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Link href={`/${currentLocale}/contenido-gratuito`}>
                            <button class="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg mb-4">
                                Comienza a entrenar
                            </button>
                        </Link>
                        <div class="relative language-dropdown">
                            <button
                                onClick$={toggleLanguageDropdown}
                                class="flex items-center justify-center p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 transition-colors"
                                aria-expanded={languageDropdownOpen.value}
                                aria-haspopup="true"
                            >
                                <LuLanguages />
                            </button>
                            
                            {languageDropdownOpen.value && (
                                <div class="absolute right-0 mt-2 min-w-[180px] bg-white border border-gray-200 shadow-xl rounded-lg p-2 z-50">
                                    {locales.map((locale) => (
                                        <a
                                            key={locale}
                                            class={`block w-full text-left px-4 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors cursor-pointer ${locale === currentLocale ? 'font-semibold text-[#6A0DAD] bg-gray-50' : 'text-gray-900'}`}
                                            href={`/${locale}`}
                                            onClick$={() => {
                                                menuOpen.value = false;
                                                languageDropdownOpen.value = false;
                                                setTimeout(() => {
                                                    window.location.href = `/${locale}`;
                                                }, 100);
                                            }}
                                        >
                                            {locale === currentLocale && (
                                                <span class="mr-2 text-lg">✓</span>
                                            )}
                                            {locale === 'es' ? 'Español' : 'English'}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
});