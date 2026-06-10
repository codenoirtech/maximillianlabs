import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutImageGrid } from "@/components/about/about-image-grid";
import { AboutDifferentiators } from "@/components/about/about-differentiators";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutCulture } from "@/components/about/about-culture";

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
      <AboutImageGrid />
      <AboutDifferentiators />
      <AboutValuesSection />
      <AboutCulture />

      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
