"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProductHoverCardProps = {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
  index?: number;
  /** Border when hovered / focused */
  activeBorderClass?: string;
  /** Primary glow on hover (full Tailwind classes) */
  glowPrimaryClassName?: string;
  /** Secondary glow (optional, e.g. green) */
  glowSecondaryClassName?: string;
  /** Icon container background + text */
  iconWrapClassName?: string;
};

/**
 * Card with short copy + expanded detail on hover/focus-within.
 * Respects prefers-reduced-motion for lift animation.
 */
export function ProductHoverCard({
  icon: Icon,
  title,
  short,
  detail,
  index = 0,
  activeBorderClass = "border-[var(--accent-meta,#0668E1)]/30",
  glowPrimaryClassName = "bg-[var(--accent-meta,#0668E1)]/0 group-hover:bg-[var(--accent-meta,#0668E1)]/12",
  glowSecondaryClassName = "bg-[#25D366]/0 group-hover:bg-[#25D366]/12",
  iconWrapClassName = "bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]",
}: ProductHoverCardProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={reduceMotion ? {} : { y: -7 }}
      className={cn(
        "group relative min-h-[250px] overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-[0_18px_60px_-35px_rgba(15,23,42,0.35)] transition-colors outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[var(--accent-meta,#0668E1)]/40",
        active && activeBorderClass,
      )}
    >
      <div
        className={cn(
          "absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-colors",
          glowPrimaryClassName,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute -bottom-10 -left-10 h-28 w-28 rounded-full blur-2xl transition-colors",
          glowSecondaryClassName,
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl",
          iconWrapClassName,
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="relative mt-8 text-lg font-semibold text-foreground">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{short}</p>
      <motion.div
        className="relative mt-5 rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground"
        initial={false}
        animate={
          reduceMotion ? { opacity: 1, y: 0 } : active ? { opacity: 1, y: 0 } : { opacity: 0.72, y: 8 }
        }
        transition={{ duration: 0.22 }}
      >
        {detail}
      </motion.div>
    </motion.article>
  );
}
