"use client";

const integrations = [
  "Meta / WhatsApp",
  "Instagram DM",
  "Facebook Messenger",
  "Telegram",
  "Google Sheets",
  "Google Calendar",
  "Stripe",
  "PayPal",
  "Shopify",
  "WooCommerce",
  "Zapier",
  "Make (Integromat)",
  "n8n",
  "Twilio SMS",
  "Elementor",
];

export function IntegrationsMarquee() {
  return (
    <section className="relative py-16 border-y border-foreground/10 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="mb-5 text-center">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Conecta con tus herramientas favoritas
        </span>
      </div>

      <div className="flex gap-0">
        {/* Track 1 */}
        <div className="flex gap-8 marquee whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex gap-8 items-center">
              {integrations.map((name) => (
                <span
                  key={`${name}-${rep}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/10 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
