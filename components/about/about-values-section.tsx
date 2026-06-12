"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { ValuesAccordion } from "@/components/values-accordion";

export function AboutValuesSection() {
  return (
    <section className="overflow-visible bg-white px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <FadeIn className="w-full lg:w-1/3">
            <SectionLabel>Agency Overview</SectionLabel>
            <h2 className="text-[clamp(2.25rem,4vw+1rem,4rem)] font-normal leading-[1.05] tracking-[-0.02em] text-black">
              Our Values
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full lg:mt-12 lg:w-7/12">
            <ValuesAccordion />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
