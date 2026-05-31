/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { testimonialsData } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotating timer every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-bg-navy grid-bg-fine">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">
              Endorsements
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
            Decisive Leadership Endorsements
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Review critical testimonials from Vice Presidents, Chief Executive Officers, and Managing Partners whose operations are optimized daily.
          </p>
        </div>

        {/* Carousel Slider Card Layout */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
          
          {/* Slider Core Glass Card */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[1px]" />
          
          <div className="relative rounded-3xl bg-card-slate/45 border border-white/10 p-8 sm:p-12 glass-card flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 min-h-[300px]">
            
            {/* Custom Avatar Monogram Graphics */}
            <div className="shrink-0 relative">
              <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-display font-black text-2xl sm:text-4xl shadow-lg border border-white/10 shadow-blue-500/10 ${activeReview.avatarColor}`}>
                {activeReview.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                <Quote className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>

            {/* Testimonial Message */}
            <div className="flex-1 space-y-4 text-left">
              
              {/* Star Rating */}
              <div className="flex items-center space-x-1.5">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-200 font-sans font-light italic text-[15px] sm:text-lg leading-relaxed">
                &ldquo;{activeReview.review}&rdquo;
              </p>

              {/* Author bio specs */}
              <div>
                <p className="font-display font-bold text-[16px] sm:text-lg text-white">
                  {activeReview.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-450 font-mono tracking-wider text-slate-400 mt-0.5">
                  {activeReview.role} • <span className="text-cyan-400">{activeReview.company}</span>
                </p>
              </div>

            </div>

          </div>

          {/* Navigation Controls buttons */}
          <div className="flex justify-center items-center gap-4 mt-8 select-none">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-white/5 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 cursor-pointer transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots navigation indicators */}
            <div className="flex items-center space-x-1.5">
              {testimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex ? "w-6 bg-cyan-400" : "w-2.5 bg-slate-800"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-white/5 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 cursor-pointer transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
