import localFont from "next/font/local";

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
