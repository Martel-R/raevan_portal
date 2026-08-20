# REAVEN Tech Group - Portal Institucional

Este repositório contém o código-fonte do novo portal institucional da marca-mãe **REAVEN Tech Group** (disponível sob o domínio principal [reaven.com.br](https://reaven.com.br) ou [raevan.com.br](https://raevan.com.br)).

A plataforma foi desenvolvida para refletir o topo do estado da arte em tecnologia, transmitindo inovação, engenharia de ponta, alta performance e sofisticação visual, fugindo de layouts corporativos genéricos.

---

## 📁 Estrutura do Repositório

```text
C:\Users\marte\IdeaProjects\reaven-portal\
├── .github/
│   └── workflows/
│       └── node-build-test.yml   # Validação de compilação
├── dags/                         # Fluxos de sincronização de dados e BI (Airflow)
├── public/                       # Assets estáticos (SVGs e imagens do portal)
├── src/
│   ├── app/                      # Next.js App Router (Layouts e Páginas)
│   │   ├── layout.tsx            # Configurações de fontes, tema escuro e metadados
│   │   ├── page.tsx              # Landing Page imersiva do REAVEN Tech Group
│   │   └── global.css            # Variáveis globais de Glow e diretivas Tailwind
│   ├── components/               # Componentes visuais premium
│   │   ├── Navbar.tsx            # Floating Glassmorphism Navbar com LED "Systems Online"
│   │   ├── HeroCanvas.tsx        # Renderizador 3D do Nó Central e órbitas interativas
│   │   ├── ParticleBackground.tsx# Fundo de partículas que reage ao cursor do mouse
│   │   ├── BentoGrid.tsx         # Layout Bento Grid assimétrico das Verticais
│   │   └── ui/                   # Botões com Glow, Badges de código e cards interativos
│   └── lib/                      # Custom hooks e utilitários auxiliares
├── tailwind.config.js            # Design system da marca (Glows, Neon e Obsidian theme)
├── package.json                  # Dependências (Next, React, Framer Motion, Three.js)
└── README.md                     # Este manual de desenvolvimento
```

---

## 🚀 Estrutura de Seções de Alto Impacto

O portal está dividido em seções que criam uma jornada imersiva para o usuário:

1.  **Navbar Cibernética:** Floating Glassmorphism com indicador LED pulsante verde indicando `"REAVEN SYSTEMS ONLINE"`. CTA em Cyan Neon acionando o WhatsApp Business dedicado.
2.  **Hero Section:** Título dinâmico de alta performance com badges de engenharia. Apresentação do nó cibernético central interativo em 3D, distribuindo sinais para as três órbitas de atuação (Software, IA e Automação).
3.  **Ecossistema Bento Grid:** Layout assimétrico premium com efeitos "Glow Reativos" que acompanham o cursor do mouse:
    *   **Rextor AI & DATA (ai.reaven.com.br):** Big Data, pipelines de ETL e visualização Apache Superset com visual de terminal simulando scripts e KPIs.
    *   **REAVEN Systems (dev.reaven.com.br):** Fábrica de software de alta escala destacando os produtos proprietários *Stokout* e *PassFlow*.
    *   **REAVEN Smart (smart.reaven.com.br):** Engenharia de automação de alto padrão por protocolos abertos (IoT, Home Assistant, Zigbee).
4.  **Core Tech Stack:** Matriz visual com badges luminosos divididos em três colunas (Software, IA e Automação Smart).
5.  **Terminal de Contato Direto:** Terminal CLI simulando status Operacional do "REAVEN HUB" com botão direto para o WhatsApp de engenharia.
6.  **Footer Cibernético:** Atalhos rápidos para todos os subdomínios mapeados e links de conectividade.

---

## 💻 Configuração e Instalação Local

### Requisitos Prévios
*   **Node.js:** Versão 20+ recomendada.
*   **Git:** Para versionamento.

### Passo a Passo
1.  Entre na pasta do projeto:
    ```bash
    cd reaven-portal
    ```
2.  Instale as dependências essenciais:
    ```bash
    npm install
    ```
3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Abra o navegador em `http://localhost:3000`.

---

## 📞 Contatos Oficiais do Grupo
*   **Canal Comercial / Engenharia:** [+55 96 98113-1536](https://api.whatsapp.com/send?phone=5596981131536)
*   **E-mail corporativo:** `contato@reaven.com.br`
*   **Domínio Mãe:** `reaven.com.br`
