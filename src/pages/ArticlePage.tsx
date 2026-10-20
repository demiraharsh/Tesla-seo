import { useState, useEffect } from "react";
import { Article } from "../types/blog";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BlogImage } from "../components/BlogImage";
import { TableOfContents } from "../components/TableOfContents";
import { SEODetailsDrawer } from "../components/SEODetailsDrawer";
import { Link } from "../router/Router";
import { ARTICLES } from "../data/articles";
import {
  Clock,
  Calendar,
  User,
  ShieldAlert,
  ChevronDown,
  HelpCircle,
  Link2,
  ExternalLink,
  Tag,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

interface ArticlePageProps {
  article: Article;
}

export function ArticlePage({ article }: ArticlePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute related articles (excluding current one)
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const breadcrumbs = [
    { name: article.categoryLabel, path: `/#${article.category}` },
    { name: article.title.split(":")[0], path: article.path },
  ];

  return (
    <div className="pb-24 bg-[#FFFFFF] text-[#171a20]">
      {/* Thin Red Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#E82127] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalPath={article.path}
        ogType="article"
        image={article.heroImage.src}
        article={article}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Container */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Primary Article Header */}
        <header className="space-y-4 pt-2 pb-6 border-b border-[#E2E2E2]">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-[#F4F4F4] border border-[#E2E2E2] px-3.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#5c5e62]">
              {article.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-[#5c5e62]">
              <Clock className="w-3.5 h-3.5" />
              {article.readTimeMinutes} min read ({article.wordCount} words)
            </span>
            <span className="flex items-center gap-1.5 text-[#5c5e62]">
              <Calendar className="w-3.5 h-3.5" />
              Updated {article.updatedDate}
            </span>
          </div>

          {/* EXACTLY ONE H1 PER PAGE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171a20] leading-[1.15]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs text-[#5c5e62]">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#F4F4F4] border border-[#E2E2E2] flex items-center justify-center text-[#E82127]">
                <User className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-semibold text-[#171a20]">TeslaDrive Editorial Research</span>
                <span className="block text-[11px] text-[#5c5e62]">Student Automotive Technology Project</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] bg-[#F7F7F7] border border-[#E2E2E2] px-3 py-1 rounded-full text-[#E82127]">
              <Tag className="w-3 h-3" />
              <span>Target: &quot;{article.seoPlan.mainKeyword}&quot;</span>
            </div>
          </div>
        </header>

        {/* College SEO Assignment Details Inspector Drawer */}
        <SEODetailsDrawer article={article} />

        {/* Above-the-fold Hero Image (LCP Prioritized) */}
        <div className="my-6">
          <BlogImage
            src={article.heroImage.src}
            filename={article.heroImage.filename}
            alt={article.heroImage.alt}
            width={article.heroImage.width}
            height={article.heroImage.height}
            priority={true}
            caption={article.heroImage.caption}
            showFilenameBadge={true}
          />
        </div>

        {/* Independent Blog Notice Banner */}
        <div className="my-6 rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4 text-xs text-[#5c5e62] flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#E82127] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#171a20]">Educational Disclaimer: </strong>
            This article is part of an independent college SEO study. TeslaDrive is not affiliated with, endorsed by, or an official website of Tesla, Inc. Specifications, pricing, and software features vary by model year and territory.
          </div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={article.tableOfContents} />

        {/* Lead In Paragraph */}
        <div className="max-w-none text-base sm:text-lg text-[#171a20] leading-relaxed font-normal my-6 border-l-3 border-[#E82127] pl-4 py-2 italic bg-[#F7F7F7] rounded-r-lg">
          {article.leadParagraph}
        </div>

        {/* Article Body Sections */}
        <main className="space-y-10 my-8">
          {article.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 space-y-4"
            >
              {/* Section Heading (H2) */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#171a20] tracking-tight border-b border-[#E2E2E2] pb-2">
                {section.title}
              </h2>

              {/* AEO (Answer Engine Optimization) Direct Answer Block */}
              {section.isAEOQuestion && section.directAnswer && (
                <div className="rounded-xl border border-[#E2E2E2] bg-[#F4F4F4] p-5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E82127] mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Quick Answer / Key Takeaway</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#171a20] leading-relaxed">
                    {section.directAnswer}
                  </p>
                </div>
              )}

              {/* Explanatory Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#171a20] leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Callout Box (if present) */}
              {section.calloutBox && (
                <aside className={`my-4 rounded-xl border p-4 text-xs sm:text-sm leading-relaxed ${
                  section.calloutBox.type === "caution"
                    ? "border-amber-200 bg-amber-50 text-amber-900"
                    : section.calloutBox.type === "tip"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-[#E2E2E2] bg-[#F7F7F7] text-[#5c5e62]"
                }`}>
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {section.calloutBox.type === "caution" ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    ) : (
                      <Lightbulb className="w-4 h-4 text-emerald-600" />
                    )}
                    <span>{section.calloutBox.title}</span>
                  </div>
                  <p>{section.calloutBox.text}</p>
                </aside>
              )}
            </section>
          ))}

          {/* Frequently Asked Questions (FAQ) Section - AEO & Schema Optimized */}
          <section id="frequently-asked-questions" className="scroll-mt-24 pt-6 border-t border-[#E2E2E2] space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E82127]">
                Direct Answers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#171a20] flex items-center gap-2 tracking-tight">
                <HelpCircle className="w-5 h-5 text-[#E82127]" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-xs text-[#5c5e62]">
                Direct answers to common questions about {article.seoPlan.mainKeyword}.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {article.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] transition-colors shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-4 text-left font-semibold text-sm sm:text-base text-[#171a20] hover:text-[#E82127] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#5c5e62] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#E82127]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#E2E2E2] bg-[#F7F7F7] p-4 text-xs sm:text-sm text-[#171a20] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Official Source Caution */}
          <div className="rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4 text-xs text-[#5c5e62] space-y-1">
            <span className="font-bold text-[#171a20] flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-[#5c5e62]" />
              Source Verification &amp; Market Notice
            </span>
            <p className="leading-relaxed">
              {article.officialSourceDisclaimer}
            </p>
          </div>

          {/* Contextual Internal Links Section */}
          <section className="pt-6 border-t border-[#E2E2E2] space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5c5e62] flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-[#E82127]" />
              <span>Recommended Related Reading</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {article.internalLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-4 hover:border-[#171a20] hover:shadow-xs transition-all group flex flex-col justify-between space-y-2"
                >
                  <span className="text-xs font-bold text-[#171a20] group-hover:text-[#E82127] transition-colors line-clamp-1">
                    {link.title}
                  </span>
                  <p className="text-[11px] text-[#5c5e62] leading-normal line-clamp-2">
                    {link.reason}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* More Articles Carousel / Grid */}
          <section className="pt-8 border-t border-[#E2E2E2] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#171a20] tracking-tight">
                More Educational Guides
              </h3>
              <Link to="/" className="text-xs uppercase tracking-wider font-semibold text-[#5c5e62] hover:text-[#171a20]">
                View all 10 articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.path}
                  to={rel.path}
                  className="group rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] p-4 hover:border-[#171a20] hover:shadow-md transition-all space-y-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F4F4] text-[#5c5e62] border border-[#E2E2E2]">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="text-xs font-bold text-[#171a20] group-hover:text-[#E82127] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#5c5e62] line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
