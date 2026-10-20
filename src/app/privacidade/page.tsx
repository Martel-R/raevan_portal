import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ShieldCheck, 
  Lock, 
  Tv, 
  Car, 
  Trash2, 
  Mail, 
  Server, 
  CheckCircle2, 
  AlertTriangle,
  ArrowLeft,
  FileText,
  Globe2,
  Cpu
} from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade | RAEVAN Tech Group",
  description: "Política de Privacidade e Proteção de Dados dos aplicativos e serviços da RAEVAN Tech Group (Bluetech Signage TV Player, Aquila X e Guardião Rural). Conformidade total com LGPD, GDPR e Google Play Data Safety.",
  robots: "index, follow",
  alternates: {
    canonical: "https://raevan.com.br/privacidade",
  }
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "19 de outubro de 2026"

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white">
      
      {/* Background Decorativo Sutil */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-violet-600/5 to-transparent blur-3xl opacity-60"></div>
      </div>

      {/* Header Fixo */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#030712]/80 border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar ao Portal RAEVAN</span>
          </Link>

          <div className="flex items-center space-x-2 bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
              LGPD & Google Play Verified
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Cabeçalho do Documento */}
        <div className="space-y-4 mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-md">
            <span>Declaração Oficial de Privacidade</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Política de Privacidade & Proteção de Dados
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Esta Política de Privacidade descreve de forma transparente e abrangente como a <strong>RAEVAN Tech Group</strong> coleta, utiliza, armazena, processa e protege os dados dos usuários em seus aplicativos móveis, softwares embarcados e plataformas conectadas.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span>Vigência: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Versão: <strong>2.1</strong></span>
            <span>•</span>
            <span>Encarregado (DPO): <strong>privacidade@raevan.com.br</strong></span>
          </div>
        </div>

        {/* Índice Rápido de Navegação */}
        <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
            <FileText className="h-4 w-4 text-cyan-400" />
            <span>Sumário das Seções</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
            <a href="#controladora" className="text-slate-400 hover:text-cyan-400 transition-colors">1. Controladora dos Dados</a>
            <a href="#aplicativos" className="text-slate-400 hover:text-cyan-400 transition-colors">2. Aplicativos Específicos Cobertos</a>
            <a href="#bluetech-signage" className="text-slate-400 hover:text-cyan-400 transition-colors">3. Bluetech Signage TV Player</a>
            <a href="#aquila-x" className="text-slate-400 hover:text-cyan-400 transition-colors">4. Aquila X (Reconhecimento Veicular)</a>
            <a href="#guardiao-rural" className="text-slate-400 hover:text-cyan-400 transition-colors">5. Guardião Rural</a>
            <a href="#compartilhamento" className="text-slate-400 hover:text-cyan-400 transition-colors">6. Compartilhamento e Não Venda</a>
            <a href="#seguranca" className="text-slate-400 hover:text-cyan-400 transition-colors">7. Segurança e Criptografia</a>
            <a href="#exclusao-dados" className="text-slate-400 hover:text-cyan-400 transition-colors">8. Exclusão de Dados e Contas</a>
            <a href="#criancas" className="text-slate-400 hover:text-cyan-400 transition-colors">9. Privacidade Infantil (COPPA)</a>
            <a href="#contato" className="text-slate-400 hover:text-cyan-400 transition-colors">10. Canal de Atendimento do Titular</a>
          </div>
        </div>

        {/* Seção 1: Controladora */}
        <section id="controladora" className="space-y-4 mb-12 scroll-mt-24">
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2.5">
            <span className="text-cyan-400">01.</span>
            <span>Identificação da Controladora dos Dados</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Os serviços, sistemas e aplicativos são desenvolvidos e mantidos pela <strong>RAEVAN Tech Group</strong>, pessoa jurídica de direito privado, atuando como Controladora de Dados nos termos da Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD) e do Regulamento Geral de Proteção de Dados (GDPR).
          </p>
          <div className="bg-[#111116] border border-white/5 rounded-xl p-4 text-xs font-mono space-y-1 text-slate-400">
            <p><strong className="text-slate-200">Organização:</strong> RAEVAN Tech Group</p>
            <p><strong className="text-slate-200">Sede:</strong> Macapá, Amapá, Brasil</p>
            <p><strong className="text-slate-200">E-mail de Contato:</strong> suporte@raevan.com.br</p>
            <p><strong className="text-slate-200">Encarregado de Proteção de Dados (DPO):</strong> privacidade@raevan.com.br</p>
          </div>
        </section>

        {/* Seção 2: Aplicativos Cobertos */}
        <section id="aplicativos" className="space-y-4 mb-12 scroll-mt-24">
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2.5">
            <span className="text-cyan-400">02.</span>
            <span>Aplicativos Cobertos por esta Política</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Esta política aplica-se especificamente aos seguintes aplicativos móveis e embarcados distribuídos nas lojas oficiais (Google Play Store e Apple App Store):
          </p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-2 pl-2">
            <li><strong>Bluetech Signage TV Player</strong> (Package: <code className="text-cyan-400 font-mono text-xs">com.bluetech.signage.player</code>)</li>
            <li><strong>Aquila X — Reconhecimento Veicular Embarcado</strong> (Package: <code className="text-cyan-400 font-mono text-xs">com.aquilax.mobile</code>)</li>
            <li><strong>Guardião Rural</strong> (Package: <code className="text-cyan-400 font-mono text-xs">com.guardiaorural.app</code>)</li>
          </ul>
        </section>

        {/* Seção 3: Bluetech Signage TV Player */}
        <section id="bluetech-signage" className="space-y-4 mb-12 scroll-mt-24 bg-[#111116]/60 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
              <Tv className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-black text-white">
                3. Bluetech Signage TV Player
              </h2>
              <p className="text-xs font-mono text-slate-400">Package ID: com.bluetech.signage.player</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            O <strong>Bluetech Signage TV Player</strong> é um software reprodutor de sinalização digital corporativa projetado exclusivamente para operar em Smart TVs, TV Boxes e displays de mídia institucional.
          </p>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            A. Dados Coletados e Finalidade Exclusiva:
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Identificador do Dispositivo (Screen ID):</strong> Código aleatório gerado durante o pareamento para identificação do display no painel do cliente.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Telemetria de Conexão e Heartbeat:</strong> Endereço IP do dispositivo, timestamp do último sinal de vida (last seen) e nome de identificação atribuído pelo administrador corporativo para fins de diagnóstico e manutenção remota.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Cache Local de Arquivos de Mídia:</strong> Vídeos e imagens vinculados às playlists corporativas são baixados e persistidos localmente no armazenamento interno da TV para garantir operação contínua sem internet (tolerância a falhas offline).</span>
            </li>
          </ul>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            B. Permissões Solicitadas no Android Manifest e Justificativa Técnica:
          </h3>
          <div className="space-y-2 text-xs font-mono bg-black/40 p-4 rounded-xl border border-white/5">
            <p><strong className="text-cyan-400">android.permission.INTERNET:</strong> Necessária para download das mídias corporativas e sincronização da programação com o servidor Supabase.</p>
            <p><strong className="text-cyan-400">android.permission.ACCESS_NETWORK_STATE:</strong> Verifica se a Smart TV está online ou offline antes de tentar novas transferências.</p>
            <p><strong className="text-cyan-400">android.permission.WAKE_LOCK:</strong> Impede que a tela da Smart TV entre em modo de suspensão ou desligue durante a exibição ininterrupta da playlist.</p>
            <p><strong className="text-cyan-400">android.permission.RECEIVE_BOOT_COMPLETED:</strong> Permite que o player inicialize automaticamente assim que o televisor é ligado na energia elétrica.</p>
            <p><strong className="text-cyan-400">android.permission.SYSTEM_ALERT_WINDOW:</strong> Utilizada em ambientes de quiosque/display comercial para garantir a execução em primeiro plano.</p>
          </div>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            C. Dados que NÃO São Coletados pelo TV Player:
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            O Bluetech Signage TV Player <strong>NÃO coleta dados pessoais de espectadores</strong>, não possui anúncios direcionados, não realiza rastreamento comportamental de transeuntes, não acessa contatos, não acessa microfone e não captura áudio ambiente.
          </p>
        </section>

        {/* Seção 4: Aquila X */}
        <section id="aquila-x" className="space-y-4 mb-12 scroll-mt-24 bg-[#111116]/60 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
              <Car className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-black text-white">
                4. Aquila X — Reconhecimento Veicular Embarcado
              </h2>
              <p className="text-xs font-mono text-slate-400">Package ID: com.aquilax.mobile</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            O <strong>Aquila X</strong> é uma solução de inteligência artificial de borda (Edge AI) embarcada em viaturas de segurança pública e órgãos de fiscalização de trânsito para reconhecimento de caracteres de placas veiculares (LPR/ALPR).
          </p>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            A. Dados Coletados e Princípio da Minimização:
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Uso da Câmera (ImageAnalysis):</strong> Utilizada exclusivamente para análise de quadros de vídeo na memória volátil visando a detecção da área da placa automotiva. O processamento de IA ocorre localmente na viatura (offline-first). <strong>Não é realizado reconhecimento facial de condutores ou pedestres.</strong></span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Geolocalização (GPS da Viatura):</strong> Coleta da latitude e longitude no instante exato da captura da placa, essencial para mapeamento geoespacial de rotas patrulhadas e registro de ponto de ocorrência.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
              <span><strong>Evidências Fotográficas Veiculares:</strong> Quando há confirmação de veículo com restrição (ex: queixa de roubo, furto ou mandado judicial), a foto do veículo e o recorte da placa são enviados de forma criptografada para o armazenamento restrito da central de operações.</span>
            </li>
          </ul>
        </section>

        {/* Seção 5: Guardião Rural */}
        <section id="guardiao-rural" className="space-y-4 mb-12 scroll-mt-24 bg-[#111116]/60 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-violet-500/10 rounded-xl border border-violet-500/20 text-violet-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-black text-white">
                5. Guardião Rural
              </h2>
              <p className="text-xs font-mono text-slate-400">Package ID: com.guardiaorural.app</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Aplicativo voltado ao monitoramento e segurança patrimonial em áreas rurais. A autenticação do produtor e do agente é realizada mediante identificador cadastral (CPF) e senha criptografada. As coordenadas geográficas são utilizadas para marcação de perímetros de propriedades e registro de rondas preventivas.
          </p>
        </section>

        {/* Seção 6: Compartilhamento e Não Venda */}
        <section id="compartilhamento" className="space-y-4 mb-12 scroll-mt-24">
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2.5">
            <span className="text-cyan-400">06.</span>
            <span>Compartilhamento de Dados e Não Comercialização</span>
          </h2>
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 text-emerald-300 text-sm leading-relaxed">
            <strong>Compromisso de Não Venda:</strong> A RAEVAN Tech Group <strong>NUNCA comercializou, não comercializa e nunca comercializará dados pessoais de usuários</strong>, nem os compartilha com corretores de dados (data brokers), agências de marketing ou redes de publicidade direcionada.
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            O compartilhamento de dados ocorre exclusivamente nas seguintes hipóteses estritas:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1.5 pl-2">
            <li><strong>Provedores de Infraestrutura de Nuvem e Hospedagem:</strong> Servidores de banco de dados (Supabase / PostgreSQL) e entrega de conteúdo sob acordos estritos de sigilo e criptografia.</li>
            <li><strong>Determinação Legal ou Judicial:</strong> Em cumprimento a ordens judiciais emitidas por autoridades competentes ou para instrução de investigações criminais de segurança pública nos moldes da legislação vigente.</li>
            <li><strong>Isolamento Multi-Tenant:</strong> Dados de cada organização cliente são totalmente segregados logicamente através de Row-Level Security (RLS), impedindo acesso cruzado entre empresas.</li>
          </ul>
        </section>

        {/* Seção 7: Segurança e Criptografia */}
        <section id="seguranca" className="space-y-4 mb-12 scroll-mt-24">
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2.5">
            <span className="text-cyan-400">07.</span>
            <span>Segurança da Informação e Criptografia</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda ou alteração:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="bg-[#111116] p-4 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Criptografia em Trânsito:</strong>
              <p className="text-slate-400">Todas as requisições utilizam HTTPS com protocolos TLS 1.2 e TLS 1.3 obrigatórios.</p>
            </div>
            <div className="bg-[#111116] p-4 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Criptografia em Repouso:</strong>
              <p className="text-slate-400">Bancos de dados e buckets de armazenamento protegidos com criptografia padrão AES-256.</p>
            </div>
            <div className="bg-[#111116] p-4 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Controle de Acesso (RBAC):</strong>
              <p className="text-slate-400">Autenticação com JWT, tokens de sessão expiráveis e isolamento estrito de permissões.</p>
            </div>
            <div className="bg-[#111116] p-4 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Auditoria e Logs:</strong>
              <p className="text-slate-400">Registros de acesso com data, hora e IP mantidos em conformidade com o Marco Civil da Internet.</p>
            </div>
          </div>
        </section>

        {/* Seção 8: Exclusão de Dados (Data Deletion Policy) */}
        <section id="exclusao-dados" className="space-y-4 mb-12 scroll-mt-24 bg-[#111116]/80 border border-red-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/20 text-red-400">
              <Trash2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-black text-white">
                08. Exclusão de Contas e Retenção de Dados (Data Deletion Policy)
              </h2>
              <p className="text-xs font-mono text-slate-400">Direito do Titular // Em conformidade com as Políticas do Google Play</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Em total transparência e em cumprimento às políticas do Google Play e da LGPD, os usuários e organizações clientes têm o direito irrestrito de solicitar a <strong>exclusão completa de seus dados pessoais e de suas contas de acesso</strong>.
          </p>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            Como Solicitar a Exclusão dos Dados:
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Para solicitar a eliminação definitiva de sua conta, credenciais ou dados vinculados aos nossos aplicativos, basta seguir o procedimento abaixo:
          </p>
          <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2 pl-2">
            <li>Envie um e-mail para <a href="mailto:privacidade@raevan.com.br" className="text-cyan-400 underline font-mono">privacidade@raevan.com.br</a> com o assunto: <code className="bg-black/60 px-2 py-0.5 rounded text-xs font-mono text-slate-200">Exclusão de Dados - [Nome do Aplicativo]</code>.</li>
            <li>Informe no corpo da mensagem o e-mail cadastrado, CPF ou o identificador do dispositivo (Screen ID) que deseja revogar.</li>
            <li>Nossa equipe de segurança processará a requisição em até <strong>15 (quinze) dias corridos</strong> e enviará uma confirmação por escrito da exclusão.</li>
          </ol>

          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pt-2">
            Dados que são Excluídos vs. Retidos por Lei:
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Ao processar a exclusão, todos os dados cadastrais, tokens de sessão e imagens de evidências são permanentemente expurgados dos servidores de produção. Apenas registros obrigatórios de conexão (como logs de acesso com IP e timestamp) são preservados pelo prazo estrito de 6 meses exigido pelo Artigo 15 da Lei nº 12.965/2014 (Marco Civil da Internet), findo o qual são sumariamente destruídos.
          </p>
        </section>

        {/* Seção 9: Privacidade Infantil */}
        <section id="criancas" className="space-y-4 mb-12 scroll-mt-24">
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2.5">
            <span className="text-cyan-400">09.</span>
            <span>Privacidade de Crianças e Menores de Idade (COPPA)</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nossos aplicativos corporativos e governamentais são estritamente direcionados a profissionais e organizações. Nós não coletamos, solicitamos ou armazenamos intencionalmente dados de crianças ou adolescentes menores de 13 anos. Caso tome conhecimento de que uma criança nos forneceu dados de forma indevida, entre em contato imediatamente para procedermos com a imediata eliminação.
          </p>
        </section>

        {/* Seção 10: Contato do DPO */}
        <section id="contato" className="space-y-6 mb-12 scroll-mt-24 bg-gradient-to-br from-cyan-950/20 to-violet-950/20 border border-cyan-500/20 rounded-2xl p-6 sm:p-8">
          <div>
            <h2 className="text-xl font-heading font-black text-white mb-2">
              10. Canal de Comunicação do Encarregado de Dados (DPO)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Para exercer seus direitos de titular (confirmação de existência, acesso, correção, anonimização, portabilidade ou revogação do consentimento), bem como para esclarecer qualquer dúvida sobre esta Política, contate diretamente o nosso Encarregado pelo Tratamento de Dados Pessoais:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:privacidade@raevan.com.br"
              className="inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-heading font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
            >
              <Mail className="h-4 w-4" />
              <span>Contatar DPO (privacidade@raevan.com.br)</span>
            </a>
            
            <a 
              href="mailto:suporte@raevan.com.br"
              className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/10 transition-colors"
            >
              <span>Suporte Técnico (suporte@raevan.com.br)</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer Simples */}
      <footer className="border-t border-white/5 bg-black/60 py-8 px-6 text-center text-xs font-mono text-slate-500">
        <p>© 2026 RAEVAN Tech Group. Todos os direitos reservados. Macapá - AP, Brasil.</p>
      </footer>

    </div>
  )
}
