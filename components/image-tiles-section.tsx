"use client";

import Image from "next/image";
import { media } from "@/lib/brand";

const row1 = media.tiles.slice(0, 4);
const row2 = media.tiles.slice(4, 8);

export function ImageTilesSection() {
  return (
    <section className="relative h-[clamp(230px,30vw,420px)] overflow-hidden bg-[#f0f0f0]">
      <div className="absolute left-1/2 top-1/2 h-[145%] w-[145%] -translate-x-1/2 -translate-y-1/2 rotate-[14deg]">
        <div className="flex translate-x-[8%] justify-center gap-4 animate-[scroll-left_40s_linear_infinite]">
          {row1.map((src) => (
            <figure
              key={src}
              className="relative h-[clamp(130px,18vw,240px)] w-[clamp(180px,21vw,340px)] shrink-0 overflow-hidden rounded-[var(--brand-radius)]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </figure>
          ))}
        </div>
        <div className="mt-4 flex -translate-x-[8%] justify-center gap-4 animate-[scroll-right_40s_linear_infinite]">
          {row2.map((src) => (
            <figure
              key={src}
              className="relative h-[clamp(130px,18vw,240px)] w-[clamp(180px,21vw,340px)] shrink-0 overflow-hidden rounded-[var(--brand-radius)]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
