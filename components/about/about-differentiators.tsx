"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const differentiators = [
  {
    title: "Aesthetic Precision",
    description:
      "Every design decision is intentional. We craft arresting visual experiences that communicate your brand with clarity and confidence.",
  },
  {
    title: "Raw Utility",
    description:
      "Performance is non-negotiable. Our builds are engineered for speed, accessibility, and measurable business outcomes.",
  },
  {
    title: "Fully Bespoke",
    description:
      "No templates, no shortcuts. Everything we create is custom-designed and developed for your specific mission.",
  },
  {
    title: "Global Standards",
    description:
      "Based in Nigeria, trusted worldwide. We prove that geography is no barrier to world-class digital craftsmanship.",
  },
];

export function AboutDifferentiators() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-[calc(3rem+3vh)] text-white sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15vw] bottom-0 h-[55vw] w-[55vw] rounded-full bg-[#00ffff]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="w-full lg:ml-[8.333%] lg:w-3/4">
            <SectionLabel inverted>What Makes Us Different</SectionLabel>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]">
              Precision, quality, and results
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {differentiators.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.08 + index * 0.06}
              className="min-w-[78vw] shrink-0 snap-start sm:min-w-[340px] lg:min-w-0"
            >
              <div className="flex h-full flex-col gap-4 lg:gap-8">
                <span className="h-2 w-2 rounded-full bg-[#00ffff]" />
                <div>
                  <h3 className="mb-3 text-xl font-normal tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
