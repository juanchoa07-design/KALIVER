import localFont from "next/font/local";

export const nhgDisplay = localFont({
  src: [
    { path: "../../public/fonts/NHGDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/NHGDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/NHGDisplay-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const nhgText = localFont({
  src: [
    { path: "../../public/fonts/NHGText-Roman.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NHGText-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/NHGText-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-text",
  display: "swap",
});
