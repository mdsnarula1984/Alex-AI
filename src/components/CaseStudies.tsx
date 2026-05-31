/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { caseStudiesData } from "../data";
import { ArrowLeftRight, CheckCircle, ChevronRight, Sparkles, TrendingUp, Undo2, X } from "lucide-react";

export default function CaseStudies() {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);

  const activeStudy = caseStudiesData[activeStudyIndex];

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-cyan-400 font-bold uppercase mb-4">
            Proven Performance Telemetry
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Client Success Records
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4">
            We don&apos;t just code connectors. We build permanent operational infrastructure that lowers costs, removes delay margins, and converts leads.
          </p>
        </div>

        {/* Case Study Grid & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left list - select case study (cols 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {caseStudiesData.map((study, index) => {
              const isActive = index === activeStudyIndex;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveStudyIndex(index)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900 border-blue-500/50 text-white shadow-xl shadow-blue-500/10"
                      : "bg-card-slate/30 border-white/5 text-slate-400 hover:text-slate-100 hover:bg-card-slate/50"
                  }`}
                >
                  <span className={`text-[10px] font-mono font-medium uppercase tracking-wider block mb-2 ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                    {study.category}
                  </span>
                  
                  <h3 className="font-display font-bold text-lg md:text-xl leading-snug">
                    {study.clientName}
                  </h3>
                  
                  <p className="text-xs text-slate-400 font-light mt-2 line-clamp-2">
                    {study.tagline}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${isActive ? "text-blue-400" : "text-slate-500"}`}>
                      Metric: {study.metric}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-cyan-400 translate-x-1" : "text-slate-500"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Panel with Interactive Slider or comparison nodes (cols 8) */}
          <div className="lg:col-span-8">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-[1px]" />
            
            <div className="relative rounded-3xl bg-card-slate/40 border border-white/10 p-6 sm:p-8 lg:p-10 glass-card">
              
              {/* Category label & large metric badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-purple-400 block mb-1">
                    {activeStudy.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    {activeStudy.clientName}
                  </h3>
                </div>

                <div className="flex items-center gap-3.5 bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 border border-blue-500/20 px-5 py-3 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <div className="text-left leading-tight">
                    <p className="font-display font-extrabold text-2xl text-cyan-400 leading-none">
                      {activeStudy.metric}
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                      {activeStudy.metricLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Before vs After comparison layout cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Before Card */}
                <div className="p-5 rounded-2xl bg-[#ef4444]/5 border border-[#ef4444]/15 relative">
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-[#ef4444]/10 text-[#ef4444] text-[9px] font-mono font-bold">
                    PRE-AUTOMATION
                  </div>
                  <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                    Manual Sandbox Bottlenecks
                  </h4>
                  <p className="text-xs text-slate-350 leading-relaxed font-sans font-light">
                    {activeStudy.beforeState}
                  </p>
                </div>

                {/* After Card */}
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 relative">
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold">
                    POST-IMPLEMENTATION
                  </div>
                  <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    Streamlined AI Operations
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                    {activeStudy.afterState}
                  </p>
                </div>
              </div>

              {/* Specific success criteria list */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-slate-450 uppercase tracking-widest font-bold">
                  Operational Metrics & Outcomes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeStudy.detailedResults.map((result, iIndex) => (
                    <div key={iIndex} className="p-3.5 rounded-xl bg-slate-900 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-light leading-snug">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools chips used */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-medium mr-2">
                  System Toolstack Integrations:
                </span>
                {activeStudy.toolsUsed.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[11px] font-mono text-slate-300 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
