import { component$, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuArrowBigRight, LuArrowBigRightDash } from '@qwikest/icons/lucide';

export const CommunityGallery = component$(() => {
  const images = [
    { src: '/images/1.png', alt: 'Fabian entrenando' },
    { src: '/images/2.png', alt: 'Fabian entrenando' },
    { src: '/images/3.png', alt: 'Fabian entrenando' },
    { src: '/images/4.png', alt: 'Fabian entrenando' },
  ];

  const selectedIndex = useSignal(0);
  const thumbnailIndices = useSignal([1,2,3]);

  const selectImage = $((clickedPos: number) => {
    const oldSelected = selectedIndex.value;
    const clickedIndex = thumbnailIndices.value[clickedPos];
    selectedIndex.value = clickedIndex;
    thumbnailIndices.value = thumbnailIndices.value
      .map((idx, i) => i === clickedPos ? oldSelected : idx);
  });

  return (
    <section class="bg-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-2/5">
            <img
              src={images[selectedIndex.value].src}
              alt={images[selectedIndex.value].alt}
              class="w-full aspect-square object-cover rounded-lg shadow-xl mb-6"
            />
            <div class="grid grid-cols-3 gap-6">
              {thumbnailIndices.value.map((index, pos) => (
                <img
                  key={pos}
                  src={images[index].src}
                  alt={images[index].alt}
                  class={`w-full aspect-square object-cover rounded cursor-pointer transition-all duration-300 ${
                    index === selectedIndex.value
                      ? 'ring-2 ring-white ring-opacity-50 scale-105 shadow-lg'
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                  onClick$={() => selectImage(pos)}
                />
              ))}
            </div>
          </div>
          <div class="lg:w-3/5 flex flex-col justify-center">
            <div class="mb-4">
              <span class="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Sobre los planes
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold font-['Orbitron'] text-white mb-4">
              Dedicado a ayudarte a lograr tu mejor versión
            </h2>
            <p class="text-lg text-gray-300 mb-6">
              Una comunidad de apoyo donde los miembros se conectan, comparten su progreso y se inspiran mutuamente
            </p>
            <div class="border-l-8 border-blue-600 pl-4 my-4">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Entrenamiento Personal</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Movilidad y Respiración</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Entrenamientos Especializados</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    <LuArrowBigRight />
                  </span>
                  <span class="text-white font-bold">Cardio y Más</span>
                </div>
              </div>
            </div>
            <Link href="#about">
              <button class="mt-4 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-colors">
                Más sobre nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});