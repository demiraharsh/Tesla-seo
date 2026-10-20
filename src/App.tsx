/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { RouterProvider, useRouter } from "./router/Router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { AboutPage } from "./pages/AboutPage";
import { SEOStrategyPage } from "./pages/SEOStrategyPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { getArticleByPath } from "./data/articles";

function AppContent() {
  const { currentPath } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Normalize path by stripping trailing slashes except for root
  const rawPath = currentPath || "/";
  const normalizedPath = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");

  const renderCurrentView = () => {
    // 1. Home
    if (normalizedPath === "/" || normalizedPath === "") {
      return <HomePage />;
    }

    // 2. Specific 10 Blog Article routes
    if (normalizedPath.startsWith("/blogs/")) {
      const article = getArticleByPath(normalizedPath);
      if (article) {
        return <ArticlePage article={article} />;
      }
      return <NotFoundPage onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 3. About Page
    if (normalizedPath === "/about") {
      return <AboutPage />;
    }

    // 4. SEO Strategy & Assignment Hub
    if (normalizedPath === "/seo-strategy") {
      return <SEOStrategyPage />;
    }

    // 5. Fallback 404
    return <NotFoundPage onOpenSearch={() => setIsSearchOpen(true)} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#171a20] antialiased selection:bg-[#E82127] selection:text-white">
      {/* Accessibility skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-[#E82127] focus:px-4 focus:py-2 focus:text-white focus:outline-none text-xs font-semibold"
      >
        Skip to main content
      </a>

      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main id="main-content" className="flex-1">
        {renderCurrentView()}
      </main>

      <Footer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
