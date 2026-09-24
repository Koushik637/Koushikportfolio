import React from 'react';
import { CHARACTER_PROFILE } from '../data/portfolioData';
import { Flame, Target, BookOpen, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { MangaGutterNav } from './MangaGutterNav';

export const TrainingArc: React.FC = () => {
  return (
    <section id="training-arc" className="py-20 bg-[#0c0e14] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Screentone texture */}
      <div className="absolute inset-0 manga-screentone pointer-events-none opacity-20" />

      {/* Decorative SFX */}
      <div className="absolute top-12 right-12 pointer-events-none select-none hidden md:block">
        <span className="manga-sfx text-neutral-800 text-6xl font-black">
          ゴゴゴ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 border-b-2 border-neutral-700 pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-[#ff2a55]" />
              <span>CHAPTER 05 // 第五章</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-manga tracking-wide text-white uppercase">
              TRAINING ARC // 修業編
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            ENGINEERING & APPLIED APPRENTICESHIP
          </div>
        </div>

        {/* Training Arc Card Layout */}
        <div className="bg-[#141622] border-3 border-neutral-700 shadow-[8px_8px_0px_#000] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Cols: Manga Arc Badge & Institution */}
            <div className="lg:col-span-4 bg-[#0d0f17] border-2 border-neutral-700 p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs font-bold uppercase tracking-wider">
                <Flame size={16} />
                <span>INTENSIVE LAB FORMATION</span>
              </div>

              <div>
                <h3 className="text-2xl font-manga text-white tracking-wide">
                  APPLIED AI & SOFTWARE PRACTICE
                </h3>
                <div className="text-xs font-mono text-[#00f0ff] mt-1 font-bold">
                  {CHARACTER_PROFILE.education.college}
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800">
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-white font-bold">{CHARACTER_PROFILE.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>TIMEFRAME:</span>
                  <span className="text-white font-bold">2021 – 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>DISCIPLINE:</span>
                  <span className="text-white font-bold">Computer Engineering</span>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Arc Pillars & Rigor (Resume strict) */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                During this training period at Eluru College of Engineering and Technology,
                rigorous academic foundations were fused with intensive, real-world algorithmic development.
                Guided by excellence (carrying forward the 92% benchmark from HSC), the training focused
                strictly on mastering end-to-end Machine Learning pipelines, Python scripting, and responsive HTML web interfaces.
              </p>

              {/* Three Manga Arc Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#181b28] border border-neutral-700 hover:border-[#ff2a55] transition-colors">
                  <div className="text-[#ff2a55] font-mono text-xs font-bold mb-1">
                    PHASE 01 // 基礎
                  </div>
                  <div className="font-manga text-lg text-white">
                    CORE LANGUAGES
                  </div>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    Daily mastery of C algorithmic memory, Java object-oriented principles, and Python data structures.
                  </p>
                </div>

                <div className="p-4 bg-[#181b28] border border-neutral-700 hover:border-[#ff2a55] transition-colors">
                  <div className="text-[#00f0ff] font-mono text-xs font-bold mb-1">
                    PHASE 02 // 探求
                  </div>
                  <div className="font-manga text-lg text-white">
                    PREDICTIVE AI RIGOR
                  </div>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    Benchmarking 9+ mathematical models (XGBoost, LSTM, CatBoost, Poisson Regression) on complex sports data.
                  </p>
                </div>

                <div className="p-4 bg-[#181b28] border border-neutral-700 hover:border-[#ff2a55] transition-colors">
                  <div className="text-emerald-400 font-mono text-xs font-bold mb-1">
                    PHASE 03 // 統合
                  </div>
                  <div className="font-manga text-lg text-white">
                    WEB SOLUTIONS
                  </div>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    Bridging machine learning and databases with user-friendly HTML front-end design and SaaS architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={6}
          prev={{ label: 'QUEST LOG', href: '#quests', kanji: '第四章' }}
          next={{ label: 'SYSTEM STATUS', href: '#system-status', kanji: '第七章' }}
        />
      </div>
    </section>
  );
};
