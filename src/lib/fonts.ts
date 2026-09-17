import localFont from "next/font/local";
import { Barlow_Condensed } from "next/font/google";

// Display font ("Comrade") is declared manually in globals.css via @font-face
// with a unicode-range split — see the comment there for why.

export const nhgText = localFont({
  src: [
    { path: "../../public/fonts/NHGText-Roman.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NHGText-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/NHGText-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-text",
  display: "swap",
});

// Stand-in for Apotek (the brand's primary typeface, not licensed in the repo
// yet). Barlow Condensed has the same tall, narrow grotesque proportions, so
// swapping it for Apotek later only means changing this declaration.
export const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-condensed",
  display: "swap",
});
