"use client";

import { Star, Quote, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name:     "Sushma Hiremath",
    initials: "SH",
    service:  "Cavity Filling & Cleaning",
    when:     "2 weeks ago",
    text:     "I had my dental cleaning and cavity filling done by Dr. Devika, and the experience was excellent. She handled everything with great care, explained the procedure clearly, and ensured I was comfortable throughout. Highly recommend Bright Tooth!",
  },
  {
    name:     "Aashutosh Harsh",
    initials: "AH",
    service:  "Painless Extraction",
    when:     "1 month ago",
    text:     "I had a tooth extraction, and it went smoother than I expected. The clinic is clean, and the staff is very welcoming. Dr. Devika and Dr. Shadakshari were professional and supportive. I highly recommend their services.",
  },
  {
    name:     "Sachin Shanmukhappa",
    initials: "SS",
    service:  "Gentle Root Canal",
    when:     "3 weeks ago",
    text:     "I recently had a root canal treatment with Dr. Shadakshari, and I am extremely impressed. He was very gentle and explained every step of the process. The treatment was incredibly comfortable, and the post-care instructions were very helpful!",
  },
  {
    name:     "Rajesh Shet",
    initials: "RS",
    service:  "Teeth Restoration & Crowns",
    when:     "3 days ago",
    text:     "Dr. Devika and Dr. Shadakshari are incredibly professional. The treatment here was very comfortable and gentle, and the staff is extremely caring. Highly recommend Bright Tooth for cosmetic and regular dental care!",
  },
  {
    name:     "Priya Nair",
    initials: "PN",
    service:  "Teeth Polishing & Smile",
    when:     "1 week ago",
    text:     "Absolutely wonderful experience. The clinic is immaculate and the team is so professional. My teeth have never looked better after the polishing session. Will definitely be coming back for regular checkups.",
  },
  {
    name:     "Rajan Kulkarni",
    initials: "RK",
    service:  "Wisdom Tooth Removal",
    when:     "2 months ago",
    text:     "Best dental clinic in Kumaraswamy Layout without a doubt. Dr. Devika is incredibly skilled and the gentle extraction procedure was a total relief. The staff is friendly and the facility is top-notch.",
  },
];

// Duplicate list for seamless infinite loop
const DUPLICATED_REVIEWS = [...REVIEWS, ...REVIEWS];

function ReviewCard({ r }: { r: (typeof REVIEWS)[0] }) {
  return (
    <div className="relative flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-3xl border border-[#7AB2B1]/25 hover:border-[#088395] hover:shadow-[0_20px_45px_-15px_rgba(9,99,126,0.18)] p-7 shadow-sm transition-all duration-300 flex flex-col justify-between h-full mx-3 cursor-pointer select-none">
      <div>
        {/* Background quote watermark */}
        <Quote className="absolute top-5 right-6 w-10 h-10 text-[#09637E]/10 stroke-[1]" />

        {/* Stars + verified */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            5.0 ★ Google Verified
          </div>
        </div>

        {/* Text */}
        <p className="text-brand-navy/85 text-sm font-light italic leading-relaxed mb-6">
          &ldquo;{r.text}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3.5 border-t border-gray-100 pt-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#09637E] to-[#088395] flex items-center justify-center text-white font-bold text-xs tracking-wider flex-shrink-0 shadow-sm">
          {r.initials}
        </div>
        <div>
          <div className="font-serif text-sm font-bold text-brand-navy">{r.name}</div>
          <div className="text-[11px] text-[#088395] font-semibold mt-0.5">
            {r.service} · {r.when}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WallOfTrust() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#EBF5F7] relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(9,99,126,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Section Header ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09637E] mb-4 bg-white px-4 py-1.5 rounded-full border border-[#7AB2B1]/30 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#09637E] text-[#09637E]" />
            Continuous Patient Praise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight">
            Loved by 100+ Patients
            <span className="block italic font-normal gradient-text-teal">Across Bengaluru.</span>
          </h2>
          <p className="text-brand-navy/70 font-light leading-relaxed text-base md:text-lg">
            Real patient experiences sourced live from Google Reviews.{" "}
            <strong className="text-[#09637E] font-bold">5.0 ★ Rating · 100% Genuine Care.</strong>
          </p>
        </div>
      </div>

      {/* ── Continuous Infinite Auto-Scrolling Marquee ───────── */}
      <div className="relative w-full overflow-hidden py-4 z-10 group">
        {/* Left & Right Edge Blur Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#EBF5F7] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#EBF5F7] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track using Framer Motion (Lively continuous loop) */}
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {DUPLICATED_REVIEWS.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </motion.div>
      </div>

      {/* Touch/Hover instruction pill */}
      <div className="text-center mt-3 relative z-10">
        <span className="text-[11px] text-brand-navy/50 font-medium">
          (Smooth continuous loop • Touch or hover any review to pause & read)
        </span>
      </div>

      {/* ── Trust Stats Strip ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "5.0 ★",  label: "Google Rating",   sub: "Top patient score" },
            { val: "100+",   label: "Google Reviews",  sub: "Verified local reviews" },
            { val: "100%",   label: "Comfort Rated",   sub: "Designed for gentle care" },
            { val: "7 Days", label: "Open All 7 Days", sub: "Mon–Sat 9AM–9PM | Sun 10:30AM–2PM" },
          ].map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-white rounded-2xl p-6 text-center border border-[#7AB2B1]/20 hover:border-[#7AB2B1] shadow-sm cursor-default transition-all duration-300"
            >
              <div className="font-serif text-3xl font-bold text-[#09637E] mb-1">{s.val}</div>
              <div className="text-sm font-bold text-brand-navy mb-0.5">{s.label}</div>
              <div className="text-[10px] text-brand-navy/60 font-medium leading-tight">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
