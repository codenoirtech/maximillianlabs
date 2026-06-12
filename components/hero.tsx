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
            className="text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-[#0a0a0a]"
          >
            <span className="text-brand-gradient">Digital Legacies</span>
            <br />
            <span style={{ fontWeight: 300 }}>Web Design Agency</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-8 max-w-[46rem] text-base leading-relaxed text-[#0a0a0a]/80"
          >
            We&apos;re Maximillian Labs — a Nigeria-based web design agency,
            focused on creating bespoke and interactive{" "}
            <Link
              href="/about"
              className="font-normal text-[#0a0a0a] underline decoration-[#00ffff]/50 underline-offset-2"
            >
              web experiences
            </Link>{" "}
            for aspiring &amp; established businesses worldwide.
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
              className="h-11 rounded-[var(--brand-radius)] border border-[#0a0a0a] bg-transparent px-8 text-sm font-normal text-[#0a0a0a] shadow-none hover:bg-[#0a0a0a]/5 md:h-12 md:px-10"
            >
              <Link href="/contact-us">Start A Project</Link>
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
    </section>
  );
}
