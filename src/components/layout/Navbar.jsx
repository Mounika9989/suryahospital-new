import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Phone, HeartPulse, Menu, X } from "lucide-react";

export function Navbar({ onNavigate, activeTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Clinical Specialties", id: "specialties" },
    { label: "Diagnostics & Facilities", id: "facilities" },
    { label: "Design System Specs", id: "design-system" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surya-slate-200/80 shadow-subtle">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Surya Hospital Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-surya-navy-900 to-surya-navy-800 flex items-center justify-center text-white shadow-sm ring-2 ring-surya-teal-500/20">
              <HeartPulse className="w-6 h-6 text-surya-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-surya-slate-900 leading-none">
                  SURYA
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded bg-surya-teal-50 text-surya-teal-800 border border-surya-teal-200">
                  Hospital
                </span>
              </div>
              <p className="text-[11px] text-surya-slate-500 mt-1 font-medium tracking-wide">
                Healthcare for Anantapur
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate && onNavigate(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "text-surya-navy-900 bg-surya-slate-100 font-semibold"
                      : "text-surya-slate-600 hover:text-surya-navy-900 hover:bg-surya-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="emergency"
              size="sm"
              icon={Phone}
              onClick={() => onNavigate && onNavigate("emergency")}
            >
              24/7 Emergency
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-surya-slate-600 hover:bg-surya-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-surya-slate-200 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (onNavigate) onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-surya-slate-700 hover:bg-surya-slate-100 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="emergency"
                size="md"
                fullWidth
                icon={Phone}
                onClick={() => {
                  if (onNavigate) onNavigate("emergency");
                  setMobileMenuOpen(false);
                }}
              >
                24/7 Emergency Care
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
