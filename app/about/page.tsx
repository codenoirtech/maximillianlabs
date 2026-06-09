import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutDifferentiators } from "@/components/about/about-differentiators";
import { AboutImageGrid } from "@/components/about/about-image-grid";
import { ValuesAccordion } from "@/components/values-accordion";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Agency",
  description:
    "Learn about Maximillian Labs — an award-winning London web design agency delivering bespoke digital experiences since 2013.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Agency | Maximillian Labs",
    description:
      "Discover the team, values, and culture behind Maximillian Labs — a leading bespoke web design agency.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <div className="bg-black">
        <Navbar variant="dark" />
      </div>

      <AboutHero />
      <AboutIntro />
      <AboutDifferentiators />
      <AboutImageGrid />

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e63946]" />
                  <span className="text-xs font-normal tracking-wide text-zinc-500 uppercase">
                    Agency Overview
                  </span>
                </div>
                <h2 className="text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-black">
                  Our Values
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ValuesAccordion />
            </FadeIn>
          </div>
        </div>
      </section>

      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
