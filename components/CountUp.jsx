'use client';

import { useEffect, useRef, useState } from 'react';

// Animates "85%", "~1M", "50+" style values from 0 when scrolled into view.
// Renders the final value statically so no-JS / reduced-motion users see it.
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [txt, setTxt] = useState(String(value));

  useEffect(() => {
    const m = String(value).match(/^([^0-9]*)([\d.,]+)(.*)$/);
    const el = ref.current;
    if (!m || !el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = parseFloat(m[2].replace(/,/g, ''));
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setTxt(m[1] + Math.round(target * eased) + m[3]);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{txt}</span>;
}
