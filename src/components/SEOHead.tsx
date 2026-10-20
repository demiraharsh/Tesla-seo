import { useEffect } from "react";
import { SITE_CONFIG } from "../config/site";
import { Article } from "../types/blog";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  image?: string;
  article?: Article;
  breadcrumbs?: { name: string; path: string }[];
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  ogType = "website",
  image = "/images/tesla-brand-guide.webp",
  article,
  breadcrumbs,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes("TeslaDrive") ? title : `${title} | TeslaDrive`;
    document.title = fullTitle;

    // Helper to safely set or create a meta tag
    const setMetaTag = (selector: string, attr: "name" | "property", value: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper to set or create a link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Calculate full canonical URL using SITE_CONFIG.baseUrl
    const normalizedPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_CONFIG.baseUrl.replace(/\/$/, "")}${normalizedPath}`;
    const absoluteImageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.baseUrl.replace(/\/$/, "")}${image.startsWith("/") ? image : `/${image}`}`;

    // 2. Set Standard SEO Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    setLinkTag("canonical", canonicalUrl);

    // 3. Set OpenGraph Meta Tags
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:image"]', "property", "og:image", absoluteImageUrl);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", SITE_CONFIG.name);

    // 4. Set Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", absoluteImageUrl);

    // 5. Build and inject JSON-LD Structured Data
    const structuredDataScripts: object[] = [];

    // Base Website / Organization schema
    structuredDataScripts.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.baseUrl,
      "description": SITE_CONFIG.description,
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "TeslaDrive Student Editorial Project",
        "url": SITE_CONFIG.baseUrl,
      },
    });

    // BreadcrumbList schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredDataScripts.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": `${SITE_CONFIG.baseUrl.replace(/\/$/, "")}${crumb.path}`,
        })),
      });
    }

    // Article / BlogPosting schema if on an article page
    if (article) {
      structuredDataScripts.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        "headline": article.title,
        "description": article.metaDescription,
        "image": absoluteImageUrl,
        "datePublished": article.publishedDate,
        "dateModified": article.updatedDate,
        "author": {
          "@type": "Person",
          "name": "TeslaDrive Automotive Student Editorial",
        },
        "publisher": {
          "@type": "Organization",
          "name": "TeslaDrive Editorial",
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_CONFIG.baseUrl.replace(/\/$/, "")}/images/tesla-brand-guide.webp`,
          },
        },
        "keywords": [article.seoPlan.mainKeyword, ...article.seoPlan.relatedKeywords].join(", "),
        "wordCount": article.wordCount,
        "articleSection": article.categoryLabel,
      });

      // FAQPage schema for Answer Engine Optimization
      if (article.faqs && article.faqs.length > 0) {
        structuredDataScripts.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": article.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        });
      }
    }

    // Manage DOM script tag for JSON-LD
    let scriptTag = document.getElementById("seo-jsonld") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "seo-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredDataScripts);

  }, [title, description, canonicalPath, ogType, image, article, breadcrumbs]);

  return null;
}
