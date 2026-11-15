"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Microscope, Sparkles, Crown, HeartHandshake, Smile, ShieldCheck, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon:      Microscope,
    title:     "Painless, Microscope Root Canal",
    desc:      "Fast, comfortable relief from severe toothache in a single relaxing session with modern gentle anesthesia and digital microscopic precision.",
    tag:       "Painless Relief",
    benefit:   "Microscope precision · Gentle anesthesia",
    iconColor: "text-[#09637E]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/service_root_canal.png",
  },
  {
    icon:      Sparkles,
    title:     "Needle-Free Laser Fillings & Diamond Polish",
    desc:      "Repair cavities and refresh your smile with zero needle discomfort, clean laser technology, no vibration, and a mirror-smooth teeth polish finish.",
    tag:       "Needle-Free Tech",
    benefit:   "Single-visit care · Smooth finish",
    iconColor: "text-[#088395]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/service_cosmetic.png",
  },
  {
    icon:      Crown,
    title:     "Precision Zirconia Crowns & Restoration",
    desc:      "Custom structural tooth repair engineered with biocompatible zirconia and porcelain for natural aesthetics, accurate bite alignment, and lifelong strength.",
    tag:       "Permanent Repair",
    benefit:   "Custom shade match · Break-resistant",
    iconColor: "text-[#09637E]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/service_restoration.png",
  },
  {
    icon:      Smile,
    title:     "Tear-Free Pediatric & Kids Dentistry",
    desc:      "Gentle, stress-free dental visits for children focusing on cavity prevention, comfortable checkups, and building cheerful oral hygiene habits early.",
    tag:       "Kids Friendly",
    benefit:   "Tear-free visits · Friendly team",
    iconColor: "text-[#088395]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/treatment.png",
  },
  {
    icon:      HeartHandshake,
    title:     "Comfort Wisdom Tooth & Oral Surgery",
    desc:      "Ultra-gentle oral surgery and wisdom tooth removal by specialist maxillofacial surgeons with complete pain management and fast recovery support.",
    tag:       "Specialist Care",
    benefit:   "MDS Oral Surgeon · Minimal downtime",
    iconColor: "text-[#09637E]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/service_extraction.png",
  },
  {
    icon:      ShieldCheck,
    title:     "Cosmetic Smile Makeover & Aligners",
    desc:      "Transform your confidence with custom aesthetic smile design, clear aligner consultations, and conservative restorative dentistry tailored to your face.",
    tag:       "Smile Design",
    benefit:   "Natural appearance · Personalized plan",
    iconColor: "text-[#088395]",
    iconBg:    "bg-[#EBF5F7]",
    image:     "/diagnostic.png",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const card: Variants = {
  hidden:   { opacity: 0, y: 35, scale: 0.98 },
  visible:  { opacity: 1, y: 0,  scale: 1,    transition: { type: "spring" as const, stiffness: 85, damping: 15 } },
};

export default function ServicesGrid() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background shape */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 90%, rgba(235,245,247,0.9) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[30%] h-[35%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 10%, rgba(235,245,247,0.7) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ──────────────────────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09637E] mb-5 bg-[#EBF5F7] px-4 py-1.5 rounded-full border border-[#7AB2B1]/30"
          >
            Multispeciality Dental Treatments
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-5 leading-[1.15]"
          >
            Specialized Care,
            <span className="block italic font-normal gradient-text-teal">
              Engineered for Complete Comfort.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-brand-navy/70 font-light leading-relaxed text-base md:text-lg max-w-2xl"
          >
            From emergency pain relief and gentle root canals to pediatric dentistry and smile makeovers, our clinic provides comprehensive dental solutions under one roof in Kumaraswamy Layout.
          </motion.p>
        </div>

        {/* ── Rich 6-Card Responsive Grid (3 Columns) ─────────── */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={i}
                variants={card}
                whileHover={{ y: -6, scale: 1.015 }}
                className="bg-white rounded-3xl group p-7 flex flex-col justify-between border border-[#7AB2B1]/25 hover:border-[#088395] hover:shadow-[0_20px_45px_-15px_rgba(9,99,126,0.18)] transition-all duration-300"
              >
                <div>
                  {/* Service Illustration Image */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-[#7AB2B1]/20 bg-[#EBF5F7]/50 shadow-inner p-2 flex items-center justify-center">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Tag & Icon bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EBF5F7] text-[#09637E] text-[11px] font-bold uppercase tracking-wider border border-[#7AB2B1]/30">
                      {svc.tag}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${svc.iconBg} ${svc.iconColor} shadow-sm`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2.5 leading-snug group-hover:text-[#09637E] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-light text-brand-navy/70 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                </div>

                {/* Footer with Benefit + Quick Book Link */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#088395]">
                    {svc.benefit}
                  </span>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#09637E] group-hover:translate-x-1 transition-transform"
                    aria-label={`Book ${svc.title}`}
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#booking"
            className="btn-teal inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base shadow-lg shadow-[#09637E]/25 hover:shadow-xl hover:shadow-[#09637E]/35 transition-all"
          >
            <span>Book Any Service via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-3.5 text-xs text-brand-navy/55 font-medium">
            Opposite Water Tank, 1st Stage, Kumaraswamy Layout, Bengaluru
          </p>
        </motion.div>

      </div>
    </section>
  );
}
