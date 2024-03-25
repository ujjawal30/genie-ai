import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import "./globals.css";

const inter = Roboto_Flex({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "GenieAI",
  description: "An AI Platform",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
