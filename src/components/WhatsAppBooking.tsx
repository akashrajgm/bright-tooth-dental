"use client";

import { useState, useSyncExternalStore, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, User, ChevronDown, Calendar, Check,
  Sparkles, Clock, Star,
} from "lucide-react";

const emptySubscribe = () => () => {};

const SERVICES_LIST = [
  "Painless Root Canal Therapy",
  "Needle-Free Laser Cavity Filling",
  "Teeth Polishing & Cleaning",
  "Gentle Tooth Extraction",
  "Teeth Restoration & Crowns",
  "Pediatric / Kids Dental Care",
  "Cosmetic Smile Consultation",
];

const TIME_SLOTS = [
  "09:30 AM", "11:00 AM", "12:30 PM",
  "02:00 PM", "03:30 PM", "05:00 PM",
  "06:30 PM", "08:00 PM",
];

function getNext7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      short: d.toLocaleDateString("en-US", { weekday: "short" }),
      num:   d.getDate(),
      mon:   d.toLocaleString("en-US", { month: "short" }),
      full:  d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
    };
  });
}

async function fireConfetti() {
  try {
    const mod = await import("canvas-confetti");
    const confetti = mod.default;
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.65 }, colors: ["#09637E", "#088395", "#7AB2B1", "#EBF5F7", "#ffffff"] });
    setTimeout(() => {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 }, angle: 60 });
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 }, angle: 120 });
    }, 250);
  } catch {}
}

export default function WhatsAppBooking() {
  const mounted                         = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [name,         setName]         = useState("");
  const [service,      setService]      = useState("");
  const [serviceOpen,  setServiceOpen]  = useState(false);
  const [selectedDay,  setSelectedDay]  = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting,   setSubmitting]   = useState(false);
  const [submitted,    setSubmitted]    = useState(false);
  const [days]                          = useState<ReturnType<typeof getNext7Days>>(getNext7Days);

  const isValid = name.trim() && service && selectedDay !== null && selectedTime;

  const handleSubmit = useCallback(async () => {
    if (!isValid || submitting) return;
    setSubmitting(true);

    const dateStr  = days[selectedDay!]?.full ?? "";
    const message  = encodeURIComponent(
      `Hello! I'd like to book an appointment at Bright Tooth Dental Care.\n\n` +
      `👤 Name: ${name.trim()}\n` +
      `🦷 Treatment: ${service}\n` +
      `📅 Date: ${dateStr}\n` +
      `⏰ Time: ${selectedTime}\n\n` +
      `Please confirm my slot. Thank you!`
    );

    await fireConfetti();
    setSubmitted(true);

    setTimeout(() => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=917892520522&text=${message}`;
      const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (win) {
        win.opener = null;
      }
      setSubmitting(false);
    }, 900);
  }, [isValid, submitting, name, service, selectedDay, selectedTime, days]);

  if (!mounted) return null;

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#0A2533]">
      {/* ── Ambient glows ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[25%] w-[50%] h-[60%] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(9,99,126,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-[10%] w-[35%] h-[40%] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(8,131,149,0.2) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09637E] border border-[#7AB2B1]/50 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7AB2B1]" />
            Instant WhatsApp Scheduler
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Reserve Your{" "}
            <span className="italic font-normal text-[#7AB2B1]">Preferred Slot.</span>
          </h2>
          <p className="text-white/85 font-normal text-base max-w-xl mx-auto leading-relaxed">
            Fast, zero-advance scheduling. Your details are sent directly to our clinic desk via WhatsApp.
          </p>
        </div>

        {/* ── High-Contrast Luminous Teal Card ────────────────── */}
        <div
          className="rounded-3xl p-8 md:p-11 border-2 border-[#7AB2B1]/40 shadow-2xl"
          style={{
            background: "linear-gradient(180deg, rgba(11, 44, 60, 0.95) 0%, rgba(10, 37, 51, 0.98) 100%)",
            boxShadow: "0 25px 60px -15px rgba(0,0,0,0.6), inset 0 1px 0 rgba(122,178,177,0.25)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── Patient Name ─────────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                <User className="w-4 h-4 text-[#7AB2B1]" />
                Your Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., Sneha Sharma"
                  value={name}
                  maxLength={50}
                  onChange={(e) => {
                    const sanitized = e.target.value.replace(/[^a-zA-Z\s.'-]/g, "").slice(0, 50);
                    setName(sanitized);
                  }}
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/50 font-medium text-sm outline-none transition-all duration-200 bg-white/10 border border-[#7AB2B1]/40 focus:border-[#7AB2B1] focus:bg-white/15 focus:ring-2 focus:ring-[#088395]/40"
                />
              </div>
            </div>

            {/* ── Treatment Selector ────────────────────────── */}
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7AB2B1]" />
                Select Dental Treatment
              </label>
              <button
                type="button"
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full px-4 py-3.5 rounded-xl text-left font-medium text-sm flex items-center justify-between transition-all duration-200 bg-white/10 border border-[#7AB2B1]/40 hover:border-[#7AB2B1] text-white focus:outline-none"
              >
                <span className={service ? "text-white font-semibold" : "text-white/50"}>
                  {service || "Choose a service (e.g. Painless Root Canal, Cleaning)"}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#7AB2B1] transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden z-30 shadow-2xl border-2 border-[#7AB2B1]/50 bg-[#0A2533]"
                  >
                    {SERVICES_LIST.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => { setService(s); setServiceOpen(false); }}
                        className="w-full px-5 py-3 text-left text-sm font-semibold text-white/90 hover:bg-[#09637E] hover:text-white flex items-center justify-between border-b border-white/10 last:border-0 transition-colors"
                      >
                        {s}
                        {service === s && <Check className="w-4 h-4 text-[#7AB2B1]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Day Picker ───────────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#7AB2B1]" />
                Preferred Date
              </label>
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                {days.map((day, i) => {
                  const selected = selectedDay === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDay(i)}
                      className={`flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-2xl border-2 transition-all duration-200 min-w-[68px] cursor-pointer ${
                        selected
                          ? "bg-[#09637E] border-[#7AB2B1] text-white shadow-lg shadow-[#09637E]/60 scale-105"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7AB2B1]">
                        {day.short}
                      </span>
                      <span className="text-2xl font-bold font-serif my-0.5 text-white">
                        {day.num}
                      </span>
                      <span className="text-[11px] font-semibold text-white/90">
                        {day.mon}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Time Slot Picker ─────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7AB2B1]" />
                Preferred Time
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIME_SLOTS.map((slot) => {
                  const selected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 rounded-xl text-xs font-bold border-2 transition-all duration-200 cursor-pointer ${
                        selected
                          ? "bg-[#09637E] border-[#7AB2B1] text-white shadow-md shadow-[#09637E]/50 scale-102"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Submit Button ───────────────────────────────── */}
          <motion.button
            onClick={handleSubmit}
            disabled={!isValid || submitting}
            whileTap={{ scale: isValid ? 0.97 : 1 }}
            className="mt-8 w-full py-4.5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-xl cursor-pointer"
            style={{
              background: isValid
                ? "linear-gradient(135deg, #09637E 0%, #088395 100%)"
                : "rgba(255,255,255,0.08)",
              color: "white",
              boxShadow: isValid ? "0 8px 30px rgba(9,99,126,0.6)" : "none",
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.span key="done" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#EBF5F7]" />
                  Opening WhatsApp…
                </motion.span>
              ) : submitting ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Confirming Slot…
                </motion.span>
              ) : (
                <motion.span key="idle" className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#7AB2B1]" />
                  Confirm via WhatsApp · +91 78925 20522
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Micro-Trust Reassurance Label (High Visibility) */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-center text-[#EBF5F7] bg-white/5 py-2.5 px-4 rounded-xl border border-white/10">
            <span className="flex items-center gap-1.5 text-[#7AB2B1]">
              <Check className="w-4 h-4 text-emerald-400" />
              No advance payment needed
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-white/90">Confirmation sent instantly via WhatsApp</span>
          </div>

          {/* Bottom Trust badge */}
          <div className="mt-5 flex items-center justify-center gap-2 text-white/60 text-xs font-medium">
            <Star className="w-3.5 h-3.5 text-[#7AB2B1] fill-[#7AB2B1]" />
            Best Dental Clinic in Kumaraswamy Layout · 5.0 ★ Google Rating
          </div>
        </div>
      </div>
    </section>
  );
}
