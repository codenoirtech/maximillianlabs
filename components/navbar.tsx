"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";
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

      {isOpen ? (
      <div
        className="fixed inset-0 z-50 bg-[#d4d4d8] animate-in fade-in duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
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
            <div className="w-full max-w-6xl rounded-[2rem] bg-gradient-to-br from-[#1a0a0f] via-[#120812] to-[#2a1035] p-8 shadow-2xl md:rounded-[2.5rem] md:p-12 lg:p-14">
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
      ) : null}
    </>
  );
}
