import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Evangeline Tanoto — Portfolio",
  description:
    "UI/UX and product designer crafting digital experiences, sharing design and UGC, and exploring digital storytelling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
