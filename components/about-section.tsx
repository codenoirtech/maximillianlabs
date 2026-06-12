"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/brand";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#f0f0f0] pb-[max(3rem,9vw)] pt-[max(2rem,5vw)]"
    >
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-24">
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative aspect-[7/8] overflow-hidden rounded-[var(--brand-radius)]">
                <Image
                  src={media.about.grid[0]}
                  alt="Maximillian Labs creative work"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </figure>
              <figure className="relative mt-8 aspect-[7/8] overflow-hidden rounded-[var(--brand-radius)]">
                <Image
                  src={media.mockups.site}
                  alt="Website design mockup"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </figure>
              <figure className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[var(--brand-radius)] bg-[#0a0a0a]">
                <Image
                  src={media.mockups.wayfinder}
                  alt="Digital experience mockup"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </figure>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="mb-4 inline-flex items-center gap-3 text-[clamp(0.85rem,0.7rem+0.35vw,1rem)] capitalize tracking-[0.2em] text-[#0a0a0a]/50">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#00ffff]" />
              <span>Nigerian Web Design Agency</span>
            </div>

            <h2 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] leading-[1.3] tracking-[-0.02em] text-[#0a0a0a]">
              Maximillian Labs
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#0a0a0a]/80 sm:w-11/12">
              <p>
                We operate at the intersection of aesthetic precision and raw
                utility — partnering with startups and established enterprises to
                build digital experiences engineered for growth.
              </p>

              <p>
                From custom web design and development to branding and ongoing
                maintenance, we take care of every detail to create solutions
                tailored to your mission. Geography is no barrier to excellence.
              </p>

              <p>
                We don&apos;t just create for the eye; we engineer for the mission —
                delivering world-class work from Nigeria to the world.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                asChild
                className="h-11 rounded-[var(--brand-radius)] border border-[#0a0a0a] bg-[#f0f0f0] px-8 text-sm font-normal text-[#0a0a0a] shadow-none hover:bg-[#0a0a0a]/5 md:h-12"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
