"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const features = [
  {
    id: "precision",
    title: "Aesthetic Precision",
    description:
      "Every pixel is intentional. We craft arresting designs that capture attention and communicate your brand with clarity and confidence.",
    image: media.webFacts[0],
  },
  {
    id: "utility",
    title: "Raw Utility",
    description:
      "Beautiful means nothing without performance. Our builds are engineered for speed, accessibility, and measurable business results.",
    image: media.webFacts[1],
  },
  {
    id: "bespoke",
    title: "Fully Bespoke",
    description:
      "No templates, no generic solutions. Everything we create is custom-designed and developed for your specific mission and audience.",
    image: media.webFacts[2],
  },
  {
    id: "global",
    title: "Global Reach",
    description:
      "Based in Nigeria, trusted worldwide. We prove that geography is no barrier to world-class web design and development.",
    image: media.webFacts[3],
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#f0f0f0] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16 lg:w-10/12">
          <SectionLabel>Why Maximillian Labs</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a]">
            What makes us different?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_0.25rem_3.5rem_rgba(0,0,0,0.06)] sm:flex-row-reverse"
            >
              <div className="flex w-full items-center p-6 sm:w-1/2 sm:p-8">
                <div>
                  <h3 className="text-2xl tracking-tight text-[#0a0a0a] md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#0a0a0a]/75 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square w-full sm:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
