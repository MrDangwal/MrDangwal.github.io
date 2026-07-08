'use client';

import { useEffect, useRef } from 'react';

// Inferno colormap stops — the palette of every DL activation heatmap.
const INFERNO = ['#420A68', '#932667', '#DD513A', '#FCA50A', '#FCFFA4'];

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let nodes = [];
    let pulses = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK_DIST = 150;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.floor((w * h) / 16000); // density scales with area
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.2 + Math.random() * 1.6,
      }));
      pulses = [];
    }

    function spawnPulse() {
      if (nodes.length < 2 || pulses.length > 14) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      // find a neighbor within link distance
      const near = nodes.filter(
        (n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < LINK_DIST
      );
      if (!near.length) return;
      const b = near[Math.floor(Math.random() * near.length)];
      pulses.push({
        a, b, t: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: INFERNO[2 + Math.floor(Math.random() * 3)],
      });
    }

    function frame() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.16;
            ctx.strokeStyle = `rgba(147, 38, 103, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes — brighten near cursor like a local activation
      for (const n of nodes) {
        const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const hot = Math.max(0, 1 - dm / 180);
        const color = hot > 0.05
          ? INFERNO[Math.min(4, 1 + Math.round(hot * 3))]
          : 'rgba(139, 144, 163, 0.5)';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + hot * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // signal pulses traveling along edges
      if (Math.random() < 0.12) spawnPulse();
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        p.t += p.speed;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      // draw one static frame, no animation loop
      frame();
      cancelAnimationFrame(raf);
    } else {
      canvas.addEventListener('pointermove', onMove);
      canvas.addEventListener('pointerleave', onLeave);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
