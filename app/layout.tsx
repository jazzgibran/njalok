import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N'Jalok Kopi",
  description: "Web profile milik N'Jalok Kopi",
};

import { DM_Serif_Display, Cinzel } from "next/font/google";

const dm_Serif_Display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-dm',
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_Serif_Display.variable} ${cinzel.variable}`}>{children}</body>
    </html>
  );
}
