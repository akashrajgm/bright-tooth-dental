"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Microscope, Sparkles, Crown, HeartHandshake } from "lucide-react";

const SERVICES = [
  {
    icon:     Microscope,
    title:    "Advanced Root Canal Treatment",
    desc:     "Precision treatment using advanced digital microscopes. Designed to preserve your natural tooth structure with absolute comfort and zero pain.",
    tag:      "Most Requested",
    benefit:  "Microscope precision · Painless technology",
    iconColor:"text-brand-raspberry",
    iconBg:   "bg-brand-rose",
    image:    "/service_root_canal.png",
  },
  {
    icon:     Sparkles,
    title:    "Cosmetic Fillings & Polishing",
    desc:     "Hygiene-forward laser cavity procedures delivering seamless, natural aesthetics and superior teeth polishing in a single visit.",
    tag:      "Laser Tech",
    benefit:  "Natural aesthetics · Needle-free options",
    iconColor:"text-brand-coral",
    iconBg:   "bg-[#fff5f7]",
    image:    "/service_cosmetic.png",
  },
  {
    icon:     Crown,
    title:    "Precision Teeth Restoration",
    desc:     "Custom structural repair with high-durability porcelain and zirconia crowns engineered for a premium, authentic smile that lasts.",
    tag:      "Premium",
    benefit:  "Custom zirconia · Porcelain crowns",
    iconColor:"text-amber-500",
    iconBg:   "bg-amber-50",
    image:    "/service_restoration.png",
  },
  {
    icon:     HeartHandshake,
    title:    "Gentle Extractions & Post-Care",
    desc:     "Ultra-gentle extraction techniques with dedicated post-procedure support. Ensures swift recovery with minimal discomfort every time.",
    tag:      "Gentle Care",
    benefit:  "Gentle protocol · Recovery support",
    iconColor:"text-emerald-500",
    iconBg:   "bg-emerald-50",
    image:    "/service_extraction.png",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const card: Variants = {
  hidden:   { opacity: 0, y: 50, scale: 0.96 },
  visible:  { opacity: 1, y: 0,  scale: 1,    transition: { type: "spring" as const, stiffness: 80, damping: 16 } },
};

export default function ServicesGrid() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background rose shape */}
      <div
        className="absolute bottom-0 right-0 w-[35%] h-[45%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 90%, rgba(255,240,242,0.8) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[25%] h-[30%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 10%, rgba(255,240,242,0.6) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-raspberry mb-5 bg-brand-rose px-4 py-1.5 rounded-full border border-brand-raspberry/15"
          >
            Specialized Clinical Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-5 leading-[1.1]"
          >
            World-Class Care,
            <span className="block italic font-normal gradient-text-raspberry">
              Engineered for Comfort.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-brand-navy/60 font-light leading-relaxed text-base md:text-lg max-w-xl"
          >
            We merge medical precision with refined aesthetics. Every service
            is calibrated to deliver painless, restorative results.
          </motion.p>
        </div>

        {/* ── 4-Column Card Grid ──────────────────────────────── */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={i}
                variants={card}
                whileHover={{ y: -6, scale: 1.02 }}
                className="surface-card group p-8 flex flex-col justify-between min-h-[480px] cursor-default border border-transparent hover:border-[#FF6F91] hover:shadow-[0_20px_40px_-15px_rgba(213,0,109,0.15)] transition-all duration-300"
              >
                <div>
                  {/* Service Lifestyle Image */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-brand-rose-mid/20 shadow-inner">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 transition-transform ease-out"
                    />
                  </div>

                  {/* Tag & Icon bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-rose text-brand-raspberry text-[10px] font-bold uppercase tracking-wider border border-brand-raspberry/12">
                      {svc.tag}
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${svc.iconBg} ${svc.iconColor}`}>
                      <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-raspberry transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-light text-brand-navy/60 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-brand-navy/6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-raspberry/70">
                    {svc.benefit}
                  </span>
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
          className="mt-14 text-center"
        >
          <a
            href="#booking"
            className="btn-raspberry inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base"
          >
            Book Any Service · WhatsApp
          </a>
          <p className="mt-4 text-xs text-brand-navy/40 font-medium">
            5.0 ★ Rating | 100+ Google Reviews · Kumaraswamy Layout, Bengaluru
          </p>
        </motion.div>

      </div>
    </section>
  );
}
