import React from "react"

interface RaevanIconProps {
  className?: string
  size?: number
}

export default function RaevanIcon({ className = "h-8 w-8", size }: RaevanIconProps) {
  const sizeStyle = size ? { width: size, height: size } : {}

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={sizeStyle}
    >
      {/* 1. Escudo Hexagonal Externo com Gradiente Tríplice da RAEVAN */}
      <polygon
        points="50,5 93,30 93,80 50,95 7,80 7,30"
        stroke="url(#raevan-brand-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-90"
      />
      
      {/* 2. Haste Vertical do 'R' em Cyan Neon (Vertente de Software Engineering) */}
      <path
        d="M35 28 V70"
        stroke="#06B6D4"
        strokeWidth="7"
        strokeLinecap="round"
      />
      
      {/* 3. Arco Superior do 'R' em Violeta Deep (Vertente de Inteligência Artificial) */}
      <path
        d="M35 28 H54 C64 28 64 47 54 47 H35"
        stroke="#7C3AED"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* 4. Haste Diagonal / Trilha IoT em Verde Matrix (Vertente de Automação Smart) */}
      <path
        d="M46 47 L63 67"
        stroke="#10B981"
        strokeWidth="7"
        strokeLinecap="round"
      />
      
      {/* 5. Nós de Conectividade do Circuito Inteligente */}
      {/* Nó final do R (Automação/Espaços) */}
      <circle cx="63" cy="67" r="4.5" fill="#10B981" />
      {/* Nó do arco (IA) */}
      <circle cx="54" cy="28" r="3" fill="#7C3AED" />
      
      {/* Definições de Gradientes */}
      <defs>
        <linearGradient id="raevan-brand-grad" x1="7" y1="5" x2="93" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </svg>
  )
}
