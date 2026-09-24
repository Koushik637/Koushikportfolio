import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Brain, Cpu, Layout, FileCode, CheckCircle, Sparkles } from 'lucide-react';
import { MangaGutterNav } from './MangaGutterNav';

export const Abilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'PROGRAMMING' | 'DEVELOPMENT' | 'AI'>('ALL');

  const filteredCategories = activeCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
      case 'python development':
        return <Terminal size={20} className="text-[#ff2a55]" />;
      case 'java':
        return <Cpu size={20} className="text-[#00f0ff]" />;
      case 'c':
        return <Code size={20} className="text-white" />;
      case 'artificial intelligence':
        return <Brain size={20} className="text-[#ff2a55]" />;
      case 'html':
      case 'html front-end developer':
        return <Layout size={20} className="text-[#00f0ff]" />;
      case 'html web designer':
        return <FileCode size={20} className="text-emerald-400" />;
      default:
        return <Code size={20} className="text-neutral-400" />;
    }
  };

  return (
    <section id="abilities" className="py-20 bg-[#0e1017] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Background Screentone */}
      <div className="absolute inset-0 manga-screentone pointer-events-none opacity-30" />

      {/* Manga SFX Kanji */}
      <div className="absolute top-10 right-10 pointer-events-none select-none hidden md:block">
        <span className="manga-sfx text-neutral-800 text-6xl font-black">
          バン!!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-neutral-700 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-[#ff2a55]" />
              <span>CHAPTER 03 // 第三章</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-manga tracking-wide text-white uppercase">
              ABILITIES & COMBAT TECH
            </h2>
            <div className="text-xs font-jp text-neutral-400 mt-1">
              プログラミング · 開発 · 人工知能
            </div>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 bg-[#141620] p-1.5 border border-neutral-700">
            {(['ALL', 'PROGRAMMING', 'DEVELOPMENT', 'AI'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ff2a55] text-black shadow-[2px_2px_0px_#fff]'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-6">
              {/* Category Header Bar */}
              <div className="flex items-center gap-3 bg-[#131620] px-4 py-2 border-l-4 border-[#00f0ff] border-y border-r border-neutral-800">
                <span className="font-manga text-xl tracking-wider text-white">
                  {catGroup.title}
                </span>
                <span className="text-neutral-600 font-mono">/</span>
                <span className="font-jp text-xs text-neutral-400">
                  {catGroup.kanji}
                </span>
                <span className="ml-auto text-[11px] font-mono text-neutral-500">
                  {catGroup.skills.length} DISCIPLINE{catGroup.skills.length > 1 ? 'S' : ''}
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative bg-[#161823] border-2 border-neutral-700 hover:border-[#ff2a55] shadow-[5px_5px_0px_#000] hover:shadow-[5px_5px_0px_#ff2a55] transition-all p-6 group flex flex-col justify-between overflow-hidden"
                  >
                    {/* Hover Speed-Line Effect */}
                    <div className="absolute inset-0 manga-speedlines opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
                        <div className="p-2 bg-[#0e1017] border border-neutral-700 group-hover:border-[#ff2a55] transition-colors">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-[10px] font-mono tracking-widest uppercase bg-neutral-800 text-[#00f0ff] px-2 py-0.5">
                          {skill.rank}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h3 className="font-manga text-2xl text-white tracking-wide group-hover:text-[#ff2a55] transition-colors">
                        {skill.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-neutral-800/80 space-y-3">
                      {/* Manga Status Gauge */}
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-500">POWER LEVEL</span>
                        <span className="text-[#ff2a55] font-black tracking-widest">
                          {skill.level}
                        </span>
                      </div>

                      {/* Unboxed Metadata Tags (Anti-Slop rule: unboxed text with separators) */}
                      <div className="text-[11px] font-mono text-neutral-400">
                        {skill.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {idx < skill.tags.length - 1 && (
                              <span className="mx-1.5 text-neutral-600">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={4}
          prev={{ label: 'JOURNEY', href: '#journey', kanji: '第二章' }}
          next={{ label: 'MAJOR QUEST LOG', href: '#quests', kanji: '第四章' }}
        />
      </div>
    </section>
  );
};
