"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, Phone, MessageSquare } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    category: "Location & Access",
    question: "Where is Bright Tooth Multispecialty Dental Care located in Bengaluru?",
    answer:
      "Bright Tooth Multispecialty Dental Care is located at Sri Lakshmi Venkateshwara Arcade, #1319, Vyasaraya Ballal Road, Opposite Water Tank, 1st Stage, Kumaraswamy Layout, Bengaluru – 560111. Our clinic features fully equipped operatory suites, hospital-grade sterilization, and convenient on-site parking.",
  },
  {
    category: "Doctors & Credentials",
    question: "Who are the lead dentists and surgeons at Bright Tooth Dental Care?",
    answer:
      "Our clinic is led by Dr. Devika Hiremath (BDS, Dental Surgeon, Reg. No. 56265A) and Dr. Shadakshari (BDS, Dental Surgeon, Reg. No. 48190A). Both doctors have extensive clinical experience in painless single-sitting root canals, pediatric dentistry, cosmetic smile design, and advanced restorative treatments.",
  },
  {
    category: "Emergency & Appointments",
    question: "How can I book an emergency dental appointment in Kumaraswamy Layout?",
    answer:
      "For urgent dental pain, chipped teeth, or facial swelling, call our emergency direct line at +91 78925 20522 or reserve an instant slot via our WhatsApp scheduler. We accommodate same-day emergency cases with priority clinical attention.",
  },
  {
    category: "Treatments & Pain Relief",
    question: "Is root canal treatment (RCT) painful at Bright Tooth?",
    answer:
      "No. We specialize in gentle, comfort-focused dentistry using computerized precision rotary instruments, digital imaging, and modern localized anesthesia. Most patients experience zero pain during the procedure and immediate relief from their toothache.",
  },
  {
    category: "Specialized Services",
    question: "What dental treatments are offered at your multispecialty clinic?",
    answer:
      "We provide end-to-end dental solutions: Painless Root Canal Therapy, Needle-Free Laser Cavity Fillings, Teeth Whitening & Diamond Polishing, Pediatric Dental Care for Children, Orthodontic Braces & Aligners, Zirconia Dental Crowns & Bridges, and Gentle Extractions.",
  },
  {
    category: "Hours & Availability",
    question: "Is Bright Tooth Dental Care open on Sundays and weekends?",
    answer:
      "Yes, Bright Tooth is open all 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM. This allows working professionals, students, and families to visit at convenient times without missing work or school.",
  },
  {
    category: "Pricing & Payment",
    question: "Do I need to pay an advance deposit to book an appointment?",
    answer:
      "No advance deposit or online payment is required. You can reserve your appointment slot online with zero charges, and pay transparently at the clinic reception via Cash, UPI (GPay/PhonePe/Paytm), or Cards after your consultation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white">
      {/* ── Background decoration ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[45%] h-[50%]"
          style={{
            background:
              "radial-gradient(ellipse at 85% 15%, rgba(8,131,149,0.06) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[45%]"
          style={{
            background:
              "radial-gradient(ellipse at 15% 85%, rgba(235,245,247,0.8) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Section Header ─────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF5F7] border border-[#7AB2B1]/40 text-[#09637E] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#088395]" />
            Patient FAQs & Knowledge Base
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="italic font-normal gradient-text-teal">Questions.</span>
          </h2>
          <p className="text-brand-navy/70 text-sm md:text-base font-light leading-relaxed">
            Everything you need to know about treatments, gentle care, doctor credentials, and scheduling at Bright Tooth Multispecialty Dental Care in Kumaraswamy Layout, Bengaluru.
          </p>
        </div>

        {/* ── FAQ Accordion Stack ────────────────────────────── */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#EBF5F7]/40 border-[#088395] shadow-md"
                    : "bg-white border-[#7AB2B1]/30 hover:border-[#7AB2B1]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EBF5F7] text-[#09637E] font-bold text-xs flex items-center justify-center border border-[#7AB2B1]/40">
                      Q{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-navy leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#09637E] text-white rotate-180"
                        : "bg-[#EBF5F7] text-[#09637E]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm md:text-base text-brand-navy/80 font-light leading-relaxed border-t border-[#7AB2B1]/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Still have questions CTA ───────────────────────── */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#09637E] to-[#088395] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-[#EBF5F7] text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7AB2B1]" />
              Need personalized advice?
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold">Have a specific dental question?</h4>
            <p className="text-white/80 text-xs sm:text-sm mt-1">Our clinical team is always available to guide you.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+917892520522"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#09637E] font-bold text-xs hover:bg-[#EBF5F7] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 78925 20522
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
