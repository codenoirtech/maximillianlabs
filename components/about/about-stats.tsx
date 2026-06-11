"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 25, label: "Team Specialists" },
  { value: 500, label: "Bespoke Websites" },
  { value: 503, label: "Clients across the globe" },
];

function AnimatedStat({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <p className="bg-gradient-to-r from-[#fe802d] via-[#fe0048] to-[#ac0bd9] bg-clip-text text-[clamp(2.5rem,2rem+5vw,7rem)] font-normal leading-[1.2] text-transparent">
        {count}
      </p>
      <p className="mt-2 text-base font-normal text-black sm:text-lg">{label}</p>
    </motion.div>
  );
}

export function AboutStats() {
  return (
    <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8">
      {stats.map((stat, index) => (
        <AnimatedStat
          key={stat.label}
          value={stat.value}
          label={stat.label}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
