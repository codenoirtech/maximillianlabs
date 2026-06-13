"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { media } from "@/lib/brand";
import styles from "@/components/about/about-masonry.module.css";

type GridImage = {
  src: string;
  alt: string;
  caption?: string;
};

const galleryAlts = [
  "Creative studio workspace",
  "Collaborative team environment",
  "Design consultation",
  "Global digital collaboration",
  "The people behind the projects",
  "Modern web design in progress",
  "Studio environment",
  "Team at work",
  "Office culture",
] as const;

const images: GridImage[] = media.about.gallery.map((src, index) => ({
  src,
  alt: galleryAlts[index] ?? "Maximillian Labs team",
  ...(index === 4 ? { caption: "The people behind the projects" } : {}),
}));

export function AboutImageGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <motion.figure
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={styles.figure}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="relative h-full w-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 54vw, 32.5vw"
                className="object-cover"
              />
              {image.caption ? (
                <figcaption className={styles.caption}>
                  {image.caption}
                </figcaption>
              ) : null}
            </motion.div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
