import React from 'react';
import { CHARACTER_PROFILE, PROFILE_SUMMARY_TEXT } from '../data/portfolioData';
import { User, MapPin, GraduationCap, MessageSquareQuote } from 'lucide-react';
import { useParallax, useGlobalScrollParallax } from '../hooks/useParallax';
import { MangaGutterNav } from './MangaGutterNav';

export const CharacterProfile: React.FC = () => {
  const sfxParallax = useParallax(-0.16);
  const speechBubbleParallax = useParallax(0.07);
  const bgScrollOffset = useGlobalScrollParallax(0.04);

  return (
    <section id="profile" className="py-20 bg-[#0e1016] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Background Screentone with parallax */}
      <div
        className="absolute inset-0 manga-screentone pointer-events-none opacity-40"
        style={{ transform: `translate3d(0, ${bgScrollOffset}px, 0)`, willChange: 'transform' }}
      />

      {/* Subtle Japanese SFX with counter parallax */}
      <div
        ref={sfxParallax.ref}
        style={sfxParallax.style}
        className="absolute top-12 right-6 pointer-events-none select-none hidden md:block"
      >
        <span className="manga-sfx text-neutral-800 text-6xl font-black">
          ガタッ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Card */}
        <div className="mb-12 border-b-2 border-neutral-700 pb-4 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-[#ff2a55]" />
              <span>CHAPTER 01 // 第一章</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-manga tracking-wide text-white uppercase">
              CHARACTER PROFILE
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            PROTAGONIST STATS SHEET // 人物名鑑
          </div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Manga Character Identity Dossier */}
          <div className="lg:col-span-5 space-y-6">
            {/* Identity Card */}
            <div className="bg-[#151720] border-2 border-neutral-700 shadow-[6px_6px_0px_#000] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <User size={16} className="text-[#ff2a55]" />
                  <span>IDENTIFICATION DOSSIER</span>
                </div>
                <span className="text-[10px] font-mono bg-[#ff2a55]/20 text-[#ff2a55] border border-[#ff2a55]/40 px-2 py-0.5">
                  VERIFIED
                </span>
              </div>

              {/* Character Attributes */}
              <div className="space-y-4 text-sm font-mono">
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase">CHARACTER NAME</div>
                  <div className="text-lg font-bold text-white font-sans mt-0.5">
                    {CHARACTER_PROFILE.characterName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase">ROLE</div>
                    <div className="text-sm font-bold text-[#ff2a55] mt-0.5">
                      {CHARACTER_PROFILE.role}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase">LOCATION</div>
                    <div className="text-sm font-bold text-neutral-200 mt-0.5 flex items-center gap-1">
                      <MapPin size={13} className="text-neutral-400" />
                      <span>{CHARACTER_PROFILE.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 uppercase">EDUCATION</div>
                  <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-1.5">
                    <GraduationCap size={15} className="text-[#00f0ff]" />
                    <span>{CHARACTER_PROFILE.education.degree} — {CHARACTER_PROFILE.education.year}</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {CHARACTER_PROFILE.education.college}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 uppercase">COMMUNICATION LANGUAGES</div>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {CHARACTER_PROFILE.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-1 bg-[#1d202d] text-neutral-300 text-xs border border-neutral-700"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-xs">
                  <span className="text-neutral-500">ACADEMIC HONORS:</span>
                  <span className="text-emerald-400 font-bold">
                    {CHARACTER_PROFILE.hscScore} (National Open School)
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Narration Speech Bubble with Float Parallax */}
            <div
              ref={speechBubbleParallax.ref}
              style={speechBubbleParallax.style}
              data-cursor="bubble"
              className="relative bg-[#f7f6f2] text-[#11141a] border-3 border-[#11141a] shadow-[6px_6px_0px_#ff2a55] p-6 space-y-3 cursor-pointer"
            >
              {/* Narration Label */}
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider text-black">
                  <MessageSquareQuote size={16} className="text-[#ff2a55]" />
                  <span>PROTAGONIST NARRATION // 口述</span>
                </div>
                <span className="font-manga text-sm text-neutral-600">
                  MONOLOGUE
                </span>
              </div>

              {/* Exact Resume Quote */}
              <p className="font-sans text-sm sm:text-base leading-relaxed font-medium italic text-neutral-900">
                "{PROFILE_SUMMARY_TEXT}"
              </p>

              {/* Comic Speech Pointer Tail */}
              <div
                className="absolute -top-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-[#f7f6f2]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Manga-Style Character Statistics Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#12141d] border-2 border-neutral-700 shadow-[6px_6px_0px_#ff2a55] p-6">
              {/* Status Header ASCII Frame */}
              <div className="text-center border-b-2 border-neutral-800 pb-4 mb-6">
                <div className="text-[11px] font-mono text-[#ff2a55] uppercase tracking-widest">
                  COMBAT & INTELLECT MATRIX
                </div>
                <h3 className="font-manga text-3xl sm:text-4xl tracking-wider text-white uppercase mt-1">
                  CHARACTER STATUS SHEET
                </h3>
                <div className="text-xs font-jp text-neutral-400 mt-0.5">
                  能力ステータス表示
                </div>
              </div>

              {/* Status Bars (Strictly manga gauge blocks, NO invented percentages) */}
              <div className="space-y-4">
                {CHARACTER_PROFILE.skillsStatus.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="p-3.5 bg-[#171a24] border border-neutral-800 hover:border-neutral-600 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#ff2a55] font-bold">0{idx + 1}</span>
                        <span className="font-bold text-white text-sm tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-neutral-400">{skill.rank}</span>
                        <span className="text-neutral-600">/</span>
                        <span className="text-[#00f0ff] font-bold">{skill.mastery}</span>
                      </div>
                    </div>

                    {/* Manga Block Gauge */}
                    <div className="bg-[#0b0c10] border border-neutral-700 p-2 flex items-center justify-between font-mono text-sm sm:text-base">
                      <span className="text-[#ff2a55] tracking-widest font-black select-none">
                        {skill.bar}
                      </span>
                      <span className="text-xs text-neutral-400">
                        PARAM_LOCK
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Manga Rule Note & Recruiter Confidence */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>SYSTEM NOTE: EVALUATED ACROSS CODE REPOSITORIES</span>
                <span className="text-white font-bold">ARC LEVEL: PRODIGY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={2}
          prev={{ label: 'PROLOGUE', href: '#prologue', kanji: '序章' }}
          next={{ label: 'JOURNEY CHRONICLE', href: '#journey', kanji: '第二章' }}
        />
      </div>
    </section>
  );
};
