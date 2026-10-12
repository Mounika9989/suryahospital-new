/**
 * Surya Hospital - Core Information & Verified Facts Manifest
 * 
 * NOTE: Sourced strictly from verified hospital scope.
 * Unverified fields (contact numbers, doctor roster, patient testimonials,
 * statistics/metrics) are preserved as explicit placeholders to maintain clinical integrity.
 */

export const HOSPITAL_INFO = {
  name: "Surya Hospital",
  tagline: "Quality, Compassionate & Patient-Centered Healthcare",
  region: "Anantapur and surrounding regions",
  serviceAvailability: "24/7 Emergency & Critical Care",
  
  // Explicit placeholders awaiting verification from hospital management
  contactPlaceholders: {
    emergencyHelpline: "[Emergency Helpline to be confirmed by Surya Hospital]",
    generalInquiryPhone: "[Phone number to be confirmed by Surya Hospital]",
    email: "[Official email to be confirmed by Surya Hospital]",
    address: "[Complete street address to be confirmed by Surya Hospital, Anantapur]",
    ambulanceContact: "[Ambulance direct line to be confirmed]",
    opdTimings: "[OPD consultation timings to be confirmed]",
  },

  // Verified institutional pillars
  pillars: [
    {
      title: "Patient-Centered Care",
      description: "Dedicated clinical attention focused on patient safety, comfort, and dignified recovery.",
    },
    {
      title: "Quality Healthcare",
      description: "Adherence to rigorous medical standards across diagnostics, consultations, and surgical interventions.",
    },
    {
      title: "Experienced Medical Doctors",
      description: "Specialist consultants and experienced medical teams managing complex patient requirements.",
    },
    {
      title: "Modern Medical Technology",
      description: "Equipped with state-of-the-art diagnostic imaging, operation theatres, and monitoring equipment.",
    },
    {
      title: "Regional Healthcare Commitment",
      description: "Accessible, reliable medical care serving Anantapur and neighboring regional communities.",
    },
  ],

  // Verified Clinical & Surgical Specialties
  specialties: [
    {
      id: "general-medicine",
      title: "General Medicine",
      description: "Comprehensive primary and inpatient healthcare for acute and chronic adult illnesses.",
      category: "Medical Care",
    },
    {
      id: "specialized-treatment",
      title: "Specialized Medical Treatment",
      description: "Focused therapeutic care for specialized medical conditions across clinical disciplines.",
      category: "Specialty Care",
    },
    {
      id: "general-surgery",
      title: "General Surgery",
      description: "Conventional and routine surgical procedures performed by experienced surgeons.",
      category: "Surgical Care",
    },
    {
      id: "laparoscopic-surgery",
      title: "Laparoscopic Surgery",
      description: "Minimally invasive keyhole surgical techniques enabling reduced pain and quicker recovery.",
      category: "Surgical Care",
    },
    {
      id: "orthopedic-surgery",
      title: "Orthopedic Surgery",
      description: "Specialized bone, joint, trauma, and musculoskeletal surgical care.",
      category: "Surgical Care",
    },
    {
      id: "daycare-surgery",
      title: "Day-Care Surgeries",
      description: "Planned minor procedures allowing patients safe same-day discharge and home convalescence.",
      category: "Surgical Care",
    },
    {
      id: "emergency-critical-care",
      title: "Emergency & Critical Care",
      description: "Round-the-clock urgent trauma, acute triage, and emergency stabilization.",
      category: "Emergency Care",
      is24x7: true,
    },
    {
      id: "physiotherapy-rehab",
      title: "Physiotherapy & Rehabilitation",
      description: "Structured recovery therapies to restore mobility, strength, and functional wellness.",
      category: "Rehabilitation",
    },
  ],

  // Verified Facilities & Diagnostic Infrastructure
  facilities: [
    {
      id: "emergency-unit",
      title: "24/7 Emergency Care",
      description: "Always open with rapid-response triage capability and emergency medical staff on duty.",
      badge: "24/7 Operational",
    },
    {
      id: "operation-theatres",
      title: "Operation Theatres",
      description: "Equipped surgical suites designed for sterile safety and modern surgical interventions.",
      badge: "Advanced Suite",
    },
    {
      id: "diagnostic-lab",
      title: "Diagnostic Laboratory",
      description: "Accurate clinical pathology, biochemistry, and diagnostic testing for timely diagnosis.",
      badge: "In-House",
    },
    {
      id: "ultrasound",
      title: "Ultrasound Imaging",
      description: "Non-invasive high-resolution sonography for abdominal, pelvic, and vascular evaluation.",
      badge: "Imaging",
    },
    {
      id: "xray",
      title: "X-Ray Services",
      description: "Rapid digital radiography for trauma assessment, orthopedic, and chest evaluations.",
      badge: "Radiology",
    },
    {
      id: "ecg",
      title: "ECG (Electrocardiogram)",
      description: "Prompt cardiac rhythm recording and diagnostic monitoring for heart health.",
      badge: "Cardio Diagnostics",
    },
    {
      id: "inhouse-pharmacy",
      title: "In-House Pharmacy",
      description: "Direct on-premise access to genuine prescription medicines and emergency medical supplies.",
      badge: "Pharmacy Support",
    },
    {
      id: "rehab-wellness",
      title: "Rehabilitation & Wellness",
      description: "Guided restorative therapy and post-operative physical conditioning programs.",
      badge: "Recovery Care",
    },
  ],

  // Placeholder arrays explicitly honoring NO-FAKE-DATA policy
  unverifiedDataNotice: {
    doctors: "Doctor profiles and OPD rosters will be populated upon receiving certified staff directory from Surya Hospital management.",
    testimonials: "Patient testimonials will only be displayed when authentic patient consent and verified reviews are provided.",
    statistics: "No artificial numbers or counters (such as '10,000+ happy patients') will be shown without verified hospital audit metrics.",
  },
};
