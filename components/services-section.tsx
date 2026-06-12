"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

type Service = {
  id: string;
  title: string[];
  cta: string;
  description: string[];
  features: { title: string; paragraphs: string[] }[];
  image: string;
};

const services: Service[] = [
  {
    id: "web-design",
    title: ["Web Design", "& Development"],
    cta: "Web Design & Development",
    description: [
      "Custom websites that are responsive, performance-led, and built to drive results for your business.",
      "Every project is fully bespoke — no templates, no shortcuts — designed and developed to reflect your brand and serve your goals.",
    ],
    features: [
      {
        title: "Fully Bespoke Builds",
        paragraphs: [
          "We design and develop from scratch, creating unique digital experiences aligned with your brand identity and business objectives.",
        ],
      },
      {
        title: "Performance First",
        paragraphs: [
          "Fast load times, clean code, and responsive layouts ensure your site works flawlessly across every device.",
        ],
      },
      {
        title: "SEO Ready",
        paragraphs: [
          "Our builds are structured for search visibility from day one, with semantic markup and optimised performance.",
        ],
      },
    ],
    image: media.services,
  },
  {
    id: "web-rebuild",
    title: ["Web", "Rebuild"],
    cta: "Web Rebuild",
    description: [
      "Give your website a fresh revamp with a modern look, improved performance, and a structure built for growth.",
      "We audit what exists, identify what holds you back, and rebuild with clarity and purpose.",
    ],
    features: [
      {
        title: "Modern Redesign",
        paragraphs: [
          "Updated visual identity, improved user flows, and a contemporary aesthetic that reflects where your brand is headed.",
        ],
      },
      {
        title: "Improved Structure",
        paragraphs: [
          "We reorganise content architecture and navigation so visitors find what they need faster.",
        ],
      },
    ],
    image: media.mockups.site,
  },
  {
    id: "maintenance",
    title: ["Website", "Maintenance"],
    cta: "Website Maintenance",
    description: [
      "Reliable upkeep to keep your website secure, up to date, and running smoothly — so you can focus on your business.",
    ],
    features: [
      {
        title: "Ongoing Support",
        paragraphs: [
          "Regular updates, security patches, and performance monitoring to keep your site in peak condition.",
        ],
      },
      {
        title: "Content Updates",
        paragraphs: [
          "Quick turnaround on content changes, new pages, and feature additions as your business evolves.",
        ],
      },
    ],
    image: media.tips,
  },
];

function FeatureAccordion({
  features,
}: {
  features: { title: string; paragraphs: string[] }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="mt-12 divide-y divide-[#0a0a0a]/10 border-t border-[#0a0a0a]/10">
      {features.map((feature, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={feature.title}>
            <dt>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <h4 className="text-lg text-[#0a0a0a]">{feature.title}</h4>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                )}
              </button>
            </dt>
            {isOpen ? (
              <dd className="pb-5">
                <div className="space-y-4 text-sm leading-relaxed text-[#0a0a0a]/75">
                  {feature.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </dd>
            ) : null}
          </div>
        );
      })}
    </dl>
  );
}

function ServiceBlock({ service }: { service: Service }) {
  return (
    <div
      data-service-id={service.id}
      className="relative flex flex-col gap-10 border-t border-[#0a0a0a]/10 py-16 first:border-t-0 first:pt-0 lg:flex-row lg:justify-between lg:gap-12"
    >
      <div className="w-full lg:w-2/5">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.03em] text-[#0a0a0a]">
          {service.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[7/5] overflow-hidden rounded-[var(--brand-radius)] bg-[#0a0a0a]/5">
          <Image
            src={service.image}
            alt={service.cta}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-[#0a0a0a]/80">
          {service.description.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="mt-6 inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-[#0a0a0a] px-6 text-sm text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a]/5"
        >
          {service.cta}
        </Link>

        <FeatureAccordion features={service.features} />
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f0f0f0] pt-0 pb-[max(3rem,9vw)]">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a]">
            What we build
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((service) => (
            <ServiceBlock key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
