import { Link } from "../router/Router";
import { Clock, ArrowUpRight, Tag } from "lucide-react";
import { Article } from "../types/blog";
import { BlogImage } from "./BlogImage";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] transition-all duration-300 hover:border-[#171a20] hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 overflow-hidden bg-[#F4F4F4]">
            <BlogImage
              src={article.heroImage.src}
              filename={article.heroImage.filename}
              alt={article.heroImage.alt}
              width={article.heroImage.width}
              height={article.heroImage.height}
              priority={true}
              className="h-full rounded-none border-0 group-hover:scale-[1.015] transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-[#FFFFFF]">
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-[#E82127] px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  Featured Guide
                </span>
                <span className="rounded-full bg-[#F4F4F4] px-3 py-0.5 text-[11px] text-[#5c5e62] font-semibold tracking-wide border border-[#E2E2E2]">
                  {article.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-[#5c5e62] text-xs">
                  <Clock className="w-3 h-3 text-[#5c5e62]" />
                  {article.readTimeMinutes} min read
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#171a20] group-hover:text-[#E82127] transition-colors leading-snug tracking-tight">
                <Link to={article.path} className="focus:outline-none">
                  {article.title}
                </Link>
              </h3>

              <p className="text-sm text-[#5c5e62] leading-relaxed line-clamp-3 font-normal">
                {article.summary}
              </p>

              {/* SEO assignment keyword badge */}
              <div className="pt-1 flex items-center gap-2 text-xs text-[#5c5e62] font-mono">
                <Tag className="w-3 h-3 text-[#E82127]" />
                <span>Target: &quot;{article.seoPlan.mainKeyword}&quot;</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E2E2] flex items-center justify-between">
              <span className="text-xs text-[#5c5e62] tracking-wide">Updated {article.updatedDate}</span>
              <Link
                to={article.path}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E82127] hover:bg-[#CC0000] px-5 py-2 text-xs font-semibold text-white uppercase tracking-wider transition-all shadow-sm"
                aria-label={`Read complete guide: ${article.title}`}
              >
                <span>Read Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FFFFFF] transition-all duration-300 hover:border-[#171a20] hover:shadow-md">
      <div>
        <div className="overflow-hidden bg-[#F4F4F4]">
          <BlogImage
            src={article.heroImage.src}
            filename={article.heroImage.filename}
            alt={article.heroImage.alt}
            width={article.heroImage.width}
            height={article.heroImage.height}
            className="rounded-t-xl rounded-b-none border-0 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-[#F4F4F4] border border-[#E2E2E2] px-2.5 py-0.5 text-[#5c5e62] font-semibold uppercase tracking-[0.1em] text-[9px]">
              {article.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-[#5c5e62] text-xs">
              <Clock className="w-3 h-3" />
              {article.readTimeMinutes} min
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#171a20] group-hover:text-[#E82127] transition-colors leading-snug line-clamp-2 tracking-tight">
            <Link to={article.path} className="focus:outline-none">
              {article.title}
            </Link>
          </h3>

          <p className="text-xs text-[#5c5e62] leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <div className="mb-3 flex items-center gap-1.5 text-[11px] text-[#5c5e62] font-mono">
          <Tag className="w-3 h-3 text-[#E82127]" />
          <span className="truncate">Keyword: &quot;{article.seoPlan.mainKeyword}&quot;</span>
        </div>

        <div className="pt-3 border-t border-[#E2E2E2] flex items-center justify-between">
          <span className="text-[11px] text-[#5c5e62]">{article.updatedDate}</span>
          <Link
            to={article.path}
            className="inline-flex items-center gap-1 rounded-full border border-[#171a20] bg-transparent hover:bg-[#171a20] hover:text-white px-4 py-1.5 text-xs font-semibold text-[#171a20] transition-all tracking-wider uppercase text-[11px]"
            aria-label={`Read article about ${article.seoPlan.mainKeyword}`}
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
