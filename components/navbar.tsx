"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Our Work", href: "#" },
  { label: "Our Agency", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Blog", href: "#" },
  { label: "SEO Checker", href: "#" },
  { label: "Cost Guide", href: "#" },
  { label: "Contact", href: "/contact-us" },
];

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-baseline gap-0.5", className)}>
      <span className="text-xl font-bold tracking-tight md:text-2xl">creative</span>
      <span className="text-xl font-bold text-[#e63946] md:text-2xl">.</span>
    </Link>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 16"
      fill="none"
      className={cn("h-4 w-6", className)}
    >
      <path
        d="M0 1.5H14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M0 14.5H24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path
        fill="currentColor"
        d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.42 9.73h3.04V19H5.42V9.73Zm4.76 0h2.91v1.27h.04c.4-.76 1.4-1.56 2.87-1.56 3.07 0 3.64 2.02 3.64 4.64V19h-3.04v-4.42c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.32V19h-3.04V9.73Z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path
        fill="currentColor"
        d="M12 7.35A4.65 4.65 0 1 0 12 16.65 4.65 4.65 0 0 0 12 7.35Zm0 7.67A3.02 3.02 0 1 1 12 8.98a3.02 3.02 0 0 1 0 6.04ZM17.92 7.16a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM21 17.97A5.64 5.64 0 0 1 17.97 21 39.4 39.4 0 0 1 12 21a39.4 39.4 0 0 1-5.97 0A5.64 5.64 0 0 1 3 17.97 39.4 39.4 0 0 1 3 12a39.4 39.4 0 0 1 0-5.97A5.64 5.64 0 0 1 6.03 3 39.4 39.4 0 0 1 12 3a39.4 39.4 0 0 1 5.97 0A5.64 5.64 0 0 1 21 6.03 39.4 39.4 0 0 1 21 12a39.4 39.4 0 0 1 0 5.97Zm-1.79-7.74a3.98 3.98 0 0 0-1.08-2.82 3.98 3.98 0 0 0-2.82-1.08A26.65 26.65 0 0 0 12 6.17a26.65 26.65 0 0 0-3.31.16 3.98 3.98 0 0 0-2.82 1.08 3.98 3.98 0 0 0-1.08 2.82A26.66 26.66 0 0 0 4.63 12a26.66 26.66 0 0 0 .16 1.77 3.98 3.98 0 0 0 1.08 2.82 3.98 3.98 0 0 0 2.82 1.08 26.66 26.66 0 0 0 3.31.16 26.66 26.66 0 0 0 3.31-.16 3.98 3.98 0 0 0 2.82-1.08 3.98 3.98 0 0 0 1.08-2.82 26.66 26.66 0 0 0 .16-1.77 26.65 26.65 0 0 0-.16-1.77Z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path
        fill="currentColor"
        d="M13.56 21v-7.74h2.6l.39-3.01h-2.99V8.33c0-.87.24-1.46 1.49-1.46h1.59V4.18c-.77-.08-1.55-.12-2.32-.11-2.29 0-3.86 1.4-3.86 3.97v2.21H8v3.01h2.46V21h3.1Z"
      />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Logo />

        <div className="flex items-center gap-4 md:gap-5">
          <Button
            variant="outline"
            className="h-10 rounded-md border border-black bg-transparent px-5 text-sm font-medium text-black shadow-none hover:bg-black/5 md:h-11 md:px-6"
          >
            Start A Project
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-black transition-opacity hover:opacity-60"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#d4d4d8] transition-opacity duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(4rem,16vw,12rem)] font-bold leading-none tracking-tight text-white/70 select-none">
            creative
          </p>
        </div>

        <div className="relative flex h-full flex-col px-6 py-6 md:px-10 md:py-8">
          <div className="flex items-center justify-between">
            <Logo className="text-white [&_span:first-child]:text-white" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-70"
            >
              <X className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>

          <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90">
            <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-600 uppercase">
              Scroll Down
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center py-8 md:py-10">
            <div className="pointer-events-auto w-full max-w-6xl rounded-[2rem] bg-gradient-to-br from-[#1a0a0f] via-[#120812] to-[#2a1035] p-8 shadow-2xl md:rounded-[2.5rem] md:p-12 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8 xl:gap-14">
                <div>
                  <p className="mb-6 text-sm font-normal text-white/80 md:mb-8">Menu</p>
                  <nav className="space-y-1 md:space-y-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-70 md:text-3xl lg:text-[2rem] lg:leading-tight"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="hidden items-center self-center lg:flex">
                  <ArrowRight className="h-8 w-8 text-white/90" strokeWidth={1.25} />
                </div>

                <div className="space-y-8 md:space-y-10 lg:pt-1">
                  <div>
                    <p className="mb-2 text-sm text-white/80">Phone</p>
                    <p className="text-lg font-bold text-white md:text-xl">
                      (+44) 0207 870 5794
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-white/80">E-Mail</p>
                    <p className="text-lg font-bold break-words text-white md:text-xl">
                      info@creativebranddesign.co.uk
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-sm text-white/80">Follow</p>
                    <div className="flex items-center gap-4">
                      <Link
                        href="#"
                        aria-label="LinkedIn"
                        className="text-white transition-opacity hover:opacity-70"
                      >
                        <LinkedinIcon />
                      </Link>
                      <Link
                        href="#"
                        aria-label="Instagram"
                        className="text-white transition-opacity hover:opacity-70"
                      >
                        <InstagramIcon />
                      </Link>
                      <Link
                        href="#"
                        aria-label="Facebook"
                        className="text-white transition-opacity hover:opacity-70"
                      >
                        <FacebookIcon />
                      </Link>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="h-11 rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white shadow-none hover:bg-white/10"
                  >
                    Start A Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
