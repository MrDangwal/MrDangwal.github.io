'use client';

import { useEffect, useRef } from 'react';

// A transformer-style network: neurons arranged in layers, a forward-pass
// activation wave sweeping left to right, signal pulses traveling the edges,
// and occasional long-range "attention" bursts arcing across the network.
// Colors ramp through the inferno colormap as activations rise.

const INFERNO = [
  [66, 10, 104], // #420A68
  [147, 38, 103], // #932667
  [221, 81, 58], // #DD513A
  [252, 165, 10], // #FCA50A
  [252, 255, 164], // #FCFFA4
];

function infernoColor(t, alpha = 1) {
  const x = Math.min(0.999, Math.max(0, t)) * (INFERNO.length - 1);
  const i = Math.floor(x);
  const f = x - i;
  const a = INFERNO[i];
  const b = INFERNO[i + 1];
  const r = Math.round(a[0] + (b[0] - a[0]) * f);
  const g = Math.round(a[1] + (b[1] - a[1]) * f);
  const bl = Math.round(a[2] + (b[2] - a[2]) * f);
  return `rgba(${r}, ${g}, ${bl}, ${alpha})`;
}

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let layers = []; // array of arrays of nodes
    let edges = []; // { a, b } node refs, a in layer l, b in layer l+1
    let pulses = []; // { a, b, t, speed }
    let bursts = []; // attention: { from, targets: [], life }
    const mouse = { x: -9999, y: -9999 };

    // forward-pass wave state
    let waveStart = performance.now();
    const LAYER_MS = 1000; // wave takes ~1s per layer
    const PAUSE_MS = 2200; // rest between sweeps
    let prevWave = -1;
    let lastBurst = 0;

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
      const L = Math.max(6, Math.min(14, Math.floor(w / 120)));
      const N = Math.max(5, Math.min(10, Math.floor(h / 80)));

      layers = [];
      edges = [];
      pulses = [];
      bursts = [];

      const xGap = w / (L + 1);
      for (let l = 0; l < L; l++) {
        const col = [];
        const count = N + (l % 2 === 0 ? 0 : -1); // alternate widths, organic feel
        const yGap = h / (count + 1);
        for (let n = 0; n < count; n++) {
          col.push({
            x: xGap * (l + 1) + (Math.random() - 0.5) * xGap * 0.5,
            y: yGap * (n + 1) + (Math.random() - 0.5) * yGap * 0.6,
            r: 1.4 + Math.random() * 1.4,
            act: 0,
            fireAt: 0,
            layer: l,
          });
        }
        layers.push(col);
      }

      // sparse edges to next layer: nearest 2 by y + one random
      for (let l = 0; l < L - 1; l++) {
        for (const a of layers[l]) {
          const next = [...layers[l + 1]].sort(
            (p, q) => Math.abs(p.y - a.y) - Math.abs(q.y - a.y)
          );
          const targets = next.slice(0, 2);
          if (next.length > 3 && Math.random() < 0.5) {
            targets.push(next[3 + Math.floor(Math.random() * (next.length - 3))]);
          }
          for (const b of targets) edges.push({ a, b });
        }
      }

      waveStart = performance.now();
    }

    function wavePosition(now) {
      const total = layers.length * LAYER_MS + PAUSE_MS;
      const t = (now - waveStart) % total;
      return t / LAYER_MS; // in layer units; > layers.length means resting
    }

    function spawnBurst(now) {
      // attention head: one query node attends to several distant nodes
      const flat = layers.flat();
      if (!flat.length) return;
      const from = flat[Math.floor(Math.random() * flat.length)];
      const targets = [];
      const want = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < want * 3 && targets.length < want; i++) {
        const cand = flat[Math.floor(Math.random() * flat.length)];
        if (cand !== from && Math.abs(cand.layer - from.layer) >= 1) targets.push(cand);
      }
      if (targets.length) {
        bursts.push({ from, targets, life: 1 });
        from.act = Math.max(from.act, 1);
        lastBurst = now;
      }
    }

    function frame(now) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const wave = wavePosition(now);
      if (wave < prevWave) prevWave = -1; // sweep wrapped around

      // fire each layer exactly once, as the wave front crosses it
      for (let l = 0; l < layers.length; l++) {
        if (prevWave < l && wave >= l) {
          for (const n of layers[l]) {
            n.fireAt = now + Math.random() * 300;
          }
        }
      }
      prevWave = wave;

      // node activations: fire, then decay
      for (const col of layers) {
        for (const n of col) {
          if (n.fireAt && now >= n.fireAt) {
            n.act = 1;
            n.fireAt = 0;
            // send signals down outgoing edges (cap total pulses)
            if (pulses.length < 60) {
              for (const e of edges) {
                if (e.a === n && Math.random() < 0.8) {
                  pulses.push({ a: e.a, b: e.b, t: 0, speed: 16 / LAYER_MS });
                }
              }
            }
          }
          // cursor proximity acts like a local activation
          const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          const hot = Math.max(0, 1 - dm / 170);
          n.act = Math.max(n.act * 0.955, hot * 0.9);
        }
      }

      // edges — brighten with endpoint activation
      ctx.lineWidth = 1;
      for (const e of edges) {
        const a = (e.a.act + e.b.act) / 2;
        if (a > 0.04) {
          ctx.strokeStyle = infernoColor(0.25 + a * 0.5, 0.08 + a * 0.3);
        } else {
          ctx.strokeStyle = 'rgba(147, 38, 103, 0.09)';
        }
        ctx.beginPath();
        ctx.moveTo(e.a.x, e.a.y);
        ctx.lineTo(e.b.x, e.b.y);
        ctx.stroke();
      }

      // attention bursts — long-range arcs from a query node
      bursts = bursts.filter((b) => b.life > 0);
      for (const b of bursts) {
        b.life -= 0.012;
        const alpha = Math.max(0, b.life) * 0.5;
        for (const t of b.targets) {
          const mx = (b.from.x + t.x) / 2;
          const my = (b.from.y + t.y) / 2 - Math.abs(t.x - b.from.x) * 0.18;
          ctx.strokeStyle = `rgba(252, 165, 10, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(b.from.x, b.from.y);
          ctx.quadraticCurveTo(mx, my, t.x, t.y);
          ctx.stroke();
          t.act = Math.max(t.act, b.life * 0.7);
        }
      }

      // signal pulses traveling along edges
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        p.t += p.speed;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = infernoColor(0.7, 0.9);
        ctx.shadowColor = '#FCA50A';
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (p.t >= 1) p.b.act = Math.max(p.b.act, 0.85);
      }

      // neurons — inferno ramp by activation
      for (const col of layers) {
        for (const n of col) {
          if (n.act > 0.04) {
            ctx.fillStyle = infernoColor(0.2 + n.act * 0.75, 0.5 + n.act * 0.5);
            if (n.act > 0.5) {
              ctx.shadowColor = '#DD513A';
              ctx.shadowBlur = 10 * n.act;
            }
          } else {
            ctx.fillStyle = 'rgba(139, 144, 163, 0.4)';
          }
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + n.act * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // occasional attention burst between sweeps
      if (now - lastBurst > 3200 + Math.random() * 2500) spawnBurst(now);

      raf = requestAnimationFrame(frame);
    }

    function staticFrame() {
      // one still image for reduced motion: mid-sweep activations
      const mid = layers.length / 2;
      for (const col of layers) {
        for (const n of col) {
          n.act = Math.max(0, 1 - Math.abs(n.layer - mid) * 0.35) * 0.8;
        }
      }
      frame(performance.now());
      cancelAnimationFrame(raf);
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
      staticFrame();
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
