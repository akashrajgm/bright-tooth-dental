"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Star, Shield } from "lucide-react";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer id="location" className="bg-[#0A2533] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-[-8%] w-[35%] h-[45%] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(9,99,126,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-[-5%] w-[25%] h-[30%] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,131,149,0.10) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-16 border-b border-white/10">

          {/* ── Left: Clinic Info ─────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Logo + rating */}
            <div>
              <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-xl border border-[#7AB2B1]/30 bg-white/5 p-1.5 mb-5 group hover:border-[#7AB2B1]/60 transition-all duration-300">
                <img
                  src="/logo-full.jpg"
                  alt="Bright Tooth Multispeciality Dental Care Logo"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#09637E]/30 border border-[#7AB2B1]/40">
                <Star className="w-3.5 h-3.5 text-[#7AB2B1] fill-[#7AB2B1]" />
                <span className="text-[#7AB2B1] text-xs font-bold">5.0 ★ Rating | 100+ Google Reviews</span>
              </div>
            </div>

            <p className="text-white/65 font-light text-sm md:text-base leading-relaxed max-w-md">
              Nestled in Kumaraswamy Layout, Bengaluru — blending expert dental mastery with comfortable,
              advanced clinical care. Dr. Devika Hiremath & Dr. Shadakshari.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#7AB2B1] flex-shrink-0 mt-0.5 border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Location</div>
                  <p className="text-white/65 leading-relaxed text-sm max-w-sm">
                    Sri Lakshmi Venkateshwara Arcade, #1319, Vyasaraya Ballal Rd,
                    Opposite Water Tank, 1st Stage, Kumaraswamy Layout, Bengaluru – 560111
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#7AB2B1] flex-shrink-0 border border-white/10">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Operating Hours</div>
                  <p className="text-white/65 text-xs md:text-sm">Mon–Sat: 9 AM – 9 PM</p>
                  <p className="text-white/65 text-xs md:text-sm mt-0.5">Sunday: 10:30 AM – 2 PM</p>
                  <p className="text-[10px] text-[#7AB2B1] font-bold uppercase tracking-wider mt-1">Open All 7 Days</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#7AB2B1] flex-shrink-0 border border-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-0.5">Direct Dental Line</div>
                  <a
                    href="tel:+917892520522"
                    className="text-white hover:text-[#7AB2B1] transition-colors duration-200 font-bold text-base"
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
              className="rounded-3xl p-8 h-full flex flex-col justify-between border border-[#7AB2B1]/20"
              style={{
                background: "rgba(10, 37, 51, 0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Find Our Clinic</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Situated opposite the landmark Water Tank on Vyasaraya Ballal Road,
                  Kumaraswamy Layout 1st Stage. On-site parking available.
                </p>

                {/* Location data card */}
                <div className="rounded-2xl border border-white/10 p-5 mb-8 space-y-3">
                  {[
                    ["Landmark",    "Opposite Water Tank"],
                    ["Entry Level", "Ground Floor Arcade"],
                    ["Zone",        "South Bengaluru"],
                    ["Pincode",     "560111"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-white/45">{k}</span>
                      <span className="text-white/90 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bright+Tooth+Multispeciality+Dental+Care+Kumaraswamy+Layout"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl btn-teal text-white font-bold text-center flex items-center justify-center gap-2 group"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-white/40 font-light">
          <p>© {year} Bright Tooth Multispeciality Dental Care. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#7AB2B1] font-medium">
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
