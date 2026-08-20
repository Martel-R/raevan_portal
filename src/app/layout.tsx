import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "RAEVAN Tech Group | Engineering the Future",
  description: "Arquitetura de Software de Alta Disponibilidade, Engenharia de Dados & IA de ponta com Apache Superset e Automação Preditiva de Espaços de alto padrão.",
  keywords: "raevan, raevan tech group, dev.raevan.com.br, ai.raevan.com.br, smart.raevan.com.br, stokout, passflow, supestate, automação, home assistant, controle4, iot, desenvolvedor, amapá",
  authors: [{ name: "RAEVAN Engineering Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
