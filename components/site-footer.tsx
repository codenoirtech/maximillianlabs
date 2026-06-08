import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

const services = [
  "Website Design",
  "SEO & Digital Marketing",
  "Branding",
  "Hosting",
  "Website Audit",
];

const quickLinks = [
  "FAQ's",
  "Contact",
  "Our Agency",
  "Our Work",
  "Sustainability",
  "Careers",
  "Web Design London",
];

const sectors = [
  "Aviation Website Design",
  "Charity / Non-Profits Web Design",
  "Construction Website Design",
  "Education Website Design",
  "Energy & Environmental",
  "Fashion Website Design",
  "Finance Website Design",
  "Fintech Website Design",
  "Healthcare Web Design",
  "Hospitality Web Design",
  "IT and Tech",
  "Law Firm Website Design",
  "Luxury Website Design",
  "Manufacturing Website Design",
  "Recruitment Website Design",
  "SaaS Website Design",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#4a1030]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#2a1035]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-0.5">
              <span className="text-2xl font-bold tracking-tight">creative</span>
              <span className="text-2xl font-bold text-[#e63946]">.</span>
            </Link>
            <div className="flex flex-wrap gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded border border-white/20 bg-white/5 text-[8px] font-bold leading-tight text-center">
                BM
                <br />
                TRADA
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded border border-white/20 bg-white/5 text-[8px] font-bold leading-tight text-center">
                UKAS
              </div>
            </div>
            <p className="text-xs text-zinc-500">Surrey office only</p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Contact</h3>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-300">
              <p className="font-medium text-white">London Office</p>
              <p>
                77 New Cavendish Street,
                <br />
                Fitzrovia, London,
                <br />
                W1W 6XB
              </p>
              <Link href="#" className="underline hover:text-white">
                Directions
              </Link>
              <p>
                <Link
                  href="mailto:info@creativebranddesign.co.uk"
                  className="hover:text-white"
                >
                  info@creativebranddesign.co.uk
                </Link>
              </p>
              <p>(+44) 0207 870 5794</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Services</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {services.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Contact" ? "/contact-us" : "#"}
                    className="hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Sector Spotlight</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {sectors.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e63946]" />
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-zinc-500">
            CreativeWeb is a trading name of Creative Brand Design Ltd © 2025
            Creative Brand Design Ltd. Registered in England No. 08757535
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-white transition-opacity hover:opacity-70"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-white transition-opacity hover:opacity-70"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-white transition-opacity hover:opacity-70"
              >
                <FacebookIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
