import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Calendar, GraduationCap, Award, Compass, BookOpen } from 'lucide-react';
import { MangaGutterNav } from './MangaGutterNav';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-[#0c0d12] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Manga Screentone */}
      <div className="absolute inset-0 manga-screentone-dense pointer-events-none opacity-20" />

      {/* Decorative Manga Kanji Watermark / SFX */}
      <div className="absolute bottom-10 left-6 pointer-events-none select-none hidden lg:block">
        <span className="manga-sfx text-neutral-800 text-7xl font-black">
          シュッ
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 bg-[#ff2a55]" />
            <span>CHAPTER 02 // 第二章</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-manga tracking-wide text-white uppercase">
            THE CHRONICLE JOURNEY
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto">
            From foundational academic discipline to engineering graduation at Eluru College.
          </p>
        </div>

        {/* Vertical Manga Panel Timeline */}
        <div className="relative">
          {/* Vertical Manga Ink Spine */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#ff2a55] via-white to-[#00f0ff] transform sm:-translate-x-1/2 shadow-[0_0_8px_rgba(255,42,85,0.4)]"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.chapter}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 -ml-3.5 sm:-ml-4 bg-[#141620] border-2 border-[#ff2a55] text-white flex items-center justify-center font-mono text-xs font-bold shadow-[2px_2px_0px_#fff] z-20">
                    0{idx + 1}
                  </div>

                  {/* Panel Content Card */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    }`}
                  >
                    <div className="bg-[#141722] border-2 border-neutral-700 shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_#ff2a55] hover:border-[#ff2a55] transition-all p-6 group">
                      {/* Chapter Card Header */}
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-manga text-lg text-[#ff2a55] tracking-wider">
                            {milestone.chapter}
                          </span>
                          <span className="text-neutral-600 font-mono">/</span>
                          <span className="text-xs font-mono font-bold text-white bg-neutral-800 px-2 py-0.5">
                            {milestone.year}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase">
                          {milestone.badge}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-2xl font-manga tracking-wide text-white group-hover:text-[#ff2a55] transition-colors">
                        {milestone.title}
                      </h3>

                      {milestone.institution && (
                        <div className="text-xs font-mono text-neutral-300 mt-1 flex items-center gap-1.5">
                          <GraduationCap size={14} className="text-[#ff2a55]" />
                          <span>{milestone.institution}</span>
                        </div>
                      )}

                      {milestone.score && (
                        <div className="inline-block mt-2 px-2.5 py-1 bg-emerald-950/80 border border-emerald-600 text-emerald-300 text-xs font-mono font-bold">
                          ★ {milestone.score}
                        </div>
                      )}

                      <p className="mt-3 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Manga Transition Bottom Rule */}
                      <div className="mt-4 pt-3 border-t border-dashed border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                        <span>PAGE TRANSITION // 次へ</span>
                        <span className="font-bold text-neutral-400">ARC {idx + 1}.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={3}
          prev={{ label: 'CHARACTER PROFILE', href: '#profile', kanji: '第一章' }}
          next={{ label: 'ABILITIES & TECH', href: '#abilities', kanji: '第三章' }}
        />
      </div>
    </section>
  );
};
