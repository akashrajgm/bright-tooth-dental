"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

function getClinicStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  // Monday to Saturday: 9:00 AM (540 mins) – 9:00 PM (1260 mins)
  // Sunday: 10:30 AM (630 mins) – 2:00 PM (840 mins)
  let isOpen = false;
  let statusText = "";

  if (day === 0) { // Sunday
    if (time >= 630 && time < 840) {
      isOpen = true;
      statusText = "Open Now • Drop In or Call";
    } else {
      isOpen = false;
      if (time < 630) {
        statusText = "Closed Now • Reserve for Today at 10:30 AM";
      } else {
        statusText = "Closed Now • Reserve for Monday at 9:00 AM";
      }
    }
  } else { // Monday to Saturday
    if (time >= 540 && time < 1260) {
      isOpen = true;
      statusText = "Open Now • Drop In or Call";
    } else {
      isOpen = false;
      if (time < 540) {
        statusText = "Closed Now • Reserve for Today at 9:00 AM";
      } else {
        if (day === 6) { // Saturday night -> next is Sunday at 10:30 AM
          statusText = "Closed Now • Reserve for Sunday at 10:30 AM";
        } else { // Monday - Friday night -> next is tomorrow at 9:00 AM
          statusText = "Closed Now • Reserve for Tomorrow at 9:00 AM";
        }
      }
    }
  }

  return { isOpen, statusText };
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

export default function Hero() {
  const [status, setStatus] = useState<{ isOpen: boolean; statusText: string }>({
    isOpen: false,
    statusText: "Checking clinic hours...",
  });

  useEffect(() => {
    setStatus(getClinicStatus());

    const interval = setInterval(() => {
      setStatus(getClinicStatus());
    }, 60000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-84px)] sm:min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-[#FFFFFF]"
    >
      {/* ── Decorative BG elements ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[55%] h-[65%]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(255,111,145,0.12) 0%, rgba(213,0,109,0.06) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[40%]"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(255,240,242,0.9) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-24 left-6 w-40 h-40 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D5006D 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 lg:pt-4 pb-16 relative z-10">

        {/* ── Left: Editorial Copy (7 cols on large screens) ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-7"
        >
          {/* Trust badge */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-rose border border-brand-raspberry/15 text-brand-raspberry text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-brand-raspberry" />
              5.0 ★ Rating | 100+ Google Reviews
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Painless Procedures
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl font-bold text-brand-navy leading-[1.07] tracking-tight"
          >
            Where a{" "}
            <span className="block mt-1 italic font-normal gradient-text-raspberry">
              Bright Smile Begins.
            </span>
          </motion.h1>

          {/* Sub copy - Official Brand COPY */}
          <motion.p
            variants={fadeUp}
            className="text-brand-navy/75 text-sm md:text-base font-light leading-relaxed max-w-2xl"
          >
            Bright Tooth Multispeciality Dental Care is dedicated to creating lasting and bright smiles. The clinic&apos;s comprehensive approach focuses on preventive care, patient education, child education of brushing techniques, and long-term oral health strategies, empowering individuals to maintain healthy and beautiful smiles for years to come. It’s time for a dental checkup at Bright Tooth Multispeciality Dental Care—where a bright smile begins. Book now and let’s make your teeth sparkle! Call us at +91 78925 20522 to schedule your appointment.
          </motion.p>

          {/* Stats Bar (updated to exact request) */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-100 max-w-2xl"
          >
            {[
              { v: "100+", l: "Google Reviews" },
              { v: "5+ Years",  l: "Elite Excellence"  },
              { v: "Completely", l: "Painless Procedures"  },
              { v: "Open 7 Days", l: "Weekly Care"    },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold text-brand-raspberry whitespace-nowrap">{s.v}</span>
                <span className="text-[10px] font-bold text-brand-navy/55 uppercase tracking-wider mt-0.5 leading-tight">{s.l}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <a
              href="#booking"
              className="btn-raspberry px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 group flex-1 sm:flex-initial"
            >
              Reserve a Slot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917892520522"
              className="px-8 py-4 rounded-full border-2 border-brand-raspberry/25 text-brand-raspberry font-bold text-center hover:bg-brand-rose transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              Call +91 78925 20522
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Premium Cropped 3D Video Component ── */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[420px] lg:min-h-[480px]">
          {/* Radial depth background layer */}
          <div
            className="absolute inset-0 pointer-events-none blur-3xl opacity-60 bg-radial"
            style={{
              background: "radial-gradient(circle, rgba(255,111,145,0.2) 0%, rgba(213,0,109,0.05) 50%, transparent 70%)",
            }}
          />

          {/* Unified Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] z-10 rounded-3xl overflow-hidden shadow-2xl border border-brand-rose-mid/30 bg-white"
          >
            <video
              src="/3d_component.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform scale-[1.08] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/15 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Bottom fade into CredibilityMarquee */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#2C3E50] pointer-events-none" />
    </section>
  );
}
