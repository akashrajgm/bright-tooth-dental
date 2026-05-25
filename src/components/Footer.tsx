"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, ExternalLink, Star, Shield } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer id="location" className="bg-[#0E1622] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-[-8%] w-[35%] h-[45%] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(213,0,109,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-[-5%] w-[25%] h-[30%] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,111,145,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-16 border-b border-white/10">

          {/* ── Left: Clinic Info ─────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Logo + rating */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-white/10 overflow-hidden">
                  <img src="/logo.png" alt="Bright Tooth Logo" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-white leading-none">Bright Tooth</div>
                  <div className="text-[10px] text-[#FF6F91] font-semibold uppercase tracking-widest">Multispeciality Dental Care</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D5006D]/15 border border-[#D5006D]/30">
                <Star className="w-3.5 h-3.5 text-[#FF6F91] fill-[#FF6F91]" />
                <span className="text-[#FF6F91] text-xs font-bold">5.0 ★ Rating | 100+ Google Reviews</span>
              </div>
            </div>

            <p className="text-white/55 font-light text-sm md:text-base leading-relaxed max-w-md">
              Nestled in Kumaraswamy Layout, Bengaluru — blending expert dental mastery with comfortable,
              advanced clinical care. Dr. Devika Hiremath & Dr. Shadakshari.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#FF6F91] flex-shrink-0 mt-0.5 border border-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Location</div>
                  <p className="text-white/55 leading-relaxed text-sm max-w-sm">
                    Sri Lakshmi Venkateshwara Arcade, #1319, Vyasaraya Ballal Rd,
                    Opposite Water Tank, 1st Stage, Kumaraswamy Layout, Bengaluru – 560111
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#FF6F91] flex-shrink-0 border border-white/5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Operating Hours</div>
                  <p className="text-white/55 text-xs md:text-sm">Mon–Sat: 9 AM – 9 PM</p>
                  <p className="text-white/55 text-xs md:text-sm mt-0.5">Sunday: 10:30 AM – 2 PM</p>
                  <p className="text-[10px] text-[#FF6F91] font-bold uppercase tracking-wider mt-1">Open All 7 Days</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#FF6F91] flex-shrink-0 border border-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Direct Dental Line</div>
                  <a
                    href="tel:+917892520522"
                    className="text-white hover:text-[#FF6F91] transition-colors duration-200 font-bold text-base"
                  >
                    +91 78925 20522
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Map card ──────────────────────────── */}
          <div className="lg:col-span-6">
            <div
              className="rounded-3xl p-8 h-full flex flex-col justify-between border border-white/10"
              style={{
                background: "rgba(21, 31, 50, 0.4)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Find Our Clinic</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Situated opposite the landmark Water Tank on Vyasaraya Ballal Road,
                  Kumaraswamy Layout 1st Stage. On-site parking available.
                </p>

                {/* Location data card */}
                <div className="rounded-2xl border border-white/8 p-5 mb-8 space-y-3">
                  {[
                    ["Landmark",    "Opposite Water Tank"],
                    ["Entry Level", "Ground Floor Arcade"],
                    ["Zone",        "South Bengaluru"],
                    ["Pincode",     "560111"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-white/35">{k}</span>
                      <span className="text-white/80 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bright+Tooth+Multispeciality+Dental+Care+Kumaraswamy+Layout"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl btn-raspberry text-white font-bold text-center flex items-center justify-center gap-2 group"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-white/35 font-light">
          <p>© {year} Bright Tooth Multispeciality Dental Care. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#FF6F91] font-medium">
              <Shield className="w-3.5 h-3.5" />
              Kumaraswamy Layout, Bengaluru
            </span>
            <span>Managed by Dr. Devika & Dr. Shadakshari</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
