"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AwardBadge, awardBadges } from "@/components/award-badges";
import { Button } from "@/components/ui/button";

export function Hero() {
  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative w-full overflow-hidden pt-6 md:pt-10">
      <div className="container-wide relative z-20 mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-[#151717]"
          >
            <span className="text-brand-gradient">Award Winning</span>
            <br />
            <span style={{ fontWeight: 300 }}>Web Design Agency</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-8 max-w-[46rem] text-base leading-relaxed text-[#151717]/80"
          >
            We&apos;re Maximillian Labs an award-winning{" "}
            <strong className="font-normal text-[#151717]">
              London based web design agency
            </strong>
            , focused on creating bespoke and interactive{" "}
            <Link
              href="/about"
              className="font-normal text-[#151717] underline decoration-[#151717]/30 underline-offset-2"
            >
              web experiences
            </Link>{" "}
            for aspiring &amp; established businesses and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10"
          >
            <Button
              variant="outline"
              asChild
              className="h-11 rounded-[var(--brand-radius)] border border-[#151717] bg-transparent px-8 text-sm font-normal text-[#151717] shadow-none hover:bg-[#151717]/5 md:h-12 md:px-10"
            >
              <Link href="/about">Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="container-wide relative z-20 mx-auto mt-12 max-w-[1400px] md:mt-16">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {awardBadges.map((badge, index) => (
            <motion.div
              key={badge.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
            >
              <AwardBadge
                logo={badge.logo}
                content={badge.content}
                variant="light"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:left-10 lg:block"
        aria-label="Scroll down"
      >
        <span className="block origin-center -rotate-90 whitespace-nowrap text-[11px] uppercase tracking-[0.23em] text-[#9d9d9b]">
          Scroll Down
        </span>
      </button>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full max-w-[250px] -translate-x-1/2 opacity-[0.04]"
      >
        <svg viewBox="0 0 250 38" className="h-auto w-full fill-[#151717]">
          <text x="0" y="30" fontSize="28" fontFamily="sans-serif">
            be creative
          </text>
        </svg>
      </div>
    </section>
  );
}
