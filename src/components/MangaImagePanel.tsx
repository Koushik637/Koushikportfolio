import React, { useState, useEffect, useRef, useMemo } from 'react';

interface MangaImagePanelProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  containerClassName?: string;
  loadingCaption?: string;
  children?: React.ReactNode;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export const MangaImagePanel: React.FC<MangaImagePanelProps> = ({
  src,
  alt,
  aspectRatio = 'aspect-[16/9]',
  className = '',
  containerClassName = '',
  loadingCaption = 'INKING MANGA PANEL // 墨入れ中',
  children,
  referrerPolicy,
}) => {
  // Extract filename if path contains one
  const filename = useMemo(() => {
    try {
      const parts = src.split('/');
      return parts[parts.length - 1].split('?')[0];
    } catch {
      return '';
    }
  }, [src]);

  // Build candidate fallback URLs in case one path fails in specific hosting environments
  const candidateUrls = useMemo(() => {
    const list: string[] = [src];
    if (filename) {
      const pubPath1 = `./images/${filename}`;
      const pubPath2 = `./assets/images/${filename}`;
      const pubPath3 = `/images/${filename}`;
      const pubPath4 = `/assets/images/${filename}`;
      [pubPath1, pubPath2, pubPath3, pubPath4].forEach((p) => {
        if (!list.includes(p)) list.push(p);
      });
    }
    return list;
  }, [src, filename]);

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const activeSrc = candidateUrls[candidateIndex] || src;

  // Reset states when the src prop changes
  useEffect(() => {
    setCandidateIndex(0);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // Check if image is already cached synchronously
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      setHasError(false);
    }
  }, [activeSrc]);

  const handleError = () => {
    if (candidateIndex + 1 < candidateUrls.length) {
      // Try next fallback candidate
      setCandidateIndex((prev) => prev + 1);
    } else {
      // All paths exhausted; show stylized manga artwork fallback
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0c0d12] ${aspectRatio} ${containerClassName}`}>
      {/* ========================================================================= */}
      {/* MANGA INK-DROP LOADING PLACEHOLDER (Visible until image is fully loaded) */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0d0f17] transition-opacity duration-700 pointer-events-none select-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={isLoaded}
      >
        {/* Manga Screentone & Speedlines Texture in Background */}
        <div className="absolute inset-0 manga-screentone opacity-30 pointer-events-none" />
        <div className="absolute inset-0 manga-speedlines opacity-20 pointer-events-none" />

        {/* Panel Corner Accent Brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#ff2a55]/60" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#ff2a55]/60" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#ff2a55]/60" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#ff2a55]/60" />

        {/* Center Ink-Drop Stage */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Expanding Concentric Manga Ink Ripples */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Ripple Ring 1 */}
            <span className="absolute inset-0 m-auto w-10 h-10 rounded-full border-2 border-[#ff2a55] animate-ink-ripple-1 pointer-events-none" />
            {/* Ripple Ring 2 */}
            <span className="absolute inset-0 m-auto w-10 h-10 rounded-full border-2 border-white/80 animate-ink-ripple-2 pointer-events-none" />
            {/* Ripple Ring 3 */}
            <span className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-[#00f0ff]/80 animate-ink-ripple-3 pointer-events-none" />

            {/* Glowing Ink Impact Center */}
            <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff2a55]/20 to-white/10 animate-ink-glow blur-xs" />

            {/* Stylized Manga G-Pen / Ink-Drop SVG Graphic */}
            <div className="relative z-10 animate-ink-drop flex items-center justify-center">
              <svg
                width="34"
                height="42"
                viewBox="0 0 34 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              >
                {/* Ink Droplet Shape */}
                <path
                  d="M17 3C17 3 7 17.5 7 26C7 32.6274 11.4772 38 17 38C22.5228 38 27 32.6274 27 26C27 17.5 17 3 17 3Z"
                  fill="#ff2a55"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Inner Ink Core (Deep Black) */}
                <path
                  d="M17 11C17 11 11 20 11 26C11 29.866 13.6863 33 17 33C20.3137 33 23 29.866 23 26C23 20 17 11 17 11Z"
                  fill="#000000"
                />
                {/* Specular Ink Highlight Dot */}
                <circle cx="15" cy="22" r="2" fill="#ffffff" />
                <circle cx="18" cy="18" r="1" fill="#ffffff" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Manga Status Caption */}
          <div className="mt-3 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/90 border border-neutral-700 shadow-[2px_2px_0px_#000]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55] animate-ping" />
              <span className="text-[11px] font-mono tracking-wider text-neutral-200 uppercase font-bold">
                {loadingCaption}
              </span>
            </div>
            <div className="text-[9px] font-mono text-neutral-500 mt-1 uppercase tracking-widest">
              MANGA ARCHIVE · RENDERING
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HIGH-CONTRAST MANGA ARTWORK IMAGE */}
      {/* ========================================================================= */}
      {!hasError ? (
        <img
          ref={imgRef}
          src={activeSrc}
          alt={alt}
          referrerPolicy={referrerPolicy}
          loading="eager"
          decoding="async"
          onLoad={() => {
            setIsLoaded(true);
            setHasError(false);
          }}
          onError={handleError}
          className={`w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          } ${className}`}
        />
      ) : (
        /* Stylized Manga Fallback Panel if all image URLs fail */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#141824] via-[#0d0f17] to-[#050608] p-6 text-center select-none overflow-hidden">
          <div className="absolute inset-0 manga-screentone opacity-40 pointer-events-none" />
          <div className="absolute inset-0 manga-speedlines opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="manga-sfx text-4xl sm:text-5xl font-black text-white/90 drop-shadow-[0_4px_10px_rgba(255,42,85,0.6)] mb-2 tracking-widest">
              ドォォン
            </span>
            <div className="bg-black/90 border-2 border-[#ff2a55] px-4 py-2 shadow-[4px_4px_0px_#ff2a55]">
              <p className="font-manga text-sm sm:text-base text-white font-bold tracking-wider uppercase">
                {alt}
              </p>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-[#00f0ff]">
              MANGA ARCHIVE DATA // 原稿記録
            </div>
          </div>
        </div>
      )}

      {/* Children overlay slot (SFX, captions, badges, dark scrims) */}
      {children}
    </div>
  );
};
