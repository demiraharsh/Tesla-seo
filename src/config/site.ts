/**
 * Site configuration for TeslaDrive
 * Centralized settings for SEO canonical URLs, branding, and disclaimers.
 */

export const SITE_CONFIG = {
  name: "TeslaDrive",
  titleSuffix: " | TeslaDrive Independent EV Guide",
  tagline: "Independent Educational Guide to Tesla, Electric Vehicles & Clean Energy",
  description: "An independent educational automotive blog exploring Tesla electric cars, battery technology, charging times, Autopilot, pricing, and EV ownership.",
  // Production URL for canonical links and sitemap.
  // When deploying to Vercel, change this to your actual Vercel URL (e.g., https://your-project.vercel.app)
  // or set VITE_SITE_URL in your Vercel project environment variables.
  baseUrl: (typeof window !== "undefined" && window.location.origin)
    ? window.location.origin
    : (import.meta.env.VITE_SITE_URL || "https://tesladrive-blog.vercel.app"),
  
  defaultProductionDomain: "https://tesladrive-blog.vercel.app",

  disclaimer: "Independent Educational Blog: TeslaDrive is a student college project and is not affiliated with, endorsed by, sponsored by, or an official website of Tesla, Inc. All trademarks, vehicle names, and logos belong to their respective owners.",
  shortDisclaimer: "Not affiliated with Tesla, Inc. Independent educational project.",

  author: {
    name: "Automotive Editorial Team",
    role: "Automotive Technology Students & Researchers",
    academicInstitution: "College Department of Applied Automotive & Web Studies",
  },

  categories: [
    { id: "all", label: "All Guides" },
    { id: "guides", label: "Beginner Guides" },
    { id: "vehicles", label: "Vehicle Profiles" },
    { id: "technology", label: "Engineering & Tech" },
    { id: "ownership", label: "Cost & Charging" },
    { id: "comparison", label: "EV Comparisons" },
  ],
};
