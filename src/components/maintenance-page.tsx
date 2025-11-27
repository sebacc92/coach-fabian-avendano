import { component$ } from '@builder.io/qwik';
import { LuDumbbell, LuWrench } from '@qwikest/icons/lucide';

export const MaintenancePage = component$(() => {
    return (
        <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
            <div class="max-w-2xl w-full text-center">
                {/* Logo/Icon */}
                <div class="mb-8 flex justify-center">
                    <div class="relative">
                        <LuDumbbell class="h-24 w-24 text-[#6A0DAD] animate-pulse" />
                        <LuWrench class="h-12 w-12 text-white absolute -bottom-2 -right-2 animate-bounce" />
                    </div>
                </div>

                {/* Main Message */}
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
                    Estamos Mejorando
                </h1>

                <p class="text-xl md:text-2xl text-gray-300 mb-8">
                    Nuestro sitio está en mantenimiento mientras trabajamos para traerte una mejor experiencia.
                </p>

                {/* Details */}
                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
                    <p class="text-gray-200 text-lg mb-4">
                        Estamos actualizando nuestro sistema para ofrecerte:
                    </p>
                    <ul class="text-left text-gray-300 space-y-2 max-w-md mx-auto">
                        <li class="flex items-center">
                            <span class="text-[#6A0DAD] mr-2">✓</span>
                            Nuevas funcionalidades
                        </li>
                        <li class="flex items-center">
                            <span class="text-[#6A0DAD] mr-2">✓</span>
                            Mejor rendimiento
                        </li>
                        <li class="flex items-center">
                            <span class="text-[#6A0DAD] mr-2">✓</span>
                            Experiencia mejorada
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <p class="text-gray-400">
                    ¿Tienes alguna pregunta? Contáctanos en{' '}
                    <a href="mailto:hola@cleverisma.com" class="text-[#6A0DAD] hover:text-[#8A2BE2] transition-colors">
                        hola@cleverisma.com
                    </a>
                </p>

                {/* Animated dots */}
                <div class="mt-8 flex justify-center space-x-2">
                    <div class="w-3 h-3 bg-[#6A0DAD] rounded-full animate-bounce" style="animation-delay: 0s"></div>
                    <div class="w-3 h-3 bg-[#6A0DAD] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-3 h-3 bg-[#6A0DAD] rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
            </div>
        </div>
    );
});
