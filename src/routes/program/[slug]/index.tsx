import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import type { StrapiCollectionResponse, StrapiProgram } from "~/types/strapi";
import { transformStrapiProgram } from "~/types/strapi";

// Color scheme type
interface ColorScheme {
    priceColor: string;
    borderColor: string;
    titleColor: string;
    subtitleColor: string;
    buttonColor: string;
    buttonHover: string;
    levelColor: string;
}

/**
 * Get color scheme based on program level
 */
function getColorsByLevel(level: string): ColorScheme {
    const levelUpper = level.toUpperCase();

    // NIVEL INICIAL - Blue
    if (levelUpper.includes("INICIAL")) {
        return {
            priceColor: "bg-[#1e3a8a]",
            borderColor: "border-[#1e3a8a]",
            titleColor: "text-[#1e3a8a]",
            subtitleColor: "text-[#1e3a8a]",
            buttonColor: "bg-[#1e3a8a]",
            buttonHover: "hover:bg-[#1e40af]",
            levelColor: "bg-[#1e3a8a]",
        };
    }

    // NIVEL BASICO/INTERMEDIO - Green
    if (levelUpper.includes("BASICO") || levelUpper.includes("INTERMEDIO")) {
        return {
            priceColor: "bg-[#16a34a]",
            borderColor: "border-[#16a34a]",
            titleColor: "text-[#16a34a]",
            subtitleColor: "text-[#16a34a]",
            buttonColor: "bg-[#16a34a]",
            buttonHover: "hover:bg-[#15803d]",
            levelColor: "bg-[#16a34a]",
        };
    }

    // FUERZA BASE - Orange
    if (levelUpper.includes("FUERZA") && levelUpper.includes("BASE")) {
        return {
            priceColor: "bg-[#ea580c]",
            borderColor: "border-[#ea580c]",
            titleColor: "text-[#ea580c]",
            subtitleColor: "text-[#ea580c]",
            buttonColor: "bg-[#ea580c]",
            buttonHover: "hover:bg-[#c2410c]",
            levelColor: "bg-[#ea580c]",
        };
    }

    // HIIT - Purple
    if (levelUpper.includes("HIIT")) {
        return {
            priceColor: "bg-[#9C27B0]",
            borderColor: "border-[#9C27B0]",
            titleColor: "text-[#9C27B0]",
            subtitleColor: "text-[#9C27B0]",
            buttonColor: "bg-[#9C27B0]",
            buttonHover: "hover:bg-[#7B1FA2]",
            levelColor: "bg-[#9C27B0]",
        };
    }

    // PIERNAS - Pink
    if (levelUpper.includes("PIERNAS")) {
        return {
            priceColor: "bg-[#db2777]",
            borderColor: "border-[#db2777]",
            titleColor: "text-[#db2777]",
            subtitleColor: "text-[#db2777]",
            buttonColor: "bg-[#db2777]",
            buttonHover: "hover:bg-[#be185d]",
            levelColor: "bg-[#db2777]",
        };
    }

    // FUERZA 6 SEMANAS - Red
    if (levelUpper.includes("FUERZA") && levelUpper.includes("6")) {
        return {
            priceColor: "bg-[#dc2626]",
            borderColor: "border-[#dc2626]",
            titleColor: "text-[#dc2626]",
            subtitleColor: "text-[#dc2626]",
            buttonColor: "bg-[#dc2626]",
            buttonHover: "hover:bg-[#b91c1c]",
            levelColor: "bg-[#dc2626]",
        };
    }

    // Default - Blue
    return {
        priceColor: "bg-[#1e3a8a]",
        borderColor: "border-[#1e3a8a]",
        titleColor: "text-[#1e3a8a]",
        subtitleColor: "text-[#1e3a8a]",
        buttonColor: "bg-[#1e3a8a]",
        buttonHover: "hover:bg-[#1e40af]",
        levelColor: "bg-[#1e3a8a]",
    };
}

/**
 * Load program by slug from Strapi API
 */
export const useProgramBySlug = routeLoader$(async ({ params, status }) => {
    const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";
    const slug = params.slug;

    try {
        const response = await fetch(
            `${strapiUrl}/api/programs?filters[Slug][$eq]=${slug}&populate=*`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            status(404);
            return null;
        }

        const data: StrapiCollectionResponse<StrapiProgram> = await response.json();

        if (data.data.length === 0) {
            status(404);
            return null;
        }

        // Return the first (and should be only) program
        return transformStrapiProgram(data.data[0]);
    } catch (error) {
        console.error("Error fetching program:", error);
        status(500);
        return null;
    }
});

export default component$(() => {
    const programSignal = useProgramBySlug();
    const program = programSignal.value;

    // Handle 404 - program not found
    if (!program) {
        return (
            <div class="min-h-screen flex items-center justify-center bg-gray-50">
                <div class="text-center px-4">
                    <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <h2 class="text-2xl font-semibold text-gray-600 mb-6">Programa no encontrado</h2>
                    <p class="text-gray-500 mb-8">El programa que buscas no existe o ha sido eliminado.</p>
                    <a href="/#programa" class="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ver todos los programas
                    </a>
                </div>
            </div>
        );
    }

    const colors = getColorsByLevel(program.nivel);
    const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";
    const imageUrl = program.CoverImage ? `${strapiUrl}${program.CoverImage.url}` : '/images/placeholder.jpg';
    const imageAlt = program.CoverImage?.alternativeText || program.Title;

    // Placeholder for payment link - you should add a PaymentLink field to Strapi
    const paymentLink = "https://mpago.la/2KXTHSB";

    return (
        <>
            {/* Hero Section */}
            <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        class="w-full h-full object-cover object-center"
                        width={program.CoverImage?.width || 1200}
                        height={program.CoverImage?.height || 800}
                    />
                    <div class="absolute inset-0 bg-black/50"></div>
                </div>

                <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <div class={`inline-block ${colors.levelColor} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                        {program.Level}
                    </div>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {program.Title}
                    </h1>

                    {/* Platform Information */}
                    <div class="mb-6 md:mb-8">
                        <p class="text-sm md:text-base text-white/80 mb-2">
                            Prueba gratuita sin compromiso. Cancela cuando quieras.
                        </p>
                        <p class="text-xs md:text-sm text-white/70 max-w-2xl mx-auto">
                            Únete a la comunidad de transformadores.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div class={`${colors.priceColor} text-white px-8 py-4 rounded-full text-2xl font-bold`}>
                            {program.Price}
                        </div>
                        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                            <Button class={`${colors.buttonColor} ${colors.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105`}>
                                Comenzar Programa
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Program Overview Section */}
            <section class="py-16 md:py-24 bg-gray-50">
                <div class="container mx-auto px-4 max-w-6xl">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                {program.Title}
                            </h2>
                            <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                                {program.Description}
                            </div>
                            {program.Duration && program.Frequency && (
                                <div class="mb-8">
                                    <h3 class={`text-lg font-semibold mb-3 ${colors.titleColor}`}>
                                        Detalles del programa:
                                    </h3>
                                    <div class="space-y-2 text-gray-600">
                                        <p><strong>Duración:</strong> {program.Duration}</p>
                                        <p><strong>Frecuencia:</strong> {program.Frequency}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div class="relative">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                class="rounded-2xl shadow-2xl"
                                width={program.CoverImage?.width || 600}
                                height={program.CoverImage?.height || 400}
                            />
                            <div class={`absolute -top-4 -right-4 ${colors.priceColor} text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg`}>
                                {program.Price}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="py-16 md:py-24 bg-gray-800">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¡Comienza tu transformación hoy!
                    </h2>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Únete a la comunidad y alcanza tus objetivos con {program.Title}.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div class={`${colors.priceColor} text-white px-8 py-4 rounded-full text-2xl font-bold`}>
                            {program.Price}
                        </div>
                        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                            <Button class={`${colors.buttonColor} ${colors.buttonHover} text-white px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105`}>
                                Comenzar Programa
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
});

export const head: DocumentHead = ({ resolveValue }) => {
    const program = resolveValue(useProgramBySlug);

    if (!program) {
        return {
            title: "Programa no encontrado - Coach Fabian Avendaño",
            meta: [
                {
                    name: "robots",
                    content: "noindex, nofollow",
                },
            ],
        };
    }

    const baseUrl = "https://coach-fabian-avendano.netlify.app";
    const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";
    const currentUrl = `${baseUrl}/program/${program.Slug}`;
    const imageUrl = program.CoverImage
        ? `${strapiUrl}${program.CoverImage.url}`
        : `${baseUrl}/assets/images/fabian-kettlebell.jpg`;

    const title = `${program.Title} - Coach Fabian Avendaño`;
    const description = program.Description.substring(0, 160);

    return {
        title,
        meta: [
            {
                name: "description",
                content: description,
            },
            {
                name: "keywords",
                content: `${program.Level}, ${program.Title}, entrenamiento, fitness, coach personal`,
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
                content: "es",
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
