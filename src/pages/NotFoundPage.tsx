import { SEOHead } from "../components/SEOHead";
import { Link } from "../router/Router";
import { ARTICLES } from "../data/articles";
import { Compass, Home, BookOpen, Search } from "lucide-react";

interface NotFoundPageProps {
  onOpenSearch?: () => void;
}

export function NotFoundPage({ onOpenSearch }: NotFoundPageProps) {
  const popularArticles = ARTICLES.slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center space-y-8 bg-[#FFFFFF] text-[#171a20]">
      <SEOHead
        title="404 – Page Not Found | TeslaDrive"
        description="The automotive guide or page you were looking for could not be found. Explore our 10 comprehensive Tesla guides."
        canonicalPath="/404"
      />

      <div className="space-y-4">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F4F4] border border-[#E2E2E2] text-[#E82127] shadow-sm">
          <Compass className="h-8 w-8 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171a20]">
          404: Page Not Found
        </h1>
        <p className="mx-auto max-w-md text-sm text-[#5c5e62] leading-relaxed">
          The requested URL path does not exist on TeslaDrive. The link may have moved, or you may have typed an incorrect URL address.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3.5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#E82127] px-7 py-3 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#CC0000] transition-all shadow-md shadow-[#E82127]/20"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        {onOpenSearch && (
          <button
            onClick={onOpenSearch}
            className="inline-flex items-center gap-2 rounded-full border border-[#171a20] bg-transparent hover:bg-[#171a20] hover:text-white px-7 py-3 text-xs font-semibold text-[#171a20] uppercase tracking-wider transition-all"
          >
            <Search className="w-4 h-4 text-[#E82127]" />
            <span>Search All 10 Guides</span>
          </button>
        )}
      </div>

      <div className="mx-auto max-w-2xl rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-6 text-left space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5c5e62]">
          <BookOpen className="w-4 h-4 text-[#E82127]" />
          <span>Popular Educational Guides You Might Like</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {popularArticles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
              className="rounded-lg border border-[#E2E2E2] bg-[#FFFFFF] p-3.5 hover:border-[#171a20] hover:shadow-xs transition-all block group"
            >
              <span className="text-[10px] uppercase font-bold text-[#5c5e62] tracking-wider block">
                {article.categoryLabel}
              </span>
              <span className="text-xs font-bold text-[#171a20] group-hover:text-[#E82127] transition-colors line-clamp-1 mt-0.5">
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
