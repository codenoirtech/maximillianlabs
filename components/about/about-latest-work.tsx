"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function AboutLatestWork() {
  return (
    <section className="bg-[#fafafa] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px] text-center">
        <FadeIn>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em] text-black">
            See Our Latest Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
            Explore how we&apos;ve transformed ideas into impactful designs.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-md border border-black px-8 py-3 text-sm font-normal transition-colors hover:bg-black/5"
          >
            View Our Work
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
