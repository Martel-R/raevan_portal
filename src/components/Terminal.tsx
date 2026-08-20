"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Terminal as TerminalIcon, ShieldAlert, Sparkles, MessageSquare } from "lucide-react"

export default function Terminal() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5596981131536"
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "RAEVAN Core OS v2.0.26 - Sincronizado",
    "Establecendo conexões de túnel criptografadas...",
    "RAEVAN HUB: ONLINE | APIS: OPERATIONAL",
    "Digite 'help' ou aperte no botão abaixo para iniciar diálogo técnico."
  ])

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const input = terminalInput.trim().toLowerCase()
    if (!input) return

    let response = ""
    switch (input) {
      case "help":
        response = "Comandos disponíveis: 'help' (este menu), 'status' (telemetria), 'contact' (abrir chat WhatsApp), 'clear' (limpar logs)"
        break
      case "status":
        response = "HOST: raevan.com.br | APIS: 200 OK | MEMORY: OPTIMAL | SERVICES: UP"
        break
      case "contact":
        response = "Redirecionando para canal de engenharia no WhatsApp..."
        window.open(whatsappUrl, "_blank")
        break
      case "clear":
        setTerminalLogs([])
        setTerminalInput("")
        return
      default:
        response = `Comando não reconhecido: '${input}'. Digite 'help' para ajuda.`
    }

    setTerminalLogs([...terminalLogs, `> ${terminalInput}`, response])
    setTerminalInput("")
  }

  return (
    <section id="conectar" className="py-24 px-6 relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-neon-cyan/5"
      >
        {/* Terminal Header */}
        <div className="bg-slate-900/60 border-b border-white/5 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="h-4 w-4 text-neon-cyan" />
            <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
              RAEVAN CORE TERMINAL — CONEXÃO SEGURA
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green led-pulse"></span>
            <span className="text-[10px] font-mono text-neon-green font-bold uppercase tracking-widest">
              HUB SECURE
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs text-slate-300 min-h-[260px] flex flex-col justify-between">
          <div className="space-y-2">
            {terminalLogs.map((log, idx) => (
              <p 
                key={idx} 
                className={`${
                  log.startsWith(">") 
                    ? "text-neon-cyan font-bold" 
                    : log.includes("ONLINE") || log.includes("OK")
                    ? "text-neon-green"
                    : "text-slate-400"
                }`}
              >
                {log}
              </p>
            ))}
          </div>

          {/* Form Command Line */}
          <form onSubmit={handleTerminalSubmit} className="mt-8 pt-4 border-t border-white/5 flex items-center">
            <span className="text-neon-cyan font-bold mr-2.5">guest@raevan:~#</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Digite comandos aqui (ex: help, status)..."
              className="bg-transparent border-none outline-none text-slate-200 text-xs w-full focus:ring-0"
              autoComplete="off"
            />
          </form>
        </div>

        {/* Terminal Footer / CTA */}
        <div className="bg-slate-900/40 border-t border-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5 text-xs text-slate-400 font-mono">
            <ShieldAlert className="h-4 w-4 text-amber-500" />
            <span>Conexão externa autenticada via TLS 1.3</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-neon-cyan hover:bg-neon-cyan/90 text-black text-xs font-heading font-black uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-neon-cyan/20 hover:shadow-glow-cyan"
          >
            <MessageSquare className="h-4 w-4 mr-2 text-black" />
            <span>Iniciar Diálogo Técnico</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
