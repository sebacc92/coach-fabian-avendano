import { component$, useSignal } from "@builder.io/qwik";

export const WhatsappFloat = component$(() => {
  const showTooltip = useSignal(false);
  return (
    <div
      class="fixed z-50 bottom-6 left-6 flex flex-col items-center"
      onMouseEnter$={() => (showTooltip.value = true)}
      onMouseLeave$={() => (showTooltip.value = false)}
      onFocus$={() => (showTooltip.value = true)}
      onBlur$={() => (showTooltip.value = false)}
    >
      <a
        href="https://wa.me/5491125358621?text=%C2%A1Hola%20Fabi%C3%A1n!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tu%20programa%20de%20entrenamiento.%20%C2%BFPodr%C3%ADas%20contarme%20c%C3%B3mo%20funciona%20el%20reto%20de%2028%20d%C3%ADas?"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Contact"
        class="whatsapp-float-btn group focus:outline-none"
      >
        {/* SVG oficial de WhatsApp */}
        <svg class="h-7 w-7" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.205A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.21-.624-5.96-1.803l-.426-.27-4.646 1.31 1.32-4.522-.277-.438A9.93 9.93 0 0 1 6.083 15c0-5.478 4.456-9.917 9.917-9.917 5.46 0 9.917 4.439 9.917 9.917 0 5.478-4.457 9.917-9.917 9.917zm5.44-7.44c-.298-.149-1.76-.867-2.033-.967-.273-.099-.472-.149-.67.15-.198.298-.767.967-.94 1.165-.173.199-.347.224-.645.075-.298-.149-1.259-.464-2.4-1.478-.887-.791-1.487-1.767-1.663-2.065-.173-.298-.018-.459.13-.608.134-.134.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.58-.487-.501-.67-.511l-.571-.011c-.198 0-.52.075-.792.373-.273.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.199 2.099 3.205 5.086 4.369.711.306 1.264.489 1.697.626.713.227 1.362.195 1.874.118.572-.085 1.76-.719 2.008-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
      <span
        class={`whatsapp-tooltip transition-opacity duration-200 text-xs px-2 py-1 rounded bg-gray-900 text-white mt-2 shadow-lg ${showTooltip.value ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        role="tooltip"
      >
        ¡Chatea por WhatsApp!
      </span>
      <style>{`
        .whatsapp-float-btn {
          background: #25D366;
          color: white;
          border-radius: 9999px;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 4px 0 rgba(0,0,0,0.15);
          border: 3px solid #fff;
          padding: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .whatsapp-float-btn:hover, .whatsapp-float-btn:focus {
          background: #1ebe57;
          transform: scale(1.12);
          animation: whatsapp-pulse 0.5s;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.22), 0 3px 8px 0 rgba(0,0,0,0.18);
        }
        @keyframes whatsapp-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.18); }
          100% { transform: scale(1.12); }
        }
        .whatsapp-tooltip {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          white-space: nowrap;
          z-index: 60;
        }
      `}</style>
    </div>
  );
}); 