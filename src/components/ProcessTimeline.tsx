/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { processSteps } from "../data";
import { CheckCircle2, ChevronRight, FileSpreadsheet, Layers, Sliders, PlayCircle, Eye, Rocket } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default to Build index (2)

  const getStepIcon = (label: string) => {
    switch (label) {
      case "Audit":
        return Eye;
      case "Strategy":
        return FileSpreadsheet;
      case "Build":
        return Layers;
      case "Integrate":
        return PlayCircle;
      case "Optimize":
        return Sliders;
      default:
        return Rocket;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Structural backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-[0.2em] text-purple-400 font-bold uppercase mb-4">
            The Engagement Lifecycle
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
            A Highly Structured, 5-Phase Deployment System
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4">
            We avoid guessworks. Every automation undergoes rigorous analysis, blueprinting, safe isolation build, CRM testing, and live cost optimization.
          </p>
        </div>

        {/* Timeline Interactive Progress Line Container */}
        <div className="mb-14 relative px-4">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[43px] left-[10%] right-[10%] h-[3px] bg-slate-800 rounded-full">
            {/* Filled status color */}
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(activeStepIndex / (processSteps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 relative z-10 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const StepIcon = getStepIcon(step.label);
              const isActive = index === activeStepIndex;
              const isPast = index < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(index)}
                  className="flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  {/* Circle Indicator */}
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive
                        ? "bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105"
                        : isPast
                        ? "bg-gradient-to-tr from-blue-950 to-cyan-900/50 border-blue-500/40"
                        : "bg-slate-950 border-slate-850 hover:border-slate-700 text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {isPast ? (
                      <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                    ) : (
                      <StepIcon
                        className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-slate-400"
                        }`}
                      />
                    )}
                  </div>

                  {/* Label (Desktop) */}
                  <span
                    className={`mt-3 font-mono text-[10px] md:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                      isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {step.label}
                  </span>
                  
                  {/* Small line for mobile connecting */}
                  <span className="text-[9px] text-slate-500 font-sans mt-0.5 md:hidden">
                    Step {step.step}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Step Detail Panel */}
        <div className="max-w-4xl mx-auto relative mt-10">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-purple-500/20 blur-[1px] active-panel-glow" />
          
          <div className="relative rounded-2xl bg-card-slate/45 border border-white/10 p-6 md:p-10 glass-card">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Detailed metrics & step title label */}
              <div className="md:col-span-8 space-y-4">
                
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${processSteps[activeStepIndex].color} text-white`}>
                    PHASE {processSteps[activeStepIndex].step}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-300 font-mono tracking-wider text-xs">
                    ACTIVE OPERATIONS STAGE
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl md:text-3.5xl text-white tracking-tight leading-none">
                  {processSteps[activeStepIndex].title}
                </h3>

                <p className="text-slate-300 font-sans font-light text-base md:text-lg leading-relaxed pt-2">
                  {processSteps[activeStepIndex].description}
                </p>

              </div>

              {/* Specific deliverable block card */}
              <div className="md:col-span-4 p-5 rounded-xl bg-slate-900 border border-white/5 space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 block font-bold border-b border-white/5 pb-2">
                  Key Deliverable
                </span>
                
                <div>
                  <p className="font-sans font-bold text-base text-white leading-snug">
                    {processSteps[activeStepIndex].deliverable}
                  </p>
                  <p className="text-slate-400 text-xs mt-1 font-light">
                    Guaranteed outcome signed off at the culmination of this stage.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Interactive Verification</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
