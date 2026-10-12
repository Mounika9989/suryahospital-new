import React, { useState } from "react";
import { Container } from "../ui/Container";
import { IMAGERY } from "../../constants/imagery";
import { ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FacilitiesCinematic() {
  const [activeTab, setActiveTab] = useState(0);

  const facilities = IMAGERY.facilitiesList;
  const current = facilities[activeTab];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-surya-slate-900 text-white relative overflow-hidden">
      <Container className="mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-400 bg-surya-slate-800 px-3.5 py-1.5 rounded-full border border-surya-slate-700">
              CLINICAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Spaces engineered for recovery<span className="text-surya-teal-400">.</span>
            </h2>
            <p className="text-base text-surya-slate-300 max-w-xl leading-relaxed">
              Equipped with sterile surgical suites, on-premise pathology testing, and 24/7 emergency readiness in Anantapur.
            </p>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          {facilities.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === idx
                  ? "bg-surya-teal-500 text-surya-navy-950 font-bold shadow-lg scale-105"
                  : "bg-surya-slate-800 text-surya-slate-300 hover:bg-surya-slate-700 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </Container>

      {/* Large-Format Cinematic Stage */}
      <Container>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-surya-slate-800 bg-surya-slate-950 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-surya-navy-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-surya-navy-950/80 via-transparent to-transparent" />

              {/* Large Editorial Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 max-w-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-400 block">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-surya-slate-200 leading-relaxed max-w-xl">
                  {current.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-surya-teal-300">
                  <ShieldCheck className="w-4 h-4 text-surya-teal-400" />
                  <span>Verified clinical facility in Surya Hospital</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
