import localFont from "next/font/local";

export const kollektifSans = localFont({
  src: [
    {
      path: "../public/fonts/kollektif/Kollektif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/kollektif/Kollektif-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kollektif",
  display: "swap",
});
