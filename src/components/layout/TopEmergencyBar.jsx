import React from "react";
import { PhoneCall, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function TopEmergencyBar() {
  return (
    <aside aria-label="Emergency Care Bar" className="bg-surya-navy-950 text-white text-xs border-b border-surya-navy-800">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
          {/* Left: 24/7 Emergency notice */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-semibold text-surya-emergency-200">24/7 Emergency & Trauma Care Available</span>
            <span className="text-surya-slate-400 hidden md:inline">|</span>
            <span className="text-surya-slate-300 hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-surya-teal-400 inline mr-0.5" />
              Serving {HOSPITAL_INFO.region}
            </span>
          </div>

          {/* Right: Emergency Line Placeholder */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-surya-slate-300">
              <PhoneCall className="w-3.5 h-3.5 text-surya-emergency-400" />
              <span className="text-slate-400">Emergency:</span>
              <span className="font-semibold text-white tracking-wide">
                {HOSPITAL_INFO.contactPlaceholders.emergencyHelpline}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </aside>
  );
}
