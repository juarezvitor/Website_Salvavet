import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/aos-init";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "SalvaVet 24h - Clínica Veterinária",
    template: "%s | SalvaVet 24h",
  },
  description: "Cuidado veterinário de excelência 24 horas por dia.",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://www.salvavet.com.br"), // ajuste com seu domínio real
  openGraph: {
    title: "SalvaVet 24h - Clínica Veterinária",
    description: "Cuidado veterinário de excelência 24 horas por dia.",
    url: "https://www.salvavet.com.br",
    siteName: "SalvaVet 24h",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/favicon2.png", // Adicione essa imagem na pasta public
        width: 1200,
        height: 630,
        alt: "SalvaVet - Clínica Veterinária 24h",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={montserrat.className}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
