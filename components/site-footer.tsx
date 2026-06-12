import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

const services = [
  { label: "Web Design & Development", href: "/#services" },
  { label: "Web Rebuild", href: "/#services" },
  { label: "Website Maintenance", href: "/#services" },
  { label: "Branding", href: "/contact-us" },
];

const quickLinks = [
  { label: "Contact", href: "/contact-us" },
  { label: "Our Agency", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "Services", href: "/#services" },
];

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`footer-link ${className}`}>
      {children}
    </Link>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-[clamp(1.125rem,1rem+0.35vw,1.625rem)] leading-none tracking-[-0.03em] text-white">
      {children}
    </h3>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-25 overflow-hidden bg-[#f0f0f0]">
      <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="footer-oval footer-oval-cyan bottom left" />
          <div className="footer-oval footer-oval-cyan top right" />
        </div>

        <div className="relative px-6 pb-16 pt-16 md:px-10 lg:pt-[calc(6rem+6vh)]">
          <div className="container-wide mx-auto max-w-[1400px]">
            <div className="mb-12 lg:mb-16">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
                <div className="sm:col-span-2 lg:col-span-4">
                  <Logo variant="white" />
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                    World-class web design and development from Nigeria to the
                    world. We engineer digital experiences that make businesses
                    grow.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <FooterHeading>Contact</FooterHeading>
                  <div className="space-y-4 text-[0.9rem] leading-relaxed text-white/70">
                    <p>
                      Nigeria
                      <br />
                      Serving clients globally
                    </p>
                    <p>
                      <FooterLink
                        href="mailto:contact@maximillianlabs.com"
                        className="text-white"
                      >
                        contact@maximillianlabs.com
                      </FooterLink>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <FooterHeading>Services</FooterHeading>
                  <ul className="space-y-1 text-[0.9rem] text-white/70">
                    {services.map((item) => (
                      <li key={item.label}>
                        <FooterLink href={item.href}>{item.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2">
                  <FooterHeading>Quick Links</FooterHeading>
                  <ul className="space-y-1 text-[0.9rem] text-white/70">
                    {quickLinks.map((item) => (
                      <li key={item.label}>
                        <FooterLink href={item.href}>{item.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-12 lg:flex-row lg:items-center">
              <div className="text-[0.8rem] leading-relaxed text-white/45">
                <p>
                  © {new Date().getFullYear()} Maximillian Labs. All rights
                  reserved.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-6">
                <ul className="flex items-center gap-4">
                  <li>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
