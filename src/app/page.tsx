"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityMarquee from "@/components/CredibilityMarquee";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ClinicGallery from "@/components/ClinicGallery";
import WallOfTrust from "@/components/WallOfTrust";
import FAQSection from "@/components/FAQSection";
import WhatsAppBooking from "@/components/WhatsAppBooking";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Two-Tier Navigation */}
      <Navbar />

      <main className="flex-grow pt-[84px] sm:pt-[76px] pb-20 lg:pb-0">
        {/* 1. Hero — Pure White · Interactive Bento Stack */}
        <Hero />

        {/* 2. Credibility Ticker Strip — Deep Teal Strip */}
        <CredibilityMarquee />

        {/* 3. Meet Our Doctors — Ice Blue #EBF5F7 */}
        <DoctorsSection />

        {/* 4. Specialized Services — Pure White */}
        <ServicesGrid />

        {/* 5. Immersive Clinic Gallery — Pure White */}
        <ClinicGallery />

        {/* 6. Wall of Trust — Infinite Review Marquee — Ice Blue #EBF5F7 */}
        <WallOfTrust />

        {/* 7. Patient FAQ & Knowledge Base (AIO/GEO/SEO) — Pure White */}
        <FAQSection />

        {/* 8. WhatsApp Appointment Scheduler — Deep Teal Dark Glass */}
        <WhatsAppBooking />
      </main>

      {/* 9. Footer — Location & Contact · Deep Teal-Navy */}
      <Footer />

      {/* 9. Sticky Mobile Conversion Bar (iOS & Android) */}
      <StickyMobileBar />
    </div>
  );
}
