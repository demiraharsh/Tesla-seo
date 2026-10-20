export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOPlan {
  mainKeyword: string;
  relatedKeywords: [string, string];
  targetSearchIntent: "Informational" | "Commercial Investigation" | "Navigational";
  focusRationale: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  level: "h2" | "h3";
  isAEOQuestion?: boolean;
  directAnswer?: string; // 40-70 word concise direct answer for AEO / featured snippet optimization
  content: string[]; // Explanatory paragraphs
  keyTakeaway?: string;
  calloutBox?: {
    title: string;
    text: string;
    type?: "caution" | "tip" | "technical";
  };
}

export interface InternalLinkRef {
  title: string;
  url: string;
  reason: string;
}

export interface Article {
  slug: string;
  path: string; // Exact URL path e.g. /blogs/what-is-tesla
  title: string; // Single H1
  seoTitle: string; // 50-60 character target title
  metaDescription: string; // 140-160 character target description
  category: "guides" | "vehicles" | "technology" | "ownership" | "comparison";
  categoryLabel: string;
  publishedDate: string;
  updatedDate: string;
  readTimeMinutes: number;
  wordCount: number;
  featured: boolean;
  heroImage: {
    src: string;
    filename: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  summary: string;
  seoPlan: SEOPlan;
  tableOfContents: { id: string; label: string; level: number }[];
  leadParagraph: string;
  sections: ArticleSection[];
  faqs: FAQItem[];
  internalLinks: InternalLinkRef[];
  officialSourceDisclaimer: string;
}
