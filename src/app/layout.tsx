import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://zimobi.com.br"),
  title: { default: "Zimobi — Atendimento inteligente para imobiliárias", template: "%s | Zimobi" },
  description: "Centralize leads, automatize o atendimento no WhatsApp e aumente a conversão da sua imobiliária com IA.",
  openGraph: {
    title: "Zimobi — O futuro do atendimento imobiliário",
    description: "WhatsApp, leads, equipe e inteligência em um único lugar.",
    url: "https://zimobi.com.br",
    siteName: "Zimobi",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${jakarta.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
