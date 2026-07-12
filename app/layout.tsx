import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tomasz.dev | Software Developer",
  description: "Modern software developer portfolio focused on .NET, backend architecture, and full-stack business applications.",
};

/**
 * RootLayout wraps every route with shared navigation, page flow, and footer.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-text-light">
        <Navbar />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
