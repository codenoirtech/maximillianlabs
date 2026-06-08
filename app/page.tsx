import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Maximillian Labs - a London web design agency delivering bespoke websites, branding, and interactive digital experiences.",
};

export default function Page() {
  return (
    <main className="w-full bg-[#f4f4f5]">
      <div className="relative min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <AboutSection />
    </main>
  );
}
