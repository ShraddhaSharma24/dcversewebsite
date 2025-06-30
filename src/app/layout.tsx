import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dcverse",
  description: "Take Your Brand to the Next Level",
  icons: [{ rel: 'icon', url: '/Dcverse_logo.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
