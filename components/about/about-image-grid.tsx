"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import office from "@/public/images/office.jpg";
import showcase from "@/public/media/max labs project showcase.png";
import tips from "@/public/media/max labs tips.png";
import facts1 from "@/public/media/max labs web facts 1.png";
import facts2 from "@/public/media/max labs web facts 2.png";
import facts3 from "@/public/media/max labs web facts 3.png";
import facts4 from "@/public/media/max labs web facts 4.png";

type GridItem = {
  src: StaticImageData;
  alt: string;
  className: string;
  caption?: string;
};

const gridItems: GridItem[] = [
  {
    src: facts1,
    alt: "Team collaborating at a desk",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    src: facts2,
    alt: "Creative workspace detail",
    className: "col-span-1 row-span-1",
  },
  {
    src: facts3,
    alt: "Office meeting space",
    className: "col-span-1 row-span-1",
  },
  {
    src: office,
    alt: "The people behind the projects",
    className: "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
    caption: "The people behind the projects",
  },
  {
    src: showcase,
    alt: "Project showcase in the studio",
    className: "col-span-1 row-span-1",
  },
  {
    src: tips,
    alt: "Design team at work",
    className: "col-span-1 row-span-1",
  },
  {
    src: facts4,
    alt: "Team brainstorming session",
    className: "col-span-2 row-span-1 md:col-span-2",
  },
  {
    src: facts2,
    alt: "Studio environment",
    className: "col-span-1 row-span-1",
  },
  {
    src: facts1,
    alt: "Collaborative workspace",
    className: "col-span-1 row-span-1",
  },
];

function GridImage({ item, index }: { item: GridItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={item.className}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full min-h-[140px] overflow-hidden rounded-[1.25rem] sm:min-h-[180px] sm:rounded-[1.5rem] lg:rounded-[1.75rem]"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
        />
        {item.caption ? (
          <div className="absolute bottom-4 right-4 rounded-md bg-black/55 px-3 py-1.5 backdrop-blur-sm">
            <p className="text-xs font-normal text-white sm:text-sm">
              {item.caption}
            </p>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export function AboutImageGrid() {
  return (
    <section className="bg-black px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[200px] lg:gap-5">
          {gridItems.map((item, index) => (
            <GridImage key={`${item.alt}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
