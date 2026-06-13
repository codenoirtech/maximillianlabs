"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & Managing Director",
    image: media.about.team[0],
    bio: "Alex founded Maximillian Labs with a focus on combining design quality with measurable performance, building the agency into a trusted partner for ambitious brands worldwide.",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    image: media.about.team[1],
    bio: "Sarah oversees day-to-day operations, ensuring every project is delivered efficiently, collaboratively, and on budget across our globally connected team.",
  },
  {
    name: "James Wright",
    role: "Creative Director",
    image: media.about.team[2],
    bio: "James specialises in creating innovative visual concepts that solve complex problems and help clients achieve their business goals through exceptional design.",
  },
  {
    name: "Emily Foster",
    role: "Technical Director",
    image: media.about.team[0],
    bio: "Emily leads front-end development, bringing creative flair and intelligent code together to deliver polished, high-performance digital experiences.",
  },
];

export function AboutTeam() {
  return (
    <section className="overflow-hidden bg-white px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em] text-black">
            Meet the Experts
          </h2>
        </FadeIn>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:mt-16 [&::-webkit-scrollbar]:hidden">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[min(85vw,320px)] shrink-0 snap-start sm:w-[360px]"
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-normal text-black">{member.name}</h3>
              <p className="mt-1 text-sm tracking-wide text-black/50 uppercase">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black/75">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
