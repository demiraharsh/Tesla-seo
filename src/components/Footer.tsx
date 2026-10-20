import { Link } from "../router/Router";
import { ShieldAlert, ExternalLink, FileText, Globe } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { ARTICLES } from "../data/articles";

export function Footer() {
  return (
    <footer className="border-t border-[#E2E2E2] bg-[#F7F7F7] text-[#5c5e62]">
      {/* Prominent Educational Disclaimer Box */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E82127]/10 text-[#E82127] border border-[#E82127]/20">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#171a20] tracking-wider uppercase">
                Independent Educational College Project Disclaimer
              </h4>
              <p className="mt-1 text-xs text-[#5c5e62] leading-relaxed">
                {SITE_CONFIG.disclaimer} This website was built solely for academic research into search engine optimization (SEO), metadata formatting, Answer Engine Optimization (AEO), and digital content architecture. All specifications, range estimates, charging rates, and pricing should be verified directly with Tesla, Inc. via official documentation at{" "}
                <a
                  href="https://www.tesla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E82127] underline hover:text-[#171a20] inline-flex items-center gap-0.5 transition-colors font-medium"
                >
                  tesla.com <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-[0.2em] text-[#171a20]">
                TESLA<span className="text-[#E82127]">DRIVE</span>
              </span>
            </div>
            <p className="text-xs text-[#5c5e62] leading-relaxed">
              An independent automotive blog demystifying electric vehicle technology, charging networks, battery longevity, and ownership economics for beginners.
            </p>
            <div className="text-xs text-[#5c5e62] pt-1 uppercase tracking-wider text-[10px] font-semibold">
              College SEO Capstone Study
            </div>
          </div>

          {/* Core Guides (Articles 1-5) */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-[#171a20]">
              Vehicle &amp; Core Guides
            </h5>
            <ul className="space-y-2 text-xs">
              {ARTICLES.slice(0, 5).map((article) => (
                <li key={article.path}>
                  <Link
                    to={article.path}
                    className="hover:text-[#171a20] transition-colors line-clamp-1 text-[#5c5e62]"
                  >
                    {article.title.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & Economics (Articles 6-10) */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-[#171a20]">
              Tech, Costs &amp; Future
            </h5>
            <ul className="space-y-2 text-xs">
              {ARTICLES.slice(5, 10).map((article) => (
                <li key={article.path}>
                  <Link
                    to={article.path}
                    className="hover:text-[#171a20] transition-colors line-clamp-1 text-[#5c5e62]"
                  >
                    {article.title.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO & Academic Specifications */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-[#171a20]">
              Assignment Deliverables
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/seo-strategy"
                  className="flex items-center gap-1.5 text-[#E82127] hover:underline font-semibold"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>SEO Plan &amp; Keyword Matrix</span>
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#171a20] transition-colors"
                >
                  <Globe className="h-3.5 w-3.5 text-[#5c5e62]" />
                  <span>XML Sitemap (/sitemap.xml)</span>
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#171a20] transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-[#5c5e62]" />
                  <span>Robots File (/robots.txt)</span>
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#171a20] transition-colors">
                  About Methodology &amp; Sources
                </Link>
              </li>
              <li className="pt-2">
                <span className="block text-[11px] text-[#5c5e62]">
                  Base Production Domain:
                </span>
                <code className="text-[10px] text-[#171a20] font-mono bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E2E2E2] break-all">
                  {SITE_CONFIG.baseUrl}
                </code>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and academic attribution */}
        <div className="mt-10 border-t border-[#E2E2E2] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c5e62] gap-3">
          <p>© {new Date().getFullYear()} TeslaDrive Editorial. Student Educational Assignment.</p>
          <p className="text-center sm:text-right">
            Tesla® is a registered trademark of Tesla, Inc. No association implied.
          </p>
        </div>
      </div>
    </footer>
  );
}
