import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create a Cthulhu character",
  description: "Create a Cthulhu character",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto px-4 max-w-3xl">
          <Link href="/">
            <h1 className="text-center text-3xl py-7">Trail of Chuthlu v2</h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
