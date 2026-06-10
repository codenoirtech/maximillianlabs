"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const mapPoints = [
  { top: "41%", left: "20%" },
  { top: "37%", left: "26%" },
  { top: "35%", left: "48%" },
  { top: "52%", left: "72%" },
  { top: "58%", left: "18%" },
  { top: "44%", left: "84%" },
];

export function AboutInternational() {
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
            <SectionLabel inverted>International Client Base</SectionLabel>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]">
              Our experience spans a wide range of industry sectors with a
              worldwide client base.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="relative mx-auto mt-12 max-w-5xl lg:mt-16">
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-white/10 bg-[#0d0f0f]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 40%, #fe0168 0%, transparent 35%), radial-gradient(circle at 70% 55%, #23d5ab 0%, transparent 30%)",
              }}
            />
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 h-full w-full opacity-20"
              aria-hidden="true"
            >
              <path
                d="M120,220 C180,180 260,170 340,190 C420,210 500,240 580,230 C660,220 740,200 820,210 C880,215 920,225 940,235"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M150,300 C250,280 350,320 450,300 C550,280 650,310 750,295 C820,285 880,300 900,310"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>

            {mapPoints.map((point, index) => (
              <span
                key={index}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fe0168] shadow-[0_0_0_6px_rgba(254,1,104,0.25)]"
                style={{ top: point.top, left: point.left }}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
