"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

export function ServicesNav() {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[92px] z-30 border-b border-[#0a0a0a]/10 bg-[#f0f0f0]/90 backdrop-blur-md">
      <div className="container-wide mx-auto max-w-[1400px]">
        <nav
          aria-label="Service chapters"
          className="flex gap-2 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "border-[#00ffff] bg-[#0a0a0a] text-white"
                    : "border-[#0a0a0a]/15 text-[#0a0a0a]/60 hover:border-[#0a0a0a]/30 hover:text-[#0a0a0a]",
                )}
              >
                <span className="mr-2 text-[#00ffff]">{service.index}</span>
                {service.title.join(" ")}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
