"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

type AwardGroup = {
  company: string;
  summary: string;
  entries: { award: string; project: string; year: string }[];
};

const awardGroups: AwardGroup[] = [
  {
    company: "Clutch",
    summary: "Industry leading awards",
    entries: [
      { award: "Top Web Design Company", project: "—", year: "2024" },
      { award: "Top WordPress Designers", project: "—", year: "2024" },
      { award: "Clutch Champion", project: "—", year: "2024" },
      { award: "Clutch Global Leader", project: "—", year: "2024" },
      { award: "Top Full Service Digital Company", project: "—", year: "2023" },
      { award: "Top Digital Design Company", project: "—", year: "2023" },
    ],
  },
  {
    company: "Awwwards",
    summary: "Honourable mentions",
    entries: [
      { award: "Honorable Mention", project: "NATO Innovation Fund", year: "2024" },
      { award: "Honorable Mention", project: "J Stimler", year: "2023" },
      { award: "Honorable Mention", project: "4media group", year: "2023" },
      { award: "Mobile Excellence Award", project: "Quonota", year: "2021" },
    ],
  },
  {
    company: "CSS Design Awards",
    summary: "Special Kudos",
    entries: [
      { award: "Special Kudos", project: "NATO Innovation Fund", year: "2024" },
      { award: "Special Kudos", project: "Fairvue Partners", year: "2024" },
      { award: "Special Kudos", project: "Gibraltar Nature Reserve", year: "2023" },
      { award: "Special Kudos", project: "First Jets", year: "2022" },
    ],
  },
];

export function AboutAwards() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#fafafa] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>Our Awards &amp; Recognitions</SectionLabel>
          <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em] text-black">
            Our Latest Website Design Awards
          </h2>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-5xl lg:mt-16">
          <div className="hidden border-b border-black/10 pb-3 text-sm text-black/50 sm:grid sm:grid-cols-[1.2fr_1.5fr_1fr_0.5fr] sm:gap-4">
            <span>Company</span>
            <span>Award</span>
            <span>Project</span>
            <span>Year</span>
          </div>

          <div className="mt-2 divide-y divide-black/10 border-t border-black/10">
            {awardGroups.map((group, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={group.company}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left sm:grid sm:grid-cols-[1.2fr_1.5fr_1fr_0.5fr] sm:items-center"
                    aria-expanded={isOpen}
                  >
                    <span className="font-normal text-black">{group.company}</span>
                    <span className="text-black/70">{group.summary}</span>
                    <span className="hidden sm:block" />
                    <span className="flex justify-end">
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      )}
                    </span>
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
                        <div className="space-y-3 pb-5">
                          {group.entries.map((entry) => (
                            <div
                              key={`${entry.award}-${entry.year}`}
                              className="grid gap-2 text-sm sm:grid-cols-[1.2fr_1.5fr_1fr_0.5fr] sm:gap-4"
                            >
                              <span />
                              <span className="text-black/80">{entry.award}</span>
                              <span className="text-black/60">{entry.project}</span>
                              <span className="text-black/60">{entry.year}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
