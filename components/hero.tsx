import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5.5rem)] w-full flex-col items-center justify-center overflow-hidden px-6 pb-16 md:min-h-[calc(100vh-6.5rem)] md:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <p className="whitespace-nowrap text-[clamp(3.5rem,14vw,11rem)] font-bold leading-none tracking-tight text-zinc-300/80 select-none">
          be creative
        </p>
      </div>

      <div className="hidden lg:flex absolute left-10 top-1/2 z-10 -translate-y-1/2 -rotate-90">
        <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
          Scroll Down
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
          <span className="bg-gradient-to-r from-[#e63946] via-[#d946ef] to-[#9333ea] bg-clip-text text-transparent">
            award winning
          </span>
          <br />
          <span className="text-black">web design agency</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-zinc-700 md:mt-10 md:text-base md:leading-7">
          We&apos;re CreativeWeb an award-winning{" "}
          <span className="font-bold text-black">London based web design agency</span>
          , focused on creating bespoke and interactive{" "}
          <span className="font-bold text-black">web experiences</span> for aspiring
          &amp; established businesses and enterprises.
        </p>

        <div className="mt-10 md:mt-12">
          <Button
            variant="outline"
            className="h-11 rounded-md border border-black bg-transparent px-8 text-sm font-medium text-black shadow-none hover:bg-black/5 md:h-12 md:px-10 md:text-base"
          >
            Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
