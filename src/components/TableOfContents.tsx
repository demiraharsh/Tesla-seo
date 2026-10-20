import { useState } from "react";
import { ListCollapse, ChevronDown } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="my-6 rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] p-4 shadow-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#171a20] hover:text-[#E82127]"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <ListCollapse className="h-4 w-4 text-[#E82127]" />
          <span>Article Outline &amp; Navigation</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#5c5e62] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <nav aria-label="Table of Contents" className="mt-3 border-t border-[#E2E2E2] pt-3">
          <ul className="space-y-1.5 text-sm">
            {items.map((item) => (
              <li
                key={item.id}
                className={item.level === 3 ? "pl-4 text-xs" : "font-semibold"}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToHeading(e, item.id)}
                  className="group flex items-center gap-2 text-[#5c5e62] transition-colors hover:text-[#171a20]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D0D1D2] transition-colors group-hover:bg-[#E82127]" />
                  <span className="line-clamp-1">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
