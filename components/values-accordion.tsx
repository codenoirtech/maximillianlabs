"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface ValueItem {
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    title: "Commitment",
    description:
      "We support our clients through an ongoing partnership. We not only assist throughout the project but also provide continued aftercare and guidance. We remain actively involved, advising and collaborating with our clients to maximise their website's long-term potential. We are the company that will stay late and go the extra mile to support you.",
  },
  {
    title: "Honesty",
    description:
      "In regards to the details of your project, we will always remain open and truthful when it comes to any design choices, and direction. We are here to bring our expertise to the table and produce the best possible results for our clients.",
  },
  {
    title: "Evolving",
    description:
      "Within our industry, changes happen fast and it has significantly evolved over the years. With this in mind, we are always eager to improve, constantly refining our design, UI/UX, development, technology, and interactivity to ensure we are delivering the best possible results for our clients.",
  },
  {
    title: "We Care",
    description:
      "We pride ourselves on promoting a supportive environment, celebrating every success that comes our way. Our creative and professional ethos encourages flexibility so you can work from anywhere as part of our globally connected team.",
  },
];

function AccordionIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-5 w-5 shrink-0 items-center justify-center text-black"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="minus"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Minus className="h-5 w-5" strokeWidth={1.5} />
          </motion.span>
        ) : (
          <motion.span
            key="plus"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="h-5 w-5" strokeWidth={1.5} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ValuesAccordion() {
  const baseId = useId();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="w-full">
      <div className="border-t border-zinc-200">
        {values.map((value, index) => {
          const isOpen = expandedIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={value.title} className="border-b border-zinc-200">
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleAccordion(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:bg-zinc-50/80 sm:py-6"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <h3 className="text-lg font-black tracking-tight text-black sm:text-xl">
                  {value.title}
                </h3>
                <AccordionIcon isOpen={isOpen} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.25 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-black/80 sm:pb-7 sm:text-base">
                      {value.description}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
