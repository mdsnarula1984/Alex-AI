/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoSec from "./components/LogoSec";
import Services from "./components/Services";
import ProcessTimeline from "./components/ProcessTimeline";
import AutomationShowcase from "./components/AutomationShowcase";
import CaseStudies from "./components/CaseStudies";
import ToolsExpertise from "./components/ToolsExpertise";
import ResultsDashboard from "./components/ResultsDashboard";
import Testimonials from "./components/Testimonials";
import SavingsCalculator from "./components/SavingsCalculator";
import StrategyCallForm from "./components/StrategyCallForm";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Sparkles } from "lucide-react";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-navy text-slate-100 overflow-x-hidden font-sans selection:bg-cyan-500/30 selection:text-white">
      
      {/* Premium Mouse-Following Radial Glow Spotlight Effect */}
      <div
        className="hidden md:block pointer-events-none fixed z-30 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Sections Body Stack */}
      <main>
        {/* Section 1: Hero split viewport with custom animated components */}
        <Hero />

        {/* Section 2: trusted client logo list marquee */}
        <LogoSec />

        {/* Section 3: Bespoke Premium Service Blocks */}
        <Services />

        {/* Section 4: Interactive Process Stages Timeline progress builder */}
        <ProcessTimeline />

        {/* Section 5: Real-Time Live Automated sandbox Simulator */}
        <AutomationShowcase />

        {/* Section 6: Client Cases Side-by-Side comparison metrics */}
        <CaseStudies />

        {/* Section 7: Relational Tools Expertise Matrix */}
        <ToolsExpertise />

        {/* Section 8: Live Results Dashboard Analytics charts */}
        <ResultsDashboard />

        {/* Section 9: Leadership Endorsement testimonials ticker */}
        <Testimonials />

        {/* Section 10: Value-driven Lead Generation & Booking Section */}
        <section id="booking" className="py-24 relative overflow-hidden bg-bg-navy grid-bg-fine">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-blue-450 font-bold uppercase text-blue-400">
                Direct Conversion Loop
              </span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-zero">
              Project Your Saved Administrative Cost Immediately
            </h2>
            <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
              Calculate potential hours returned weekly, map out your operations bottlenecks, and submit a discovery brief.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Savings Calculator (Left) */}
              <SavingsCalculator />

              {/* Conversion-optimized Booking Form (Right) */}
              <StrategyCallForm />

            </div>
          </div>
        </section>

        {/* Section 11: Professional Accordions faq */}
        <FaqSection />

        {/* Section 12: Contact informational blocks & scheduler links */}
        <ContactSection />
      </main>

      {/* Footer Area with Newsletter subscription fields */}
      <Footer />

    </div>
  );
}
