import { useState } from "react";
import { Image as ImageIcon, Camera } from "lucide-react";

interface BlogImageProps {
  src: string;
  filename: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  caption?: string;
  showFilenameBadge?: boolean;
}

export function BlogImage({
  src,
  filename,
  alt,
  width = 1200,
  height = 675,
  priority = false,
  className = "",
  caption,
  showFilenameBadge = false,
}: BlogImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`relative overflow-hidden rounded-xl bg-[#F7F7F7] border border-[#E2E2E2] ${className}`}>
      <div
        className="relative w-full overflow-hidden bg-[#F4F4F4]"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-85"
            }`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-[#F7F7F7] border border-[#E2E2E2]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E82127]/10 border border-[#E82127]/20 text-[#E82127] mb-3">
              <Camera className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-[#171a20]">Local Image Placeholder</p>
            <p className="mt-1 text-xs text-[#5c5e62] font-mono">public/images/{filename}</p>
            <p className="mt-2 max-w-md text-xs text-[#5c5e62] italic">
              Drop your custom 1200x675 photo as &quot;{filename}&quot; into public/images/ to replace this graphic.
            </p>
          </div>
        )}

        {showFilenameBadge && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2E2E2] text-[10px] font-mono text-[#171a20] pointer-events-none shadow-xs font-semibold">
            <ImageIcon className="w-3 h-3 text-[#E82127]" />
            <span>public/images/{filename}</span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="px-4 py-2.5 text-xs text-[#5c5e62] border-t border-[#E2E2E2] bg-[#FFFFFF] flex items-center justify-between">
          <span>{caption}</span>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5c5e62]">Asset: {filename}</span>
        </figcaption>
      )}
    </figure>
  );
}
