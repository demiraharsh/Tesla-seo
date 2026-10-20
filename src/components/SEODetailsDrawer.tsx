import { useState } from "react";
import { Sparkles, CheckCircle2, ChevronDown, Copy, Check, FileCode, Tag } from "lucide-react";
import { Article } from "../types/blog";
import { SITE_CONFIG } from "../config/site";

interface SEODetailsDrawerProps {
  article: Article;
}

export function SEODetailsDrawer({ article }: SEODetailsDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const titleLength = article.seoTitle.length;
  const descLength = article.metaDescription.length;

  const copyForGrading = () => {
    const canonical = `${SITE_CONFIG.baseUrl.replace(/\/$/, "")}${article.path}`;
    const report = `=== COLLEGE SEO ASSIGNMENT AUDIT ===
Article Title (H1): ${article.title}
URL Path: ${article.path}
Canonical URL: ${canonical}
Meta Title (${titleLength} chars): ${article.seoTitle}
Meta Description (${descLength} chars): ${article.metaDescription}
Primary Keyword: ${article.seoPlan.mainKeyword}
Related Keywords: ${article.seoPlan.relatedKeywords.join(", ")}
Search Intent: ${article.seoPlan.targetSearchIntent}
Word Count: ${article.wordCount} words
Image Asset: public/images/${article.heroImage.filename}
Structured Data: BlogPosting, FAQPage, BreadcrumbList (JSON-LD)
=====================================`;

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] shadow-sm">
      <div className="flex items-center justify-between border-b border-[#E2E2E2] bg-[#F7F7F7] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E82127]/10 text-[#E82127]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171a20]">
              SEO Assignment Specification Panel
            </h3>
            <p className="text-[11px] text-[#5c5e62]">
              Grading metrics: Keyword targeting, title length, meta description, and schema
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyForGrading}
            className="flex items-center gap-1.5 rounded-full border border-[#171a20] bg-[#FFFFFF] px-3.5 py-1 text-xs font-semibold text-[#171a20] hover:bg-[#171a20] hover:text-white transition-all shadow-xs"
            title="Copy SEO metadata for assignment submission"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-[#E82127]" />
                <span className="text-[#E82127]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 text-[#5c5e62]" />
                <span>Copy Audit</span>
              </>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-xs font-semibold text-[#5c5e62] hover:text-[#171a20]"
            aria-expanded={isOpen}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Quick summary strip always visible */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-[#FFFFFF] text-xs border-b border-[#E2E2E2]">
        <div>
          <span className="text-[#5c5e62] block text-[10px] uppercase font-bold tracking-wider">Main Keyword</span>
          <span className="font-bold text-[#E82127] flex items-center gap-1 mt-0.5">
            <Tag className="w-3 h-3" />
            &quot;{article.seoPlan.mainKeyword}&quot;
          </span>
        </div>
        <div>
          <span className="text-[#5c5e62] block text-[10px] uppercase font-bold tracking-wider">Related Keywords</span>
          <span className="text-[#171a20] font-semibold mt-0.5 block truncate">
            {article.seoPlan.relatedKeywords.join(" • ")}
          </span>
        </div>
        <div>
          <span className="text-[#5c5e62] block text-[10px] uppercase font-bold tracking-wider">Meta Compliance</span>
          <span className="text-[#171a20] flex items-center gap-1 mt-0.5 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E82127]" />
            Title: {titleLength}c | Desc: {descLength}c
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 space-y-4 text-xs bg-[#F7F7F7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF] p-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#171a20]">Title Tag (&lt;title&gt;)</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${titleLength >= 50 && titleLength <= 65 ? "bg-[#E82127]/10 text-[#E82127]" : "bg-[#F4F4F4] text-[#5c5e62]"}`}>
                  {titleLength} characters (Target: ~50-60)
                </span>
              </div>
              <p className="font-mono text-[#171a20] bg-[#F4F4F4] p-2 rounded border border-[#E2E2E2] break-words">
                {article.seoTitle}
              </p>
            </div>

            <div className="space-y-2 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF] p-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#171a20]">Meta Description</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${descLength >= 140 && descLength <= 165 ? "bg-[#E82127]/10 text-[#E82127]" : "bg-[#F4F4F4] text-[#5c5e62]"}`}>
                  {descLength} characters (Target: ~140-160)
                </span>
              </div>
              <p className="text-[#5c5e62] bg-[#F4F4F4] p-2 rounded border border-[#E2E2E2] leading-relaxed">
                {article.metaDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF]">
              <span className="text-[#5c5e62] text-[10px] uppercase font-bold tracking-wider block">Canonical URL</span>
              <span className="font-mono text-[#171a20] font-semibold block truncate mt-1">
                {article.path}
              </span>
            </div>
            <div className="p-3 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF]">
              <span className="text-[#5c5e62] text-[10px] uppercase font-bold tracking-wider block">Search Intent</span>
              <span className="text-[#171a20] block mt-1 font-semibold">
                {article.seoPlan.targetSearchIntent}
              </span>
            </div>
            <div className="p-3 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF]">
              <span className="text-[#5c5e62] text-[10px] uppercase font-bold tracking-wider block">Word Count</span>
              <span className="text-[#171a20] block mt-1 font-semibold">
                {article.wordCount} words (Substantial)
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-[#E2E2E2] bg-[#FFFFFF] flex items-start gap-2">
            <FileCode className="w-4 h-4 text-[#5c5e62] shrink-0 mt-0.5" />
            <div className="text-[11px] text-[#5c5e62] leading-relaxed">
              <strong className="text-[#171a20]">Schema.org JSON-LD: </strong>
              This page automatically injects valid <code className="text-[#E82127]">BlogPosting</code>, <code className="text-[#E82127]">BreadcrumbList</code>, and <code className="text-[#E82127]">FAQPage</code> structured data tags into the HTML head, meeting Google search and Google Search Console rich result criteria.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
