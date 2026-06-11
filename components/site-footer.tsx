import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AwardBadge, FooterAwardsMarquee, awardBadges } from "@/components/award-badges";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";
import { media } from "@/lib/brand";

const services = [
  { label: "Website Design", href: "#" },
  { label: "SEO & Digital Marketing", href: "#" },
  { label: "Branding", href: "#" },
  { label: "Hosting", href: "#" },
  { label: "Website Audit", href: "#" },
];

const quickLinks = [
  { label: "FAQ's", href: "#" },
  { label: "Contact", href: "/contact-us" },
  { label: "Our Agency", href: "/about" },
  { label: "Our Work", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Web Design London", href: "/" },
];

const sectors = [
  "Aviation Website Design",
  "Golf & Leisure Website Design",
  "Web Design for Travel Agencies",
  "Charity Website Design",
  "Agency Sites Website Design",
  "Health & Wellbeing Sites Website Design",
  "Tech Website Design",
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

function SectorDot() {
  return (
    <span
      aria-hidden="true"
      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fe0168]"
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-25 overflow-hidden bg-[#fafafa]">
      <div className="relative overflow-hidden bg-[#151717] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="footer-oval footer-oval-orange bottom left" />
          <div className="footer-oval footer-oval-pink top left" />
          <div className="footer-oval footer-oval-pink bottom right" />
        </div>

        <div className="relative px-6 pb-16 pt-16 md:px-10 lg:pt-[calc(6rem+6vh)]">
          <div className="container-wide mx-auto max-w-[1400px]">
            <div className="mb-12 lg:mb-16">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
                <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
                  <Link
                    href="/"
                    className="inline-flex items-baseline gap-0.5 text-white"
                  >
                    <span className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] tracking-tight">
                      maximillianlabs
                    </span>
                    <span className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] text-[#fe0048]">
                      .
                    </span>
                  </Link>

                  <div className="mt-6">
                    <Image
                      src={media.awards.iso}
                      alt="ISO certification"
                      width={152}
                      height={102}
                      className="h-auto w-[9.5rem] brightness-0 invert"
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/45">London office only</p>
                </div>

                <div className="lg:col-span-3">
                  <FooterHeading>Contact</FooterHeading>
                  <div className="space-y-4 text-[0.9rem] leading-relaxed text-white/70">
                    <p>
                      London Office
                      <br />
                      77 New Cavendish Street,
                      <br />
                      Fitzrovia, London,
                      <br />
                      W1W 6XB, United Kingdom
                      <br />
                      <FooterLink
                        href="https://www.google.com/maps/search/77+New+Cavendish+Street+London+W1W+6XB"
                        className="text-white"
                      >
                        Directions
                      </FooterLink>
                    </p>
                    <p>
                      <FooterLink
                        href="mailto:contact@maximillianlabs.com"
                        className="text-white"
                      >
                        contact@maximillianlabs.com
                      </FooterLink>
                      <br />
                      <FooterLink href="tel:+442078705794" className="text-white">
                        (+44) 207 870 5794
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

                <div className="sm:col-span-2 lg:col-span-3">
                  <FooterHeading>Sector Spotlight</FooterHeading>
                  <ul className="space-y-4 text-[0.9rem] text-white/70">
                    {sectors.map((item) => (
                      <li key={item}>
                        <FooterLink
                          href="#"
                          className="inline-flex items-start gap-4"
                        >
                          <SectorDot />
                          <span>{item}</span>
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12 hidden lg:block">
              <FooterAwardsMarquee />
            </div>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:hidden">
              {awardBadges.map((badge) => (
                <AwardBadge
                  key={badge.key}
                  logo={badge.logo}
                  content={badge.content}
                  variant="dark"
                />
              ))}
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-12 lg:flex-row lg:items-center">
              <div className="text-[0.8rem] leading-relaxed text-white/45">
                <p className="mb-2">
                  Maximillian Labs is a trading name of Maximillian Labs Design Ltd
                </p>
                <p>
                  © {new Date().getFullYear()} Maximillian Labs Design Ltd.
                  <br className="lg:hidden" /> Registered in England No. 08757535
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-6">
                <ul className="flex flex-wrap gap-6 text-[0.8rem] text-white/45">
                  <li>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Cookie Policy</FooterLink>
                  </li>
                </ul>

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
