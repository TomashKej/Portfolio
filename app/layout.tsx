import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TomaszDev",
  description: "Tomasz Developer Portfolio",
};

/**
 * RootLayout component that wraps the entire application, providing global styles and layout structure.
 * @param param0
 * @returns
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
            <main className="flex-grow flex items-center justify-center">
              {children}
            </main>
        <Footer />
      </body>
    </html>
  );
}
