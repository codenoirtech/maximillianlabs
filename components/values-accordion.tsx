'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ValueItem {
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    title: 'Commitment',
    description:
      'We support our clients through an ongoing partnership. We not only assist throughout the project but also provide continued aftercare and guidance. We remain actively involved, advising and collaborating with our clients to maximise their website&apos;s long-term potential. We are the company that will stay late and go the extra mile to support you.',
  },
  {
    title: 'Honesty',
    description:
      'In regards to the details of your project, we will always remain open and truthful when it comes to any design choices, and direction. We are here to bring our expertise to the table and produce the best possible results for our clients.',
  },
  {
    title: 'Evolving',
    description:
      'Within our industry, changes happen fast and it has significantly evolved over the years. With this in mind, we are always eager to improve, constantly refining our design, UI/UX, development, technology, and interactivity to ensure we are delivering the best possible results for our clients.',
  },
]

export function ValuesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      <div className="space-y-px border-t border-border">
        {values.map((value, index) => (
          <div key={index} className="border-b border-border">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between bg-background px-6 py-5 text-left transition-colors hover:bg-muted"
              aria-expanded={expandedIndex === index}
            >
              <h3 className="text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <div className="h-5 w-5 flex-shrink-0 text-accent">
                {expandedIndex === index ? (
                  <Minus className="h-5 w-5" />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
              </div>
            </button>

            {expandedIndex === index && (
              <div className="border-t border-border bg-muted/30 px-6 py-6">
                <p className="text-sm leading-relaxed text-foreground/80">
                  {value.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
