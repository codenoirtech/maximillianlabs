"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SpeakToUsButton() {
  const pathname = usePathname();

  if (pathname === "/contact-us") {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        href="/contact-us"
        className="flex h-28 w-28 items-center justify-center rounded-full bg-[#c6f135] text-center text-sm font-normal leading-tight text-black shadow-2xl transition-transform hover:scale-105"
      >
        Speak To Us
      </Link>
    </div>
  );
}
