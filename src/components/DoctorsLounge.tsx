"use client";

import { motion } from "framer-motion";
import { Award, Stethoscope, GraduationCap, Star } from "lucide-react";

const DOCTORS = [
  {
    name: "Dr. Devika Hiremath",
    title: "Lead Surgeon & Aesthetic Specialist",
    initials: "DH",
    accentColor: "from-brand-teal to-brand-cyan",
    glowColor: "shadow-brand-teal/30",
    specialties: ["Aesthetic Dentistry", "Laser Cavity Fillings", "Teeth Polishing"],
    credentials: "BDS – Cosmetic & Restorative Dentistry",
    quote:
      "\"My philosophy is simple — your comfort is our priority. Every patient deserves a gentle, beautiful smile.\"",
    direction: "left" as const,
  },
  {
    name: "Dr. Shadakshari",
    title: "Multispeciality Dental Expert",
    initials: "SD",
    accentColor: "from-brand-cyan to-emerald-400",
    glowColor: "shadow-brand-cyan/30",
    specialties: ["Root Canal Therapy", "Oral Surgery", "Restorative Dentistry"],
    credentials: "BDS, MDS – Oral & Maxillofacial Surgery",
    quote:
      "\"Precision and empathy are the twin pillars of exceptional dental care. I strive to deliver both.\"",
    direction: "right" as const,
  },
];

export default function DoctorsLounge() {
  return (
    <section
      id="doctors"
      className="py-28 bg-brand-lounge relative overflow-hidden"
    >
      {/* ── Ambient Glows ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-brand-teal/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-brand-cyan/6 blur-[100px]" />
        {/* Subtle wood grain lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.5) 60px, rgba(255,255,255,0.5) 61px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-4 block"
          >
            The Doctors Lounge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Excellence in Every{" "}
            <span className="italic font-normal gradient-text">Procedure.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 font-light leading-relaxed text-base md:text-lg"
          >
            Meet the two extraordinary clinicians who have built Bright Tooth&apos;s
            reputation for gentle, comfort-focused dental care in Bengaluru.
          </motion.p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {DOCTORS.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{
                opacity: 0,
                x: doctor.direction === "left" ? -60 : 60,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
                delay: i * 0.1,
              }}
              className="group"
            >
              <div className="glass-card-dark rounded-3xl p-8 md:p-10 border border-white/8 hover:border-brand-teal/30 transition-all duration-500 h-full flex flex-col">
                {/* Top Row: Avatar + Name */}
                <div className="flex items-start gap-5 mb-8">
                  {/* Vertical Photo Placeholder */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-20 h-28 rounded-2xl bg-gradient-to-b ${doctor.accentColor} flex items-end justify-center pb-3 shadow-xl ${doctor.glowColor} shadow-2xl`}
                    >
                      <span className="font-serif text-white font-bold text-xl">
                        {doctor.initials}
                      </span>
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center shadow-lg">
                      <Star className="w-3.5 h-3.5 text-white fill-current" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <motion.h3
                      initial={{ opacity: 0, x: doctor.direction === "left" ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-1"
                    >
                      {doctor.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: doctor.direction === "left" ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.28 + i * 0.1, duration: 0.5 }}
                      className="text-brand-teal text-sm font-semibold mb-2"
                    >
                      {doctor.title}
                    </motion.p>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {doctor.credentials}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-white/60 font-light italic text-sm md:text-base leading-relaxed mb-8 border-l-2 border-brand-teal/40 pl-4">
                  {doctor.quote}
                </blockquote>

                {/* Specialty Tags */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4 text-white/40 text-xs font-semibold uppercase tracking-wider">
                    <Stethoscope className="w-3.5 h-3.5" />
                    Specializations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-white/70 bg-white/5 hover:border-brand-teal/40 hover:text-brand-teal transition-all duration-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer divider */}
                <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                    <Award className="w-4 h-4" />
                    Verified Specialist · Google 5.0 ★
                  </div>
                  <a
                    href="#booking"
                    className="text-xs font-semibold text-brand-teal hover:text-brand-cyan transition-colors duration-200"
                  >
                    Book with Dr. {doctor.name.split(" ").slice(-1)[0]} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade to reviews (white bg) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
