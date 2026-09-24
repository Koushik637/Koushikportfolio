import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface ChapterTarget {
  label: string;
  href: string;
  kanji?: string;
}

interface MangaGutterNavProps {
  currentPage: number;
  totalPages?: number;
  prev?: ChapterTarget;
  next?: ChapterTarget;
}

export const MangaGutterNav: React.FC<MangaGutterNavProps> = ({
  currentPage,
  totalPages = 8,
  prev,
  next,
}) => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-16 pt-6 border-t-2 border-dashed border-neutral-800/90 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        {/* Left: Prev Page Turn Marker */}
        <div className="flex-1 min-w-[140px]">
          {prev ? (
            <button
              onClick={() => scrollTo(prev.href)}
              className="group inline-flex items-center gap-2 px-3 py-1.5 bg-[#141722] hover:bg-[#ff2a55] text-neutral-300 hover:text-black border border-neutral-700 hover:border-black transition-all shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <ChevronLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              <div className="text-left">
                <div className="text-[9px] text-neutral-500 group-hover:text-black font-bold uppercase">
                  PREV CHAPTER // {prev.kanji || '前章'}
                </div>
                <div className="font-manga text-sm tracking-wide leading-none">
                  {prev.label}
                </div>
              </div>
            </button>
          ) : (
            <div className="text-[10px] text-neutral-600 uppercase tracking-widest pl-1">
              PROLOGUE BEGINS // 序章
            </div>
          )}
        </div>

        {/* Center: Manga Volume & Page Number Gauge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#0e1017] border border-neutral-800 text-neutral-400">
          <BookOpen size={13} className="text-[#ff2a55]" />
          <span className="font-bold tracking-widest text-white">
            PAGE {currentPage < 10 ? `0${currentPage}` : currentPage} / {totalPages < 10 ? `0${totalPages}` : totalPages}
          </span>
          <span className="text-neutral-600 hidden sm:inline">·</span>
          <span className="font-jp text-[10px] text-neutral-500 hidden sm:inline">
            読了進行度
          </span>
        </div>

        {/* Right: Next Page Turn Marker */}
        <div className="flex-1 min-w-[140px] flex justify-end">
          {next ? (
            <button
              onClick={() => scrollTo(next.href)}
              className="group inline-flex items-center gap-2 px-3 py-1.5 bg-[#141722] hover:bg-[#ff2a55] text-neutral-300 hover:text-black border border-neutral-700 hover:border-black transition-all shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <div className="text-right">
                <div className="text-[9px] text-neutral-500 group-hover:text-black font-bold uppercase">
                  NEXT CHAPTER // {next.kanji || '次章'}
                </div>
                <div className="font-manga text-sm tracking-wide leading-none">
                  {next.label}
                </div>
              </div>
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <div className="text-[10px] text-[#ff2a55] uppercase tracking-widest pr-1 font-bold">
              TO BE CONTINUED // つづく
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
