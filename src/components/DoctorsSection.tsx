"use client";

import { motion } from "framer-motion";
import { Star, Award, GraduationCap, ArrowRight } from "lucide-react";

const DOCTORS = [
  {
    name:       "Dr. Devika Hiremath",
    subtitle:   "Expert in Aesthetic, Restorative, Preventative & Conservative Smile Design",
    initials:   "DH",
    gender:     "female",
    credentials:"BDS – Cosmetic & Restorative Dentistry",
    specialties:["Aesthetic Dentistry", "Restorative Smiles", "Laser Fillings", "Teeth Polishing"],
    quote:      "\"Your comfort and confidence are the foundation of everything I do. A comfortable, beautiful smile is not a luxury — it is your right.\"",
    avatarGrad: "from-[#7AB2B1] via-[#088395] to-[#09637E]",
    accentColor:"#09637E",
    slideFrom:  -70,
    image:      "/dr_devika.png",
  },
  {
    name:       "Dr. Shadakshari",
    subtitle:   "Specialist in Advanced Root Canals, Oral Extractions, Caps & Maxillofacial Surgery",
    initials:   "SD",
    gender:     "male",
    credentials:"BDS, MDS – Oral & Maxillofacial Surgery",
    specialties:["Root Canal Therapy", "Dental Implants", "Oral Surgery", "Extractions"],
    quote:      "\"Precision, patience, and empathy — these are the cornerstones of exceptional dental care that truly transforms lives.\"",
    avatarGrad: "from-[#088395] via-[#09637E] to-[#0A2533]",
    accentColor:"#088395",
    slideFrom:  70,
    image:      "/dr_shadakshari.jpg",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-28 relative overflow-hidden" style={{ background: "#EBF5F7" }}>

      {/* ── Background accents ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[40%] h-[50%]"
          style={{ background: "radial-gradient(ellipse at 90% 10%, rgba(9,99,126,0.08) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[35%] h-[40%]"
          style={{ background: "radial-gradient(ellipse at 10% 90%, rgba(8,131,149,0.06) 0%, transparent 65%)" }}
        />
        {/* Decorative dot grid */}
        <div
          className="absolute bottom-12 right-8 w-32 h-48 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, #09637E 1px, transparent 1px)", backgroundSize: "16px 16px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09637E] mb-4 bg-white px-4 py-1.5 rounded-full border border-[#7AB2B1]/40 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-[#09637E] text-[#09637E]" />
            Meet Our Dedicated Care Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-5 leading-tight"
          >
            Excellence Meets{" "}
            <span className="italic font-normal gradient-text-teal">Compassion.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-brand-navy/70 font-light leading-relaxed text-base md:text-lg"
          >
            Two extraordinary specialists who have built Bright Tooth&apos;s
            reputation for gentle, comfort-focused dental care.
            Trusted by hundreds of families in Bengaluru.
          </motion.p>
        </div>

        {/* ── Doctor Cards Grid ───────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 56, x: doc.slideFrom * 0.3 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 65, damping: 18, delay: i * 0.12 }}
              className="doctor-card flex-1 max-w-[460px] w-full mx-auto lg:mx-0 flex flex-col justify-between border border-transparent hover:border-[#7AB2B1] hover:shadow-[0_20px_40px_-15px_rgba(9,99,126,0.18)] transition-all duration-300"
            >
              {/* ── Portrait Area (explicit 460×620 on lg or aspect-3/4) ── */}
              <div
                className="relative w-full overflow-hidden lg:w-[460px] lg:h-[620px] aspect-[3/4]"
              >
                {doc.image ? (
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <>
                    {/* Gradient portrait placeholder */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${doc.avatarGrad}`} />

                    {/* Abstract portrait decoration */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                      {/* Silhouette shape */}
                      <div className="relative flex flex-col items-center">
                        {/* Head */}
                        <div
                          className="w-32 h-32 rounded-full mb-1 border-4 border-white/20 shadow-2xl"
                          style={{
                            background: "rgba(255,255,255,0.18)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <div className="w-full h-full rounded-full flex items-center justify-center">
                            <span className="font-serif text-5xl font-bold text-white/90">
                              {doc.initials}
                            </span>
                          </div>
                        </div>
                        {/* Shoulders / body suggestion */}
                        <div
                          className="w-52 h-28 rounded-t-[50%]"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(4px)",
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Verified badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="text-white text-[11px] font-bold">Google Verified</span>
                </div>

                {/* Decorative corner glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,37,51,0.5) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* ── Info Area ────────────────────────────── */}
              <div className="p-7 flex flex-col gap-4">
                {/* Name + title */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy leading-tight mb-1">
                    {doc.name}
                  </h3>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ color: doc.accentColor }}
                  >
                    {doc.subtitle}
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex items-center gap-2 text-brand-navy/60 text-xs font-medium">
                  <GraduationCap className="w-4 h-4 flex-shrink-0" />
                  {doc.credentials}
                </div>

                {/* Quote */}
                <blockquote className="text-brand-navy/70 text-sm font-light italic leading-relaxed border-l-2 border-[#09637E]/40 pl-4">
                  {doc.quote}
                </blockquote>

                {/* Specialty tags */}
                <div className="flex flex-wrap gap-2">
                  {doc.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF5F7] border border-[#7AB2B1]/40 text-[#09637E]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Book CTA */}
                <a
                  href="#booking"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-bold group"
                  style={{ color: doc.accentColor }}
                >
                  Book with {doc.name.split(" ")[1]}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Balanced Responsive Metrics Grid (No mobile overlap) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto mt-12 w-full"
        >
          {[
            "5.0 ★ Rated Clinic",
            "100+ Patients Treated",
            "Designed for Patient Comfort",
            "Open All 7 Days",
          ].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-2xl bg-white border border-[#7AB2B1]/30 font-sans text-xs sm:text-sm text-[#0A2533] shadow-sm font-semibold text-center"
            >
              <Award className="w-4 h-4 text-[#09637E] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
