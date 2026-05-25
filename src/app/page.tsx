"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const CredibilityMarquee = dynamic(() => import("@/components/CredibilityMarquee"), { ssr: false });
const DoctorsSection = dynamic(() => import("@/components/DoctorsSection"), { ssr: false });
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"), { ssr: false });
const ClinicGallery = dynamic(() => import("@/components/ClinicGallery"), { ssr: false });
const WallOfTrust = dynamic(() => import("@/components/WallOfTrust"), { ssr: false });
const WhatsAppBooking = dynamic(() => import("@/components/WhatsAppBooking"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Two-Tier Navigation */}
      <Navbar />

      <main className="flex-grow pt-[84px] sm:pt-[76px]">
        {/* 1. Hero — Pure White · Interactive Bento Stack */}
        <Hero />

        {/* 2. Credibility Ticker Strip — Deep Navy */}
        <CredibilityMarquee />

        {/* 3. Meet Our Doctors — Soft Tinted Rose #FFF0F2 */}
        <DoctorsSection />

        {/* 4. Specialized Services — Pure White */}
        <ServicesGrid />

        {/* 5. Immersive Clinic Gallery — Pure White */}
        <ClinicGallery />

        {/* 6. Wall of Trust — Infinite Review Marquee — Soft Rose */}
        <WallOfTrust />

        {/* 7. WhatsApp Appointment Scheduler — Dark Glass */}
        <WhatsAppBooking />
      </main>

      {/* 8. Footer — Location & Contact · Deep Navy */}
      <Footer />
    </div>
  );
}
