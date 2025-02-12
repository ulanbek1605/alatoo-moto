import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alatoo Moto",
  description: "Alatoo Moto - Your ultimate motorcycle destination for the latest models, reviews, and more.",
  keywords: "motorcycles, Alatoo Moto, bikes, reviews, motorcycle models, moto news",
  authors:[{name:"Alatoo Moto Team"}],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Alatoo Moto",
    description: "Alatoo Moto - Your ultimate motorcycle destination for the latest models, reviews, and more.",
    url: "https://www.alatoomoto.com",
    siteName: "Alatoo Moto",
    images: [
      {
        url: "/image/6.jpg",
        width: 1200,
        height: 630,
        alt: "Alatoo Moto Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AlatooMoto",
    creator: "@YourTwitterHandle",
    title: "Alatoo Moto",
    description: "Alatoo Moto - Your ultimate motorcycle destination for the latest models, reviews, and more.",
    images: "/image/6.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
