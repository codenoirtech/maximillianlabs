"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

export function AboutIntro() {
  return (
    <section className="bg-[#fafafa] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto w-full text-center lg:w-3/4 xl:w-3/5">
          <FadeIn>
            <SectionLabel className="justify-center">
              Maximillian Labs
            </SectionLabel>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.15] tracking-[-0.02em] text-black">
              We design bespoke &amp; engaging websites for businesses and
              enterprises worldwide
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mx-auto mt-12 max-w-3xl text-pretty text-base leading-relaxed text-black/80 sm:text-lg sm:leading-8">
              Founded in 2013, the company has evolved from a small boutique web
              design studio into a thriving web design agency, designing &amp;
              developing over 500 bespoke websites to date. We are an established,
              experienced, and trusted team with over a decade of experience in
              providing bespoke web solutions.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
