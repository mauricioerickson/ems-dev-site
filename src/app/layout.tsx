// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMS Dev - Desenvolvimento Web, Apps e Consultoria",
  description:
    "EMS Dev: desenvolvimento web, aplicativos, automações, ETL, consultoria técnica e suporte especializado para negócios que precisam de resultados reais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
