/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { faqData } from "../data";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-bg-navy grid-bg-fine">
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 font-bold uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
            Common Inquiries & Strategic Disclosures
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Review detailed operational details on integration safety, time ROI expectations, and project onboarding procedures.
          </p>
        </div>

        {/* Faq List Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900 border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                    : "bg-card-slate/30 border-white/5 hover:border-slate-800"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-cyan-400" : "text-slate-500"}`} />
                    <span className={`font-display font-bold text-[15px] sm:text-[16px] tracking-wide text-white transition-colors duration-305 ${isOpen ? "text-cyan-400" : ""}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {/* Toggleable Body Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 text-sm text-slate-300 font-sans font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
