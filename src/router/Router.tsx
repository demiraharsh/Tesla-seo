import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

interface RouterContextType {
  currentPath: string;
  currentHash: string;
  navigate: (to: string, hash?: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  currentHash: "",
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });

  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.hash ? window.location.hash.substring(1) : "";
    }
    return "";
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      setCurrentHash(window.location.hash ? window.location.hash.substring(1) : "");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((to: string, hash?: string) => {
    const targetUrl = hash ? `${to}#${hash}` : to;
    if (window.location.pathname !== to || window.location.hash !== (hash ? `#${hash}` : "")) {
      window.history.pushState(null, "", targetUrl);
      setCurrentPath(to);
      setCurrentHash(hash || "");
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, currentHash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  hash?: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export function Link({ to, hash, children, className = "", activeClassName = "", onClick, ...rest }: LinkProps) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;
  const combinedClasses = `${className} ${isActive && activeClassName ? activeClassName : ""}`.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If opening in new tab or with meta keys, let browser handle naturally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") {
      return;
    }

    // Only intercept local paths starting with / or #
    if (to.startsWith("/") || to.startsWith("#")) {
      e.preventDefault();
      navigate(to, hash);
      if (onClick) onClick(e);
    }
  };

  const href = hash ? `${to}#${hash}` : to;

  return (
    <a href={href} onClick={handleClick} className={combinedClasses} {...rest}>
      {children}
    </a>
  );
}
