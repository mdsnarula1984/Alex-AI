/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { automationScenariosData } from "../data";
import { PlayCircle, ShieldCheck, SquareTerminal, RefreshCw, Layers, Sparkles, Activity, CheckCircle, Zap } from "lucide-react";

export default function AutomationShowcase() {
  const [selectedScenarioId, setSelectedScenarioId] = useState("lead-enrichment");
  const [simulationState, setSimulationState] = useState<"idle" | "running" | "completed">("idle");
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [liveLogs, setLiveLogs] = useState<string[]>([]);
  
  // Retrieve selected scenario details
  const activeScenario = automationScenariosData.find((s) => s.id === selectedScenarioId) || automationScenariosData[0];

  // Trigger when scenario changes to cancel any active timer
  useEffect(() => {
    setSimulationState("idle");
    setCurrentStepIndex(-1);
    setLiveLogs([`[INFO] Target workflow selected: ${activeScenario.title}. Ready to simulate sandbox dispatch.`]);
  }, [selectedScenarioId]);

  // Handle the live interval builder
  const startSimulation = () => {
    if (simulationState === "running") return;
    
    setSimulationState("running");
    setCurrentStepIndex(0);
    setLiveLogs([
      `[SYSTEM] Initialising isolated visual runner container...`,
      `[TRIGGER] Event Intercepted: "${activeScenario.trigger}"`,
      `[SYSTEM] Loading secure credentials and REST API headers...`
    ]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < activeScenario.steps.length) {
        // Log the starting of the step
        const stepDetail = activeScenario.steps[step];
        setLiveLogs((prev) => [
          ...prev,
          `[Opr: ${step + 1}] Executing: "${stepDetail.title}"...`,
          `[DATAOUT] -> ${stepDetail.output}`
        ]);
        setCurrentStepIndex(step + 1);
        step++;
      } else {
        clearInterval(interval);
        setSimulationState("completed");
        setLiveLogs((prev) => [
          ...prev,
          `[SYSTEM] Pipeline finished. Dispatched 100% of payloads successfully.`,
          `[SUCCESS] Workflow execution finalized in ~12 seconds. Saved ${activeScenario.metrics[0].value} of manual human labor.`
        ]);
      }
    }, 1800);
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-bg-navy grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 font-bold uppercase">
              Interactive Dashboard
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            See AI Orchestration In Real-Time
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4">
            Select one of our specialized production automation pipelines below and trigger an interactive dry-run simulation to review active APIs, logs, and outputs inside our live mock terminal database.
          </p>
        </div>

        {/* Tab Switches (Scenarios list) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-4xl mx-auto mb-12">
          {automationScenariosData.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenarioId(scenario.id)}
              className={`px-5 py-3 rounded-xl border font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedScenarioId === scenario.id
                  ? "bg-slate-900 border-blue-500/50 text-white shadow-lg shadow-blue-500/10"
                  : "bg-card-slate/35 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-card-slate/50"
              }`}
            >
              <Zap className={`w-4 h-4 ${selectedScenarioId === scenario.id ? "text-cyan-400 animate-pulse" : "text-slate-500"}`} />
              {scenario.title}
            </button>
          ))}
        </div>

        {/* The Simulator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Checklist/Flow display (cols 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-card-slate/40 border border-white/5 glass-card relative h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-cyan-400/10 text-cyan-400 text-[10px] font-mono tracking-wider font-bold uppercase">
                  SIMULATOR CONTEXT
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  v2.4.0-Stable
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                {activeScenario.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-sans font-light leading-relaxed mb-6">
                {activeScenario.description}
              </p>

              {/* Steps status flow list */}
              <div className="space-y-4">
                {activeScenario.steps.map((step, idx) => {
                  const isCompleted = idx < currentStepIndex;
                  const isRunning = idx === currentStepIndex && simulationState === "running";
                  const isIdle = idx > currentStepIndex || simulationState === "idle";

                  return (
                    <div
                      key={step.id}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${
                        isRunning
                          ? "bg-blue-500/5 border border-blue-500/20"
                          : isCompleted
                          ? "bg-emerald-500/5 border border-emerald-500/10"
                          : "border border-transparent"
                      }`}
                    >
                      {/* Left visual node */}
                      <div className="mt-0.5 shrink-0">
                        {isCompleted ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                        ) : isRunning ? (
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center animate-spin">
                            <RefreshCw className="w-3 h-3 text-blue-400" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-[10px] font-mono text-slate-500">
                            {idx + 1}
                          </div>
                        )}
                      </div>

                      {/* Title & Desc */}
                      <div>
                        <h4
                          className={`text-xs font-semibold tracking-wide ${
                            isCompleted ? "text-slate-250 font-medium" : isRunning ? "text-blue-400" : "text-slate-500 font-light"
                          }`}
                        >
                          {step.title}
                        </h4>
                        {isRunning && (
                          <p className="text-[11px] text-slate-300 font-light mt-0.5">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Run Button and local stats info */}
            <div className="pt-8 border-t border-white/5 mt-8 flex flex-col space-y-4">
              <button
                onClick={startSimulation}
                disabled={simulationState === "running"}
                className={`w-full py-4 rounded-xl font-semibold tracking-wide text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md ${
                  simulationState === "running"
                    ? "bg-blue-950 border border-blue-500/20 text-slate-400 opacity-70 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:shadow-cyan-400/25 hover:shadow-lg text-white"
                }`}
              >
                {simulationState === "running" ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    SIMULATION RUNNING...
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-5 h-5" />
                    RUN TEST SIMULATION
                  </>
                )}
              </button>

              <div className="grid grid-cols-3 gap-2.5 text-center bg-slate-950/60 p-3 rounded-xl border border-white/5">
                {activeScenario.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="space-y-0.5">
                    <p className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">
                      {metric.label}
                    </p>
                    <p className="text-xs font-bold text-white font-mono">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Terminal logs output (cols 7) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-[#030712] border border-white/10 overflow-hidden shadow-2xl relative min-h-[420px] lg:h-full">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#0a0f1d] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <SquareTerminal className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono text-slate-300 font-bold tracking-wider">
                  AI ENGINE TERMINAL CONSOLE
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500 font-bold">
                  PORT:3000
                </span>
              </div>
            </div>

            {/* Terminal Content Box */}
            <div className="p-4 sm:p-5 flex-1 font-mono text-xs overflow-y-auto space-y-2.5 flex flex-col justify-end max-h-[500px]">
              
              {/* Output log strings */}
              {liveLogs.map((log, index) => {
                let colorClass = "text-slate-400";
                if (log.startsWith("[SUCCESS]")) colorClass = "text-emerald-400 font-medium";
                if (log.startsWith("[TRIGGER]")) colorClass = "text-cyan-400 font-medium";
                if (log.startsWith("[SYSTEM]")) colorClass = "text-blue-500";
                if (log.startsWith("[DATAOUT]")) colorClass = "text-slate-300 select-all p-2 rounded-lg bg-white/5 border border-white/5 block my-1 font-sans font-light";

                return (
                  <div key={index} className="leading-relaxed break-all">
                    <span className="text-slate-600 mr-2">[{index + 1}]</span>
                    <span className={colorClass}>{log}</span>
                  </div>
                );
              })}

              {simulationState === "running" && (
                <div className="flex items-center gap-1.5 text-blue-400 italic font-mono select-none">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Listening to payload hooks...</span>
                </div>
              )}
            </div>
            
            {/* Terminal absolute decorative overlays */}
            <div className="absolute right-4 bottom-4 px-2.5 py-1 rounded bg-[#0a1020] border border-white/5 text-[9px] font-mono text-slate-500 font-semibold pointer-events-none select-none z-10 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>AES-256 SSL Encryption Secures Sandbox</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
