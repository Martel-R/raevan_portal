"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Cpu, Code, Database, BrainCircuit, ExternalLink, Zap, Network } from "lucide-react"

export default function BentoGrid() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  // Animações
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="ecossistema" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
      
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest uppercase bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
          Ecossistema Integrado
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mt-4 tracking-tight">
          As Verticais de Engenharia RAEVAN
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          Nós arquitetamos, modelamos e controlamos a cadeia completa de tecnologia. Navegue pelas nossas divisões operacionais.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        
        {/* BLOCO 1 (GRANDE - 2 Colunas) - Rextor AI & DATA */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleMouseMove}
          className="md:col-span-2 glow-card glow-border-violet bg-obsidian-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[420px]"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
            <div className="max-w-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-neon-violet/10 rounded-xl text-neon-violet border border-neon-violet/20">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-neon-violet uppercase bg-neon-violet/10 px-2 py-0.5 rounded border border-neon-violet/20">
                  ai.raevan.com.br
                </span>
              </div>
              
              <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
                Rextor — AI & DATA PLATFORM
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Engeharia de Big Data de ponta a ponta. Construção de esteiras ETL hiper-resilientes, visualização corporativa de alta fidelidade com **Apache Superset**, treinamento e orquestração de Agentes Autônomos de Inteligência Artificial integrados à sua operação.
              </p>
              
              <a
                href="https://ai.raevan.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-neon-violet hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Acessar Rextor AI</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Visual Interativo Simulando IA/Código */}
            <div className="flex-1 max-w-[300px] w-full bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] text-slate-500 overflow-hidden relative shadow-inner">
              <div className="absolute top-2 right-2 flex space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500/60"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60"></span>
              </div>
              <p className="text-neon-violet mb-1"># Import Rextor Neural Engine</p>
              <p className="text-slate-300">from rextor import DataPipeline</p>
              <p className="text-slate-300">import superset as bi</p>
              <br />
              <p className="text-slate-400">pipeline = DataPipeline(tenant="holding")</p>
              <p className="text-slate-400">pipeline.extract_and_train_agents()</p>
              <p className="text-neon-green mt-3 flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-green led-pulse"></span>
                <span>[INFO] Model training... 98.4%</span>
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[9px]">
                <span>DATABASE: POSTGRES</span>
                <span className="text-neon-violet">AI: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BLOCO 2 - RAEVAN Systems & Dev */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleMouseMove}
          className="glow-card glow-border-cyan bg-obsidian-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[420px]"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan border border-neon-cyan/20">
                  <Code className="h-6 w-6" />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/20">
                  dev.raevan.com.br
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                RAEVAN Systems
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Fábrica de software de alta escala. Engenharia de aplicações e microsserviços proprietários sob medida.
              </p>

              {/* Portfólio Live */}
              <div className="space-y-2 bg-black/30 border border-white/5 rounded-xl p-3">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/5 pb-2 mb-2">
                  <span className="font-bold font-mono">PORTFÓLIO PRODUTOS</span>
                  <span className="text-neon-cyan font-bold">✓ LIVE</span>
                </div>
                <div className="flex justify-between text-xs text-slate-200">
                  <span className="font-semibold">Stokout</span>
                  <span className="text-[10px] text-slate-400">PDV & Estoque Inteligente</span>
                </div>
                <div className="flex justify-between text-xs text-slate-200">
                  <span className="font-semibold">PassFlow</span>
                  <span className="text-[10px] text-slate-400">Controle de Atendimento</span>
                </div>
              </div>
            </div>

            <a
              href="https://dev.raevan.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-neon-cyan hover:text-white uppercase tracking-wider transition-colors mt-6"
            >
              <span>Explorar RAEVAN Dev</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* BLOCO 3 - RAEVAN Smart Spaces */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleMouseMove}
          className="glow-card glow-border-green bg-obsidian-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[420px]"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-neon-green/10 rounded-xl text-neon-green border border-neon-green/20">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-neon-green uppercase bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/20">
                  smart.raevan.com.br
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                RAEVAN Smart Spaces
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Engenharia de automação residencial e corporativa de altíssimo padrão. Integração total de ambientes (som, iluminação, climatização), alta eficiência energética e controle consolidado por protocolos de padrão aberto.
              </p>

              {/* Protocolos */}
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-mono bg-slate-900 border border-white/5 px-2 py-0.5 rounded text-slate-400">Zigbee</span>
                <span className="text-[9px] font-mono bg-slate-900 border border-white/5 px-2 py-0.5 rounded text-slate-400">Z-Wave</span>
                <span className="text-[9px] font-mono bg-slate-900 border border-white/5 px-2 py-0.5 rounded text-slate-400">Home Assistant</span>
                <span className="text-[9px] font-mono bg-slate-900 border border-white/5 px-2 py-0.5 rounded text-slate-400">Control4</span>
              </div>
            </div>

            <a
              href="https://smart.raevan.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-neon-green hover:text-white uppercase tracking-wider transition-colors mt-6"
            >
              <span>Ver Projetos Smart</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* BLOCO 4 (GRANDE - 2 Colunas) - Infraestrutura & Conectividade */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleMouseMove}
          className="md:col-span-2 glow-card glow-border-cyan bg-obsidian-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[420px]"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between h-full">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan border border-neon-cyan/20">
                    <Network className="h-6 w-6" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/20">
                    INTEGRATED NETWORK
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
                  Infraestrutura Conectada RAEVAN
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Nós engendramos soluções de hardware e software integradas de ponta a ponta. Servidores locais robustos, monitoramento de saúde de rede com telemetria ativa e gerenciamento unificado de filiais e displays corporativos (Sinalização Digital) para máxima visibilidade e governança de dados.
                </p>
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-neon-cyan tracking-wider">
                <Zap className="h-4 w-4 text-neon-cyan animate-pulse" />
                <span>LATÊNCIA DE RESPOSTA INFERIOR A 12ms</span>
              </div>
            </div>

            {/* Gráfico Procedural em SVG para efeito estético */}
            <div className="flex-1 max-w-[280px] w-full flex items-center justify-center bg-black/20 border border-white/5 rounded-xl p-4 relative overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full max-h-[200px] text-neon-cyan">
                <circle cx="100" cy="100" r="80" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="50" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="20" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none" />
                
                {/* Linhas de conexão */}
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                
                {/* Nós pulsantes */}
                <circle cx="100" cy="100" r="6" fill="#7C3AED" className="animate-pulse" />
                <circle cx="100" cy="20" r="4" fill="#06B6D4" />
                <circle cx="100" cy="180" r="4" fill="#10B981" />
                <circle cx="20" cy="100" r="4" fill="#06B6D4" />
                <circle cx="180" cy="100" r="4" fill="#7C3AED" />

                <circle cx="45" cy="45" r="3" fill="rgba(255,255,255,0.2)" />
                <circle cx="155" cy="155" r="3" fill="rgba(255,255,255,0.2)" />
              </svg>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">
                ACTIVE TELEMETRY
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
