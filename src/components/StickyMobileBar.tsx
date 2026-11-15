"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Star, MessageSquare } from "lucide-react";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show sticky bar smoothly as soon as user scrolls past 50px
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#7AB2B1]/30 shadow-[0_-8px_30px_rgba(9,99,126,0.15)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        paddingTop: "0.65rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Micro-Trust Status Pill */}
      <div className="flex items-center justify-between px-1 mb-1.5 text-[11px] text-[#0A2533]/80 font-medium">
        <span className="flex items-center gap-1 text-[#09637E] font-bold">
          <Star className="w-3 h-3 fill-[#09637E] text-[#09637E]" />
          5.0 ★ Rated · 100+ Reviews
        </span>
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Mon–Sun Open
        </span>
      </div>

      {/* Dual CTA Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 1. Instant Phone Call */}
        <a
          href="tel:+917892520522"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#EBF5F7] border border-[#7AB2B1]/50 text-[#09637E] font-bold text-xs active:scale-[0.98] transition-transform shadow-sm"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-[#09637E] flex-shrink-0" />
          <span className="truncate">Call Clinic</span>
        </a>

        {/* 2. Instant WhatsApp Booking */}
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#09637E] to-[#088395] text-white font-bold text-xs active:scale-[0.98] transition-transform shadow-md shadow-[#09637E]/25"
          aria-label="Book appointment online"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Book Slot</span>
        </a>
      </div>
    </div>
  );
}
