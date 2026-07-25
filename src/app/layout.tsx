import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parla Català — Aprèn Català des de l'Espanyol",
  description:
    "Plataforma gamificada d'aprenentatge de català per a parlants nadius d'espanyol. Exercicis de conversa i escriptura interactius amb avatars dinàmics, correcció gramatical i reconeixement de veu.",
  keywords: [
    "aprendre català",
    "català per a castellanoparlants",
    "aprenentatge d'idiomes",
    "gamificació",
    "falsos amics català",
  ],
  openGraph: {
    title: "Parla Català — Aprèn Català de forma interactiva",
    description:
      "Aplicació estil Duolingo per aprendre català amb exercicis de veu, escriptura i avatars dinàmics.",
    type: "website",
    locale: "ca_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
