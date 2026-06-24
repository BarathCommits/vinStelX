import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "vinStelX",
    template: "%s — vinStelX",
  },
  description:
    "Orbital infrastructure for the data age. Building compute at the edge of space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: "#06060a", color: "#eceef4" }}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
