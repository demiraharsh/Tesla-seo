import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link } from "../router/Router";
import { SITE_CONFIG } from "../config/site";
import { ShieldAlert, BookOpen, Search, CheckCircle, ExternalLink, Layers } from "lucide-react";

export function AboutPage() {
  const breadcrumbs = [
    { name: "About TeslaDrive", path: "/about" },
  ];

  return (
    <div className="pb-24 bg-[#FFFFFF] text-[#171a20]">
      <SEOHead
        title="About TeslaDrive – Independent College SEO Educational Project"
        description="Learn about TeslaDrive, an independent college project dedicated to automotive SEO research, EV technology journalism, and digital marketing architecture."
        canonicalPath="/about"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4 pb-8 border-b border-[#E2E2E2]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-[#F4F4F4] px-4 py-1 text-xs font-semibold text-[#5c5e62] uppercase tracking-wider">
            <span>Academic Project Background</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171a20]">
            About TeslaDrive
          </h1>

          <p className="text-base sm:text-lg text-[#5c5e62] leading-relaxed">
            TeslaDrive is an independent student-led educational automotive publication created for a college course in Search Engine Optimization (SEO), web content architecture, and digital publishing.
          </p>
        </header>

        {/* Legal Disclaimer Box */}
        <div className="my-8 rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-6 shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="h-6 w-6 text-[#E82127] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#171a20]">
                Independent Editorial Disclaimer
              </h2>
              <p className="text-xs sm:text-sm text-[#5c5e62] leading-relaxed">
                TeslaDrive is an independent educational blog and is <strong>not affiliated with, endorsed by, sponsored by, or an official website of Tesla, Inc.</strong> Tesla, Model 3, Model Y, Model S, Model X, Cybertruck, Supercharger, and Autopilot are registered trademarks of Tesla, Inc. All trademarks are used strictly for academic analysis, educational commentary, and fair-use critique.
              </p>
            </div>
          </div>
        </div>

        <main className="space-y-10 my-8">
          {/* Mission & Purpose */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#171a20] tracking-tight">
              Project Purpose &amp; Academic Scope
            </h2>
            <p className="text-sm sm:text-base text-[#5c5e62] leading-relaxed">
              The goal of this assignment is to design, produce, and deploy a production-grade automotive blog that models best practices in organic search visibility, information architecture, and Answer Engine Optimization (AEO).
            </p>
            <p className="text-sm sm:text-base text-[#5c5e62] leading-relaxed">
              Rather than generic placeholders or keyword-stuffed text, TeslaDrive features 10 comprehensive, original editorial guides (over 11,000 words in total) exploring electric vehicle mechanics, lithium-ion battery degradation curves, real-world charging behaviors, and total ownership economics.
            </p>
          </section>

          {/* Research & Editorial Standards */}
          <section className="space-y-4 rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-6 shadow-xs">
            <h2 className="text-xl font-bold text-[#171a20] flex items-center gap-2 tracking-tight">
              <BookOpen className="w-5 h-5 text-[#E82127]" />
              <span>Editorial Methodology &amp; Cautious Spec Policy</span>
            </h2>
            <p className="text-sm text-[#5c5e62] leading-relaxed">
              Because electric vehicle specifications, government tax rebates, software builds, and prices change constantly, our editorial principles enforce cautious terminology:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5c5e62]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E82127] shrink-0 mt-0.5" />
                <span><strong className="text-[#171a20]">No Fabricated Specs:</strong> We avoid inventing specific current pricing or range figures without noting real-world variances and regional testing differences (EPA vs WLTP).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E82127] shrink-0 mt-0.5" />
                <span><strong className="text-[#171a20]">Primary Source Verification:</strong> Readers are consistently encouraged to verify time-sensitive figures with official manufacturer data at <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="text-[#E82127] underline inline-flex items-center gap-0.5 font-semibold">tesla.com <ExternalLink className="w-3 h-3" /></a>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E82127] shrink-0 mt-0.5" />
                <span><strong className="text-[#171a20]">Answer Engine Optimization (AEO):</strong> Every core article features concise 40–70 word direct answers under question-style H2 headers, designed for modern conversational search and featured snippets.</span>
              </li>
            </ul>
          </section>

          {/* SEO Architecture Rubric */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#171a20] flex items-center gap-2 tracking-tight">
              <Search className="w-5 h-5 text-[#E82127]" />
              <span>SEO Architecture &amp; Grading Deliverables</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-2 shadow-xs">
                <h3 className="text-sm font-bold text-[#171a20] flex items-center gap-1.5 uppercase tracking-wider text-xs">
                  <Layers className="w-4 h-4 text-[#E82127]" />
                  <span>Metadata &amp; Hierarchy</span>
                </h3>
                <p className="text-xs text-[#5c5e62] leading-relaxed">
                  Unique title tags (50–60 characters), meta descriptions (140–160 characters), exactly one H1 per page, and logical H2/H3 nesting.
                </p>
              </div>

              <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-2 shadow-xs">
                <h3 className="text-sm font-bold text-[#171a20] flex items-center gap-1.5 uppercase tracking-wider text-xs">
                  <Layers className="w-4 h-4 text-[#E82127]" />
                  <span>Crawlability &amp; Sitemaps</span>
                </h3>
                <p className="text-xs text-[#5c5e62] leading-relaxed">
                  XML sitemap at <code className="text-[#E82127]">/sitemap.xml</code>, crawler directives at <code className="text-[#E82127]">/robots.txt</code>, and configurable canonical base URLs.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/seo-strategy"
                className="inline-flex items-center gap-2 rounded-full bg-[#E82127] px-7 py-3 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#CC0000] transition-all shadow-md shadow-[#E82127]/20"
              >
                <span>View Complete SEO Plan &amp; Assignment Matrix →</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
