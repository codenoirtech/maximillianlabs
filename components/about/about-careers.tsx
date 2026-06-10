"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const positions = [
  {
    title: "Junior Front-End Developer",
    location: "Semi Remote, London",
    salary: "Based on Experience",
    overview:
      "Bring designs to life with a focus on user experience, interactivity, and animation. A strong eye for design, creativity, and a willingness to learn are essential.",
    tasks: [
      "Collaborate with designers and developers to build responsive web experiences",
      "Implement interactive elements and animations using modern libraries",
      "Build and maintain websites with HTML, CSS, and JavaScript",
      "Test and troubleshoot across browsers and devices",
    ],
  },
  {
    title: "Copywriter (Part/Full-Time)",
    location: "Remote",
    salary: "Based on Experience",
    overview:
      "Produce engaging and effective content for websites, marketing materials, and digital campaigns across a variety of brands and industries.",
    tasks: [
      "Write clear, engaging, and SEO-optimised website copy and articles",
      "Collaborate with designers, developers, and clients on brand tone",
      "Create compelling headlines, CTAs, and microcopy",
      "Proofread and edit for consistency and polish",
    ],
  },
];

export function AboutCareers() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#151717] px-6 py-[calc(3rem+3vh)] text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel inverted>Open Positions</SectionLabel>
          <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]">
            Explore Exciting Career Opportunities with Us
          </h2>
        </FadeIn>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10 lg:mt-16">
          {positions.map((position, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={position.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-normal sm:text-2xl">{position.title}</h3>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0" strokeWidth={1.5} />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 pb-8 text-white/75">
                        <div>
                          <p className="mb-2 text-sm tracking-wide text-white/50 uppercase">
                            Overview
                          </p>
                          <p className="leading-relaxed">{position.overview}</p>
                        </div>
                        <div>
                          <p className="mb-2 text-sm tracking-wide text-white/50 uppercase">
                            Key Tasks
                          </p>
                          <ul className="space-y-2">
                            {position.tasks.map((task) => (
                              <li key={task} className="flex gap-3 text-sm leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fe0168]" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm text-white/60">
                          <span>Location: {position.location}</span>
                          <span>Salary: {position.salary}</span>
                        </div>
                        <Link
                          href="/contact-us"
                          className="inline-flex rounded-md border border-white px-6 py-2.5 text-sm font-normal transition-colors hover:bg-white/10"
                        >
                          Email us
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
