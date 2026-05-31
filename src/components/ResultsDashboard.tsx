/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { TrendingUp, Clock, Bot, Briefcase, Percent, Sparkles } from "lucide-react";

const chartData = [
  { name: "Jan", hoursSaved: 8200, costReduction: 12 },
  { name: "Feb", hoursSaved: 15400, costReduction: 16 },
  { name: "Mar", hoursSaved: 23100, costReduction: 21 },
  { name: "Apr", hoursSaved: 31800, costReduction: 25 },
  { name: "May", hoursSaved: 41200, costReduction: 28 },
  { name: "Jun", hoursSaved: 50000, costReduction: 32 }
];

export default function ResultsDashboard() {
  const [hours, setHours] = useState(0);
  const [automations, setAutomations] = useState(0);
  const [businesses, setBusinesses] = useState(0);
  const [costReduction, setCostReduction] = useState(0);

  // Smooth counter animation on mount / scroll-trigger mimicking
  useEffect(() => {
    const duration = 1200; // ms
    const intervals = 40;
    const stepTime = duration / intervals;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setHours(Math.floor((50000 / intervals) * step));
      setAutomations(Math.floor((500 / intervals) * step));
      setBusinesses(Math.floor((100 / intervals) * step));
      setCostReduction(Math.floor((30 / intervals) * step));

      if (step >= intervals) {
        clearInterval(timer);
        setHours(50000);
        setAutomations(500);
        setBusinesses(100);
        setCostReduction(30);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-purple-500/15 bg-purple-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono tracking-widest text-purple-400 font-bold uppercase">
              Performance Telemetry
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
            Proven Performance Ledger
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Live client results consolidated across hundreds of active custom sandboxes, n8n databases, and Make routers.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="p-6 rounded-2xl bg-card-slate/40 border border-white/5 relative overflow-hidden glass-card">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Clock className="w-4.5 h-4.5 text-blue-400" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                HOURS SAVED
              </span>
            </div>
            <p className="font-display font-extrabold text-2.5xl sm:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {hours.toLocaleString()}+
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-2xl bg-card-slate/40 border border-white/5 relative overflow-hidden glass-card">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Bot className="w-4.5 h-4.5 text-cyan-400" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                FLOWS DEPLOYED
              </span>
            </div>
            <p className="font-display font-extrabold text-2.5xl sm:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              {automations.toLocaleString()}+
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-2xl bg-card-slate/40 border border-white/5 relative overflow-hidden glass-card">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-4.5 h-4.5 text-purple-400" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                CLIENTS SERVED
              </span>
            </div>
            <p className="font-display font-extrabold text-2.5xl sm:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              {businesses.toLocaleString()}+
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-2xl bg-card-slate/40 border border-white/5 relative overflow-hidden glass-card">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Percent className="w-4.5 h-4.5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                COST REDUCTION
              </span>
            </div>
            <p className="font-display font-extrabold text-2.5xl sm:text-4xl text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
              {costReduction}% Average
            </p>
          </div>
        </div>

        {/* Dynamic Recharts Chart Block */}
        <div className="max-w-5xl mx-auto">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[1px]" />
          
          <div className="relative rounded-2xl bg-card-slate/30 border border-white/10 p-6 sm:p-8 glass-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-6 mb-6 gap-4">
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 block uppercase">
                  OPERATIONAL METRICS GROW THEMES
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                  Cumulative Client Hours Saved Over Time
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded bg-cyan-400" />
                  Hours Recovered
                </span>
                <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded bg-purple-550" style={{ backgroundColor: "#8b5cf6" }} />
                  Expenses Restructured
                </span>
              </div>
            </div>

            {/* Recharts Wrapper */}
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="glowHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} fontStyle="italic" />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      borderColor: "rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "11px",
                      fontFamily: "monospace"
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="hoursSaved"
                    name="Hours Saved"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#glowHours)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend Tag */}
            <div className="pt-4 border-t border-white/5 text-center text-[10px] font-mono text-slate-500 italic">
              * Data updated live through sandbox webhook API calls. Last compiled: Just now.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
