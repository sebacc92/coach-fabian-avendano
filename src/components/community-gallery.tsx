import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuArrowBigRight } from '@qwikest/icons/lucide';

export const CommunityGallery = component$(() => {
  const images = [
    { src: '/images/1.png', alt: 'Fabian entrenando' },
    { src: '/images/2.png', alt: 'Fabian entrenando' },
    { src: '/images/3.png', alt: 'Fabian entrenando' },
    { src: '/images/4.png', alt: 'Fabian entrenando' },
  ];

  const selectedIndex = useSignal(0);
  const thumbnailIndices = useSignal([1,2,3]);

  const sectionRef = useSignal<HTMLElement>();

  const selectImage = $((clickedPos: number) => {
    const oldSelected = selectedIndex.value;
    const clickedIndex = thumbnailIndices.value[clickedPos];
    selectedIndex.value = clickedIndex;
    thumbnailIndices.value = thumbnailIndices.value
      .map((idx, i) => i === clickedPos ? oldSelected : idx);
  });

  useVisibleTask$(() => {
    if (!sectionRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const animateElements = section.querySelectorAll('.animate-element');
            animateElements.forEach((el) => {
              const delay = (el as HTMLElement).dataset.delay || '0ms';
              (el as HTMLElement).style.transitionDelay = delay;
              (el as HTMLElement).classList.remove(
                'opacity-0',
                '-translate-x-8',
                'translate-x-8',
                'translate-y-8',
                'scale-95'
              );
              (el as HTMLElement).classList.add(
                'opacity-100',
                'translate-x-0',
                'translate-y-0',
                'scale-100'
              );
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(sectionRef.value);

    return () => observer.disconnect();
  });

  return (
    <section class="bg-gray-900 py-16" ref={sectionRef}>
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-2/5">
            <img
              src={images[selectedIndex.value].src}
              alt={images[selectedIndex.value].alt}
              class="w-full aspect-square object-cover rounded-lg shadow-xl mb-6 transition-all duration-700 ease-out opacity-0 -translate-x-8 animate-element"
              data-delay="0ms"
            />
            <div class="grid grid-cols-3 gap-6">
              {thumbnailIndices.value.map((index, pos) => (
                <img
                  key={pos}
                  src={images[index].src}
                  alt={images[index].alt}
                  class={`w-full aspect-square object-cover rounded cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 animate-element ${
                    index === selectedIndex.value
                      ? 'ring-2 ring-white ring-opacity-50 scale-105 shadow-lg'
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                  data-delay={`${(pos + 1) * 150}ms`}
                  onClick$={() => selectImage(pos)}
                />
              ))}
            </div>
          </div>
          <div class="lg:w-3/5 flex flex-col justify-center">
            <div class="mb-4">
              <span class="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-700 ease-out opacity-0 translate-x-8 animate-element"
                data-delay="400ms">
                Sobre los planes
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold font-['Orbitron'] text-white mb-4 transition-all duration-700 ease-out opacity-0 translate-x-8 animate-element"
              data-delay="500ms">
              Dedicado a ayudarte a lograr tu mejor versión
            </h2>
            <p class="text-lg text-gray-300 mb-6 transition-all duration-700 ease-out opacity-0 translate-y-8 animate-element"
              data-delay="600ms">
              Una comunidad de apoyo donde los miembros se conectan, comparten su progreso y se inspiran mutuamente
            </p>
            <div class="grid grid-cols-2 gap-6 mb-6 animate-element" data-delay="700ms">
              <div class="flex flex-col items-start opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                data-delay="750ms">
                <span class="text-5xl bg-green-500 rounded-lg p-3 mb-3">🏋️</span>
                <span class="text-xl font-bold text-white">Entrenamiento</span>
                <span class="text-xl font-bold text-white">personalizado</span>
              </div>
              <div class="flex flex-col items-start opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                data-delay="850ms">
                <span class="text-5xl bg-green-500 rounded-lg p-3 mb-3">👥</span>
                <span class="text-xl font-bold text-white">Compromiso</span>
                <span class="text-xl font-bold text-white">comunitario</span>
              </div>
            </div>
            <div class="border-l-8 border-blue-600 pl-4 my-4 opacity-0 translate-y-8 transition-all duration-700 ease-out animate-element"
              data-delay="900ms">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                  data-delay="1000ms">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Entrenamiento Personal</span>
                </div>
                <div class="flex items-center opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                  data-delay="1100ms">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Movilidad y Respiración</span>
                </div>
                <div class="flex items-center opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                  data-delay="1200ms">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Entrenamientos Especializados</span>
                </div>
                <div class="flex items-center opacity-0 scale-95 transition-all duration-700 ease-out animate-element"
                  data-delay="1300ms">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Cardio y Más</span>
                </div>
              </div>
            </div>
            <Link href="#acerca">
              <button class="mt-4 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-colors transition-all duration-700 ease-out opacity-0 translate-y-8 animate-element"
                data-delay="1400ms">
                Más sobre nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});