'use client';

import { useEffect } from 'react';

// Page-wide atmosphere: cursor spotlight, per-card glow tracking,
// film-grain overlay, and a scroll progress bar. Purely decorative.
export default function Ambience() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMove = (e) => {
      root.style.setProperty('--spot-x', `${e.clientX}px`);
      root.style.setProperty('--spot-y', `${e.clientY}px`);
      const card = e.target.closest?.('.card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const bar = document.getElementById('scroll-progress');
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.transform = `scaleX(${p})`;
    };

    if (!reduced) window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-magma via-ember to-amber"
      />
      <div aria-hidden="true" className="spotlight" />
      <div aria-hidden="true" className="noise" />
    </>
  );
}
