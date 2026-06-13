import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesNav } from "@/components/services/services-nav";
import { ServiceChapter } from "@/components/services/service-chapter";
import { ServicesCapabilities } from "@/components/services/services-capabilities";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, branding, digital marketing, and support services from Maximillian Labs — a Nigerian agency crafting bespoke digital experiences worldwide.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Maximillian Labs",
    description:
      "Explore bespoke website design, branding, SEO, and digital support from Maximillian Labs.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#f0f0f0]">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      <ServicesHero />
      <ServicesNav />

      {services.map((service, index) => (
        <ServiceChapter
          key={service.id}
          service={service}
          inverted={index % 2 === 1}
        />
      ))}

      <ServicesCapabilities />
      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
