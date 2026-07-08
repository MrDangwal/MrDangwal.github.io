import Image from 'next/image';
import NeuralCanvas from './NeuralCanvas';
import Reveal from './Reveal';
import CountUp from './CountUp';
import Typewriter from './Typewriter';
import { profile, metrics } from '@/data/profile';
import portrait from '@/public/abhishek.jpg';

const ROLES = [
  'Lead Data Scientist — AI/ML',
  'Agentic systems architect',
  'RAG & retrieval engineer',
  'LLM / VLM fine-tuner',
];

export default function Hero() {
  return (
    <div id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <NeuralCanvas />
      {/* fade the network out toward the bottom so text below stays clean */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative z-10 mx-auto w-full max-w-wrap px-5 pb-16 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-sm text-fog">
                <span className="text-ember">&gt;&gt;&gt;</span> model.load(<span className="text-amber">&quot;abhishek_dangwal&quot;</span>)
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
                {profile.name.split(' ')[0]}
                <br />
                <span className="text-inferno animate-inferno">{profile.name.split(' ')[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 h-6 font-mono text-sm text-amber sm:text-base">
                <Typewriter phrases={ROLES} />
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-md bg-gradient-to-r from-magma via-ember to-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-edge px-5 py-2.5 font-mono text-sm text-snow transition-colors hover:border-amber/50 hover:text-amber"
                >
                  Get in touch
                </a>
                <a
                  href={profile.resume}
                  download
                  className="rounded-md border border-edge px-5 py-2.5 font-mono text-sm text-snow transition-colors hover:border-amber/50 hover:text-amber"
                >
                  Resume ↓
                </a>
              </div>
            </Reveal>
          </div>

          {/* portrait: rotating inferno ring, orbiting nodes, floating chips */}
          <Reveal delay={260} className="hidden lg:block">
            <div className="relative mx-auto w-72 xl:w-80">
              {/* heat glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full bg-gradient-to-br from-magma/30 via-ember/20 to-amber/25 blur-3xl"
              />
              {/* rotating conic gradient ring */}
              <div
                aria-hidden="true"
                className="rot-slow absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#932667,#DD513A,#FCA50A,#DD513A,#932667)] opacity-90"
              />
              <Image
                src={portrait}
                alt="Portrait of Abhishek Dangwal"
                priority
                className="relative aspect-square w-full rounded-full object-cover"
              />
              {/* status pill */}
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-edge bg-ink/90 px-3.5 py-1.5 font-mono text-[11px] text-snow/90 backdrop-blur-sm">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                shipping to prod
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="card p-5">
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-3xl font-medium sm:text-4xl">
                  <span className="text-inferno">
                    <CountUp value={m.value} />
                  </span>
                </dd>
                <dd className="mt-2 text-xs leading-snug text-fog">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 font-mono text-[11px] text-fog/70 transition-colors hover:text-amber"
      >
        scroll <span className="inline-block animate-bounce">↓</span>
      </a>
    </div>
  );
}
