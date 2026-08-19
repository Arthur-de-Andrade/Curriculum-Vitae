import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur de Andrade | Desenvolvedor de Software",
  description:
    "Portfólio profissional de Arthur de Andrade de Cerqueira Leite, desenvolvedor de software com atuação em Java, Spring Boot, SQL e inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
