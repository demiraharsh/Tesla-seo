import { useState } from "react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ARTICLES } from "../data/articles";
import { IMAGE_MANIFEST } from "../data/imageManifest";
import { SITE_CONFIG } from "../config/site";
import { Link } from "../router/Router";
import {
  Sparkles,
  FileText,
  Copy,
  Check,
  Globe,
  ImageIcon,
  CheckCircle2,
  Table,
  Code,
  ExternalLink,
} from "lucide-react";

export function SEOStrategyPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"matrix" | "images" | "sitemap" | "canonical">("matrix");

  const breadcrumbs = [
    { name: "SEO Strategy & Blueprint", path: "/seo-strategy" },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const fullReportText = `=== TESLADRIVE COLLEGE SEO ASSIGNMENT AUDIT REPORT ===
Project Name: TeslaDrive
Production Canonical Base: ${SITE_CONFIG.baseUrl}
Number of Core Articles: ${ARTICLES.length}
Sitemap Endpoint: ${SITE_CONFIG.baseUrl}/sitemap.xml
Robots Directive: ${SITE_CONFIG.baseUrl}/robots.txt

ARTICLE SPECIFICATIONS & KEYWORD MATRIX:
${ARTICLES.map((a, i) => `
${i + 1}. Title: ${a.title}
   URL: ${a.path}
   Primary Keyword: "${a.seoPlan.mainKeyword}"
   Related Keywords: "${a.seoPlan.relatedKeywords.join('", "')}"
   Meta Title (${a.seoTitle.length} chars): ${a.seoTitle}
   Meta Description (${a.metaDescription.length} chars): ${a.metaDescription}
   Word Count: ${a.wordCount} words
   Hero Image: ${a.heroImage.filename} (Alt: ${a.heroImage.alt})
   Structured Data: BlogPosting, BreadcrumbList, FAQPage (JSON-LD)
`).join("")}

IMAGE ASSET MANIFEST:
${IMAGE_MANIFEST.map((img, i) => `
${i + 1}. Filename: public/images/${img.filename}
   Article: ${img.articleTitle} (${img.articlePath})
   Resolution: ${img.recommendedResolution} (${img.aspectRatio})
   Suggested Alt: "${img.suggestedAlt}"
   Legal Sources: ${img.whereToFindLegalPhotos}
`).join("")}
===================================================`;

  return (
    <div className="pb-24 bg-[#FFFFFF] text-[#171a20]">
      <SEOHead
        title="College SEO Assignment Strategy & Keyword Matrix | TeslaDrive"
        description="Comprehensive SEO assignment blueprint for TeslaDrive: keyword matrix for 10 articles, meta tags, XML sitemap verification, image manifest, and canonical config."
        canonicalPath="/seo-strategy"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4 pb-8 border-b border-[#E2E2E2]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-[#F4F4F4] px-4 py-1 text-xs font-semibold text-[#5c5e62] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-[#E82127]" />
                <span>College Assignment Deliverables Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171a20]">
                SEO Strategy, Keyword Matrix &amp; Technical Assets
              </h1>
              <p className="text-sm sm:text-base text-[#5c5e62] max-w-3xl leading-relaxed">
                Complete documentation of all 10 articles, keyword targets, length audits, XML sitemaps, robots configuration, and the official image manifest for grading review.
              </p>
            </div>

            <button
              onClick={() => handleCopy("full-report", fullReportText)}
              className="inline-flex items-center gap-2 rounded-full bg-[#E82127] px-6 py-2.5 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#CC0000] transition-all shadow-md shadow-[#E82127]/20 shrink-0"
            >
              {copiedSection === "full-report" ? (
                <>
                  <Check className="h-4 w-4 text-white" />
                  <span>Full Report Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Complete Audit Report</span>
                </>
              )}
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "matrix"
                  ? "bg-[#171a20] text-white shadow-xs"
                  : "bg-[#F4F4F4] text-[#5c5e62] hover:text-[#171a20] border border-[#E2E2E2]"
              }`}
            >
              <Table className="h-3.5 w-3.5 text-[#E82127]" />
              <span>Keyword &amp; Meta Matrix (10 Articles)</span>
            </button>
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "images"
                  ? "bg-[#171a20] text-white shadow-xs"
                  : "bg-[#F4F4F4] text-[#5c5e62] hover:text-[#171a20] border border-[#E2E2E2]"
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5 text-[#E82127]" />
              <span>Image Asset Manifest</span>
            </button>
            <button
              onClick={() => setActiveTab("sitemap")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "sitemap"
                  ? "bg-[#171a20] text-white shadow-xs"
                  : "bg-[#F4F4F4] text-[#5c5e62] hover:text-[#171a20] border border-[#E2E2E2]"
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-[#E82127]" />
              <span>Sitemap.xml &amp; Robots.txt</span>
            </button>
            <button
              onClick={() => setActiveTab("canonical")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "canonical"
                  ? "bg-[#171a20] text-white shadow-xs"
                  : "bg-[#F4F4F4] text-[#5c5e62] hover:text-[#171a20] border border-[#E2E2E2]"
              }`}
            >
              <Code className="h-3.5 w-3.5 text-[#E82127]" />
              <span>Canonical &amp; Base URL</span>
            </button>
          </div>
        </header>

        <main className="mt-8 space-y-12">
          {/* TAB 1: 10-Article Keyword & Metadata Matrix */}
          {activeTab === "matrix" && (
            <section className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-[#171a20] tracking-tight">
                  10-Article SEO Matrix &amp; Compliance Audit
                </h2>
                <p className="text-xs text-[#5c5e62]">
                  Each article targets exactly 1 main keyword and 2 related keywords with unique URLs, meta titles, descriptions, and AEO structures.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] shadow-xs">
                <table className="w-full text-left text-xs text-[#5c5e62]">
                  <thead className="bg-[#F7F7F7] uppercase font-mono text-[10px] tracking-wider text-[#171a20] border-b border-[#E2E2E2]">
                    <tr>
                      <th className="py-3 px-4 font-bold">#</th>
                      <th className="py-3 px-4 font-bold">Article &amp; Exact Path</th>
                      <th className="py-3 px-4 font-bold">Primary Keyword</th>
                      <th className="py-3 px-4 font-bold">Related Keywords</th>
                      <th className="py-3 px-4 font-bold">Title Tag (Length)</th>
                      <th className="py-3 px-4 font-bold">Meta Description (Length)</th>
                      <th className="py-3 px-4 font-bold text-right">Words</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E2E2]">
                    {ARTICLES.map((article, idx) => {
                      const tLen = article.seoTitle.length;
                      const dLen = article.metaDescription.length;

                      return (
                        <tr key={article.path} className="hover:bg-[#F7F7F7] transition-colors">
                          <td className="py-3.5 px-4 font-mono text-[#5c5e62]">{idx + 1}</td>
                          <td className="py-3.5 px-4">
                            <Link
                              to={article.path}
                              className="font-bold text-[#171a20] hover:text-[#E82127] transition-colors block line-clamp-1"
                            >
                              {article.title}
                            </Link>
                            <code className="text-[11px] text-[#E82127] font-mono block mt-0.5">
                              {article.path}
                            </code>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F4F4F4] border border-[#E2E2E2] text-[#E82127] font-bold font-mono">
                              &quot;{article.seoPlan.mainKeyword}&quot;
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="text-[#171a20] font-semibold block">
                              {article.seoPlan.relatedKeywords[0]}
                            </span>
                            <span className="text-[#5c5e62] block text-[11px]">
                              {article.seoPlan.relatedKeywords[1]}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-mono text-[#171a20] font-semibold block truncate max-w-xs">
                              {article.seoTitle}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.2 rounded-full inline-block mt-0.5 ${
                              tLen >= 50 && tLen <= 65 ? "text-[#E82127] bg-[#E82127]/10" : "text-amber-800 bg-amber-50"
                            }`}>
                              {tLen} chars
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="text-[#5c5e62] line-clamp-1 max-w-xs">
                              {article.metaDescription}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.2 rounded-full inline-block mt-0.5 ${
                              dLen >= 140 && dLen <= 165 ? "text-[#E82127] bg-[#E82127]/10" : "text-amber-800 bg-amber-50"
                            }`}>
                              {dLen} chars
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-[#171a20]">
                            {article.wordCount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* TAB 2: Image Manifest & Replacement Guide */}
          {activeTab === "images" && (
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#171a20] tracking-tight">
                  Image Asset Manifest &amp; Replacement Instructions
                </h2>
                <p className="text-xs sm:text-sm text-[#5c5e62] leading-relaxed">
                  Every article references a designated, descriptive local image file under <code className="text-[#E82127] font-mono">public/images/</code>. Real WebP image assets have been generated and deployed in the project. You can replace any image with your own legally licensed photograph following the instructions below.
                </p>
              </div>

              {/* Step-by-Step Replacement Instructions Card */}
              <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-6 space-y-4 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#E82127] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  <span>How to Replace Images with Your Own Photos</span>
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm text-[#5c5e62] list-decimal pl-5">
                  <li>
                    <strong className="text-[#171a20]">Find Legal Free Images:</strong> Visit royalty-free photo sites like <em>Unsplash</em>, <em>Pexels</em>, or <em>Wikimedia Commons</em> (look for CC-BY or Public Domain electric car / Tesla images).
                  </li>
                  <li>
                    <strong className="text-[#171a20]">Resize &amp; Crop to 16:9:</strong> For optimal web performance and zero layout shift, crop your photo to <strong>1200 x 675 pixels</strong>.
                  </li>
                  <li>
                    <strong className="text-[#171a20]">Save as WebP:</strong> Export or convert the file to WebP format using free tools (like Squoosh.app or CloudConvert) at 80–85% quality to keep file sizes under 150KB.
                  </li>
                  <li>
                    <strong className="text-[#171a20]">Match the Exact Filename:</strong> Rename your photo to the exact filename in the table below (e.g. <code className="text-[#E82127]">tesla-model-3.webp</code>) and overwrite the existing file in the <code className="text-[#171a20] font-semibold">public/images/</code> directory.
                  </li>
                  <li>
                    <strong className="text-[#171a20]">Automatic Update:</strong> Your website will immediately render your new photo without requiring any code changes!
                  </li>
                </ol>
              </div>

              {/* Image Manifest Table */}
              <div className="overflow-x-auto rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] shadow-xs">
                <table className="w-full text-left text-xs text-[#5c5e62]">
                  <thead className="bg-[#F7F7F7] uppercase font-mono text-[10px] tracking-wider text-[#171a20] border-b border-[#E2E2E2]">
                    <tr>
                      <th className="py-3 px-4 font-bold">Expected Filename</th>
                      <th className="py-3 px-4 font-bold">Associated Article</th>
                      <th className="py-3 px-4 font-bold">Suggested Alt Text</th>
                      <th className="py-3 px-4 font-bold">Recommended Dimensions</th>
                      <th className="py-3 px-4 font-bold">Where to Find Photos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E2E2]">
                    {IMAGE_MANIFEST.map((item) => (
                      <tr key={item.filename} className="hover:bg-[#F7F7F7] transition-colors">
                        <td className="py-3 px-4 font-mono text-[#E82127] font-bold">
                          public/images/{item.filename}
                        </td>
                        <td className="py-3 px-4">
                          <Link to={item.articlePath} className="text-[#171a20] hover:text-[#E82127] font-semibold">
                            {item.articleTitle}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-[#5c5e62] max-w-xs">
                          {item.suggestedAlt}
                        </td>
                        <td className="py-3 px-4 font-mono text-[#171a20]">
                          {item.recommendedResolution} ({item.aspectRatio})
                        </td>
                        <td className="py-3 px-4 text-[11px] text-[#5c5e62]">
                          {item.whereToFindLegalPhotos}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* TAB 3: Sitemap and Robots Viewer */}
          {activeTab === "sitemap" && (
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#171a20] tracking-tight">
                  XML Sitemap &amp; Robots.txt Verification
                </h2>
                <p className="text-xs text-[#5c5e62]">
                  Search engines use sitemaps and robots.txt to discover and crawl your canonical URLs. Both files are live in the <code className="text-[#E82127] font-mono">public/</code> directory.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Robots.txt Card */}
                <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-2">
                    <span className="font-bold text-[#171a20] flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      <FileText className="w-4 h-4 text-[#E82127]" />
                      <span>public/robots.txt</span>
                    </span>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#E82127] hover:underline flex items-center gap-1 font-semibold"
                    >
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <pre className="p-4 rounded-lg bg-[#F7F7F7] font-mono text-xs text-[#171a20] overflow-x-auto leading-relaxed border border-[#E2E2E2]">
{`# Robots.txt for TeslaDrive - Independent Educational Blog
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`}
                  </pre>
                </div>

                {/* Sitemap Quick Info Card */}
                <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-2">
                    <span className="font-bold text-[#171a20] flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      <Globe className="w-4 h-4 text-[#E82127]" />
                      <span>public/sitemap.xml (13 URLs Indexed)</span>
                    </span>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#E82127] hover:underline flex items-center gap-1 font-semibold"
                    >
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="space-y-2 text-xs text-[#5c5e62]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E82127] shrink-0" />
                      <span>Homepage: <code className="text-[#171a20] font-semibold">{SITE_CONFIG.baseUrl}/</code> (Priority 1.0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E82127] shrink-0" />
                      <span>All 10 Educational Blog URLs (Priority 0.9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E82127] shrink-0" />
                      <span>About Page &amp; SEO Strategy Hub (Priority 0.7 &amp; 0.6)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E82127] shrink-0" />
                      <span>Standard sitemaps.org 0.9 XML schema format</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 4: Canonical & Base URL Configuration */}
          {activeTab === "canonical" && (
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#171a20] tracking-tight">
                  Canonical URL &amp; Production Base Domain Setup
                </h2>
                <p className="text-xs text-[#5c5e62]">
                  Canonical tags prevent duplicate content issues when your website is accessed via multiple domains or preview URLs.
                </p>
              </div>

              <div className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-6 space-y-4 shadow-xs">
                <h3 className="text-xs font-bold text-[#171a20] uppercase tracking-wider">
                  Where to Change Your Production Base URL:
                </h3>
                <p className="text-xs sm:text-sm text-[#5c5e62] leading-relaxed">
                  Open <code className="text-[#E82127] font-mono bg-[#F4F4F4] px-2 py-0.5 rounded border border-[#E2E2E2]">src/config/site.ts</code> and update the <code className="text-[#171a20] font-mono font-semibold">baseUrl</code> property with your production Vercel domain (for example: <code className="text-[#E82127] font-mono">https://my-tesla-blog.vercel.app</code>).
                </p>
                <div className="p-4 rounded-lg bg-[#F7F7F7] font-mono text-xs text-[#171a20] border border-[#E2E2E2] space-y-1">
                  <p className="text-[#5c5e62]">// File: src/config/site.ts</p>
                  <p>export const SITE_CONFIG = &#123;</p>
                  <p className="pl-4 text-[#5c5e62]">// ...</p>
                  <p className="pl-4 text-[#E82127] font-semibold">baseUrl: import.meta.env.VITE_SITE_URL || &quot;https://your-domain.vercel.app&quot;,</p>
                  <p>&#125;;</p>
                </div>
                <div className="text-xs text-[#5c5e62] space-y-1">
                  <p><strong className="text-[#171a20]">Alternatively via Vercel Environment Variables:</strong></p>
                  <p>In your Vercel Project Settings &gt; <em>Environment Variables</em>, add <code className="text-[#171a20] font-mono font-semibold">VITE_SITE_URL</code> set to your deployment URL. The application will automatically use that value for canonical links and OpenGraph tags without requiring code edits!</p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
