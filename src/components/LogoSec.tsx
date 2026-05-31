/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Zap, Layers, Network, CircleDot } from "lucide-react";

export default function LogoSec() {
  const logos = [
    { name: "ApexMedia", icon: Layers, color: "text-blue-400 group-hover:text-blue-500", desc: "Digital & Creative" },
    { name: "BoltCart", icon: Zap, color: "text-amber-400 group-hover:text-amber-500", desc: "E-Commerce" },
    { name: "Vanguard", icon: Shield, color: "text-purple-400 group-hover:text-purple-500", desc: "Management Consult" },
    { name: "KoreAI", icon: Network, color: "text-cyan-400 group-hover:text-cyan-500", desc: "Enterprise Tech" },
    { name: "Spherion", icon: CircleDot, color: "text-emerald-400 group-hover:text-emerald-500", desc: "Global Logistics" }
  ];

  return (
    <section className="py-12 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold mb-8">
          Trusted By Forward-Thinking Businesses
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center space-y-1 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 cursor-default"
              >
                <div className="flex items-center space-x-2">
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${logo.color}`} />
                  <span className="font-display font-bold text-lg tracking-wide text-slate-300 group-hover:text-white transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-wider font-medium text-slate-500 uppercase">
                  {logo.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
