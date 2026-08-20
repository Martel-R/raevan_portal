"use client"

import React from "react"
import { motion } from "framer-motion"
import { Tv, MessageSquare } from "lucide-react"
import RaevanIcon from "@/components/ui/RaevanIcon"

export default function Navbar() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5596981131536"

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl animate-in"
    >
      <div className="glassmorphism rounded-full px-8 sm:px-10 py-4 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/5 relative">
        
        {/* Logo e Status Indicator */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2.5">
            <RaevanIcon className="h-6 w-6" />
            <span className="text-xl font-heading font-black tracking-wider text-white">
              RAEVAN
            </span>
          </a>
          
          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block"></div>
          
          {/* LED Indicator */}
          <div className="hidden sm:flex items-center space-x-2 bg-slate-950/60 rounded-full px-3 py-1 border border-white/5">
            <span className="h-2 w-2 rounded-full bg-neon-green led-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-neon-green uppercase">
              RAEVAN ONLINE
            </span>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="hidden md:flex items-center space-x-7">
          <a href="#ecossistema" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
            Ecossistema
          </a>
          <a href="#verticais" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
            Verticais
          </a>
          <a href="#tech-stack" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
            Tech Stack
          </a>
          <a href="#conectar" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
            Conectar
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-transparent border border-neon-cyan/40 hover:border-neon-cyan/90 text-neon-cyan text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow-cyan"
          >
            {/* Efeito Glow interno no Hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <MessageSquare className="h-3.5 w-3.5 mr-2" />
            <span>Falar com Engenharia</span>
          </a>
        </div>
        
      </div>
    </motion.header>
  )
}
