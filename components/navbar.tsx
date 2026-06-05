"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Our Work", href: "#" },
    { label: "Our Agency", href: "#" },
    { label: "Services", href: "#" },
    { label: "Blog", href: "#" },
    { label: "SEO Checker", href: "#" },
    { label: "Cost Guide", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold">creative</span>
          <span className="text-xl font-bold text-pink-600">.</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto mr-4 text-gray-900 hover:text-gray-600"
        >
          <Menu size={28} />
        </button>
        <Button
          variant="outline"
          className="border-2 border-black text-black hover:bg-gray-50 px-6"
        >
          Start A Project
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={24} />
          </button>

          <div className="h-screen px-8 py-12 flex items-center justify-between relative">
            {/* Left Column - Menu */}
            <div className="flex-1">
              <h3 className="text-sm font-light mb-8 text-white tracking-wider">
                Menu
              </h3>
              <div className="space-y-5">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-2xl font-bold hover:text-pink-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center Arrow Divider */}
            <div className="px-6">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex-1 pl-8">
              {/* Phone */}
              <div className="mb-8">
                <h4 className="text-xs font-light mb-2 text-gray-400 uppercase tracking-wider">
                  Phone
                </h4>
                <p className="text-base font-bold">(+44) 0207 870 5794</p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h4 className="text-xs font-light mb-2 text-gray-400 uppercase tracking-wider">
                  E-Mail
                </h4>
                <p className="text-base font-bold break-words">
                  info@creativebranddesign.co.uk
                </p>
              </div>

              {/* Follow */}
              <div className="mb-8">
                <h4 className="text-xs font-light mb-3 text-gray-400 uppercase tracking-wider">
                  Follow
                </h4>
                <div className="flex gap-5">
                  <Link
                    href="#"
                    className="hover:text-pink-500 transition-colors text-lg"
                  >
                    in
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-pink-500 transition-colors text-lg"
                  >
                    ig
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-pink-500 transition-colors text-lg"
                  >
                    f
                  </Link>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-6 font-semibold"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Start A Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
