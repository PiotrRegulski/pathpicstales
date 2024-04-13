import type { Metadata } from "next";
import {  libreBaskerville,rowdies } from "@/components/ui/fonts";
import "./globals.css";
import Header from "@/components/ui/header/Header";

export const metadata: Metadata = {
  title: "PathPicsTales",
  description: "Generated by humans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rowdies.className} antialiased bg-gradient-to-r from-lime-200 via-white to-lime-200 overflow-x-hidden `}
      >
        <main className="w-full mx-auto lg:my-[4%]  md:p-1">
          
          <Header />
          {children}
          {/* <h2>stopka</h2> */}
        </main>
      </body>
    </html>
  );
}
