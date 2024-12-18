import type { Metadata } from "next";
import localFont from "next/font/local";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
import { NoSSR } from "@/components/nossr";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NoSSR>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ToasterProvider />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </NoSSR>
        </body>
      </html>
    </ClerkProvider>
  );
}
