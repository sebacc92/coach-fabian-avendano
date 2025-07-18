import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
    const lang = useSignal<'ES' | 'EN'>('ES');
    const menuItems = [
        { label: lang.value === 'ES' ? 'Inicio' : 'Home', href: '/' },
        { label: lang.value === 'ES' ? 'Servicios' : 'Services', href: '/servicios' },
        { label: lang.value === 'ES' ? 'Contacto' : 'Contact', href: '/contacto' },
    ];

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
                            <a href={item.href} class="text-gray-700 hover:text-blue-600">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Language Toggle */}
            <button
                class="ml-6 px-3 py-1 border rounded text-sm"
                onClick$={() => (lang.value = lang.value === 'ES' ? 'EN' : 'ES')}
                aria-label="Toggle language"
            >
                {lang.value}
            </button>
        </header>
    );
});