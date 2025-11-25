import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuDumbbell, LuHeart, LuFlower2, LuUsers, LuZap, LuCheck } from "@qwikest/icons/lucide";

export const Calendar = component$(() => {
  const selectedWeek = useSignal(1);
  const selectedDay = useSignal(0);

  const weeks = [
    {
      week: 1,
      days: [
        { day: 1, type: "strength", color: "bg-purple-600" },
        { day: 2, type: "cardio", color: "bg-red-500" },
        { day: 3, type: "strength", color: "bg-purple-600" },
        { day: 4, type: "calm", color: "bg-green-500" },
        { day: 5, type: "strength", color: "bg-purple-600" },
        { day: 6, type: "free", color: "bg-orange-500" },
        { day: 7, type: "review", color: "bg-gray-600" }
      ]
    },
    {
      week: 2,
      days: [
        { day: 8, type: "strength", color: "bg-purple-600" },
        { day: 9, type: "cardio", color: "bg-red-500" },
        { day: 10, type: "strength", color: "bg-purple-600" },
        { day: 11, type: "calm", color: "bg-green-500" },
        { day: 12, type: "strength", color: "bg-purple-600" },
        { day: 13, type: "free", color: "bg-orange-500" },
        { day: 14, type: "review", color: "bg-gray-600" }
      ]
    },
    {
      week: 3,
      days: [
        { day: 15, type: "strength", color: "bg-purple-600" },
        { day: 16, type: "cardio", color: "bg-red-500" },
        { day: 17, type: "strength", color: "bg-purple-600" },
        { day: 18, type: "calm", color: "bg-green-500" },
        { day: 19, type: "strength", color: "bg-purple-600" },
        { day: 20, type: "free", color: "bg-orange-500" },
        { day: 21, type: "review", color: "bg-gray-600" }
      ]
    },
    {
      week: 4,
      days: [
        { day: 22, type: "strength", color: "bg-purple-600" },
        { day: 23, type: "cardio", color: "bg-red-500" },
        { day: 24, type: "strength", color: "bg-purple-600" },
        { day: 25, type: "calm", color: "bg-green-500" },
        { day: 26, type: "strength", color: "bg-purple-600" },
        { day: 27, type: "free", color: "bg-orange-500" },
        { day: 28, type: "final", color: "bg-yellow-500" }
      ]
    }
  ];

  const getDayTitle = (day: number) => {
    const dayTitles: { [key: number]: string } = {
      1: "Fuerza y Fundamentos",
      2: "Cardio y Resistencia",
      3: "Fuerza y Estabilidad",
      4: "Calma Activa y Movilidad",
      5: "Fuerza y Potencia",
      6: "Movimiento Libre",
      7: "Revisión y Descanso",
      8: "Fuerza Progresiva",
      9: "Cardio Intenso",
      10: "Fuerza y Control",
      11: "Recuperación Activa",
      12: "Fuerza Dinámica",
      13: "Actividad Libre",
      14: "Evaluación Semanal",
      15: "Fuerza Avanzada",
      16: "Cardio HIIT",
      17: "Fuerza Total",
      18: "Yoga y Estiramiento",
      19: "Fuerza Máxima",
      20: "Deporte o Hobby",
      21: "Preparación Final",
      22: "Desafío de Fuerza",
      23: "Desafío Cardio",
      24: "Fuerza Resistencia",
      25: "Movilidad Profunda",
      26: "Potencia Final",
      27: "Día Libre Activo",
      28: "GRAN FINAL DEL RETO"
    };
    return dayTitles[day] || `Día ${day}`;
  };

  const getTypeDescription = (type: string) => {
    switch (type) {
      case "strength": return "Entrenamiento de Fuerza";
      case "cardio": return "Entrenamiento Cardiovascular";
      case "calm": return "Calma Activa";
      case "free": return "Entrenamiento Libre";
      case "review": return "Revisión Semanal";
      case "final": return "Cierre del Reto";
      default: return "";
    }
  };

  const getTypeDescriptionText = (type: string) => {
    switch (type) {
      case "strength": return "Enfocado en construir masa muscular y fuerza funcional.";
      case "cardio": return "Diseñado para mejorar tu resistencia y salud cardiovascular.";
      case "calm": return "Sesiones de baja intensidad para recuperación y movilidad.";
      case "free": return "Elige una actividad que disfrutes: caminar, nadar, bici, etc.";
      case "review": return "Momento para evaluar progresos y planificar la siguiente semana.";
      case "final": return "¡El gran día! Celebramos tu constancia y resultados.";
      default: return "";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "strength": return LuDumbbell;
      case "cardio": return LuHeart;
      case "calm": return LuFlower2;
      case "free": return LuUsers;
      case "review": return LuCheck;
      case "final": return LuZap;
      default: return LuDumbbell;
    }
  };

  const selectWeek = $((week: number) => {
    selectedWeek.value = week;
    selectedDay.value = 0;
  });

  const selectDay = $((dayIndex: number) => {
    selectedDay.value = dayIndex;
  });

  return (
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full animate-float"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-blue-400 rounded-full animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Tu Camino Día a Día
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Un plan estructurado para garantizar tu éxito. Cada día tiene un propósito específico.
          </p>
        </div>

        {/* Week Navigation */}
        <div class="flex flex-wrap justify-center gap-4 mb-8 animate-slide-in-left">
          {weeks.map((weekData, index) => (
            <button
              key={weekData.week}
              onClick$={() => selectWeek(weekData.week)}
              class={`px-6 py-3 rounded-full font-semibold transition-safe duration-300 transform hover:scale-105 hover:shadow-lg ${selectedWeek.value === weekData.week
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg animate-pulse-glow"
                  : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                }`}
              style={`animation-delay: ${index * 0.1}s;`}
            >
              Semana {weekData.week}
            </button>
          ))}
        </div>

        {/* Calendar Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 mb-8 animate-slide-in-right">
          {weeks[selectedWeek.value - 1].days.map((day, index) => {
            const Icon = getIcon(day.type);
            return (
              <div
                key={day.day}
                onClick$={() => selectDay(index)}
                class={`relative group cursor-pointer transition-safe duration-500 transform hover:scale-105 hover:rotate-1 ${selectedDay.value === index ? "scale-105 animate-pulse-glow" : ""
                  }`}
                style={`animation-delay: ${index * 0.05}s;`}
              >
                <div class={`${day.color} text-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-safe duration-300 relative overflow-hidden group-hover:animate-shimmer`}>
                  {/* Animated background */}
                  <div class="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Day number */}
                  <div class="relative z-10 text-center">
                    <div class="text-2xl md:text-3xl font-bold mb-2">Día {day.day}</div>
                    <Icon class="w-6 h-8 md:w-8 h-8 mx-auto mb-3 transition-transform group-hover:scale-110" />
                    <h3 class="text-xs md:text-sm font-semibold leading-tight">{getDayTitle(day.day)}</h3>
                  </div>

                  {/* Selection indicator */}
                  {selectedDay.value === index && (
                    <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                      <LuCheck class="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Hover effect */}
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Day Details */}
        {selectedDay.value >= 0 && (
          <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in border border-gray-100">
            <div class="animate-slide-in-left">
              <div class="flex items-center gap-4 mb-6">
                <div class={`${weeks[selectedWeek.value - 1].days[selectedDay.value].color} p-3 rounded-full shadow-lg`}>
                  {(() => {
                    const Icon = getIcon(weeks[selectedWeek.value - 1].days[selectedDay.value].type);
                    return <Icon class="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 class="text-xl md:text-2xl font-bold text-gray-800">
                    Día {weeks[selectedWeek.value - 1].days[selectedDay.value].day}
                  </h3>
                  <p class="text-gray-600">
                    {getTypeDescription(weeks[selectedWeek.value - 1].days[selectedDay.value].type)}
                  </p>
                </div>
              </div>
              <h4 class="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                {getDayTitle(weeks[selectedWeek.value - 1].days[selectedDay.value].day)}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {getTypeDescriptionText(weeks[selectedWeek.value - 1].days[selectedDay.value].type)}
              </p>
            </div>
          </div>
        )}

        {/* Legend */}
        <div class="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 animate-fade-in">
          <h4 class="text-lg font-semibold text-gray-800 mb-6 text-center">Tipos de Entrenamiento</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { type: "strength", label: "Fuerza", color: "bg-purple-600", icon: LuDumbbell },
              { type: "cardio", label: "Cardio", color: "bg-red-500", icon: LuHeart },
              { type: "calm", label: "Calma", color: "bg-green-500", icon: LuFlower2 },
              { type: "free", label: "Libre", color: "bg-orange-500", icon: LuUsers },
              { type: "review", label: "Revisión", color: "bg-gray-600", icon: LuCheck },
              { type: "final", label: "Final", color: "bg-yellow-500", icon: LuZap }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.type} class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200" style={`animation-delay: ${index * 0.1}s;`}>
                  <div class={`${item.color} p-2 rounded-full shadow-md`}>
                    <Icon class="w-4 h-4 text-white" />
                  </div>
                  <span class="text-sm text-gray-700 font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}); 