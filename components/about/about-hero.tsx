"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import office from "@/public/images/office.jpg";

export function AboutHero() {
  return (
    <section className="bg-black px-6 pb-16 pt-8 text-white sm:px-10 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-[clamp(3.25rem,9vw,6.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
            be more creative
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg">
            We&apos;re{" "}
            <span className="font-black">Maximillian Labs</span> an award
            winning web design agency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[1.75rem] sm:mt-12 sm:rounded-[2rem] lg:mt-14 lg:rounded-[2.25rem]"
        >
          <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[2.2/1]">
            <Image
              src={office}
              alt="Maximillian Labs team in the studio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8"
          >
            <Link
              href="/contact-us"
              className="flex h-24 w-24 items-center justify-center rounded-full bg-[#c6f135] text-center text-sm font-black leading-tight text-black shadow-2xl transition-transform hover:scale-105 sm:h-28 sm:w-28"
            >
              Speak To Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
