import NeuralCanvas from './NeuralCanvas';
import Reveal from './Reveal';
import { profile, metrics } from '@/data/profile';

export default function Hero() {
  return (
    <div id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <NeuralCanvas />
      {/* fade the network out toward the bottom so text below stays clean */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative z-10 mx-auto w-full max-w-wrap px-5 pt-24">
        <Reveal>
          <p className="font-mono text-sm text-fog">
            <span className="text-ember">&gt;&gt;&gt;</span> model.load(<span className="text-amber">&quot;abhishek_dangwal&quot;</span>)
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-inferno">{profile.name.split(' ')[1]}</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 font-mono text-sm text-amber sm:text-base">{profile.role}</p>
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
          </div>
        </Reveal>

        <Reveal delay={420}>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-edge/70 pt-8 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-3xl font-medium text-snow sm:text-4xl">
                  {m.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-fog">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}
