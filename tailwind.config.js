/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#030712", // Preto profundo principal
          deep: "#09090B",     // Cor secundária de fundo
          card: "#111116",     // Fundo cinza-escuro de cards
          border: "rgba(255, 255, 255, 0.08)",
        },
        neon: {
          cyan: "#06B6D4",     // Cyan Neon
          violet: "#7C3AED",   // Violeta Deep
          green: "#10B981",    // Verde Matrix / LED
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        heading: ["'Space Grotesk'", "sans-serif"],
      },
      boxShadow: {
        'glow-cyan': "0 0 20px rgba(6, 182, 212, 0.35)",
        'glow-violet': "0 0 20px rgba(124, 58, 237, 0.35)",
        'glow-green': "0 0 15px rgba(16, 185, 129, 0.35)",
      }
    },
  },
  plugins: [],
}
