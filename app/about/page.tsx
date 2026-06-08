import { ValuesAccordion } from '@/components/values-accordion'
import { CultureSection } from '@/components/culture-section'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Culture Section */}
      <CultureSection />

      {/* Values Section - Header and Accordion */}
      <section className="border-b border-border px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col justify-start">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Agency Overview
                </span>
              </div>
              <h1 className="text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                Our Values
              </h1>
            </div>

            {/* Accordion */}
            <div>
              <ValuesAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="border-t border-border px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-muted/50 p-8 text-center">
            <p className="mb-6 text-sm leading-relaxed text-foreground/80">
              We pride ourselves on promoting a supportive environment,
              celebrating every success that comes our way. Our creative &
              professional ethos encourages flexibility so you can work from
              anywhere as part of our globally connected team.
            </p>
            <button className="inline-flex items-center gap-2 rounded border border-foreground/30 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
