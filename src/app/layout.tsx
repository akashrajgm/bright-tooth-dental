import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Tooth Multispeciality Dental Care | 5.0 ★ Rated Clinic · Bengaluru",
  description:
    "Comfort-focused, gentle dental treatments by Dr. Devika Hiremath & Dr. Shadakshari. Rated 5.0 Stars with 100+ Google Reviews. Best dental clinic in Kumaraswamy Layout, Bengaluru.",
  keywords: [
    "best dental clinic in Kumaraswamy Layout",
    "root canal specialist in Bengaluru",
    "cosmetic dentist in South Bengaluru",
    "teeth polishing clinic near Kumaraswamy Layout",
    "Dr. Devika Hiremath dentist",
    "Dr. Shadakshari dentist",
    "Bright Tooth Dental Care",
  ],
  openGraph: {
    title: "Bright Tooth Multispeciality Dental Care | Bengaluru",
    description:
      "5.0 ★ Rated · 100+ Google Reviews · Comfort-focused dental care by Dr. Devika & Dr. Shadakshari, Kumaraswamy Layout, Bengaluru.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SW Killswitch — removes any stale SvelteKit service worker */}
        <Script
          id="sw-unregister"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(reg){reg.unregister();});});if('caches' in window){caches.keys().then(function(n){n.forEach(function(name){caches.delete(name);});});}navigator.serviceWorker.register('/sw.js');}})();`,
          }}
        />
      </head>
      <body className="antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}
