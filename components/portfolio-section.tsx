"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

export function PortfolioSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] section-padding text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00ffff]/10 blur-3xl"
      />

      <div className="container-wide relative mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel inverted>Our Work</SectionLabel>
          <h2 className="mb-8 max-w-xl text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] md:w-5/12">
            Projects launching soon
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Maximillian Labs is a newly established agency. We are currently
            partnering with our first clients and will showcase completed work
            here as projects go live.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[var(--brand-radius)] bg-white/5">
              <Image
                src={media.projectShowcase}
                alt="Maximillian Labs project showcase preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-white/75">
                We engineer for the mission — combining aesthetic precision with
                raw utility. Every build is bespoke, performance-led, and shaped
                around the goals of the businesses we serve.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-[#00ffff] px-8 text-sm text-[#00ffff] transition-colors hover:bg-[#00ffff]/10"
              >
                Be our first featured project
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
