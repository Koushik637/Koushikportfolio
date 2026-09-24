import React, { useEffect, useState, useRef } from 'react';

type CursorVariant = 'default' | 'pen' | 'bubble' | 'clicking';

export const MangaCursor: React.FC = () => {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    // Only enable custom cursor for desktop pointers with hover
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!visible) setVisible(true);

      // Detect hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isBubbleTarget = !!target.closest(
        '[data-cursor="bubble"], .speech-bubble, textarea, input, [role="textbox"], [id*="chat"], .font-sans'
      ) && !!target.closest('button, a, input, textarea, .speech-bubble');

      const isInteractive = !!target.closest(
        'button, a, input, textarea, [role="button"], select, [data-cursor="pointer"], .cursor-pointer'
      );

      if (isBubbleTarget) {
        setVariant('bubble');
      } else if (isInteractive) {
        setVariant('pen');
      } else {
        setVariant('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth cursor interpolation loop
    const updatePosition = () => {
      const pos = posRef.current;
      // Linear interpolation (Lerp) for smooth trailing
      pos.x += (pos.targetX - pos.x) * 0.35;
      pos.y += (pos.targetY - pos.y) * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };

    animFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform select-none hidden md:block"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.15s ease'
      }}
    >
      {/* Click ripple animation */}
      {isClicking && (
        <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full border-2 border-[#ff2a55] animate-ping opacity-75" />
      )}

      {/* VARIANT 1: G-PEN INK NIB (Interactive buttons/links) */}
      {variant === 'pen' && (
        <div className="relative -top-1 -left-1">
          {/* Traditional Manga G-Pen Nib SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transform -rotate-12 transition-transform duration-150"
          >
            {/* Pen Nib Body */}
            <path
              d="M3 21L7 17M7 17L19.5 4.5C20.3284 3.67157 21 3.5 21 3.5C21 3.5 20.8284 4.17157 20 5L7.5 17.5M7 17L6 20L9 19L21.5 6.5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Nib metallic core */}
            <path
              d="M12 10L14 12"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Vermilion Manga Ink Tip Dot */}
            <circle cx="4" cy="20" r="2.5" fill="#ff2a55" stroke="#ffffff" strokeWidth="1" />
          </svg>
          {/* Subtle manga ink drip indicator */}
          <span className="absolute -top-3 -right-8 bg-black/90 border border-neutral-700 text-[#ff2a55] text-[9px] font-mono px-1 py-0.2 font-bold tracking-widest uppercase">
            INK
          </span>
        </div>
      )}

      {/* VARIANT 2: MANGA SPEECH BUBBLE (Text inputs, chat, dialogue) */}
      {variant === 'bubble' && (
        <div className="relative -top-3 -left-3">
          {/* Manga Speech Bubble SVG */}
          <div className="bg-white text-black border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#ff2a55] flex items-center gap-1 font-mono text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
            <span>TALK</span>
            {/* Speech bubble pointer tail */}
            <div className="absolute -bottom-1.5 left-2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white" />
          </div>
        </div>
      )}

      {/* VARIANT 3: DEFAULT MANGA RETICLE / INK POINT */}
      {variant === 'default' && (
        <div className="relative -top-2 -left-2 flex items-center justify-center w-4 h-4">
          {/* Outer manga screentone ring */}
          <div
            className={`w-4 h-4 rounded-full border border-white/60 transition-transform ${
              isClicking ? 'scale-75 bg-[#ff2a55]' : 'scale-100'
            }`}
          />
          {/* Inner ink core */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#ff2a55] shadow-[0_0_4px_#ff2a55]" />
        </div>
      )}
    </div>
  );
};
