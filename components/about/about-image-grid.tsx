"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import grid1 from "@/public/images/about/grid-2.webp";
import grid2 from "@/public/images/about/grid-2.webp";
import grid3 from "@/public/images/about/grid-3.webp";
import grid5 from "@/public/images/about/grid-5.webp";
import grid6 from "@/public/images/about/grid-6.webp";
import grid7 from "@/public/images/about/grid-6.webp";
import grid8 from "@/public/images/about/grid-8.webp";
import styles from "@/components/about/about-masonry.module.css";

type GridImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

const images: GridImage[] = [
  { src: grid1, alt: "Team in the office" },
  { src: grid2, alt: "Office meeting" },
  { src: grid3, alt: "Client meeting" },
  {
    src: grid5,
    alt: "The people behind the projects",
    caption: "The people behind the projects",
  },
  { src: grid6, alt: "Collaborative workspace" },
  { src: grid3, alt: "Studio environment" },
  { src: grid7, alt: "Team playing pool" },
  { src: grid8, alt: "Design team at work" },
  { src: grid2, alt: "Office culture" },
];

export function AboutImageGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <motion.figure
            key={`${image.alt}-${index}`}
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
