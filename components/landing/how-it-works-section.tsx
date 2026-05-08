"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Conecta tu cuenta",
    description: "Vincula cuentas de WhatsApp Business (WABA) de manera programática en segundos.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/account/connect' \\
-d 'apiToken=TU_API_KEY' \\
-d 'user_id=123' \\
-d 'whatsapp_business_account_id=WABA_ID'`,
  },
  {
    number: "II",
    title: "Envía Mensajes y Medios",
    description: "Automatiza el envío de texto, imágenes, documentos y plantillas transaccionales.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/send/file' \\
-d 'apiToken=TU_API_KEY' \\
-d 'phone_number_id=PHONE_ID' \\
-d 'phone_number=521812345678' \\
-d 'media_url=https://tu-web.com/factura.pdf'`,
  },
  {
    number: "III",
    title: "Gestiona Suscriptores",
    description: "Crea, actualiza y asigna etiquetas o secuencias a tus contactos desde tu CRM.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/subscriber/create' \\
-d 'apiToken=TU_API_KEY' \\
-d 'phoneNumberID=PHONE_ID' \\
-d 'name=Juan Perez' \\
-d 'phoneNumber=521812345678'`,
  },
  {
    number: "IV",
    title: "Sincroniza Conversaciones",
    description: "Extrae el historial de chat para respaldarlo en expedientes médicos o sistemas de soporte.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/get/conversation' \\
-d 'apiToken=TU_API_KEY' \\
-d 'phone_number_id=PHONE_ID' \\
-d 'phone_number=521812345678' \\
-d 'limit=20'`,
  },
  {
    number: "V",
    title: "Catálogos y Pedidos",
    description: "Conecta tu e-commerce. Obtén la lista de pedidos y cambia su estado de envío.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/catalog/order/status-change' \\
-d 'apiToken=TU_API_KEY' \\
-d 'order_unique_id=ORDER_123' \\
-d 'cart_status=Shipped'`,
  },
  {
    number: "VI",
    title: "Dispara Flujos de Bot",
    description: "Activa automatizaciones complejas y menús interactivos mediante eventos externos.",
    code: `curl -X POST 'https://app.e-smart360.com/api/v1/whatsapp/trigger-bot' \\
-d 'apiToken=TU_API_KEY' \\
-d 'phone_number_id=PHONE_ID' \\
-d 'bot_flow_unique_id=FLOW_ID' \\
-d 'phone_number=521812345678'`,
  },
];

const STEP_DURATION = 5000;

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance through all 6 steps cyclically
  useEffect(() => {
    const total = steps.length;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % total);
      setProgressKey((prev) => prev + 1);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgressKey((prev) => prev + 1);
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            API
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Una API robusta.
            <br />
            <span className="text-background/50">Posibilidades infinitas.</span>
          </h2>
          <p className="mt-6 text-lg text-background/60 max-w-2xl">
            Construye soluciones a la medida. Conecta tu CRM, e-commerce o software propietario con nuestra API nativa.
          </p>
        </div>

        {/* Main content: flex on large screens so the right column can self-center */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Steps — left column */}
          <div className="flex-1 space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => handleStepClick(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30 w-12 shrink-0">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">{step.description}</p>

                    {/* Progress bar — re-mounts via key when step changes */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div
                          key={progressKey}
                          className="h-full bg-background"
                          style={{ animation: `progressFill ${STEP_DURATION}ms linear forwards` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code terminal — right column, vertically centered */}
          <div className="flex-1 flex items-center lg:sticky lg:top-0 lg:self-center lg:h-fit">
            <div className="w-full border border-background/10 overflow-hidden">
              {/* Window chrome */}
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                </div>
                <span className="text-xs font-mono text-background/40">e-smart360.sh</span>
              </div>

              {/* Code content — key forces re-render and re-animation on step change */}
              <div className="p-8 font-mono text-sm min-h-[280px]">
                <pre key={activeStep} className="text-background/70">
                  {steps[activeStep].code.split("\n").map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="leading-loose code-line-reveal"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="text-background/20 select-none w-8 inline-block">
                        {lineIndex + 1}
                      </span>
                      <span className="inline-flex flex-wrap">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={charIndex}
                            className="code-char-reveal"
                            style={{ animationDelay: `${lineIndex * 80 + charIndex * 12}ms` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Status bar */}
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-background/40">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(6px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
