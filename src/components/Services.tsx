/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { servicesData } from "../data";
import { Cpu, Database, Target, MessageSquareText, TrendingUp, GitBranch, Check, Sparkles } from "lucide-react";

export default function Services() {
  // Map string names to safe Lucide component structures
  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu":
        return Cpu;
      case "Workflow":
        return GitBranch;
      case "Database":
        return Database;
      case "Target":
        return Target;
      case "MessageSquareText":
        return MessageSquareText;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Cpu;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-navy grid-bg-fine">
      {/* Decorative ambient lighting overlays */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">
              Bespoke Services
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Tailored Automation Engines Built For Scalability
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Replacing slow manual operations with resilient software models to boost speed, avoid entry lags, and expand throughput.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group p-6 sm:p-8 rounded-2xl bg-card-slate/30 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden glass-card"
              >
                {/* Micro glow behind icon */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Header Card */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-bg-navy flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-cyan-400 group-hover:scale-115 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Stat Highlight badge */}
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-emerald-400 uppercase">
                        {service.statText}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Custom Benefits Checklist */}
                  <ul className="mb-8 space-y-2.5">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                        <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 mr-2 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tools tag list */}
                <div className="pt-5 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase mr-1.5">
                    Core Tech:
                  </span>
                  {service.tools.map((tool, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
