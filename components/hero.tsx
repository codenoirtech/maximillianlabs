import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-0 bg-white">
      {/* Scroll Down Text - Left Side (Desktop only) */}
      <div className="hidden lg:flex absolute left-12 top-1/2 transform -translate-y-1/2 flex-col items-center gap-6">
        <span className="text-xs font-semibold text-gray-900 tracking-widest -rotate-90 origin-center whitespace-nowrap">
          Scroll Down
        </span>
        <div className="w-0.5 h-16 bg-gray-900" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-pink-600">award winning</span>
            <br />
            <span className="text-gray-900">web design agency</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto font-normal">
          We&apos;re CreativeWeb an award-winning{" "}
          <span className="font-bold">London based web design agency</span>,
          focused on creating bespoke and interactive{" "}
          <span className="font-bold">web experiences</span> for aspiring &
          established businesses and enterprises.
        </p>

        {/* CTA Button */}
        <div className="pt-6">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 gap-2 px-8 py-6 text-base font-semibold rounded-full inline-flex">
            Our Work
            <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Bottom (Mobile) */}
      <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
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
