/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, CheckCircle2, RefreshCw, Calendar, Mail, FileText, Sparkles } from "lucide-react";

export default function StrategyCallForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bizSize, setBizSize] = useState("10-50");
  const [challenges, setChallenges] = useState("");
  
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) {
      alert("Please complete required entries (Name, Google/Business Email, and Company Name).");
      return;
    }

    setFormState("submitting");

    // Simulate endpoint routing post webhook
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div id="booking-form" className="relative h-full">
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-blue-500/15 via-cyan-500/15 to-purple-500/15 blur-[1px]" />
      
      <div className="relative rounded-3xl glass-card p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
        
        {formState === "success" ? (
          /* Success Receipt Overlays */
          <div className="space-y-8 py-10 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Strategy Request Logged
              </h3>
              <p className="text-slate-300 font-sans font-light text-sm max-w-md leading-relaxed">
                Thank you, <span className="font-semibold text-white">{name}</span>. Your sandbox operations request has been synced. Alex Carter will inspect <span className="text-cyan-400">{company}</span> within 12 hours.
              </p>
            </div>

            {/* Simulated Consultation Agenda Details */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-3 text-left w-full max-w-md">
              <span className="text-[9px] font-mono font-bold text-purple-400 block uppercase tracking-wider">
                Discovery Agenda
              </span>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>30-Min Strategic Operational Bottleneck Map</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Calendar invite dispatched to: {email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Custom cost mitigation projection based on {bizSize} size</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                setFormState("idle");
                setName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setChallenges("");
              }}
              className="text-xs font-mono text-slate-500 hover:text-slate-300 underline cursor-pointer"
            >
              Submit another request
            </button>
          </div>
        ) : (
          /* Main Interactive Form Fields */
          <form onSubmit={handleSubmit} className="space-y-5 text-left flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                  Claim Your Free Consultation
                </span>
              </div>
              
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                Align Your Operations With AI
              </h3>
              <p className="text-slate-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                Fill out the secure dossier indicators below to route operational details directly to Alex&apos;s workbook cache.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              {/* Name & Company Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Carter"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/5 text-sm font-light text-slate-300 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                    Company Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vanguard Inc"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/5 text-sm font-light text-slate-300 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                    Corporate Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@vanguard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/5 text-sm font-light text-slate-300 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 012-3456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/5 text-sm font-light text-slate-300 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Business Size */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                  Employee Headcount Size
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["<10", "10-50", "50-250", "250+"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setBizSize(size)}
                      className={`py-2 rounded-lg border text-xs font-mono font-bold transition-colors cursor-pointer text-center ${
                        bizSize === size
                          ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-400"
                          : "bg-slate-950 border-white/5 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Challenges */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                  Describe Main Manual Bottlenecks & Software Obstacles
                </label>
                <textarea
                  rows={3}
                  placeholder="E.g. reps spend hours copy-pasting CRM details from logs to emails daily..."
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/5 text-sm font-light text-slate-300 focus:outline-none focus:border-cyan-500/50 resize-none font-sans"
                />
              </div>
            </div>

            {/* Booking Form CTA button */}
            <button
              type="submit"
              disabled={formState === "submitting"}
              className={`w-full py-4 rounded-xl font-bold tracking-wide text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all mt-4 ${
                formState === "submitting"
                  ? "bg-slate-950 border border-cyan-500/20 text-slate-400"
                  : "bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white hover:shadow-cyan-400/25 hover:shadow-lg"
              }`}
            >
              {formState === "submitting" ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  ROUTING STRATEGIC BRIEF...
                </>
              ) : (
                <>
                  <Send className="w-4.5 h-4.5" />
                  BOOK FREE STRATEGY CALL
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
