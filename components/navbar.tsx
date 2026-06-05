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
      <nav className="hidden md:flex items-center justify-between px-8 py-6 bg-white border-b border-gray-200">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold">creative</span>
          <span className="text-2xl font-bold text-primary">.</span>
        </Link>
        <Button
          variant="outline"
          className="border-gray-900 text-gray-900 hover:bg-gray-50"
        >
          Start A Project
        </Button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 hover:text-gray-600"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold">creative</span>
          <span className="text-xl font-bold text-primary">.</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
          <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="space-y-6 mb-16">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-2xl font-bold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">
                      Phone
                    </h4>
                    <p className="text-lg font-bold">(+44) 0207 870 5794</p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">
                      E-Mail
                    </h4>
                    <p className="text-lg font-bold break-words">
                      info@creativebranddesign.co.uk
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  Follow
                </h4>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors text-xl"
                  >
                    in
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors text-xl"
                  >
                    ig
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors text-xl"
                  >
                    f
                  </Link>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full mt-8 border border-white text-white hover:bg-white hover:text-gray-900"
                variant="outline"
              >
                Start A Project
              </Button>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-12 h-12 text-gray-700"
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
        </div>
      )}
    </>
  );
}
