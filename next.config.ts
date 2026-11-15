import type { NextConfig } from "next";

const securityHeaders = [
  // 1. Prevent Clickjacking & Frame embedding
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // 2. Prevent MIME-Type Sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 3. Control Referrer Leakage
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 4. Disable Unnecessary Hardware Sensors & APIs
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // 5. Strict Content Security Policy (CSP)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.whatsapp.com;",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https: blob:;",
      "font-src 'self' data:;",
      "connect-src 'self' https://api.whatsapp.com;",
      "frame-ancestors 'none';",
      "base-uri 'self';",
      "form-action 'self' https://api.whatsapp.com;",
    ].join(" "),
  },
  // 6. Cross-Domain Policy
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

