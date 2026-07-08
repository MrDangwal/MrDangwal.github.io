import Section from './Section';
import Reveal from './Reveal';
import { projects } from '@/data/profile';

export default function Projects() {
  return (
    <Section id="projects" eyebrow='agent.run("portfolio")' title="Selected projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="card group flex h-full flex-col p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-ember">
                {p.kind}
              </p>
              <h3 className="mt-2 font-display text-lg font-medium transition-colors group-hover:text-amber">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{p.summary}</p>

              <ul className="mt-3 space-y-1.5">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-2.5 text-[13px] leading-relaxed text-snow/75">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-magma" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-fog"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-auto font-mono text-xs text-fog transition-colors group-hover:text-amber">
                  repo ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
