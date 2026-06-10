"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left side - Stacked images */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Top image placeholder */}
            <div className="aspect-square w-full rounded-3xl bg-gray-300" />

            {/* Bottom image placeholder */}
            <div className="aspect-square w-full rounded-3xl bg-gray-300" />
          </div>

          {/* Center - Large video player */}
          <div className="flex items-center justify-center lg:col-span-3">
            <div className="relative w-full aspect-video rounded-3xl bg-gray-900 overflow-hidden flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 transition-transform hover:scale-110">
                <PlayCircle className="h-12 w-12 text-white" fill="white" />
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-pink-600" />
              <p className="text-sm font-normal text-gray-700">
                London Web Design Agency
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight">
              Maximillian Labs<span className="text-pink-600">.</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-gray-800">
              <p>
                We design unique and stunning websites for businesses and
                enterprises worldwide, offering a personalised, hands-on
                service, from our London web design team, that adds true value.
              </p>

              <p>
                We break the process down into easy, manageable steps, working
                closely with you at every turn. From{" "}
                <a
                  href="#"
                  className="underline hover:text-pink-600 transition-colors"
                >
                  WordPress web design
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline hover:text-pink-600 transition-colors"
                >
                  interactive website design
                </a>{" "}
                to branding,{" "}
                <a
                  href="#"
                  className="underline hover:text-pink-600 transition-colors"
                >
                  SEO optimisation
                </a>
                ,{" "}
                <a
                  href="#"
                  className="underline hover:text-pink-600 transition-colors"
                >
                  multilingual web design
                </a>{" "}
                and UI/UX, we take care of every detail to create a solution
                that&apos;s tailored just for you.
              </p>

              <p>
                With a passion for high-performance, immersive digital
                experiences, we focus on giving our clients a competitive edge
                and delivering strong ROI on their investment.
              </p>
            </div>

            {/* About Us Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black bg-white px-8 text-black hover:bg-gray-50"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Speak To Us button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex h-28 w-28 items-center justify-center rounded-full bg-lime-400 text-center font-normal text-black shadow-2xl transition-transform hover:scale-110">
          <span className="text-sm leading-tight px-2">Speak To Us</span>
        </button>
      </div>
    </section>
  );
}
