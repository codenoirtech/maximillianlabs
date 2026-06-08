import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Maximillian Labs to discuss your next web design, branding, or digital marketing project.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Maximillian Labs",
    description:
      "Start a project with our London web design team. Tell us about your goals and we'll get back to you.",
    url: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <div className="bg-[#f4f4f5]">
        <Navbar />
      </div>
      <ContactForm />
      <ContactInfo />
      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
