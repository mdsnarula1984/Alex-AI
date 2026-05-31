/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, ExternalLink, CalendarDays } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    { label: "LinkedIn Pro", icon: Linkedin, url: "https://linkedin.com", color: "hover:text-blue-400" },
    { label: "GitHub Code", icon: Github, url: "https://github.com", color: "hover:text-slate-100" },
    { label: "Direct Message", icon: MessageSquare, url: "https://slack.com", color: "hover:text-cyan-400" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block info indicators (cols 6) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="text-xs font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase block">
              Direct Communication Channel
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              Let&apos;s Build Resilient Systems Together
            </h2>

            <p className="text-slate-300 font-sans font-light text-base sm:text-lg max-w-lg leading-relaxed">
              Have specific API sync constraints or legacy systems you need to automate? Connect directly via channels below or lock in a calendar slot instantly.
            </p>

            {/* Direct Coordinates info map list */}
            <div className="space-y-4 pt-4 max-w-md">
              {/* Item 1 */}
              <div className="p-4 rounded-xl bg-card-slate/30 border border-white/5 flex items-center gap-4 hover:border-slate-800 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-wider">
                    Google Workspace Inbox
                  </span>
                  <a href="mailto:alex@alexai.consulting" className="text-sm font-semibold text-white hover:text-cyan-400 font-mono tracking-wider">
                    alex@alexai.consulting
                  </a>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-4 rounded-xl bg-card-slate/30 border border-white/5 flex items-center gap-4 hover:border-slate-800 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-wider">
                    Secure Dial Connection
                  </span>
                  <a href="tel:+14158802210" className="text-sm font-semibold text-white hover:text-cyan-400 font-mono tracking-wider">
                    +1 (415) 880-2210
                  </a>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-4 rounded-xl bg-card-slate/30 border border-white/5 flex items-center gap-4 hover:border-slate-800 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-wider">
                    Corporate Office Location
                  </span>
                  <p className="text-sm font-semibold text-slate-300 font-sans">
                    Financial District, San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calendly slot block mock (cols 6) */}
          <div className="lg:col-span-6 h-full w-full">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[1px]" />
            
            <div className="relative rounded-3xl bg-card-slate/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full glass-card text-left">
              
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <CalendarDays className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    SYNC SCHEDULER
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  Integrated Scheduler Booking Slots
                </h3>

                <p className="text-slate-300 font-sans font-light text-xs sm:text-sm leading-relaxed">
                  Avoid back-and-forth emails. Select a time directly via Calendly parameters embedded inside our dashboard below.
                </p>

                {/* Simulated booking calendar widget container */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>Selected: Alex Carter Strategy Call</span>
                    <span className="text-emerald-400 font-bold uppercase tracking-widest">Free slot available</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {["Mon, 10:00 AM", "Tue, 1:30 PM", "Thu, 4:00 PM"].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => {
                          const element = document.getElementById("booking-form");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="py-3 px-2 text-[11px] font-mono font-semibold rounded bg-slate-900 border border-white/5 text-slate-350 hover:text-white hover:border-cyan-500 transition-colors"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social and Calendly button CTAs */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, sIndex) => {
                    const SocIcon = social.icon;
                    return (
                      <a
                        key={sIndex}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-slate-400 transition-colors duration-300 ${social.color}`}
                        title={social.label}
                      >
                        <SocIcon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-white/10 hover:border-white/20 text-white font-medium text-xs tracking-wider flex items-center gap-1.5 cursor-pointer uppercase font-mono"
                >
                  <span>Launch Calendly app</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
