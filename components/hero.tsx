import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-0 bg-white">
      {/* Scroll Down Text - Left Side (Desktop only) */}
      <div className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4">
        <span className="text-sm font-semibold text-gray-900 tracking-widest -rotate-90 origin-center whitespace-nowrap">
          Scroll Down
        </span>
        <div className="w-0.5 h-12 bg-gray-900" />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-primary">award winning</span>
            <br />
            <span className="text-gray-900">web design agency</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          We're CreativeWeb an award-winning{" "}
          <span className="font-bold">London based web design agency</span>,
          focused on creating bespoke and interactive{" "}
          <span className="font-bold">web experiences</span> for aspiring &
          established businesses and enterprises.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 gap-2 px-6 py-6 text-base font-semibold rounded-lg">
            Our Work
            <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Bottom (Mobile) */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-semibold text-gray-600">Scroll</span>
        <svg
          className="w-4 h-4 text-gray-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
