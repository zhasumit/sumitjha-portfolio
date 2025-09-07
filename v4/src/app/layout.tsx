import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const productFont = localFont({
  src: "../fonts/ProductSans-Regular.ttf",
})

export const metadata: Metadata = {
  title: "Sumit Jha",
  description: "Software developer Engineer I",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icons/sumitjha.png" />
      </head>
      <body className={`${productFont.className} ${geistSans.variable} ${geistMono.variable} antialiased text-lg`}>
        <ThemeProvider>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}