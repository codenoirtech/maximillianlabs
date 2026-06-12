"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple brochure-style website might take 4–6 weeks, while a more complex site could take 8–12 weeks or more. The timeline depends on the size, complexity, and specific features you require.",
  },
  {
    question: "What is the cost of a web design project?",
    answer:
      "Our pricing depends on your project requirements, with flexible payments made in phases. Contact us for a free consultation and we'll provide a tailored quote based on your goals.",
  },
  {
    question: "Will I retain full ownership of the design, development, and code?",
    answer:
      "Yes. Once the project is complete and full payment has been made, all website designs and files are delivered to you with full ownership transferred.",
  },
  {
    question: "Will the website be mobile-friendly and responsive?",
    answer:
      "Absolutely. We design and develop mobile-first, ensuring your site works flawlessly across every device and screen size.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. While we're based in Nigeria, we serve clients globally. Geography is no barrier to excellence — we collaborate remotely with businesses worldwide.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="overflow-hidden bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>FAQ&apos;s</SectionLabel>
          <h2 className="mb-12 text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] lg:mb-16">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-[#0a0a0a]/10 border-y border-[#0a0a0a]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={0.05 * index}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg text-[#0a0a0a]">{faq.question}</h3>
                  {isOpen ? (
                    <Minus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  )}
                </button>
                {isOpen ? (
                  <p className="pb-6 text-base leading-relaxed text-[#0a0a0a]/75">
                    {faq.answer}
                  </p>
                ) : null}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
