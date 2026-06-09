"use client";

import { FadeIn } from "@/components/fade-in";

export function AboutIntro() {
  return (
    <section className="bg-[#f4f4f5] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <div className="mb-10 flex items-center justify-center gap-2 sm:mb-12">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e63946]" />
            <span className="text-sm font-normal text-zinc-600">
              Maximillian Labs
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.08] tracking-[-0.02em] text-black">
            We design bespoke &amp; engaging websites for businesses and
            enterprises worldwide
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-black/85 sm:mt-10 sm:text-lg sm:leading-8">
            Founded in 2013, the company has evolved from a small boutique web
            design studio into a thriving web design agency, designing &amp;
            developing over 500 bespoke websites to date. We are an established,
            experienced, and trusted team with over a decade of experience in
            providing bespoke web solutions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
