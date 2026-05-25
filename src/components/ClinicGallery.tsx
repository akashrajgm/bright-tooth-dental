"use client";

import { motion } from "framer-motion";
import { Star, Camera, ShieldCheck } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src:         "/reception.png",
    title:       "Sleek Reception Lounge",
    desc:        "Designed for patient serenity. Modern marble contours and warm accents provide a relaxing atmosphere before your treatment.",
    gridClass:   "md:col-span-2 md:row-span-2 h-[480px]",
    badge:       "Gentle Comfort"
  },
  {
    src:         "/treatment.png",
    title:       "State-of-the-Art Treatment Rooms",
    desc:        "Where advanced clinical dentistry happens. Fully sterile, ergonomic, and equipped with noise-canceling patient entertainment.",
    gridClass:   "md:col-span-1 h-[230px]",
    badge:       "100% Sterile"
  },
  {
    src:         "/diagnostic.png",
    title:       "Advanced Diagnostic Bay",
    desc:        "Empowered by advanced tech. 3D CBCT imaging and ultra-low-radiation digital scanning for pin-point diagnosis.",
    gridClass:   "md:col-span-1 h-[230px]",
    badge:       "Advanced Diagnostics"
  }
];

export default function ClinicGallery() {
  return (
    <section id="gallery" className="py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[30%] h-[40%]"
          style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(255,111,145,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[30%] h-[40%]"
          style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(213,0,109,0.06) 0%, transparent 60%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-raspberry mb-4 bg-brand-rose px-4 py-1.5 rounded-full border border-brand-raspberry/20 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-brand-raspberry" />
            Immersive Clinic Gallery
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-5 leading-tight">
            A Glimpse into{" "}
            <span className="italic font-normal gradient-text-raspberry">Your Dream Smile.</span>
          </h2>

          <p className="text-brand-navy/60 font-light leading-relaxed text-base md:text-lg">
            Step inside our ultra-modern, hygiene-forward dental studio in Bengaluru.
            <br />
            <span className="inline-flex items-center gap-1.5 text-brand-raspberry font-semibold mt-2 bg-brand-rose border border-[#FF6F91]/30 px-3 py-1 rounded-full text-xs">
              Best dental clinic in Kumaraswamy Layout
            </span>
          </p>
        </div>

        {/* ── Asymmetric Masonry Grid ─────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
              className={`relative group overflow-hidden rounded-3xl border border-brand-navy/[0.08] hover:border-[#FF6F91] hover:shadow-[0_20px_40px_-15px_rgba(213,0,109,0.18)] cursor-pointer transition-all duration-300 ${item.gridClass}`}
            >
              {/* Image with hover zoom */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Thin Border Overlay */}
              <div className="absolute inset-0 border border-[#2C3E50]/10 group-hover:border-[#FF6F91]/30 rounded-3xl pointer-events-none z-20 transition-colors duration-300" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#2C3E50]/10 text-[10px] font-bold text-brand-navy uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-brand-raspberry" />
                  {item.badge}
                </span>
              </div>

              {/* Elegant Textual Fade-in Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out flex flex-col justify-end p-6 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
