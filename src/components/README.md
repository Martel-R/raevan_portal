# Componentes do Portal - REAVEN Tech Group

Esta pasta contém as interfaces de alta fidelidade visual (Creative Tech elements) do portal `reaven.com.br`.

## 🎨 Componentes Principais

*   **`Navbar.tsx`:** Barra flutuante em vidro (glassmorphism) com efeito de desfoque (`backdrop-blur-md`) e bordas translúcidas, contendo o indicador de telemetria verde neon `"REAVEN SYSTEMS ONLINE"`.
*   **`HeroCanvas.tsx`:** Canvas interativo em 3D utilizando `Three.js` (através de `@react-three/fiber` e `@react-three/drei`) representando o nó central de distribuição de dados e três órbitas de transmissão.
*   **`ParticleBackground.tsx`:** Background animado leve em Canvas 2D/3D simulando uma malha cibernética ou campo de partículas estelares que se distorce sutilmente conforme o cursor do mouse se move.
*   **`BentoGrid.tsx`:** Grade assimétrica moderna de 3 colunas que utiliza um Custom Hook em React para mapear a posição do mouse e aplicar um "Hover Glow Effect" reativo nas bordas e backgrounds dos cards.

## ⚙️ Diretórios Internos
*   **`ui/`:** Componentes atômicos reutilizáveis, como botões iluminados, badges de código do JetBrains Mono, cards padrão e modais.
