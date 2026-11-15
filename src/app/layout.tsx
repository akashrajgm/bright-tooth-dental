import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bright-tooth-dental.vercel.app"),
  title: "Bright Tooth Multispecialty Dental Care | Best Dental Clinic in Kumaraswamy Layout, Bengaluru",
  description:
    "Looking for expert dental care in Kumaraswamy Layout, Bengaluru? Visit Bright Tooth Multispecialty Dental Care for painless root canals, braces, cosmetic dentistry, and family dental care by Dr. Devika & Dr. Shadakshari. Book today!",
  keywords: [
    "Dentist in Kumaraswamy Layout",
    "Multispecialty Dental Clinic Bengaluru",
    "Dr. Devika Hiremath dentist",
    "Dr. Shadakshari dentist",
    "painless root canal Bengaluru",
    "best dental clinic near me",
    "best dentist in Kumaraswamy Layout",
    "dental clinic in Kumaraswamy Layout",
    "dental hospital in South Bengaluru",
    "teeth braces Bengaluru",
    "pediatric dentist Kumaraswamy Layout",
    "cosmetic dentistry Bengaluru",
    "emergency dentist Kumaraswamy Layout",
    "Bright Tooth Dental Care",
  ],
  openGraph: {
    title: "Bright Tooth Multispecialty Dental Care | Best Dental Clinic in Kumaraswamy Layout, Bengaluru",
    description:
      "Looking for expert dental care in Kumaraswamy Layout, Bengaluru? Visit Bright Tooth Multispecialty Dental Care for painless root canals, braces, cosmetic dentistry, and family dental care. Book today!",
    locale: "en_IN",
    type: "website",
    url: "https://bright-tooth-dental.vercel.app",
    siteName: "Bright Tooth Multispecialty Dental Care",
    images: [
      {
        url: "/logo-full.jpg",
        width: 1200,
        height: 630,
        alt: "Bright Tooth Multispecialty Dental Care Logo - Best Dentist in Kumaraswamy Layout, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Tooth Multispecialty Dental Care | Best Dental Clinic in Kumaraswamy Layout, Bengaluru",
    description:
      "Looking for expert dental care in Kumaraswamy Layout, Bengaluru? Visit Bright Tooth Multispecialty Dental Care for painless root canals, braces, cosmetic dentistry, and family dental care. Book today!",
    images: ["/logo-full.jpg"],
  },
  icons: {
    icon: "/logo-emblem.jpg",
    shortcut: "/logo-emblem.jpg",
    apple: "/logo-emblem.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://bright-tooth-dental.vercel.app/#dentist",
      "name": "Bright Tooth Multispecialty Dental Care",
      "alternateName": "Bright Tooth Dental Care Kumaraswamy Layout Bengaluru",
      "url": "https://bright-tooth-dental.vercel.app",
      "logo": "https://bright-tooth-dental.vercel.app/logo-emblem.jpg",
      "image": "https://bright-tooth-dental.vercel.app/logo-full.jpg",
      "description":
        "Top-rated multispecialty dental clinic in Kumaraswamy Layout, Bengaluru offering painless root canals, braces, cosmetic dentistry, pediatric dental care, dental implants, and hospital-grade sterilization.",
      "telephone": "+91-7892520522",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sri Lakshmi Venkateshwara Arcade, #1319, Vyasaraya Ballal Rd, Opposite Water Tank, 1st Stage",
        "addressLocality": "Kumaraswamy Layout, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560111",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9063,
        "longitude": 77.5612,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "09:00",
          "closes": "21:00",
        },
      ],
      "medicalSpecialty": [
        "Dentistry",
        "Endodontics",
        "Orthodontics",
        "PediatricDentistry",
        "Periodontics",
        "Prosthodontics",
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Painless Root Canal Treatment" },
        { "@type": "MedicalProcedure", "name": "Dental Braces and Invisible Aligners" },
        { "@type": "MedicalProcedure", "name": "Needle-Free Laser Cavity Fillings" },
        { "@type": "MedicalProcedure", "name": "Teeth Whitening and Diamond Polishing" },
        { "@type": "MedicalProcedure", "name": "Pediatric Dental Care for Children" },
        { "@type": "MedicalProcedure", "name": "Zirconia Dental Crowns and Bridges" },
        { "@type": "MedicalProcedure", "name": "Gentle Tooth Extractions" },
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Dr. Devika Hiremath",
          "jobTitle": "Dental Surgeon & Co-Founder",
          "honorificPrefix": "Dr.",
          "identifier": "Reg. No. 56265A",
        },
        {
          "@type": "Person",
          "name": "Dr. Shadakshari",
          "jobTitle": "Dental Surgeon & Co-Founder",
          "honorificPrefix": "Dr.",
          "identifier": "Reg. No. 48190A",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "100",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://bright-tooth-dental.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Bright Tooth Multispecialty Dental Care located in Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bright Tooth Multispecialty Dental Care is located at Sri Lakshmi Venkateshwara Arcade, #1319, Vyasaraya Ballal Road, Opposite Water Tank, 1st Stage, Kumaraswamy Layout, Bengaluru – 560111. The clinic features modern clinical suites with dedicated on-site parking.",
          },
        },
        {
          "@type": "Question",
          "name": "Who are the lead dentists and surgeons at Bright Tooth Dental Care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clinic is led by Dr. Devika Hiremath (BDS, Dental Surgeon, Reg. No. 56265A) and Dr. Shadakshari (BDS, Dental Surgeon, Reg. No. 48190A). Both doctors have extensive clinical experience in painless single-sitting root canals, pediatric dentistry, cosmetic smile design, and advanced restorative treatments.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I book an emergency dental appointment in Kumaraswamy Layout, Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For urgent dental pain, chipped teeth, or facial swelling, call our emergency direct line at +91 78925 20522 or reserve an instant slot via our WhatsApp scheduler. We accommodate same-day emergency cases with priority clinical attention.",
          },
        },
        {
          "@type": "Question",
          "name": "Is root canal treatment (RCT) painful at Bright Tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We specialize in gentle, comfort-focused dentistry using computerized precision rotary instruments, digital imaging, and modern localized anesthesia. Most patients experience zero pain during the procedure and immediate relief from their toothache.",
          },
        },
        {
          "@type": "Question",
          "name": "What dental treatments are offered at your multispecialty clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide end-to-end dental solutions: Painless Root Canal Therapy, Needle-Free Laser Cavity Fillings, Teeth Whitening & Diamond Polishing, Pediatric Dental Care for Children, Orthodontic Braces & Aligners, Zirconia Dental Crowns & Bridges, and Gentle Extractions.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Bright Tooth Dental Care open on Sundays and weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bright Tooth is open all 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM. This allows working professionals, students, and families to visit at convenient times without missing work or school.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to pay an advance deposit to book an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No advance deposit or online payment is required. You can reserve your appointment slot online with zero charges, and pay transparently at the clinic reception via Cash, UPI (GPay/PhonePe/Paytm), or Cards after your consultation.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/jpeg" href="/logo-emblem.jpg" />
        <link rel="apple-touch-icon" href="/logo-emblem.jpg" />
        {/* SW Killswitch — removes any stale service worker */}
        <Script
          id="sw-unregister"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(reg){reg.unregister();});});if('caches' in window){caches.keys().then(function(n){n.forEach(function(name){caches.delete(name);});});}navigator.serviceWorker.register('/sw.js');}})();`,
          }}
        />
        {/* Schema.org JSON-LD Structured Data for LocalBusiness (Dentist) and FAQPage (AIO/GEO/SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdStructuredData) }}
        />
      </head>
      <body className="antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}

