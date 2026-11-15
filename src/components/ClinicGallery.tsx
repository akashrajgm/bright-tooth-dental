"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  badge: string;
  category: "all" | "clinic" | "patient" | "kids" | "community";
  title: string;
  desc: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/exterior-board.jpg",
    badge: "Our Clinic",
    category: "clinic",
    title: "Bright Tooth Multispeciality Clinic",
    desc: "Our welcoming clinic exterior with illuminated signage on Vyasaraya Ballal Road, Kumaraswamy Layout.",
  },
  {
    id: 2,
    src: "/gallery/consultation-desk.jpg",
    badge: "Patient Care",
    category: "patient",
    title: "Friendly, Transparent Consultations",
    desc: "Dr. Devika Hiremath consulting with a smiling patient, explaining treatment plans with warmth and clarity.",
  },
  {
    id: 3,
    src: "/gallery/chair-examination.jpg",
    badge: "Clinical Excellence",
    category: "clinic",
    title: "Modern Painless Dental Care",
    desc: "Dr. Shadakshari conducting a thorough examination using ergonomic, modern clinical equipment.",
  },
  {
    id: 4,
    src: "/gallery/chair-treatment.jpg",
    badge: "Patient Care",
    category: "patient",
    title: "Gentle & Precise Treatments",
    desc: "Comfort-focused dental care in a pristine, sterilised operatory designed for patient ease.",
  },
  {
    id: 5,
    src: "/gallery/kids-dentistry.jpg",
    badge: "Kids Dentistry",
    category: "kids",
    title: "Stress-Free Care for Children",
    desc: "Fostering positive dental habits early — a cheerful consultation and preventive dental guidance for children.",
  },
  {
    id: 6,
    src: "/gallery/child-checkup.jpg",
    badge: "Kids Dentistry",
    category: "kids",
    title: "Gentle Pediatric Dental Checkup",
    desc: "Gentle oral cavity inspection keeping young patients relaxed, confident, and smiling throughout.",
  },
  {
    id: 7,
    src: "/gallery/community-outreach.jpg",
    badge: "Community",
    category: "community",
    title: "Local Oral Health Outreach",
    desc: "Empowering our Bengaluru neighbourhood with free oral hygiene workshops and educational dental sessions.",
  },
  {
    id: 8,
    src: "/gallery/community-camp-group.jpg",
    badge: "Community",
    category: "community",
    title: "School & Community Dental Camp",
    desc: "Dr. Devika and the clinical team actively conducting proactive community dental health checkups.",
  },
  {
    id: 9,
    src: "/gallery/doctor-desk-records.jpg",
    badge: "Clinical Excellence",
    category: "clinic",
    title: "Personalised Treatment Planning",
    desc: "Dr. Devika detailing customized patient charts, diagnostic records, and preventive care regimens.",
  },
  {
    id: 10,
    src: "/gallery/clinic-welcome-display.jpg",
    badge: "Our Clinic",
    category: "clinic",
    title: "Doctor Registry & Reception",
    desc: "Reception digital display with credentials of Dr. Shadakshari & Dr. Devika (Reg No. 48190A & 56265A).",
  },
  {
    id: 11,
    src: "/gallery/clinic-interior-operatory.jpg",
    badge: "Clinical Excellence",
    category: "clinic",
    title: "Modern Sterilised Operatory",
    desc: "High-grade autoclaved instruments and hospital-standard hygiene protocols for maximum safety.",
  },
  {
    id: 12,
    src: "/logo-full.jpg",
    badge: "Clinic Identity",
    category: "clinic",
    title: "Bright Tooth Official Identity",
    desc: "Official brand identity — Advanced Care, Brighter Smiles. Trusted dental expertise in Bengaluru.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Photos (12)" },
  { key: "patient", label: "Patient Care" },
  { key: "kids", label: "Kids Dentistry" },
  { key: "clinic", label: "Clinic & Operatory" },
  { key: "community", label: "Community Outreach" },
] as const;

export default function ClinicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPhotos = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedPhoto(null);
    } else if (e.key === "ArrowRight" && selectedPhoto) {
      const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
      setSelectedPhoto(filteredPhotos[(idx + 1) % filteredPhotos.length]);
    } else if (e.key === "ArrowLeft" && selectedPhoto) {
      const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
      setSelectedPhoto(filteredPhotos[(idx - 1 + filteredPhotos.length) % filteredPhotos.length]);
    }
  }, [selectedPhoto, filteredPhotos]);

  useEffect(() => {
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, handleKeyDown]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    setSelectedPhoto(filteredPhotos[(idx + 1) % filteredPhotos.length]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    setSelectedPhoto(filteredPhotos[(idx - 1 + filteredPhotos.length) % filteredPhotos.length]);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[35%] h-[45%]"
          style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(8,131,149,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[35%] h-[45%]"
          style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(9,99,126,0.05) 0%, transparent 60%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09637E] mb-4 bg-[#EBF5F7] px-4 py-1.5 rounded-full border border-[#7AB2B1]/30 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#09637E]" />
            Real Care, Real Smiles
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight">
            Real Care,{" "}
            <span className="italic font-normal gradient-text-teal">Real Smiles.</span>
          </h2>

          <p className="text-brand-navy/70 font-light leading-relaxed text-base md:text-lg">
            A look inside our clinic, our daily consultations, and our commitment to gentle dentistry.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#09637E] text-white shadow-md shadow-[#09637E]/20 scale-105"
                      : "bg-[#EBF5F7] text-brand-navy/80 hover:bg-[#7AB2B1]/20 hover:text-[#09637E]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Clean, High-End Visual Grid (No paragraph clutter) ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#7AB2B1]/30 hover:border-[#088395] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-gray-100"
              >
                {/* Full-bleed Photo */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#7AB2B1]/40 text-[10px] font-bold text-[#09637E] uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Center Hover Magnifier Hint */}
                <div className="absolute inset-0 bg-[#0A2533]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 rounded-full bg-white text-[#09637E] flex items-center justify-center shadow-xl transform scale-80 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Title Gradient Overlay (No text paragraph clutter) */}
                <div className="absolute inset-x-0 bottom-0 pt-14 pb-4 px-4 bg-gradient-to-t from-[#0A2533]/90 via-[#0A2533]/50 to-transparent z-10 flex items-end justify-between">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm group-hover:text-[#EBF5F7] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-[#7AB2B1] font-semibold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline ml-2 flex-shrink-0">
                    Click to view
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Subtle footer hint */}
        <div className="text-center mt-8">
          <p className="text-xs text-brand-navy/50 font-medium">
            Tap or click any photo to open high-resolution gallery view
          </p>
        </div>

      </div>

      {/* ── Lightbox Modal (Where full description & details live) ── */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-[#0A2533]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-[#7AB2B1]/30"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#EBF5F7]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#09637E] text-white text-[11px] font-bold uppercase tracking-wider">
                    {selectedPhoto.badge}
                  </span>
                  <span className="text-xs text-brand-navy/60 font-semibold hidden sm:inline">
                    Photo {filteredPhotos.findIndex((p) => p.id === selectedPhoto.id) + 1} of {filteredPhotos.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 text-brand-navy flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image with Navigation Overlays */}
              <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-hidden min-h-[320px] max-h-[64vh]">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[64vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-brand-navy flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-brand-navy flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-navy">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-brand-navy/70 mt-1 max-w-xl leading-relaxed">
                    {selectedPhoto.desc}
                  </p>
                </div>

                <a
                  href="#booking"
                  onClick={() => setSelectedPhoto(null)}
                  className="btn-teal px-5 py-2.5 rounded-full text-white text-xs font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
