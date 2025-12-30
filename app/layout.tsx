import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Import font
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] }); // Configure font

export const metadata: Metadata = {
  title: "Secure Terminal Link",
  description: "Restricted Access Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono} antialiased`}>
        {children}
      </body>
    </html>
  );
}
