import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Hoang Duy | Software Engineer",
  description: "Software Engineer with ~3 years of full-stack experience in React.js, Node.js, AWS, and Google Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
