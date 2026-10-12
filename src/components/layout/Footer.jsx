import React from "react";
import { Container } from "../ui/Container";
import { HeartPulse, MapPin, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function Footer({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-surya-navy-950 text-white border-t border-surya-navy-900">
      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1 & 2: Hospital Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-surya-navy-900 border border-surya-teal-500/30 flex items-center justify-center text-white shadow-sm">
                <HeartPulse className="w-6 h-6 text-surya-teal-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  SURYA
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-surya-teal-900 text-surya-teal-300 border border-surya-teal-700">
                  Hospital
                </span>
              </div>
            </div>

            <p className="text-sm text-surya-slate-300 leading-relaxed max-w-sm">
              Providing dependable, patient-centered medical, surgical, and 24/7 emergency care for Anantapur and surrounding regions.
            </p>

            <div className="space-y-2 text-xs text-surya-slate-400">
              <div className="flex items-center gap-2 text-surya-teal-300">
                <ShieldCheck className="w-4 h-4 text-surya-teal-400 shrink-0" />
                <span>Modern Technology & High Clinical Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-surya-emergency-400 shrink-0" />
                <span>24/7 Emergency & In-House Pharmacy Available</span>
              </div>
            </div>

            {/* Official Channels Placeholder */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-surya-slate-400 block mb-2 font-semibold">
                Official Hospital Channels
              </span>
              <div className="inline-block px-3 py-1.5 rounded-lg bg-surya-navy-900 border border-surya-navy-800 text-xs text-surya-slate-400">
                [Social Media Channels Pending Administrative Verification]
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-surya-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-surya-slate-300">
              <li>
                <button onClick={() => scrollTo("#hero")} className="hover:text-surya-teal-400 transition">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#specialties")} className="hover:text-surya-teal-400 transition">
                  Clinical Specialties
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#surgical-care")} className="hover:text-surya-teal-400 transition">
                  Surgical Suites
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#doctors")} className="hover:text-surya-teal-400 transition">
                  Medical Consultants
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#facilities")} className="hover:text-surya-teal-400 transition">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#about")} className="hover:text-surya-teal-400 transition">
                  About Surya Hospital
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#appointment-journey")} className="hover:text-surya-teal-400 transition">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinical Departments */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-surya-slate-200">
              Clinical Services
            </h4>
            <ul className="space-y-2.5 text-sm text-surya-slate-300">
              <li>General Medicine</li>
              <li>General Surgery</li>
              <li>Laparoscopic Surgery</li>
              <li>Orthopedic Surgery</li>
              <li>Day-Care Surgeries</li>
              <li>Emergency & Critical Care</li>
              <li>Diagnostic Laboratory</li>
              <li>Ultrasound & X-Ray</li>
              <li>In-House Pharmacy</li>
            </ul>
          </div>

          {/* Column 5: Location & Emergency Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-surya-slate-200">
              Emergency & Location
            </h4>
            <div className="space-y-3 text-xs text-surya-slate-300">
              <div className="p-3.5 rounded-xl bg-surya-emergency-950/60 border border-surya-emergency-800/80">
                <div className="flex items-center gap-1.5 text-surya-emergency-400 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24/7 Emergency Care</span>
                </div>
                <div className="text-white font-medium text-xs">
                  {HOSPITAL_INFO.contactPlaceholders.emergencyHelpline}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-surya-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Surya Hospital</strong>
                  <br />
                  {HOSPITAL_INFO.region}
                  <br />
                  <span className="text-surya-slate-400 text-[11px]">
                    {HOSPITAL_INFO.contactPlaceholders.address}
                  </span>
                </span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="text-xs text-surya-teal-400 hover:text-surya-teal-300 font-medium flex items-center gap-1 pt-1"
            >
              <span>View Administrative Contacts</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-surya-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-surya-slate-400 gap-4">
          <p>© 2026 Surya Hospital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-surya-slate-400 hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="text-surya-slate-400 hover:text-white cursor-pointer transition">
              Terms of Care
            </span>
            <span className="text-surya-slate-500">
              Anantapur, Andhra Pradesh
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
