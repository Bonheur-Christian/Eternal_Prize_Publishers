import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Montserrat, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Choose the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eternal Prize",
  description: "Book Publishing Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
