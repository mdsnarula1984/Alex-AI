/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Play, CheckCircle, Database, Bot, RefreshCw, Zap } from "lucide-react";

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [typingText, setTypingText] = useState("");
  
  // Custom typing effect mimicking an AI writer in the dashboard mockup
  const fullAgentDraft = "Hi Sarah, analyzed Vanguard Corp. Your CRM sync bottleneck is automated. Let's connect!";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    setTypingText("");
    
    const typingInterval = setInterval(() => {
      if (index < fullAgentDraft.length) {
        setTypingText((prev) => prev + fullAgentDraft.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Reset after a delay
        setTimeout(() => {
          setTypingText("");
          index = 0;
        }, 5000);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, [activeStep]); // restart typing occasionally

  const scrollToBooking = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated Glowing Ambient Backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] pulsing-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pulsing-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/5 w-fit">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono tracking-wider text-blue-400 font-bold uppercase">
                AI Automation Consultant
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.08] text-balance">
              Automate Repetitive Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Scale Your Business Faster.
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-sans max-w-xl font-light leading-relaxed">
              I help scaling companies streamline operations, eliminate manual bottlenecks, and unlock growth through high-yield, secure AI-powered automation systems.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => scrollToBooking("booking")}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-semibold text-base tracking-wide hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToBooking("case-studies")}
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-white font-medium text-base tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View Case Studies
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-10 grid grid-cols-3 gap-4 border-t border-white/5 max-w-lg mt-4">
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  100+
                </p>
                <p className="text-xs text-slate-400 font-mono tracking-wider mt-1.5 uppercase font-medium">
                  Workflows Built
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  50k+
                </p>
                <p className="text-xs text-slate-400 font-mono tracking-wider mt-1.5 uppercase font-medium">
                  Hours Saved
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-slate-300 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  95%
                </p>
                <p className="text-xs text-slate-400 font-mono tracking-wider mt-1.5 uppercase font-medium">
                  Client Retention
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Custom Interactive AI Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full lg:h-full flex items-center justify-center">
            
            {/* Visual glow frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-xl opacity-80" />

            {/* Dashboard Container */}
            <div className="w-full max-w-[440px] rounded-2xl p-4 sm:p-5 glass-card relative border border-white/10 shadow-2xl overflow-hidden font-mono text-left">
              
              {/* Fake Menu / Status Top Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-x-1.5 gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                    SYSTEM: ACTIVE
                  </span>
                </div>
              </div>

              {/* Grid backdrop overlay in glass card */}
              <div className="absolute inset-0 grid-bg-fine opacity-25 pointer-events-none" />

              {/* Card 1: Core Processing Agent Node */}
              <div className="mb-4 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-blue-400" />
                    INTELLIGENT ROUTER AGENT
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider">
                    Tier A
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 relative overflow-hidden text-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-slate-400">
                    <span className="text-[10px] text-cyan-400">$</span>
                    <span>Monitoring: info@enterprise.com</span>
                  </div>
                  <div className="h-5 flex items-center text-slate-200">
                    {activeStep === 0 && <span className="text-blue-400 animate-pulse">Initializing pipeline...</span>}
                    {activeStep === 1 && <span className="text-cyan-400 animate-pulse">Running lead qualifying script...</span>}
                    {activeStep === 2 && <span className="text-emerald-400 animate-pulse">Drafting automated email via LLM parameters...</span>}
                    {activeStep === 3 && <span className="text-purple-400 animate-pulse">Syncing HubSpot client card & Slack details...</span>}
                  </div>
                </div>
              </div>

              {/* Animated Floating Connector Dots/Pulse */}
              <div className="flex justify-center -my-1 h-6 relative z-10">
                <div className="w-[1px] h-full bg-gradient-to-b from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce shadow-glow" />
                </div>
              </div>

              {/* Card 2: AI Email Drafter Mockup */}
              <div className="mb-4 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    AI DRAFTER API
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold uppercase tracking-wider">
                    Model: Claude-3.5
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 min-h-[75px] relative">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1 border-b border-white/5 pb-1 flex justify-between">
                    <span>Inbound Lead Enrichment Output</span>
                    <span className="text-blue-400 uppercase">Personalised Template 2</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light mt-1.5 line-clamp-3 font-sans italic">
                    {typingText}
                    <span className="w-1 h-3.5 inline-block bg-cyan-400 animate-pulse ml-0.5" />
                  </p>
                </div>
              </div>

              {/* Card 3: Live Output Telemetry */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase block mb-1">
                    API Status
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs text-white font-medium">HUBSPOT SYNCED</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase block mb-1">
                    Latency Saved
                  </span>
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "5s" }} />
                    <span className="text-xs text-emerald-300 font-semibold font-mono">
                      -3.5 HOURS
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* floating tiny decorative tags */}
            <div className="absolute top-10 -left-6 px-3 py-1.5 rounded-lg border border-white/5 bg-slate-950/60 backdrop-blur-sm text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-lg group hover:scale-105 transition-all">
              <Zap className="w-3 h-3 text-cyan-400 animate-bounce" />
              <span>Lead Automation Active</span>
            </div>
            
            <div className="absolute bottom-6 -right-4 px-3 py-1.5 rounded-lg border border-white/5 bg-slate-950/60 backdrop-blur-sm text-[10px] font-mono text-purple-400 flex items-center gap-1.5 shadow-lg group hover:scale-105 transition-all">
              <CheckCircle className="w-3 h-3 text-purple-400" />
              <span>CRM Synced (100%)</span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
