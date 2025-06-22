import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; // Import Quicksand
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "Balaganesh S", // Update title
  description: "Welcome to my personal website", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={quicksand.className}> {/* Apply Quicksand font */}
        {children}
      </body>
    </html>
  );
}
