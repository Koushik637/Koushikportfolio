import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowDown, Flame, Compass, Terminal, Shield, Zap } from 'lucide-react';
import { useParallax, useGlobalScrollParallax } from '../hooks/useParallax';
import { MangaGutterNav } from './MangaGutterNav';

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const characterParallax = useParallax(0.12);
  const sfxParallax = useParallax(-0.18);
  const tagParallax = useParallax(0.08);
  const bgScrollOffset = useGlobalScrollParallax(0.06);

  return (
    <section
      id="prologue"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden border-b-4 border-[#252a37]"
    >
      {/* Manga Screentone & Speedlines Backdrop with subtle vertical parallax */}
      <div
        className="absolute inset-0 manga-screentone pointer-events-none opacity-60"
        style={{ transform: `translate3d(0, ${bgScrollOffset * 0.5}px, 0)`, willChange: 'transform' }}
      />
      <div
        className="absolute inset-0 manga-speedlines pointer-events-none opacity-40"
        style={{ transform: `translate3d(0, ${bgScrollOffset}px, 0)`, willChange: 'transform' }}
      />

      {/* Decorative Manga Corner Borders */}
      <div className="absolute top-20 left-4 sm:left-8 w-12 h-12 border-t-2 border-l-2 border-[#ff2a55] pointer-events-none opacity-80" />
      <div className="absolute bottom-8 right-4 sm:right-8 w-12 h-12 border-b-2 border-r-2 border-[#ff2a55] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Manga Chapter Banner */}
        <div className="inline-flex items-center gap-2 mb-6 bg-[#161922] border-2 border-[#2f3547] px-4 py-1.5 shadow-[3px_3px_0px_#000]">
          <span className="w-2.5 h-2.5 bg-[#ff2a55] inline-block" />
          <span className="font-manga text-base sm:text-lg tracking-widest text-[#ff2a55]">
            PROLOGUE // 序章
          </span>
          <span className="text-neutral-500 font-mono text-xs">·</span>
          <span className="font-jp text-xs text-neutral-300 font-medium">
            運命のコードが動き出す
          </span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Massive Title & Developer Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Japanese SFX Floating Accent with Parallax Counter-Movement */}
            <div className="relative">
              <div
                ref={sfxParallax.ref}
                style={sfxParallax.style}
                className="absolute -top-10 right-4 sm:right-20 pointer-events-none select-none z-20"
              >
                <span className="manga-sfx text-[#ff2a55] text-4xl sm:text-6xl font-extrabold transform rotate-12 opacity-90 inline-block drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                  ドン!!
                </span>
              </div>

              {/* Massive Name Lockup */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-manga font-black leading-[0.9] tracking-tight text-white uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                <span className="block text-white hover:text-neutral-200 transition-colors">
                  {HERO_DATA.name.first}
                </span>
                <span className="block text-[#ff2a55] hover:text-[#ff476d] transition-colors">
                  {HERO_DATA.name.middle1}
                </span>
                <span className="block text-white hover:text-neutral-200 transition-colors">
                  {HERO_DATA.name.middle2}
                </span>
                <span className="block text-neutral-300 hover:text-white transition-colors">
                  {HERO_DATA.name.last}
                </span>
              </h1>
            </div>

            {/* Subtitle / Role Archetype */}
            <div className="p-4 bg-[#141620] border-l-4 border-[#ff2a55] border-y border-r border-[#2a2f3f] shadow-[4px_4px_0px_#000]">
              <div className="text-[11px] font-mono uppercase text-[#00f0ff] tracking-widest mb-1">
                PRIMARY DEVELOPER CLASSIFICATION
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-mono font-bold text-neutral-100">
                {HERO_DATA.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span className="text-white hover:text-[#ff2a55] transition-colors">
                      {role}
                    </span>
                    {idx < HERO_DATA.roles.length - 1 && (
                      <span className="text-neutral-600">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Narrative Excerpt / Motivation */}
            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-xl">
              Entering the protagonist's narrative. Driven by analytical mastery in
              machine learning prediction, robust Python systems, and responsive front-end design,
              building digital solutions at the intersection of intelligence and code.
            </p>

            {/* Hero CTA Action Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('#profile')}
                className="px-7 py-3.5 bg-[#ff2a55] hover:bg-[#e61b45] text-black font-manga text-xl tracking-wider font-bold transition-all shadow-[4px_4px_0px_#fff] flex items-center gap-2.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>ENTER THE STORY</span>
                <ArrowDown size={18} />
              </button>

              <button
                onClick={() => scrollTo('#quests')}
                className="px-7 py-3.5 bg-[#171a24] hover:bg-[#202533] text-white hover:text-[#00f0ff] font-manga text-xl tracking-wider font-bold transition-all border-2 border-neutral-600 hover:border-[#00f0ff] shadow-[4px_4px_0px_#000] flex items-center gap-2.5 cursor-pointer"
              >
                <span>VIEW QUESTS</span>
                <Compass size={18} />
              </button>
            </div>

            {/* Subtle Metadata Strip */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>STATUS: ACTIVE QUEST LOG</span>
              </div>
              <span>·</span>
              <span>HYDERABAD, INDIA</span>
              <span>·</span>
              <span>GRADUATION: 2025</span>
            </div>
          </div>

          {/* Right Column: Original Manga Character Protagonist Frame with Parallax */}
          <div className="lg:col-span-5 relative">
            {/* Parallax Container on Character Frame */}
            <div
              ref={characterParallax.ref}
              style={characterParallax.style}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer comic border with hard shadow */}
              <div className="relative bg-[#11131a] border-4 border-[#e5e7eb] shadow-[10px_10px_0px_#ff2a55] overflow-hidden group">
                {/* Manga Chapter Tag in Top-Right */}
                <div className="absolute top-3 right-3 z-20 bg-black/90 border border-white/30 px-3 py-1 text-[11px] font-mono text-white tracking-widest uppercase">
                  PROTAGONIST FILE // 01
                </div>

                {/* Katakana Sound Effect Overlay */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                  <span className="manga-sfx text-white/90 text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                    シュッ
                  </span>
                </div>

                {/* Character Silhouette / Manga Ink Image with Depth Scale */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={HERO_DATA.heroImage}
                    alt="Original Manga Developer Protagonist Silhouette"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Screentone Tint Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-80" />
                </div>

                {/* Panel Footer Caption */}
                <div className="bg-[#191c26] p-3 border-t-2 border-white/20 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Terminal size={14} className="text-[#ff2a55]" />
                    <span className="font-bold">ARCHETYPE: AI / ML SPECIALIST</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-jp">
                    主人公登場
                  </span>
                </div>
              </div>

              {/* Diagonal Manga Speedline Slash with Independent Float */}
              <div
                ref={tagParallax.ref}
                style={tagParallax.style}
                className="absolute -bottom-6 -left-6 bg-[#ff2a55] text-black font-manga text-sm font-bold px-4 py-1 tracking-widest shadow-[3px_3px_0px_#fff] transform -rotate-3 hidden sm:block"
              >
                CHAPTER ZERO: THE INITIATION
              </div>
            </div>
          </div>
        </div>

        {/* Manga Gutter Page-Turn Navigation */}
        <MangaGutterNav
          currentPage={1}
          next={{ label: 'CHARACTER PROFILE', href: '#profile', kanji: '第一章' }}
        />
      </div>
    </section>
  );
};

