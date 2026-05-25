"use client";

const ITEMS = [
  "Bright Tooth Multispeciality",
  "5.0 ★ Rating",
  "100+ Google Reviews",
  "Elite Smile Studio",
];

export default function CredibilityMarquee() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="bg-brand-navy py-4.5 overflow-hidden relative border-y border-white/5">
      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="flex gap-8 items-center shrink-0 min-w-full animate-marquee">
          {doubled.map((text, i) => (
            <div key={`a-${i}`} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
                {text}
              </span>
              <span className="text-brand-coral font-bold text-sm select-none">✦</span>
            </div>
          ))}
        </div>
        <div className="flex gap-8 items-center shrink-0 min-w-full animate-marquee" aria-hidden>
          {doubled.map((text, i) => (
            <div key={`b-${i}`} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
                {text}
              </span>
              <span className="text-brand-coral font-bold text-sm select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
