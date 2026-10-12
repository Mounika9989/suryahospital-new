import React, { useState } from "react";
import { Header } from "./components/home/Header";
import { HeroCarousel } from "./components/home/HeroCarousel";
import { MovingServiceStrip } from "./components/home/MovingServiceStrip";
import { ImageRevealIntro } from "./components/home/ImageRevealIntro";
import { HorizontalCareSlider } from "./components/home/HorizontalCareSlider";
import { SpecialtyCarousel } from "./components/home/SpecialtyCarousel";
import { DoctorCarousel } from "./components/home/DoctorCarousel";
import { FacilityMovingGallery } from "./components/home/FacilityMovingGallery";
import { HospitalStory } from "./components/home/HospitalStory";
import { EmergencySection } from "./components/home/EmergencySection";
import { AppointmentJourney } from "./components/home/AppointmentJourney";
import { TestimonialCarousel } from "./components/home/TestimonialCarousel";
import { LocationSection } from "./components/home/LocationSection";
import { Footer } from "./components/layout/Footer";
import { AppointmentModal } from "./components/home/AppointmentModal";
import { ContactModal } from "./components/home/ContactModal";

export function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalDepartment, setModalDepartment] = useState("General Medicine");

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenAppointmentModal = (dept = "General Medicine") => {
    setModalDepartment(dept);
    setIsAppointmentModalOpen(true);
  };

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-surya-slate-50 text-surya-slate-800 antialiased selection:bg-surya-teal-100 selection:text-surya-teal-900 overflow-x-hidden">
      {/* 1. Header: Transparent over Hero -> Solid sticky on scroll */}
      <Header
        onBookAppointment={() => scrollTo("#appointment-journey")}
        onCallEmergency={handleOpenContactModal}
      />

      <main className="w-full flex-1">
        {/* 2. Hero: Full-Screen Auto-Advancing Moving Image Carousel */}
        <HeroCarousel
          onBookAppointment={() => scrollTo("#appointment-journey")}
          onFindDoctor={() => scrollTo("#doctors")}
        />

        {/* 3. Patient Actions: Continuous Moving Horizontal Strip */}
        <MovingServiceStrip
          onFindDoctor={() => scrollTo("#doctors")}
          onFindDepartment={() => scrollTo("#care-slider")}
          onBookAppointment={() => scrollTo("#appointment-journey")}
          onEmergencyCare={() => scrollTo("#emergency")}
          onDiagnostics={() => scrollTo("#facilities")}
          onLocation={() => scrollTo("#location")}
        />

        {/* 4. Introduction: Image Transition + Editorial Story */}
        <ImageRevealIntro
          onExploreCare={() => scrollTo("#care-slider")}
        />

        {/* 5. Comprehensive Care: Large Horizontal Slider */}
        <HorizontalCareSlider
          onSelectCare={() => scrollTo("#appointment-journey")}
        />

        {/* 6. Specialties: Cinematic Image Slider */}
        <SpecialtyCarousel
          onSelectSpecialty={() => scrollTo("#appointment-journey")}
          onBookAppointment={(dept) => handleOpenAppointmentModal(dept)}
        />

        {/* 7. Doctors: Meet Our Specialists Moving Carousel */}
        <DoctorCarousel
          onBookConsultation={(dept) => handleOpenAppointmentModal(dept)}
        />

        {/* 9. Facilities: Moving Image Gallery Collage */}
        <FacilityMovingGallery />

        {/* 10. Hospital Story: Sequential Scroll Reveal */}
        <HospitalStory />

        {/* 11. 24/7 Emergency: High-Contrast Dark Navy Visual Transition */}
        <EmergencySection
          onCallEmergency={handleOpenContactModal}
          onGetDirections={() => scrollTo("#location")}
        />

        {/* 12. Appointment: Interactive 4-Step Stepped Journey */}
        <AppointmentJourney />

        {/* 13. Testimonials: Moving Slider (Verified Framework) */}
        <TestimonialCarousel />

        {/* 14. Location: Campus Visual + Styled Map + Regional Connectivity */}
        <LocationSection
          onCallHospital={handleOpenContactModal}
          onGetDirections={() => scrollTo("#location")}
        />
      </main>

      {/* 15. Institutional Healthcare Footer */}
      <Footer onOpenContact={handleOpenContactModal} />

      {/* Quick Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        defaultDepartment={modalDepartment}
      />

      {/* Emergency & Contact Desk Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
