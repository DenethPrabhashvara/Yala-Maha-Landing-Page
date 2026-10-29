import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: import.meta.dirname },
  outputFileTracingRoot: import.meta.dirname,
  agentRules: false,
  devIndicators: false,
  allowedDevOrigins: ["127.0.0.1", "192.168.1.4", ...(process.env.DEV_ORIGINS?.split(",").map((origin) => origin.trim()) ?? [])],
  // make browsers save the apk instead of opening it
  async headers() {
    return [
      {
        source: "/Yala-Maha.apk",
        headers: [
          { key: "Content-Type", value: "application/vnd.android.package-archive" },
          { key: "Content-Disposition", value: 'attachment; filename="Yala-Maha.apk"' },
        ],
      },
    ];
  },
};

export default nextConfig;
