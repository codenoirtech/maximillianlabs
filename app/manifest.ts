import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maximillian Labs",
    short_name: "Max Labs",
    description:
      "Award-winning London web design agency building bespoke digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f5",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
