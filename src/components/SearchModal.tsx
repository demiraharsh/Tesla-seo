import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Tag, BookOpen } from "lucide-react";
import { ARTICLES } from "../data/articles";
import { Article } from "../types/blog";
import { useRouter } from "../router/Router";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = query.trim() === ""
    ? ARTICLES.slice(0, 5)
    : ARTICLES.filter((article: Article) => {
        const q = query.toLowerCase();
        return (
          article.title.toLowerCase().includes(q) ||
          article.seoPlan.mainKeyword.toLowerCase().includes(q) ||
          article.seoPlan.relatedKeywords.some((k) => k.toLowerCase().includes(q)) ||
          article.summary.toLowerCase().includes(q) ||
          article.categoryLabel.toLowerCase().includes(q)
        );
      });

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-[#000000]/40 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl border border-[#E2E2E2] bg-[#FFFFFF] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-[#E2E2E2] px-4 py-3.5 bg-[#F7F7F7]">
          <Search className="h-5 w-5 text-[#5c5e62] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, keywords (e.g. Model 3, battery life, Supercharger)..."
            className="w-full bg-transparent px-3 text-sm text-[#171a20] placeholder-[#5c5e62] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#5c5e62] hover:text-[#171a20]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 rounded-full border border-[#E2E2E2] bg-[#FFFFFF] px-3 py-1 text-xs text-[#5c5e62] hover:text-[#171a20] transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c5e62] flex items-center justify-between">
            <span>{query ? `Matching Articles (${filteredArticles.length})` : "Featured Essential Guides"}</span>
            <span className="text-[10px] text-[#5c5e62] font-mono">10 Articles</span>
          </div>

          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <button
                key={article.path}
                onClick={() => handleSelect(article.path)}
                className="w-full text-left rounded-xl p-3 hover:bg-[#F4F4F4] transition-colors group flex items-start justify-between gap-3 border border-transparent hover:border-[#E2E2E2]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F4F4] text-[#5c5e62] border border-[#E2E2E2]">
                      {article.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-[#E82127] font-bold flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" />
                      {article.seoPlan.mainKeyword}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#171a20] group-hover:text-[#E82127] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#5c5e62] line-clamp-1">
                    {article.summary}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#5c5e62] group-hover:text-[#171a20] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-[#5c5e62] space-y-2">
              <BookOpen className="h-8 w-8 mx-auto text-[#D0D1D2]" />
              <p className="text-sm text-[#171a20]">No articles matched &quot;{query}&quot;.</p>
              <p className="text-xs text-[#5c5e62]">
                Try searching for &quot;Tesla&quot;, &quot;Model Y&quot;, &quot;charging&quot;, or &quot;cost&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-[#E2E2E2] bg-[#F7F7F7] px-4 py-2.5 text-[11px] text-[#5c5e62] flex items-center justify-between">
          <span>College SEO Assignment Search Engine</span>
          <span>Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
