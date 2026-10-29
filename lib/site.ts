export const SITE = {
  name: "Yala Maha",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5174",
  // android build, served from public/
  apkPath: "/Yala-Maha.apk",
  // public origin for the qr code, falls back to the request host
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  reservoirs: 117,
  riverGauges: 40,
  rivers: 19,
  canalSections: 55,
  forecastDays: 14,
  languages: ["සිංහල", "தமிழ்", "English"],
};
