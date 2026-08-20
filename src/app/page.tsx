"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Tv, 
  MessageSquare, 
  ArrowDown, 
  Layers, 
  Compass, 
  Cpu, 
  Binary, 
  LineChart, 
  Activity, 
  Settings, 
  Database, 
  Globe, 
  ArrowRight,
  ShieldCheck
} from "lucide-react"

// Importar Componentes Criados
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"
import BentoGrid from "@/components/BentoGrid"
import Terminal from "@/components/Terminal"

export default function Home() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5596981131536"

  return (
    <main className="min-h-screen bg-obsidian text-slate-100 relative overflow-hidden select-none">
      {/* 1. Background de Partículas Interativo (HTML5 Canvas Otimizado) */}
      <ParticleBackground />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SEÇÃO 2: HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2.5 bg-obsidian-card border border-white/5 rounded-full px-3.5 py-1.5"
            >
              <Layers className="h-4 w-4 text-neon-cyan animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                ENGINEERING THE FUTURE OF SOFTWARE, DATA & HARDWARE
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-6xl font-heading font-black tracking-tight leading-none text-white"
            >
              Arquitetura Digital,<br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-indigo-500 bg-clip-text text-transparent">
                Inteligência Autônoma
              </span><br />
              e Ambientes Conectados.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              A **RAEVAN** engendra a infraestrutura tecnológica completa de empresas modernas: sistemas de alta disponibilidade, ecossistemas de inteligência de dados com Apache Superset e automação de espaços preditivos de alto padrão.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#ecossistema"
                className="bg-neon-cyan hover:bg-neon-cyan/90 text-black text-xs font-heading font-black uppercase tracking-wider px-6 py-4 rounded-xl text-center shadow-lg shadow-neon-cyan/20 hover:shadow-glow-cyan transition-all duration-300"
              >
                Explorar Verticais
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism hover:bg-slate-900/60 text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-center border border-white/10 hover:border-white/20 transition-all"
              >
                Falar com Engenharia
              </a>
            </motion.div>

          </div>

          {/* Hero Right Visual (Apresentação interativa em SVG/CSS) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square rounded-full border border-white/5 flex items-center justify-center bg-[#09090b]/20 shadow-inner">
              
              {/* Órbita Externa (Smart) */}
              <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-neon-green/10 animate-[spin_50s_linear_infinite] flex items-center justify-center">
                <span className="absolute top-0 h-2.5 w-2.5 rounded-full bg-neon-green shadow-glow-green"></span>
              </div>

              {/* Órbita Média (AI) */}
              <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-neon-violet/15 animate-[spin_30s_linear_infinite_reverse] flex items-center justify-center">
                <span className="absolute right-0 h-2.5 w-2.5 rounded-full bg-neon-violet shadow-glow-violet"></span>
              </div>

              {/* Órbita Interna (Software) */}
              <div className="absolute w-[35%] h-[35%] rounded-full border border-dashed border-neon-cyan/20 animate-[spin_15s_linear_infinite] flex items-center justify-center">
                <span className="absolute bottom-0 h-2 w-2 rounded-full bg-neon-cyan shadow-glow-cyan"></span>
              </div>

              {/* Nó Central (RAEVAN Core) */}
              <div className="relative z-10 p-6 bg-obsidian-card border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl shadow-neon-cyan/5">
                <div className="text-center">
                  <span className="text-xl font-heading font-black tracking-widest text-white">R</span>
                  <div className="h-1 w-8 bg-neon-cyan mx-auto mt-1.5 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Efeitos de feixes de dados luminosos */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_60%)]"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 3: ECOSSISTEMA BENTO GRID */}
      {/* ========================================================================= */}
      <BentoGrid />

      {/* ========================================================================= */}
      {/* SEÇÃO 4: CORE TECH STACK */}
      {/* ========================================================================= */}
      <section id="tech-stack" className="py-24 px-6 relative z-10 max-w-6xl mx-auto border-t border-white/5">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon-violet font-mono text-xs font-bold tracking-widest uppercase bg-neon-violet/10 px-3 py-1 rounded-full border border-neon-violet/20">
            Músculo Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mt-4 tracking-tight">
            Nossa Matriz Tecnológica
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Nós dominamos as ferramentas que regem a engenharia de ponta. Tecnologia robusta escalada para produção global.
          </p>
        </div>

        {/* Matriz Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1 - Software Engineering */}
          <div className="bg-[#09090b]/50 border border-white/5 rounded-2xl p-6 hover:border-neon-cyan/20 transition-all duration-300">
            <h3 className="text-sm font-heading font-black tracking-wider text-neon-cyan uppercase mb-6 flex items-center space-x-2">
              <Binary className="h-4 w-4" />
              <span>Software Engineering</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "Tailwind", "TypeScript", "REST APIs", "gRPC"].map(tech => (
                <span key={tech} className="text-xs font-mono bg-obsidian-card border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 font-semibold hover:border-neon-cyan/30 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Data & Artificial Intelligence */}
          <div className="bg-[#09090b]/50 border border-white/5 rounded-2xl p-6 hover:border-neon-violet/20 transition-all duration-300">
            <h3 className="text-sm font-heading font-black tracking-wider text-neon-violet uppercase mb-6 flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>Data & AI</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Apache Superset", "Python", "Pipelines ETL", "SQL", "LLMs", "LangChain", "Agents Frameworks", "Vector Databases", "Redis", "Supabase"].map(tech => (
                <span key={tech} className="text-xs font-mono bg-obsidian-card border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 font-semibold hover:border-neon-violet/30 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna 3 - Smart Automation */}
          <div className="bg-[#09090b]/50 border border-white/5 rounded-2xl p-6 hover:border-neon-green/20 transition-all duration-300">
            <h3 className="text-sm font-heading font-black tracking-wider text-neon-green uppercase mb-6 flex items-center space-x-2">
              <Cpu className="h-4 w-4" />
              <span>Smart Automation</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Home Assistant", "Control4", "IoT Protocols", "Zigbee", "Z-Wave", "ESP32", "MQTT Broker", "Modbus", "Smart Circuits", "Automation logic"].map(tech => (
                <span key={tech} className="text-xs font-mono bg-obsidian-card border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 font-semibold hover:border-neon-green/30 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 5: TERMINAL DE CONTATO DIRETO (HUB) */}
      {/* ========================================================================= */}
      <Terminal />

      {/* ========================================================================= */}
      {/* SEÇÃO 6: FOOTER CIBERNÉTICO */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/5 bg-black/40 py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-2">
            <h2 className="text-md font-heading font-black tracking-widest text-white uppercase">
              RAEVAN Tech Group
            </h2>
            <p className="text-xs text-slate-500">
              © 2026 RAEVAN Tech Group. Todos os direitos reservados.
            </p>
          </div>

          {/* Subdomínios Mapeados */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            <a href="https://dev.raevan.com.br" target="_blank" rel="noopener" className="hover:text-neon-cyan transition-colors">
              dev.raevan.com.br
            </a>
            <a href="https://ai.raevan.com.br" target="_blank" rel="noopener" className="hover:text-neon-violet transition-colors">
              ai.raevan.com.br
            </a>
            <a href="https://smart.raevan.com.br" target="_blank" rel="noopener" className="hover:text-neon-green transition-colors">
              smart.raevan.com.br
            </a>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-950/60 rounded-full px-4 py-1.5 border border-white/5">
            <Globe className="h-4 w-4 text-neon-cyan animate-pulse" />
            <span>HQ: MACAPÁ, AMAPÁ, BRASIL</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
