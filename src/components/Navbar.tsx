import { useState } from "react";
import { Link, useRouter } from "../router/Router";
import { Menu, X, Search, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E2E2] bg-[#FFFFFF]/90 backdrop-blur-md">
      {/* Tesla Minimalist Top Academic & Independent Disclaimer Banner */}
      <div className="bg-[#F4F4F4] border-b border-[#E2E2E2] px-4 py-1.5 text-center text-[11px] text-[#5c5e62] flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#E82127] shrink-0" />
        <span className="font-semibold text-[#171a20] tracking-wider uppercase text-[10px]">
          College SEO Project:
        </span>
        <span className="truncate text-[#5c5e62]">
          {SITE_CONFIG.shortDisclaimer}
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Tesla Official Style Wordmark */}
        <Link to="/" className="flex items-center gap-2 group focus:outline-none">
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-[0.2em] text-[#171a20] group-hover:text-[#E82127] transition-colors">
              TESLA<span className="text-[#E82127]">DRIVE</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#5c5e62] uppercase font-semibold">
              Independent Guide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Styled like Tesla.com Vehicle Menu */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-semibold tracking-wider uppercase">
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Overview
          </Link>
          <Link
            to="/blogs/what-is-tesla"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/blogs/what-is-tesla"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Brand
          </Link>
          <Link
            to="/blogs/tesla-model-3"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/blogs/tesla-model-3"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Model 3
          </Link>
          <Link
            to="/blogs/tesla-model-y"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/blogs/tesla-model-y"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Model Y
          </Link>
          <Link
            to="/blogs/tesla-charging-time"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/blogs/tesla-charging-time"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Charging
          </Link>
          <Link
            to="/blogs/tesla-autopilot"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/blogs/tesla-autopilot"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            Autopilot
          </Link>
          <Link
            to="/seo-strategy"
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              currentPath === "/seo-strategy"
                ? "bg-[#E82127] text-white font-bold"
                : "text-[#E82127] hover:bg-[#E82127]/10"
            }`}
          >
            <span>SEO Hub</span>
          </Link>
          <Link
            to="/about"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              currentPath === "/about"
                ? "bg-[#F4F4F4] text-[#171a20] font-bold shadow-xs"
                : "text-[#171a20] hover:bg-[#F4F4F4]"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Action: Clean Search Pill Button */}
        <div className="flex items-center gap-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-[#FFFFFF] px-3.5 py-1.5 text-xs text-[#171a20] hover:border-[#171a20] hover:bg-[#F4F4F4] transition-all focus:outline-none"
              aria-label="Search articles"
            >
              <Search className="h-3.5 w-3.5 text-[#5c5e62]" />
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider font-semibold">Search</span>
              <kbd className="hidden sm:inline-block rounded bg-[#F4F4F4] px-1.5 py-0.5 text-[9px] font-mono text-[#5c5e62] border border-[#E2E2E2]">
                /
              </kbd>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-md p-2 text-[#171a20] hover:bg-[#F4F4F4] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E2E2] bg-[#FFFFFF] px-4 py-4 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1 text-xs uppercase tracking-wider font-semibold">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Home (All 10 Guides)
            </Link>
            <Link
              to="/blogs/what-is-tesla"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              What Is Tesla?
            </Link>
            <Link
              to="/blogs/tesla-model-3"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Tesla Model 3
            </Link>
            <Link
              to="/blogs/tesla-model-y"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Tesla Model Y
            </Link>
            <Link
              to="/blogs/how-tesla-cars-work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              How Tesla Cars Work
            </Link>
            <Link
              to="/blogs/tesla-car-price"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              How Much Does a Tesla Cost?
            </Link>
            <Link
              to="/blogs/tesla-charging-time"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Tesla Charging Time
            </Link>
            <Link
              to="/blogs/tesla-autopilot"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Tesla Autopilot
            </Link>
            <Link
              to="/blogs/tesla-battery-life"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Battery Life &amp; Longevity
            </Link>
            <Link
              to="/blogs/tesla-vs-petrol-cars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Tesla vs Petrol Cars
            </Link>
            <Link
              to="/blogs/future-of-tesla"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] hover:bg-[#F4F4F4]"
            >
              Future of Tesla
            </Link>
            <div className="pt-2 border-t border-[#E2E2E2]">
              <Link
                to="/seo-strategy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-[#E82127] font-bold bg-[#E82127]/10 block"
              >
                SEO Assignment Hub &amp; Sitemap
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-[#5c5e62] hover:text-[#171a20] block mt-1"
              >
                About Methodology
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
