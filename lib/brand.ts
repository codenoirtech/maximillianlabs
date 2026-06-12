export const brand = {
  colors: {
    obsidian: "#0a0a0a",
    ivory: "#f0f0f0",
    cyan: "#00ffff",
    gray: "#9d9d9b",
    grayLight: "#d9d9d9",
  },
  gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
  radius: "0.75rem",
} as const;

export const logos = {
  primary: "/logos/logo-primary.png",
  white: "/logos/logo-white.png",
  black: "/logos/logo-black.png",
  cyan: "/logos/logo-cyan.png",
  iconWhite: "/icons/icon-white.png",
  iconBlack: "/icons/icon-black.png",
  iconCyan: "/icons/icon-cyan.png",
} as const;

export const media = {
  services: "/media/services.png",
  projectShowcase: "/media/project-showcase.png",
  tips: "/media/tips.png",
  webFacts: [
    "/media/web-facts-1.png",
    "/media/web-facts-2.png",
    "/media/web-facts-3.png",
    "/media/web-facts-4.png",
  ],
  mockups: {
    site: "/mockups/site-mockup.png",
    wayfinder: "/mockups/wayfinder-mockup.png",
    businessCard: "/mockups/business-card-mockup.png",
  },
  about: {
    hero: "/images/about/grid-hero.png",
    grid: [
      "/images/about/grid-1.avif",
      "/images/about/grid-2.webp",
      "/images/about/grid-3.webp",
      "/images/about/grid-5.webp",
      "/images/about/grid-6.webp",
      "/images/about/grid-7.avif",
      "/images/about/grid-8.webp",
    ],
  },
} as const;
