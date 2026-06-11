"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const differentiators = [
  {
    title: "Highly Rated",
    description:
      "No.1 UK & Europe ranked web agency on Clutch out of 70,000 other agencies. We're proud to be independently one of the best at what we do.",
  },
  {
    title: "Fully Accredited",
    description:
      "We hold quality standard certifications, including ISO and Google Partner, we're a partner you can trust.",
  },
  {
    title: "Fully Bespoke",
    description:
      "Everything we do is designed and developed by our team, unique to your requirements – we don't do templates or boring designs.",
  },
  {
    title: "Guaranteed Service",
    description:
      "Our service is fully guaranteed and backed by a warranty, ensuring complete support for every project.",
  },
];

export function AboutDifferentiators() {
  return (
    <section className="relative overflow-hidden bg-[#151717] px-6 py-[calc(3rem+3vh)] text-white sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20vw] top-0 h-[70vw] w-[70vw] rounded-full bg-[#fe802d]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15vw] bottom-0 h-[55vw] w-[55vw] rounded-full bg-[#ac0bd9]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="w-full lg:ml-[8.333%] lg:w-3/4">
            <SectionLabel inverted>What Makes Us Different</SectionLabel>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]">
              What makes us a leading web design agency
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
                <span className="h-2 w-2 rounded-full bg-[#fe0168]" />
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
