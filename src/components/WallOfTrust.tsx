"use client";

import { Star, Quote, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name:     "Sushma Hiremath",
    initials: "SH",
    service:  "Cavity Filling",
    when:     "2 weeks ago",
    text:     "I had my dental cleaning and cavity filling done by Dr. Devika, and the experience was excellent. She handled everything with great care, explained the procedure clearly, and ensured I was comfortable throughout. Highly recommend Bright Tooth!",
  },
  {
    name:     "Aashutosh Harsh",
    initials: "AH",
    service:  "Tooth Extraction",
    when:     "1 month ago",
    text:     "I had a tooth extraction, and it went smoother than I expected. The clinic is clean, and the staff is very welcoming. Dr. Devika and Dr. Shadakshari were professional and supportive. I highly recommend their services.",
  },
  {
    name:     "Sachin Shanmukhappa",
    initials: "SS",
    service:  "Root Canal",
    when:     "3 weeks ago",
    text:     "I recently had a root canal treatment with Dr. Shadakshari, and I am extremely impressed. He was very gentle and explained every step of the process. The treatment was completely painless, and the post-care instructions were very helpful!",
  },
  {
    name:     "Rajesh Shet",
    initials: "RS",
    service:  "Teeth Restoration",
    when:     "3 days ago",
    text:     "Dr. Devika and Dr. Shadakshari are incredibly professional. The treatment here was completely painless, and the staff is extremely caring. Highly recommend Bright Tooth for cosmetic and regular dental care!",
  },
  {
    name:     "Priya Nair",
    initials: "PN",
    service:  "Teeth Polishing",
    when:     "1 week ago",
    text:     "Absolutely wonderful experience. The clinic is immaculate and the team is so professional. My teeth have never looked better after the polishing session. Will definitely be coming back for regular checkups.",
  },
  {
    name:     "Rajan Kulkarni",
    initials: "RK",
    service:  "Extraction",
    when:     "2 months ago",
    text:     "Best dental clinic in Kumaraswamy Layout without a doubt. Dr. Devika is incredibly skilled and the painless extraction procedure was a total relief. The staff is friendly and the facility is top-notch.",
  },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex-shrink-0 w-[340px] md:w-[380px] mx-3 bg-white rounded-2xl border border-[#2C3E50]/[0.08] hover:border-[#FF6F91] hover:shadow-[0_20px_40px_-15px_rgba(213,0,109,0.12)] p-7 shadow-md group cursor-default transition-all duration-300"
    >
      {/* Background quote watermark */}
      <Quote className="absolute top-5 right-6 w-10 h-10 text-[#D5006D]/8 stroke-[1]" />

      {/* Stars + verified */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
          <CheckCircle className="w-3 h-3 text-emerald-500" />
          5.0 ★ Verified
        </div>
      </div>

      {/* Text */}
      <p className="text-brand-navy/80 text-sm font-light italic leading-relaxed mb-6">
        &ldquo;{r.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-[#2C3E50]/[0.08] pt-4">
        <div className="w-9 h-9 rounded-full btn-raspberry flex items-center justify-center text-white font-bold text-xs tracking-wider flex-shrink-0">
          {r.initials}
        </div>
        <div>
          <div className="font-serif text-sm font-bold text-brand-navy">{r.name}</div>
          <div className="text-[10px] text-brand-navy/50 font-medium mt-0.5">
            {r.service} · {r.when}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WallOfTrust() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-28 bg-[#FFF0F2] relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(213,0,109,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-raspberry mb-4 bg-brand-rose px-4 py-1.5 rounded-full border border-brand-raspberry/20 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-brand-raspberry text-brand-raspberry" />
            Wall of Trust
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-5 leading-tight">
            Verified Experiences
            <span className="block italic font-normal gradient-text-raspberry">from Our Patrons.</span>
          </h2>
          <p className="text-brand-navy/60 font-light leading-relaxed text-base md:text-lg">
            Real patient reviews sourced directly from our Google Business listing.{" "}
            <strong className="text-brand-raspberry font-bold">5.0 ★ Rating | 100+ Google Reviews.</strong>
          </p>
        </div>
      </div>

      {/* ── Infinite Marquee ────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0  w-24 bg-gradient-to-r from-[#FFF0F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FFF0F2] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden py-3">
          <div className="flex animate-marquee shrink-0 min-w-full items-stretch">
            {doubled.map((r, i) => <ReviewCard key={`a-${i}`} r={r} />)}
          </div>
          <div className="flex animate-marquee shrink-0 min-w-full items-stretch" aria-hidden>
            {doubled.map((r, i) => <ReviewCard key={`b-${i}`} r={r} />)}
          </div>
        </div>
      </div>

      {/* ── Stats strip ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "5.0 ★",  label: "Google Rating",   sub: "5.0 ★ Rating | 100+ Google Reviews" },
            { val: "100+",   label: "Google Reviews",  sub: "5.0 ★ Rating | 100+ Google Reviews" },
            { val: "100%",   label: "Painless Rated",   sub: "By verified patients" },
            { val: "7 Days", label: "Clinic Open",      sub: "9:00 AM – 9:00 PM" },
          ].map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-white rounded-2xl p-6 text-center border border-[#2C3E50]/[0.08] hover:border-[#FF6F91]/40 shadow-sm cursor-default transition-all duration-300"
            >
              <div className="font-serif text-3xl font-bold text-brand-raspberry mb-1">{s.val}</div>
              <div className="text-sm font-bold text-brand-navy mb-0.5">{s.label}</div>
              <div className="text-[10px] text-brand-navy/50 font-medium leading-tight">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
