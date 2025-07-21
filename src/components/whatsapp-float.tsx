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
        <svg class="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path d="M23.472 19.339c-.355-.177-2.096-1.034-2.42-1.153-.324-.119-.56-.177-.797.177-.237.355-.914 1.153-1.122 1.39-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.857-1.763-1.056-.943-1.77-2.104-1.978-2.459-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.62.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.62-.089-.177-.797-1.919-1.091-2.626-.287-.692-.579-.597-.797-.608l-.68-.012c-.237 0-.62.089-.944.444-.324.355-1.24 1.211-1.24 2.949 0 1.738 1.268 3.417 1.445 3.654.178.237 2.5 3.82 6.062 5.213.849.366 1.51.584 2.026.747.851.271 1.627.233 2.241.142.684-.102 2.096-.857 2.393-1.687.296-.83.296-1.547.207-1.687-.089-.142-.325-.225-.68-.402z" fill="#fff"/>
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