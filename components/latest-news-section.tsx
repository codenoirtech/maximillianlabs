"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const articles = [
  {
    title: "Insights launching soon",
    category: "Web Design",
    image: media.local.webFacts[0],
    href: "/contact-us",
  },
  {
    title: "Tips for growing your digital presence",
    category: "Coming Soon",
    image: media.local.webFacts[1],
    href: "/contact-us",
  },
  {
    title: "Building your first bespoke website",
    category: "Coming Soon",
    image: media.local.webFacts[2],
    href: "/contact-us",
  },
];

export function LatestNewsSection() {
  return (
    <section className="bg-[#f0f0f0] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>The Latest and Greatest</SectionLabel>
          <h2 className="mb-12 text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] lg:mb-16">
            Latest insights
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={0.08 * index}>
              <Link href={article.href} className="group block">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[var(--brand-radius)] bg-[#0a0a0a]/5">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-lg leading-snug text-[#0a0a0a] transition-colors group-hover:text-[#00ffff]">
                  {article.title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#0a0a0a]/50">
                  {article.category}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
