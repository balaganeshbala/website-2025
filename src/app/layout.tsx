import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; // Import Quicksand
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "My Personal Website", // Update title
  description: "A personal website built with Next.js", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}> {/* Apply Quicksand font */}
        {children}
      </body>
    </html>
  );
}
