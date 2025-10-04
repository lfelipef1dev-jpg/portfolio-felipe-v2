import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe - Full Stack Developer",
  description: "Portfolio de Felipe - Desenvolvedor Full Stack especializado em React, Next.js e TypeScript",
  keywords: ["desenvolvedor", "full stack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Felipe" }],
  openGraph: {
    title: "Felipe - Full Stack Developer",
    description: "Portfolio de Felipe - Desenvolvedor Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

