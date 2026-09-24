import React from 'react';
import { SYSTEM_STATUS_DATA } from '../data/portfolioData';
import { Shield, Zap, Target, Award, MapPin, Sparkles, BookOpen, Layers } from 'lucide-react';
import { MangaGutterNav } from './MangaGutterNav';

export const SystemStatus: React.FC = () => {
  const statusMetrics = [
    {
      label: "HSC ACADEMIC SCORE",
      value: SYSTEM_STATUS_DATA.hscScore,
      kanji: "優等評価",
      highlight: "National Open School",
      color: "text-[#ff2a55]"
    },
    {
      label: "DEGREE PROGRAM",
      value: SYSTEM_STATUS_DATA.degree,
      kanji: "工学士",
      highlight: SYSTEM_STATUS_DATA.college,
      color: "text-white"
    },
    {
      label: "GRADUATION YEAR",
      value: SYSTEM_STATUS_DATA.graduation,
      kanji: "修了予定",
      highlight: "Class of 2025",
      color: "text-[#00f0ff]"
    },
    {
      label: "TOTAL MAJOR QUESTS",
      value: SYSTEM_STATUS_DATA.projects,
      kanji: "完了任務",
      highlight: "ML, Cloud SaaS & Chatbot",
      color: "text-emerald-400"
    },
    {
      label: "PRIMARY DOMAIN",
      value: SYSTEM_STATUS_DATA.primaryDomain,
      kanji: "専門分野",
      highlight: "Predictive & Deep Learning",
      color: "text-[#ff2a55]"
    },
    {
      label: "ACTIVE BASE LOCATION",
      value: SYSTEM_STATUS_DATA.location,
      kanji: "活動拠点",
      highlight: "Telangana, India",
      color: "text-white"
    }
  ];

  return (
    <section id="system-status" className="py-20 bg-[#0a0c10] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Background Screentone */}
      <div className="absolute inset-0 manga-screentone-dark pointer-events-none opacity-50" />

      {/* Manga SFX Accent */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <span className="manga-sfx text-neutral-800/80 text-8xl font-black">
          ピピッ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Japanese Anime RPG Status Screen Shell */}
        <div className="bg-[#12141d] border-4 border-white shadow-[10px_10px_0px_#ff2a55] p-6 sm:p-10 relative">
          {/* Top HUD Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-neutral-700 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#ff2a55] animate-pulse" />
              <div>
                <span className="font-mono text-xs text-[#ff2a55] tracking-widest uppercase block">
                  SYSTEM OVERRIDE // HUD v2.5
                </span>
                <h2 className="text-3xl sm:text-4xl font-manga tracking-wide text-white uppercase">
                  SYSTEM STATUS // ステータス画面
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="bg-[#1b1e2a] px-3 py-1.5 border border-neutral-700">
                <span className="text-neutral-500">SYNC: </span>
                <span className="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
              <div className="bg-[#1b1e2a] px-3 py-1.5 border border-neutral-700 hidden sm:block">
                <span className="text-neutral-500">RANK: </span>
                <span className="text-[#00f0ff] font-bold">PRODIGY DEVELOPER</span>
              </div>
            </div>
          </div>

          {/* 6 Metrics Grid (As requested in prompt) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statusMetrics.map((item, idx) => (
              <div
                key={item.label}
                className="bg-[#171a25] border-2 border-neutral-700 hover:border-[#ff2a55] p-5 shadow-[4px_4px_0px_#000] hover:shadow-[4px_4px_0px_#fff] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="tracking-wider">0{idx + 1} // {item.label}</span>
                    <span className="font-jp text-[11px] text-neutral-500">{item.kanji}</span>
                  </div>

                  <div className={`text-3xl sm:text-4xl font-manga tracking-wide ${item.color} mt-1`}>
                    {item.value}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 truncate">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Anime RPG EXP Bar */}
          <div className="mt-8 pt-6 border-t-2 border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
              <span className="text-neutral-400">
                ENGINEERING APTITUDE & SPECIALIZATION BAR (AI/ML · PYTHON · FRONT-END)
              </span>
              <span className="text-[#ff2a55] font-bold">
                MAX TIER // 成長上限突破
              </span>
            </div>
            <div className="h-3 bg-[#0d0e14] border border-neutral-700 overflow-hidden relative">
              <div className="h-full bg-gradient-to-r from-[#ff2a55] via-white to-[#00f0ff] w-[95%]" />
            </div>
          </div>
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={7}
          prev={{ label: 'TRAINING ARC', href: '#training-arc', kanji: '第五章' }}
          next={{ label: 'FINAL CHAPTER: CONTACT', href: '#contact', kanji: '最終章' }}
        />
      </div>
    </section>
  );
};
