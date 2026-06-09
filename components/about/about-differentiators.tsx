"use client";

import { FadeIn } from "@/components/fade-in";

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
];

export function AboutDifferentiators() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#4a1030]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#2a1035]/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e63946]" />
            <span className="text-xs font-normal tracking-wide text-zinc-400 uppercase">
              What Makes Us Different
            </span>
          </div>
          <h2 className="max-w-3xl text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.1] tracking-[-0.02em]">
            What makes us a leading web design agency
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-10 lg:gap-14">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={0.1 + index * 0.08}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e63946]" />
                  <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
