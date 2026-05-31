/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Cpu, Send, Linkedin, Github, Twitter, Check } from "lucide-react";

export default function Footer() {
  const [emailAddress, setEmailAddress] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "subscribed">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress) return;
    setNewsletterStatus("subscribed");
    setEmailAddress("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-navy/90 border-t border-white/5 pt-16 pb-8 text-left text-xs font-sans text-slate-400 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1 Brand (cols 4) */}
          <div className="md:col-span-4 space-y-4">
            <div onClick={scrollToTop} className="flex items-center space-x-2 cursor-pointer group w-fit">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-lg tracking-[0.12em] text-white">
                ALEX<span className="text-cyan-400">AI</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-xs">
              Designing and deploying robust custom AI Agent pipelines, visual integration flowcharts, and corporate databases to eliminate manual administration bottlenecks.
            </p>

            {/* Social handles links */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 Services sitemap (cols 3) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-mono font-bold uppercase text-[10px] tracking-wider text-white">
              Bespoke Systems
            </h4>
            <ul className="space-y-2 text-slate-400 font-light">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom AI Agents</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">CRM Integrations</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Support Desk Deflection</a></li>
            </ul>
          </div>

          {/* Col 3 Resources sitemap (cols 2) */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="font-mono font-bold uppercase text-[10px] tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-slate-400 font-light">
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Deployment Wiki</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Portfolios</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Live Simulator</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Endorsements</a></li>
            </ul>
          </div>

          {/* Col 4 Newsletter (cols 3) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-mono font-bold uppercase text-[10px] tracking-wider text-white">
              Automated Digest
            </h4>
            <p className="text-slate-400 font-light text-xs leading-relaxed">
              Subscribe to capture bi-weekly n8n tutorials, Make blueprints, and cost mitigation disclosures released by Carter.
            </p>

            {/* Form */}
            {newsletterStatus === "subscribed" ? (
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 text-[10px] font-mono tracking-wide font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>blueprints subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1.5 w-full">
                <input
                  type="email"
                  required
                  placeholder="name@business.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50 w-full font-light"
                />
                <button
                  type="submit"
                  className="px-3.5 rounded-lg bg-blue-600 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower footer copyrights details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Alex AI Consulting Group Inc. All sovereign rights reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-450 transition-colors">Terms of Compliance</span>
            <span className="hover:text-slate-450 transition-colors">Privacy Cryptography</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
