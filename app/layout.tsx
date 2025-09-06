import type { Metadata } from "next";
import {Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Open_Sans({subsets:['latin']});

export const metadata: Metadata = {
  title: "ConnectHub",
  description: "Group Chat Application",
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
        className={(font.className, "bg-white dark:bg-[#141517]")}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
