import { useState } from "react";
import { ARTICLES } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";
import { SEOHead } from "../components/SEOHead";
import { Link } from "../router/Router";
import { SITE_CONFIG } from "../config/site";
import { Zap, BookOpen, Compass, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      searchFilter.trim() === "" ||
      article.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      article.seoPlan.mainKeyword.toLowerCase().includes(searchFilter.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES.find((a) => a.slug === "what-is-tesla") || ARTICLES[0];

  return (
    <div className="space-y-16 pb-24 bg-[#FFFFFF] text-[#171a20]">
      <SEOHead
        title="TeslaDrive – Independent Tesla Automotive & EV Educational Guide"
        description="Comprehensive, beginner-friendly educational automotive blog covering Tesla electric cars, battery technology, charging times, Autopilot, pricing, and EV ownership."
        canonicalPath="/"
      />

      {/* Hero Section — Minimalist, Pure Clean White with Spacious Padding */}
      <section className="relative overflow-hidden border-b border-[#E2E2E2] bg-[#FFFFFF] pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-[#F4F4F4] px-4 py-1 text-xs font-semibold text-[#5c5e62] tracking-widest uppercase">
              <Zap className="h-3.5 w-3.5 text-[#E82127]" />
              <span>Independent Student Automotive Research</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#171a20] sm:text-5xl lg:text-6xl leading-[1.1]">
              Accelerating Understanding of <span className="text-[#E82127]">Tesla &amp; EV</span> Mobility.
            </h1>

            <p className="text-base sm:text-lg text-[#5c5e62] leading-relaxed max-w-2xl font-normal">
              An independent educational automotive publication for college research. Explore real-world driving range, battery cell longevity, Supercharger architectures, and true cost of ownership without marketing spin.
            </p>

            {/* Tesla Minimalist Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4">
                <span className="text-2xl font-bold text-[#171a20] block">10</span>
                <p className="text-xs text-[#5c5e62] uppercase tracking-wider text-[10px] mt-0.5">Complete Guides</p>
              </div>
              <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4">
                <span className="text-2xl font-bold text-[#E82127] block">11,000+</span>
                <p className="text-xs text-[#5c5e62] uppercase tracking-wider text-[10px] mt-0.5">Total Words</p>
              </div>
              <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4">
                <span className="text-2xl font-bold text-[#171a20] block">AEO</span>
                <p className="text-xs text-[#5c5e62] uppercase tracking-wider text-[10px] mt-0.5">Direct Answers</p>
              </div>
              <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4">
                <span className="text-2xl font-bold text-[#171a20] block">100%</span>
                <p className="text-xs text-[#5c5e62] uppercase tracking-wider text-[10px] mt-0.5">Schema Compliant</p>
              </div>
            </div>

            {/* Tesla Signature Action Buttons: Red Primary & Black Secondary Outline */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#all-articles"
                className="inline-flex items-center gap-2 rounded-full bg-[#E82127] hover:bg-[#CC0000] px-7 py-3 text-xs font-semibold text-white tracking-widest uppercase transition-all shadow-md shadow-[#E82127]/20"
              >
                <BookOpen className="h-4 w-4" />
                <span>Explore All 10 Guides</span>
              </a>
              <Link
                to="/seo-strategy"
                className="inline-flex items-center gap-2 rounded-full border border-[#171a20] bg-transparent hover:bg-[#171a20] hover:text-white px-7 py-3 text-xs font-semibold text-[#171a20] tracking-widest uppercase transition-all"
              >
                <Sparkles className="h-4 w-4 text-[#E82127]" />
                <span>SEO Assignment Plan</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guide Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E82127]">
              Curated Starting Point
            </span>
            <h2 className="text-2xl font-bold text-[#171a20] sm:text-3xl tracking-tight">
              Featured Deep Dive
            </h2>
          </div>
          <Link
            to="/blogs/what-is-tesla"
            className="hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#5c5e62] hover:text-[#171a20] transition-colors"
          >
            <span>Read guide</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ArticleCard article={featuredArticle} featured={true} />
      </section>

      {/* All Articles Section */}
      <section id="all-articles" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E2E2] pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E82127]">
              Browse Library
            </span>
            <h2 className="text-2xl font-bold text-[#171a20] sm:text-3xl tracking-tight">
              All 10 Automotive Editorial Guides
            </h2>
            <p className="mt-1 text-xs text-[#5c5e62]">
              Each guide targets an individual keyword with structured H1–H3 headings, AEO answers, and verified schemas.
            </p>
          </div>

          {/* Minimalist Filter Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Filter by keyword or model..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full rounded-full border border-[#E2E2E2] bg-[#FFFFFF] px-4 py-2.5 text-xs text-[#171a20] placeholder-[#5c5e62] focus:border-[#171a20] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Minimalist Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {SITE_CONFIG.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#171a20] text-white shadow-xs"
                  : "bg-[#F4F4F4] text-[#5c5e62] hover:bg-[#E2E2E2] hover:text-[#171a20] border border-[#E2E2E2]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Articles */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.path} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-12 text-center space-y-3">
            <Compass className="h-8 w-8 mx-auto text-[#5c5e62]" />
            <h3 className="text-base font-semibold text-[#171a20]">No articles matched</h3>
            <p className="text-xs text-[#5c5e62]">
              No guides match the selected category &quot;{selectedCategory}&quot; or query &quot;{searchFilter}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchFilter("");
              }}
              className="mt-2 rounded-full border border-[#171a20] bg-[#FFFFFF] px-5 py-2 text-xs text-[#171a20] hover:bg-[#171a20] hover:text-white uppercase tracking-wider transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Suggested Reading Pathways (Alternating Light Grey #F4F4F4 Split-Section) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E2E2E2] bg-[#F4F4F4] p-6 sm:p-10">
          <div className="max-w-2xl space-y-2 mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E82127]">
              Student Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171a20] tracking-tight">
              Where Should You Begin?
            </h2>
            <p className="text-xs text-[#5c5e62]">
              Curated reading pathways based on your primary area of automotive interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-3 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F4F4F4] text-[#5c5e62] uppercase tracking-wider border border-[#E2E2E2]">
                  Path 1: Shopping &amp; Family
                </span>
                <h3 className="text-base font-bold text-[#171a20]">Considering Buying an EV?</h3>
                <p className="text-xs text-[#5c5e62] leading-relaxed">
                  Understand true total cost of ownership, compare the Model 3 vs Model Y, and see how electric running costs stack up against petrol.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-[#E2E2E2]">
                <Link to="/blogs/tesla-car-price" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • How Much Does a Tesla Cost?
                </Link>
                <Link to="/blogs/tesla-model-y" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • Tesla Model Y Buying Guide
                </Link>
                <Link to="/blogs/tesla-vs-petrol-cars" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • Tesla vs Petrol Cars Comparison
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-3 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F4F4F4] text-[#5c5e62] uppercase tracking-wider border border-[#E2E2E2]">
                  Path 2: Engineering &amp; Tech
                </span>
                <h3 className="text-base font-bold text-[#171a20]">Curious How It All Works?</h3>
                <p className="text-xs text-[#5c5e62] leading-relaxed">
                  Explore how permanent magnet reluctance motors operate, why lithium battery packs degrade, and how power inverters convert DC to AC.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-[#E2E2E2]">
                <Link to="/blogs/how-tesla-cars-work" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • How Do Tesla Cars Work?
                </Link>
                <Link to="/blogs/tesla-battery-life" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • How Long Do Tesla Batteries Last?
                </Link>
                <Link to="/blogs/future-of-tesla" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • The Future of Tesla &amp; EV Tech
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-3 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F4F4F4] text-[#5c5e62] uppercase tracking-wider border border-[#E2E2E2]">
                  Path 3: Daily Habits &amp; Safety
                </span>
                <h3 className="text-base font-bold text-[#171a20]">Daily Commuting &amp; Charging</h3>
                <p className="text-xs text-[#5c5e62] leading-relaxed">
                  Learn how Level 1, 2, and Supercharging differ in speed and cost, plus an objective look at Autopilot driver supervision rules.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-[#E2E2E2]">
                <Link to="/blogs/tesla-charging-time" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • How Long Does Charging Take?
                </Link>
                <Link to="/blogs/tesla-autopilot" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • Autopilot Features &amp; Limitations
                </Link>
                <Link to="/blogs/what-is-tesla" className="text-xs text-[#5c5e62] hover:text-[#E82127] flex items-center gap-1 font-semibold transition-colors">
                  • What Is Tesla? Company Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational SEO & AEO Methodology Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E2E2E2] bg-[#F7F7F7] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E82127] uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>SEO Assignment Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171a20] tracking-tight">
                Engineered for Search Engines &amp; Answer Engines
              </h2>
              <p className="text-xs sm:text-sm text-[#5c5e62] leading-relaxed font-normal">
                TeslaDrive models best-in-class organic search standards: semantic heading structures, unique 50–60 character title tags, 140–160 character meta descriptions, structured JSON-LD data for rich snippets, Answer Engine Optimization (AEO) direct answers, and verified XML sitemaps.
              </p>
              <div className="space-y-2 pt-2 text-xs text-[#5c5e62]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E82127]" />
                  <span>Configurable canonical URL base for seamless Vercel deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E82127]" />
                  <span>10 distinct target keywords with zero keyword stuffing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E82127]" />
                  <span>OpenGraph &amp; Twitter large summary image social cards</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-6 space-y-4 font-mono text-xs text-[#5c5e62] shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-2">
                <span className="text-[#E82127] font-bold uppercase tracking-wider">SEO Blueprint Spec</span>
                <span className="text-[#5c5e62]">Grading Rubric</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#5c5e62]">XML Sitemap:</span>
                  <span className="text-[#171a20] font-semibold">/sitemap.xml (13 verified URLs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5c5e62]">Robots Directive:</span>
                  <span className="text-[#171a20] font-semibold">/robots.txt (Allow: /)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5c5e62]">Schema Types:</span>
                  <span className="text-[#171a20] font-semibold">BlogPosting, FAQPage, BreadcrumbList</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5c5e62]">Image Format:</span>
                  <span className="text-[#171a20] font-semibold">WebP 1200x675 with Alt Attributes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5c5e62]">AEO Coverage:</span>
                  <span className="text-[#171a20] font-semibold">30 Direct Answer Blocks &amp; 30 FAQs</span>
                </div>
              </div>
              <Link
                to="/seo-strategy"
                className="mt-3 block w-full rounded-full border border-[#171a20] hover:bg-[#171a20] hover:text-white py-2.5 text-center text-xs font-semibold text-[#171a20] uppercase tracking-wider transition-all"
              >
                Inspect Full SEO Matrix &amp; Assignment Data →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
