import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useMangaSFX } from '../context/MangaSFXContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { sfxEnabled, toggleSFX } = useMangaSFX();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Prologue', href: '#prologue' },
    { label: 'Profile', href: '#profile' },
    { label: 'Journey', href: '#journey' },
    { label: 'Abilities', href: '#abilities' },
    { label: 'Quests', href: '#quests' },
    { label: 'Training Arc', href: '#training-arc' },
    { label: 'System Status', href: '#system-status' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b-2 border-[#2b3040] shadow-md'
          : 'bg-[#0c0d10]/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#prologue"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#prologue');
          }}
          className="font-manga text-2xl tracking-wider text-white hover:text-[#ff2a55] transition-colors whitespace-nowrap"
        >
          KOUSHIK ANANDAM
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-medium text-neutral-300">
          {navLinks.slice(0, 6).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="hover:text-[#ff2a55] transition-colors tracking-wider hover:underline underline-offset-8 decoration-[#ff2a55] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="hover:text-[#ff2a55] transition-colors tracking-wider hover:underline underline-offset-8 decoration-[#ff2a55] whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary actions + Subtle Manga SFX toggle */}
        <div className="flex items-center gap-3">
          {/* Subtle Manga SFX Toggle Button */}
          <button
            onClick={toggleSFX}
            title={sfxEnabled ? "Manga SFX is ON: Click to hide visual sound effect typography" : "Manga SFX is OFF (Quiet mode): Click to enable visual sound effect typography"}
            aria-label={`Toggle Manga SFX typography. Currently ${sfxEnabled ? 'enabled' : 'disabled'}`}
            className={`px-2.5 py-1.5 border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer select-none ${
              sfxEnabled
                ? 'bg-[#181b24] border-neutral-700 text-neutral-200 hover:border-[#ff2a55] hover:text-white'
                : 'bg-[#101217] border-neutral-800 text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {sfxEnabled ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55] animate-pulse" />
                <span className="font-bold tracking-wider">SFX ON</span>
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                <span className="tracking-wider">SFX QUIET</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="px-4 py-2 bg-[#ff2a55] hover:bg-[#e01f48] text-black font-manga text-sm tracking-wider font-bold transition-all shadow-[2px_2px_0px_#fff] whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>START QUEST</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101218] border-b-2 border-[#ff2a55] px-6 py-6 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              CHAPTER INDEX // 目次
            </span>
            <button
              onClick={toggleSFX}
              className="text-xs font-mono px-2 py-1 bg-[#171a23] border border-neutral-700 text-neutral-300 flex items-center gap-1.5"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${sfxEnabled ? 'bg-[#ff2a55]' : 'bg-neutral-600'}`} />
              <span>SFX: {sfxEnabled ? 'ACTIVE' : 'MUTED'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="p-2.5 bg-[#171a23] border border-neutral-800 hover:border-[#ff2a55] text-xs font-mono text-neutral-200 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#ff2a55]">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
