import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cocktail Bar",
  description: "Experience craft cocktails in an elegant atmosphere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
