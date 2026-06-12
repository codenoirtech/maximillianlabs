"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

export function AboutIntro() {
  return (
    <section className="bg-[#f0f0f0] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto w-full text-center lg:w-3/4 xl:w-3/5">
          <FadeIn>
            <SectionLabel className="justify-center">
              Maximillian Labs
            </SectionLabel>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0a0a0a]">
              We engineer digital experiences that make businesses grow
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mx-auto mt-12 max-w-3xl text-pretty text-base leading-relaxed text-[#0a0a0a]/80 sm:text-lg sm:leading-8">
              Maximillian Labs is a newly established agency based in Nigeria,
              built on a mission to deliver world-class web design and
              development to international businesses. We partner with
              visionaries — from ambitious startups to established enterprises —
              to forge digital experiences that are as relentless in performance
              as they are arresting in design.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
