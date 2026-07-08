'use client';

import { useEffect, useState } from 'react';

// Types/deletes through phrases. Starts with the first phrase fully
// rendered so static export and reduced-motion users see real content.
export default function Typewriter({ phrases, typeMs = 55, deleteMs = 26, holdMs = 1900 }) {
  const [idx, setIdx] = useState(0);
  const [n, setN] = useState(phrases[0].length);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAnimate(true);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const cur = phrases[idx];
    let t;
    if (!deleting && n === cur.length) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && n === 0) {
      setDeleting(false);
      setIdx((idx + 1) % phrases.length);
    } else {
      t = setTimeout(() => setN(n + (deleting ? -1 : 1)), deleting ? deleteMs : typeMs);
    }
    return () => clearTimeout(t);
  }, [animate, n, deleting, idx, phrases, typeMs, deleteMs, holdMs]);

  return (
    <span>
      {phrases[idx].slice(0, n)}
      <span className="cursor-blink">▍</span>
    </span>
  );
}
