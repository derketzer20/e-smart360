"use client";

import { SiApplepay, SiGooglepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si";

const brands = [
  { id: "visa", label: "Visa", Icon: SiVisa },
  { id: "mc", label: "Mastercard", Icon: SiMastercard },
  { id: "paypal", label: "PayPal", Icon: SiPaypal },
  { id: "apple", label: "Apple Pay", Icon: SiApplepay },
  { id: "google", label: "Google Pay", Icon: SiGooglepay },
] as const;

export function PricingTrustCarousel({
  locale,
  eyebrow,
  title,
}: {
  locale: "es" | "en";
  eyebrow: string;
  title: string;
}) {
  const track = [...brands, ...brands, ...brands];

  return (
    <section
      className="border-y border-border/60 bg-gradient-to-b from-muted/25 via-background to-muted/20 py-14"
      aria-label={locale === "en" ? "Trusted payment methods" : "Métodos de pago de confianza"}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta)]">{eyebrow}</p>
        <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">{title}</h2>
      </div>
      <div className="relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="trust-marquee-mask pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="trust-marquee-mask pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="trust-marquee-mask overflow-hidden py-2">
          <div className="trust-marquee-track items-center gap-12 px-8 opacity-90">
            {track.map((b, i) => (
              <div
                key={`${b.id}-${i}`}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-2xl border border-border/70 bg-card/90 px-5 shadow-[var(--shadow-card-sm)]"
              >
                <b.Icon className="h-7 w-auto max-w-[88px] text-foreground/80" aria-hidden title={b.label} />
                <span className="sr-only">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
