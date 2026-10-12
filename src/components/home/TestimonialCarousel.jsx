import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = HOSPITAL_MEDIA.testimonialsPlaceholder;
  const count = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count);
    }, 6500);
    return () => clearInterval(timer);
  }, [count]);

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-surya-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-surya-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-400 bg-surya-slate-800 px-3.5 py-1.5 rounded-full border border-surya-slate-700 inline-block">
                PATIENT EXPERIENCES & CARE PILLARS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Trust built on care<span className="text-surya-teal-400">.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + count) % count)}
                className="w-11 h-11 rounded-full border border-surya-slate-700 bg-surya-slate-800 hover:bg-surya-slate-700 flex items-center justify-center text-white transition active:scale-95 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % count)}
                className="w-11 h-11 rounded-full border border-surya-teal-500 bg-surya-teal-500 hover:bg-surya-teal-400 flex items-center justify-center text-surya-navy-950 transition active:scale-95 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Card Stage */}
          <div className="p-8 sm:p-14 rounded-3xl bg-surya-slate-950 border border-surya-slate-800 shadow-2xl relative min-h-[280px] flex flex-col justify-between">
            <Quote className="w-12 h-12 text-surya-teal-500/20 mb-6 shrink-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed tracking-tight">
                  "{active.quote}"
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surya-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-white">{active.patientNote}</h4>
                    <span className="text-xs text-surya-slate-400">{active.region}</span>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surya-teal-500/15 text-surya-teal-300 border border-surya-teal-500/30">
                    {active.verifiedTag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="pt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? "w-8 bg-surya-teal-400" : "w-2 bg-surya-slate-700"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Compliance Disclaimer */}
          <p className="text-center text-xs text-surya-slate-500 mt-6">
            * Patient testimonials are collected with signed consent and verified through hospital care audits.
          </p>
        </div>
      </Container>
    </section>
  );
}
