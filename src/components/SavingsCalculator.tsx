/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Calculator, Hourglass, DollarSign, ArrowRight, Sparkles } from "lucide-react";

export default function SavingsCalculator() {
  const [headcount, setHeadcount] = useState(15);
  const [hoursSpent, setHoursSpent] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculations
  const monthlyHoursSaved = headcount * hoursSpent * 4.33 * 0.85; // assuming 85% deflection rate
  const annualDollarsSaved = headcount * hoursSpent * hourlyRate * 52 * 0.85;

  const scrollToBooking = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-card-slate/40 border border-white/10 glass-card flex flex-col justify-between h-full">
      <div className="space-y-6">
        {/* Title */}
        <div className="flex items-center space-x-3 border-b border-white/5 pb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-blue-400 block uppercase">
              ROI BLUEPRINT TOOL
            </span>
            <h4 className="font-display font-bold text-sm text-white">
              Automation Savings Calculator
            </h4>
          </div>
        </div>

        <p className="text-slate-300 font-sans font-light text-xs sm:text-sm leading-relaxed">
          Configure your operational metrics below to immediately project potential annual money and administrative hours saved by deploying automated agents.
        </p>

        {/* Sliders */}
        <div className="space-y-5">
          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-450 uppercase tracking-wider font-semibold text-slate-450">Active Employees</span>
              <span className="text-cyan-400 font-bold">{headcount} reps</span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              value={headcount}
              onChange={(e) => setHeadcount(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Slider 2 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-455 uppercase tracking-wider font-semibold text-slate-455">Manual Hrs spent/rep/week</span>
              <span className="text-cyan-400 font-bold">{hoursSpent} hours</span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              value={hoursSpent}
              onChange={(e) => setHoursSpent(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Slider 3 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-460 uppercase tracking-wider font-semibold text-slate-460">Blended corporate hourly rate</span>
              <span className="text-cyan-400 font-bold">${hourlyRate}/hr</span>
            </div>
            <input
              type="range"
              min="20"
              max="150"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Results panel display */}
      <div className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-3.5">
          {/* Result 1 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-450 text-[9px] font-mono uppercase tracking-wider">
              <Hourglass className="w-3.5 h-3.5 text-blue-400" />
              Hours Recovered
            </div>
            <p className="font-display font-extrabold text-lg sm:text-2xl text-white">
              {Math.round(monthlyHoursSaved).toLocaleString()}{" "}
              <span className="text-[10px] font-mono font-medium text-slate-400">/mo</span>
            </p>
          </div>

          {/* Result 2 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-[450] text-[9px] font-mono uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              Corporate Expense
            </div>
            <p className="font-display font-extrabold text-lg sm:text-2xl text-emerald-400">
              ${Math.round(annualDollarsSaved).toLocaleString()}{" "}
              <span className="text-[10px] font-mono font-medium text-slate-400">/yr</span>
            </p>
          </div>
        </div>

        {/* CTA prompt link */}
        <button
          onClick={scrollToBooking}
          className="w-full py-3.5 rounded-xl border border-white/10 hover:border-blue-500/30 bg-white/5 hover:bg-blue-500/5 text-slate-300 hover:text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-all uppercase"
        >
          <span>Claim these savings</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
