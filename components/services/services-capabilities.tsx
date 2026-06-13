"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const capabilities = [
  {
    title: "Discovery first",
    description:
      "Every engagement begins with research — audience, competitors, and goals — so the solution is shaped by evidence, not assumption.",
  },
  {
    title: "Design systems",
    description:
      "We build coherent visual languages that scale across web, brand, and campaign touchpoints without losing precision.",
  },
  {
    title: "Performance core",
    description:
      "Speed, accessibility, and technical SEO are embedded from the first wireframe, not bolted on before launch.",
  },
  {
    title: "Global delivery",
    description:
      "Nigeria-based, worldwide-ready. We collaborate across time zones with the rigour clients expect from top-tier studios.",
  },
];

export function ServicesCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] section-padding text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#00ffff12 1px, transparent 1px), linear-gradient(90deg, #00ffff12 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-wide relative mx-auto max-w-[1400px]">
        <FadeIn className="max-w-2xl">
          <SectionLabel inverted>How we work</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em]">
            One philosophy across every service
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={0.06 + index * 0.05}>
              <article className="h-full rounded-[var(--brand-radius)] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#00ffff]/35">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#00ffff]/40 text-xs text-[#00ffff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <Link
            href="/contact-us"
            className="inline-flex h-12 items-center rounded-[var(--brand-radius)] bg-[#00ffff] px-8 text-sm text-[#0a0a0a] transition-transform hover:scale-[1.02]"
          >
            Start a project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
