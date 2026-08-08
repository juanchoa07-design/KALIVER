import localFont from "next/font/local";
import { Aldrich } from "next/font/google";

/**
 * TEMPORARY display font. The real Kaliver headline typeface (the blocky,
 * industrial face shown in the brand's hero mockup) isn't in the brand
 * assets folder yet — swap this for a localFont() pointing at the real
 * file the moment it's provided.
 */
export const displayFont = Aldrich({
  subsets: ["latin"],
  weight: "400",
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
