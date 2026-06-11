'use client'

import Image from 'next/image'
import office from '../../../public/images/office.jpg'

export function CultureSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 sm:px-12 sm:py-24">
      {/* Decorative curved lines */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 Q 300 150 600 200 T 1200 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-border/30"
          />
          <path
            d="M0 400 Q 300 350 600 400 T 1200 400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-border/20"
          />
          <path
            d="M50 0 Q 80 200 100 500"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-border/25"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="text-xs font-normal tracking-wide text-muted-foreground uppercase">
              Be I-Core Creative
            </span>
          </div>
          <h2 className="text-balance text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            A Culture Driven by Creativity
          </h2>
        </div>

        {/* Content Layout - Images and Text */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images Grid Layout - Compact Overlapping */}
          <div className="relative h-80 sm:h-96">
            {/* Bottom Left - Large Image */}
            <div className="absolute bottom-0 left-0 w-56 sm:w-72">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-48 w-full sm:h-60 bg-muted">
                  <Image
                    src={office}
                    alt="Office workspace with team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Center - Medium Image */}
            <div className="absolute left-32 top-8 w-72 sm:w-80">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-44 w-full sm:h-52 bg-muted">
                  <Image
                    src={office}
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Top Right - Small Image */}
            <div className="absolute right-0 top-0 w-56 sm:w-64">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-40 w-full sm:h-48 bg-muted">
                  <Image
                    src={office}
                    alt="Creative workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-balance text-base leading-relaxed text-foreground/90">
              We pride ourselves on promoting a supportive environment, celebrating every success that comes our way. Our creative & professional ethos encourages flexibility so you can work from anywhere as part of our globally connected team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
