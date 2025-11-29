import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dazzle Gift - Быстро. Доступно. Профессионально",
  description: "Your trusted partner for printing and souvenir services. Fast, affordable, and professional solutions for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
