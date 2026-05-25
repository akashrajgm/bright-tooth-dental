"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Star } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",              href: "#home"     },
  { label: "Services",          href: "#services"  },
  { label: "Meet Our Doctors",  href: "#doctors"   },
  { label: "Immersive Gallery", href: "#gallery"   },
  { label: "Location",          href: "#location"  },
];

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

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [status, setStatus] = useState<{ isOpen: boolean; statusText: string }>({
    isOpen: false,
    statusText: "Checking status...",
  });

  useEffect(() => {
    const onScroll  = () => setScrolled(window.scrollY > 30);
    const onResize  = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("scroll", onScroll,  { passive: true });
    window.addEventListener("resize", onResize);

    // Initial status update
    setStatus(getClinicStatus());
    const interval = setInterval(() => {
      setStatus(getClinicStatus());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
        {/* Tier 1: Top Announcement Bar (Deep Navy #2C3E50) */}
        <div className="w-full bg-[#2C3E50] py-2 px-6 md:px-12 text-white border-b border-white/5 flex items-center justify-between text-xs">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            {/* Live status dot */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                {status.isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${status.isOpen ? "bg-emerald-500" : "bg-brand-coral"}`}></span>
              </span>
              <span className={status.isOpen ? "text-emerald-400 font-bold" : "text-brand-coral-soft font-semibold"}>
                {status.statusText}
              </span>
            </div>

            {/* Direct call link */}
            <a
              href="tel:+917892520522"
              className="hover:text-brand-coral transition-colors duration-200 font-bold tracking-wide"
            >
              Direct Line: +91 78925 20522
            </a>
          </div>
        </div>

        {/* Tier 2: Main Floating Navbar */}
        <div
          className={`w-full transition-all duration-500 ${
            scrolled
              ? "py-2 bg-white/95 shadow-md border-b border-brand-rose-mid/20 backdrop-blur-md"
              : "py-4 bg-white/80 border-b border-transparent backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-brand-rose-mid/20 overflow-hidden">
                <img src="/logo.png" alt="Bright Tooth Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-brand-navy group-hover:text-brand-raspberry transition-colors duration-300">
                  Bright Tooth
                </span>
                <span className="text-[10px] font-semibold text-brand-raspberry/70 uppercase tracking-widest">
                  Multispeciality
                </span>
              </div>
            </a>

            {/* Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-brand-navy/75 hover:text-brand-raspberry transition-colors duration-300 py-1 nav-link-underline hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Main CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href="#booking"
                className="btn-raspberry px-5.5 py-2.5 rounded-full text-white text-sm font-bold flex items-center gap-1.5 shadow-lg"
              >
                Reserve Appointment
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-brand-rose transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-brand-navy/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center border border-brand-rose-mid/20 overflow-hidden">
                    <img src="/logo.png" alt="Bright Tooth Logo" className="w-full h-full object-contain p-0.5" />
                  </div>
                  <span className="font-serif text-lg font-bold text-brand-navy">Bright Tooth</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-brand-navy/60 hover:text-brand-raspberry transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live status inside drawer */}
              <div className="mx-6 mt-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-rose border border-brand-raspberry/15 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  {status.isOpen && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? "bg-emerald-500" : "bg-brand-raspberry"}`}></span>
                </span>
                <span className={status.isOpen ? "text-emerald-700" : "text-brand-raspberry"}>
                  {status.statusText}
                </span>
              </div>

              {/* Rating Badge */}
              <div className="mx-6 mt-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-rose border border-brand-raspberry/15 w-fit">
                <Star className="w-3.5 h-3.5 text-brand-raspberry fill-brand-raspberry" />
                <span className="text-[10px] font-bold text-brand-raspberry">5.0 ★ Rating | 100+ Google Reviews</span>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 px-4 mt-4 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-brand-navy/80 hover:text-brand-raspberry font-semibold text-base py-2.5 px-3 rounded-xl hover:bg-brand-rose transition-all duration-200 flex items-center justify-between group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-gray-100">
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="btn-raspberry w-full py-4 rounded-2xl text-white font-bold text-center flex items-center justify-center gap-2"
                >
                  Reserve Appointment
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+917892520522"
                  className="mt-3 block text-center text-sm text-brand-raspberry font-semibold py-2"
                >
                  +91 78925 20522
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
