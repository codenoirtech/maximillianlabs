"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

type ProcessStep = {
  label: string;
  content: string;
};

type ProcessPhase = {
  id: string;
  number: string;
  title: string;
  image: string;
  steps: ProcessStep[];
};

const phases: ProcessPhase[] = [
  {
    id: "planning",
    number: "Phase 1 / 4",
    title: "Planning",
    image: media.webFacts[0],
    steps: [
      {
        label: "Discovery",
        content:
          "We gather key data, understand your goals, and collaborate closely to develop a detailed project plan — covering audience, competitors, and design direction.",
      },
      {
        label: "Wireframing",
        content:
          "Detailed desktop and mobile wireframes define site structure and user flow, shared for your feedback before design begins.",
      },
      {
        label: "Content",
        content:
          "We plan content strategy and structure to ensure your messaging hits the mark from the start.",
      },
    ],
  },
  {
    id: "design",
    number: "Phase 2 / 4",
    title: "Design",
    image: media.mockups.site,
    steps: [
      {
        label: "Concepts",
        content:
          "We present tailored design concepts for your approval, iterating until the visual direction is exactly right.",
      },
      {
        label: "Site Design",
        content:
          "Once approved, we extend the cohesive style across all pages, ensuring consistency and flow throughout.",
      },
      {
        label: "Interactivity",
        content:
          "Custom interactive visuals and animations bring the site to life and keep users engaged.",
      },
    ],
  },
  {
    id: "development",
    number: "Phase 3 / 4",
    title: "Development",
    image: media.mockups.wayfinder,
    steps: [
      {
        label: "Build",
        content:
          "We develop your site with clean, modern code — responsive, accessible, and optimised for performance.",
      },
      {
        label: "Functionality",
        content:
          "Content integration, data migration, and interactive features are implemented and tested thoroughly.",
      },
      {
        label: "CMS",
        content:
          "A manageable content system is integrated so your team can update the site with ease after launch.",
      },
    ],
  },
  {
    id: "testing",
    number: "Phase 4 / 4",
    title: "Testing & Launch",
    image: media.projectShowcase,
    steps: [
      {
        label: "QA Testing",
        content:
          "Compatibility testing across browsers and devices covers speed, content accuracy, accessibility, and functionality.",
      },
      {
        label: "Compliance",
        content:
          "We review privacy, cookie policies, and accessibility guidelines to ensure your site meets regulatory requirements.",
      },
      {
        label: "Launch",
        content:
          "Final SEO setup, performance optimisation, and a smooth go-live — with ongoing support available.",
      },
    ],
  },
];

function ProcessNavToggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li className="relative cursor-pointer pb-2">
      <button
        type="button"
        onClick={onClick}
        className={`relative text-sm transition-colors ${
          active ? "text-[#0a0a0a]" : "text-[#0a0a0a]/40"
        }`}
      >
        {label}
        {active ? (
          <span
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#00ffff]"
          />
        ) : null}
      </button>
    </li>
  );
}

export function ProcessSection() {
  const [stepIndices, setStepIndices] = useState<Record<string, number>>(
    Object.fromEntries(phases.map((phase) => [phase.id, 0])),
  );

  function setStepIndex(phaseId: string, index: number) {
    setStepIndices((current) => ({ ...current, [phaseId]: index }));
  }

  return (
    <section className="bg-[#f0f0f0] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16">
          <SectionLabel>What We Do Best</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a]">
            Our Process
          </h2>
        </div>

        <div className="space-y-16">
          {phases.map((phase) => {
            const stepIndex = stepIndices[phase.id] ?? 0;

            return (
              <div
                key={phase.id}
                className="grid gap-10 border-t border-[#0a0a0a]/10 pt-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:items-center"
              >
                <div>
                  <p className="mb-2 text-base text-[#0a0a0a]/50">{phase.number}</p>
                  <h3 className="mb-8 flex items-center gap-4 text-3xl tracking-tight text-[#0a0a0a] md:text-4xl">
                    <span
                      aria-hidden="true"
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00ffff]"
                    />
                    {phase.title}
                  </h3>

                  <ul className="flex flex-wrap items-start gap-5">
                    {phase.steps.map((step, index) => (
                      <ProcessNavToggle
                        key={step.label}
                        label={step.label}
                        active={stepIndex === index}
                        onClick={() => setStepIndex(phase.id, index)}
                      />
                    ))}
                  </ul>

                  <p className="mt-10 max-w-xl text-base leading-relaxed text-[#0a0a0a]/75 md:text-lg md:leading-8">
                    {phase.steps[stepIndex]?.content}
                  </p>
                </div>

                <figure className="relative aspect-[4/3] overflow-hidden rounded-[var(--brand-radius)] bg-[#0a0a0a]/5">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
