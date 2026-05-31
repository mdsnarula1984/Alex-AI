/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { toolsExpertiseData } from "../data";
import { Sparkles, BrainCircuit, Cable, Database, Globe } from "lucide-react";

export default function ToolsExpertise() {
  const [selectedToolId, setSelectedToolId] = useState("openai");

  const activeTool = toolsExpertiseData.find((t) => t.id === selectedToolId) || toolsExpertiseData[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ai":
        return BrainCircuit;
      case "nocode":
        return Cable;
      case "crm":
        return Database;
      default:
        return Globe;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return "Cognitive AI Systems";
      case "nocode":
        return "Integration Orchestrators";
      case "crm":
        return "Customer Ledger Systems";
      default:
        return "Workspace Frameworks";
    }
  };

  const selectedCategoryIcon = getCategoryIcon(activeTool.category);

  return (
    <section className="py-24 relative overflow-hidden bg-bg-navy grid-bg-fine">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">
              Compatible Toolstack
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-zero">
            Elite Native Integrations
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
            I build resilient API bridges across market-leading cognitive language models, visual integration flowcharts, CRMs, and operations suite.
          </p>
        </div>

        {/* Content layout - Grid of buttons on left, Details card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Grid: Buttons (cols 7) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-3">
            {toolsExpertiseData.map((tool) => {
              const ToolIcon = getCategoryIcon(tool.category);
              const isSelected = tool.id === selectedToolId;

              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`p-4 rounded-xl border flex flex-col justify-between items-start text-left transition-all duration-300 relative overflow-hidden cursor-pointer h-28 ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/70 text-white shadow-lg shadow-cyan-500/10"
                      : "bg-card-slate/30 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-card-slate/50"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <ToolIcon className={`w-4.5 h-4.5 ${isSelected ? "text-cyan-400" : "text-slate-550"}`} />
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                      {tool.logoText}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wide text-white">
                      {tool.name}
                    </h3>
                    <span className="text-[9px] font-mono tracking-wider font-medium text-slate-400 block mt-1">
                      Level: {tool.expertiseLevel}%
                    </span>
                  </div>

                  {/* Micro bottom layout indicator bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 shadow-glow" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Panel: Detail Card (cols 5) */}
          <div className="lg:col-span-5 h-full">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 blur-[1px]" />
            
            <div className="relative rounded-2xl bg-card-slate/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full glass-card">
              
              <div className="space-y-6">
                
                {/* Header Category details trigger */}
                <div className="flex items-center space-x-3 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      SYSTEM CATEGORY
                    </span>
                    <h4 className="font-display font-bold text-sm text-white leading-tight">
                      {getCategoryLabel(activeTool.category)}
                    </h4>
                  </div>
                </div>

                {/* Name & Desc */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    {activeTool.name}
                  </h3>
                  <p className="text-slate-300 font-sans font-light text-xs sm:text-sm leading-relaxed">
                    {activeTool.description}
                  </p>
                </div>

                {/* Custom glowing expertise meter */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span className="uppercase tracking-widest font-bold">Expertise Index</span>
                    <span className="font-bold text-cyan-400">{activeTool.expertiseLevel}% Integration</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 border border-white/5 overflow-hidden p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-glow transition-all duration-500"
                      style={{ width: `${activeTool.expertiseLevel}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Core integration usecase section */}
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-2.5 mt-8">
                <span className="text-[9px] font-mono font-bold tracking-widest text-purple-400 block uppercase">
                  Primary Automation Application:
                </span>
                <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                  {activeTool.useCase}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
