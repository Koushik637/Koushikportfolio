import React, { useState } from 'react';
import { QUESTS } from '../data/portfolioData';
import { ProjectQuest } from '../types';
import { CricketPredictorModal } from './CricketPredictorModal';
import { InvoiceHubModal } from './InvoiceHubModal';
import { AIChatbotModal } from './AIChatbotModal';
import { Play } from 'lucide-react';
import { useParallax, useGlobalScrollParallax } from '../hooks/useParallax';
import { MangaGutterNav } from './MangaGutterNav';
import { MangaImagePanel } from './MangaImagePanel';

interface QuestCardItemProps {
  quest: ProjectQuest;
  index: number;
  onOpenModal: (id: string) => void;
}

const QuestCardItem: React.FC<QuestCardItemProps> = ({ quest, index, onOpenModal }) => {
  const isReversed = index % 2 === 1;
  const imageParallax = useParallax(0.09);
  const sfxParallax = useParallax(-0.14);
  const stampParallax = useParallax(0.05);

  return (
    <div className="bg-[#12141c] border-3 border-neutral-700 hover:border-[#ff2a55] shadow-[8px_8px_0px_#000] hover:shadow-[8px_8px_0px_#ff2a55] transition-all p-6 sm:p-8 relative group">
      {/* Manga Corner Stamp with subtle float */}
      <div
        ref={stampParallax.ref}
        style={stampParallax.style}
        className="absolute -top-3.5 left-6 bg-[#ff2a55] text-black font-manga text-sm px-3 py-0.5 font-bold tracking-widest shadow-[2px_2px_0px_#fff] z-20"
      >
        {quest.questNumber} // {quest.rank}
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual Artwork Column with Parallax Frame */}
        <div
          className={`lg:col-span-5 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            ref={imageParallax.ref}
            style={imageParallax.style}
            className="relative border-2 border-neutral-600 bg-neutral-900 overflow-hidden shadow-[4px_4px_0px_#000] group/img"
          >
            {/* Manga Screentone Frame with Ink-Drop Loading Placeholder */}
            <MangaImagePanel
              src={quest.image}
              alt={quest.title}
              aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
              className="group-hover/img:scale-105 transition-transform duration-500"
              loadingCaption={`INKING ${quest.questNumber} // 描画中`}
            />

            {/* Overlay Katakana sound effect with counter-parallax */}
            <div
              ref={sfxParallax.ref}
              style={sfxParallax.style}
              className="absolute bottom-3 right-3 pointer-events-none select-none z-10"
            >
              <span className="manga-sfx text-white/90 text-2xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                シュッ
              </span>
            </div>

            {/* Interactive Inspect Ribbon */}
            <button
              onClick={() => onOpenModal(quest.id)}
              className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-manga text-xl tracking-wider cursor-pointer"
            >
              <Play size={20} className="text-[#ff2a55]" />
              <span>OPEN INTERACTIVE SIMULATOR</span>
            </button>
          </div>

          {/* Manga Pipeline Visual for Cricket Project (Quest 01) */}
          {quest.diagram && (
            <div className="mt-4 p-3 bg-[#0d0f15] border border-neutral-800">
              <div className="text-[10px] font-mono text-[#ff2a55] mb-2 uppercase font-bold tracking-wider">
                MANGA PIPELINE FLOW:
              </div>
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                {quest.diagram.map((d) => (
                  <div
                    key={d.step}
                    className="p-1.5 bg-[#171a24] border border-neutral-700/80 text-neutral-300"
                  >
                    <div className="text-neutral-500 font-bold">{d.step}</div>
                    <div className="truncate text-white font-semibold">
                      {d.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quest Details Column (7 Cols) */}
        <div
          className={`lg:col-span-7 space-y-5 ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Unboxed Category Metadata */}
            <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center gap-2">
              <span className="text-[#00f0ff] font-bold">{quest.category}</span>
              <span>·</span>
              <span>{quest.subtitle}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-manga text-white tracking-wide group-hover:text-[#ff2a55] transition-colors">
              {quest.title}
            </h3>
          </div>

          {/* Quest Description */}
          <p className="text-sm font-sans text-neutral-300 leading-relaxed">
            {quest.description}
          </p>

          {/* Resume-Supported Metrics */}
          {quest.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {quest.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 bg-[#171922] border-l-3 border-[#ff2a55] border-y border-r border-neutral-800"
                >
                  <div className="text-2xl font-manga text-[#ff2a55]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feature / Model Matrix */}
          <div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
              {quest.id === 'cricket-prediction'
                ? 'PREDICTIVE ALGORITHMS BENCHMARKED IN RESUME:'
                : 'VERIFIED ARCHITECTURE MODULES:'}
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-neutral-300">
              {quest.modelsOrFeatures.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-[#1a1d28] border border-neutral-700/80 hover:border-neutral-500 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenModal(quest.id)}
              className="px-5 py-2.5 bg-[#ff2a55] hover:bg-[#e01f48] text-black font-manga text-lg tracking-wider font-bold transition-all shadow-[3px_3px_0px_#fff] flex items-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <Play size={16} />
              <span>
                {quest.id === 'cricket-prediction'
                  ? 'EXECUTE PREDICTION SIMULATION'
                  : quest.id === 'invoice-hub'
                  ? 'INSPECT INVOICE HUB CONSOLE'
                  : 'TALK WITH AI COMPANION'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const QuestLog: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'cricket' | 'invoice' | 'chatbot' | null>(null);
  const sfxHeaderParallax = useParallax(-0.2);
  const bgScrollOffset = useGlobalScrollParallax(0.04);

  const openQuestModal = (questId: string) => {
    if (questId === 'cricket-prediction') setActiveModal('cricket');
    else if (questId === 'invoice-hub') setActiveModal('invoice');
    else if (questId === 'ai-website-chatbot') setActiveModal('chatbot');
  };

  return (
    <section id="quests" className="py-24 bg-[#0a0b0f] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Background Screentone with parallax drift */}
      <div
        className="absolute inset-0 manga-screentone-dense pointer-events-none opacity-25"
        style={{ transform: `translate3d(0, ${bgScrollOffset}px, 0)`, willChange: 'transform' }}
      />

      {/* Decorative Manga Kanji Accent with Counter-Parallax */}
      <div
        ref={sfxHeaderParallax.ref}
        style={sfxHeaderParallax.style}
        className="absolute top-16 left-6 pointer-events-none select-none hidden lg:block"
      >
        <span className="manga-sfx text-neutral-800/80 text-8xl font-black">
          ドン!!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 border-b-2 border-neutral-700 pb-5 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-[#ff2a55]" />
              <span>CHAPTER 04 // 第四章</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-manga tracking-wide text-white uppercase">
              THE MAJOR QUEST LOG
            </h2>
            <div className="text-xs font-jp text-neutral-400 mt-1">
              特別任務：機械学習 · クラウドSaaS · 対話型AI
            </div>
          </div>
          <div className="text-xs font-mono text-neutral-400 text-right">
            <div>TOTAL QUESTS: 03</div>
            <div className="text-emerald-400 font-bold">ALL OBJECTIVES COMPLETED</div>
          </div>
        </div>

        {/* Quests Container */}
        <div className="space-y-20">
          {QUESTS.map((quest, index) => (
            <QuestCardItem
              key={quest.id}
              quest={quest}
              index={index}
              onOpenModal={openQuestModal}
            />
          ))}
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={5}
          prev={{ label: 'ABILITIES', href: '#abilities', kanji: '第三章' }}
          next={{ label: 'TRAINING ARC', href: '#training-arc', kanji: '第五章' }}
        />
      </div>

      {/* Interactive Modals */}
      <CricketPredictorModal
        isOpen={activeModal === 'cricket'}
        onClose={() => setActiveModal(null)}
      />
      <InvoiceHubModal
        isOpen={activeModal === 'invoice'}
        onClose={() => setActiveModal(null)}
      />
      <AIChatbotModal
        isOpen={activeModal === 'chatbot'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
};
