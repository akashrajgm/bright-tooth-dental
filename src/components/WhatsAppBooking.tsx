"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, User, ChevronDown, Calendar, Check,
  Sparkles, Clock, Star,
} from "lucide-react";

const SERVICES_LIST = [
  "Root Canal Therapy",
  "Laser Cavity Filling",
  "Teeth Polishing & Cleaning",
  "Painless Tooth Extraction",
  "Teeth Restoration & Crown",
  "Dental Consultation",
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
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.65 }, colors: ["#D5006D", "#FF6F91", "#FFAFC0", "#ffffff"] });
    setTimeout(() => {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 }, angle: 60 });
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 }, angle: 120 });
    }, 250);
  } catch {}
}

export default function WhatsAppBooking() {
  const [mounted,      setMounted]      = useState(false);
  const [name,         setName]         = useState("");
  const [service,      setService]      = useState("");
  const [serviceOpen,  setServiceOpen]  = useState(false);
  const [selectedDay,  setSelectedDay]  = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting,   setSubmitting]   = useState(false);
  const [submitted,    setSubmitted]    = useState(false);
  const [days,         setDays]         = useState<ReturnType<typeof getNext7Days>>([]);

  useEffect(() => {
    setMounted(true);
    setDays(getNext7Days());
  }, []);

  const isValid = name.trim() && service && selectedDay !== null && selectedTime;

  const handleSubmit = useCallback(async () => {
    if (!isValid || submitting) return;
    setSubmitting(true);

    const dateStr  = days[selectedDay!]?.full ?? "";
    const message  = encodeURIComponent(
      `Hello! I'd like to book an appointment at Bright Tooth Dental Care.\n\n` +
      `👤 Name: ${name.trim()}\n` +
      `🦷 Service: ${service}\n` +
      `📅 Date: ${dateStr}\n` +
      `⏰ Time: ${selectedTime}\n\n` +
      `Please confirm my slot. Thank you!`
    );

    await fireConfetti();
    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=917892520522&text=${message}`, "_blank");
      setSubmitting(false);
    }, 900);
  }, [isValid, submitting, name, service, selectedDay, selectedTime, days]);

  if (!mounted) return null;

  return (
    <section id="booking" className="py-20 relative overflow-hidden bg-[#0E1622]">
      {/* ── Ambient glows ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[30%] w-[40%] h-[60%] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(213,0,109,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-[10%] w-[25%] h-[35%] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(255,111,145,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D5006D]/15 border border-[#D5006D]/30 text-[#FF6F91] text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Instant WhatsApp Booking
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Reserve Your{" "}
            <span className="italic font-normal gradient-text-raspberry">Premium Slot.</span>
          </h2>
          <p className="text-white/55 font-light text-base max-w-xl mx-auto leading-relaxed">
            Book in seconds — your details are sent directly to our clinic via WhatsApp.
            <br />
            <span className="text-[#FF6F91] font-semibold">5.0 ★ Rating | 100+ Google Reviews</span>
          </p>
        </div>

        {/* ── Dark Glass Card ─────────────────────────────────── */}
        <div
          className="rounded-3xl p-8 md:p-10 border border-white/10"
          style={{
            background: "rgba(21, 31, 50, 0.6)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── Patient Name ─────────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                Your Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="e.g., Sneha Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white placeholder-white/30 font-medium text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#FF6F91"; e.target.style.boxShadow = "0 0 0 3px rgba(255,111,145,0.20)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            </div>

            {/* ── Service Selector ─────────────────────────── */}
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                Select Treatment
              </label>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: service ? "white" : "rgba(255,255,255,0.35)",
                }}
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-white/30" />
                  {service || "Choose a service…"}
                </span>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0,  scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 border border-white/10 shadow-2xl"
                    style={{ background: "#151F32" }}
                  >
                    {SERVICES_LIST.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setService(s); setServiceOpen(false); }}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-white/80 hover:bg-[#D5006D]/20 hover:text-white transition-all duration-200"
                      >
                        {s}
                        {service === s && <Check className="w-4 h-4 text-[#FF6F91]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Day Picker ───────────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Preferred Date
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {days.map((day, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedDay(i)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-xl border transition-colors duration-250 min-w-[60px]"
                    style={{
                      background:   selectedDay === i ? "#D5006D"                  : "rgba(255,255,255,0.03)",
                      borderColor:  selectedDay === i ? "#D5006D"                  : "rgba(255,255,255,0.08)",
                      boxShadow:    selectedDay === i ? "0 4px 20px rgba(213,0,109,0.45)" : "none",
                      color:        selectedDay === i ? "#ffffff"                  : "rgba(255,255,255,0.6)",
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wide opacity-80">{day.short}</span>
                    <span className="text-xl font-bold font-serif my-0.5">{day.num}</span>
                    <span className="text-[10px] opacity-70">{day.mon}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ── Time Slot Picker ─────────────────────────── */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Preferred Time
              </label>
              <div className="grid grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <motion.button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="py-2.5 rounded-xl text-xs font-bold border transition-colors duration-250"
                    style={{
                      background:   selectedTime === slot ? "#D5006D"                  : "rgba(255,255,255,0.03)",
                      borderColor:  selectedTime === slot ? "#D5006D"                  : "rgba(255,255,255,0.08)",
                      boxShadow:    selectedTime === slot ? "0 4px 16px rgba(213,0,109,0.40)" : "none",
                      color:        selectedTime === slot ? "#ffffff"                  : "rgba(255,255,255,0.55)",
                    }}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Submit Button ───────────────────────────────── */}
          <motion.button
            onClick={handleSubmit}
            disabled={!isValid || submitting}
            whileTap={{ scale: isValid ? 0.96 : 1 }}
            className="mt-8 w-full py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: isValid
                ? "linear-gradient(135deg, #D5006D 0%, #FF6F91 100%)"
                : "rgba(255,255,255,0.04)",
              color: "white",
              boxShadow: isValid ? "0 8px 32px rgba(213,0,109,0.45)" : "none",
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.span key="done" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Opening WhatsApp…
                </motion.span>
              ) : submitting ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Confirming Slot…
                </motion.span>
              ) : (
                <motion.span key="idle" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Confirm via WhatsApp · +91 78925 20522
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Trust footer */}
          <div className="mt-5 flex items-center justify-center gap-2 text-white/30 text-xs font-medium">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            5.0 ★ Rating | 100+ Google Reviews · Kumaraswamy Layout, Bengaluru
          </div>
        </div>
      </div>
    </section>
  );
}
