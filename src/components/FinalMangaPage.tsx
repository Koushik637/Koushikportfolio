import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { useParallax, useGlobalScrollParallax } from '../hooks/useParallax';

export const FinalMangaPage: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const imageParallax = useParallax(0.12);
  const stampParallax = useParallax(-0.08);
  const narrationParallax = useParallax(0.05);
  const bgScrollOffset = useGlobalScrollParallax(0.03);

  return (
    <div className="relative bg-[#08090d] pt-12 pb-8 border-t-4 border-[#252a37] overflow-hidden">
      {/* Screentone texture with scroll drift */}
      <div
        className="absolute inset-0 manga-screentone pointer-events-none opacity-30"
        style={{ transform: `translate3d(0, ${bgScrollOffset}px, 0)`, willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full-Width Manga Panel Frame */}
        <div className="relative border-4 border-white shadow-[12px_12px_0px_#ff2a55] overflow-hidden bg-black group">
          {/* Top Panel Narration Box with Parallax */}
          <div
            ref={narrationParallax.ref}
            style={narrationParallax.style}
            className="absolute top-4 left-4 z-20 bg-black/90 border border-white/40 px-4 py-2 max-w-sm hidden sm:block"
          >
            <div className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-widest font-bold">
              THE NEXT CHAPTER AWAITS
            </div>
            <p className="text-xs font-sans text-neutral-200 mt-0.5 leading-tight">
              Walking toward the limitless horizon of artificial intelligence, neural networks, and digital horizons.
            </p>
          </div>

          {/* Full-Width Manga Artwork with Depth Parallax */}
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-neutral-950">
            <div
              ref={imageParallax.ref}
              style={imageParallax.style}
              className="w-full h-[120%] -mt-[10%] relative"
            >
              <img
                src={HERO_DATA.cityWalkImage}
                alt="Protagonist walking toward the futuristic AI metropolis"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-bottom filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-70" />
            </div>
          </div>

          {/* "TO BE CONTINUED..." Dramatic Manga Stamp with Floating Parallax */}
          <div
            ref={stampParallax.ref}
            style={stampParallax.style}
            className="absolute bottom-6 right-6 z-20 flex flex-col items-end"
          >
            {/* Japanese つづく stamp */}
            <div className="bg-[#ff2a55] text-black font-manga text-3xl sm:text-5xl px-6 py-2 tracking-wider font-extrabold shadow-[4px_4px_0px_#fff] flex items-center gap-3">
              <span>TO BE CONTINUED...</span>
              <span className="font-jp text-2xl sm:text-3xl font-black">つづく</span>
            </div>

            {/* Protagonist Signature */}
            <div className="bg-black/95 border border-white/40 px-4 py-2 mt-2 text-right">
              <div className="font-manga text-xl sm:text-2xl text-white tracking-wide">
                {HERO_DATA.fullName}
              </div>
              <div className="text-xs font-mono text-[#00f0ff] font-bold">
                AI/ML DEVELOPER · PYTHON · FRONT-END
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Footer Strip */}
        <footer className="mt-12 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© {new Date().getFullYear()} {HERO_DATA.fullName}.</span>
            <span className="mx-2">·</span>
            <span>HYDERABAD, INDIA</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-500 font-jp hidden md:inline">
              日本のマンガ美学と人工知能
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#171a25] hover:bg-[#ff2a55] hover:text-black border border-neutral-700 transition-colors flex items-center gap-1.5 cursor-pointer text-white"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
