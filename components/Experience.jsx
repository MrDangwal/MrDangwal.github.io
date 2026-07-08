'use client';

import { useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { experience } from '@/data/profile';

function Job({ job, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const shown = expanded ? job.points : job.points.slice(0, 2);

  return (
    <Reveal delay={index * 80}>
      <article className="group relative pl-8 sm:pl-10">
        {/* timeline spine — a node with a connecting edge, like the network above */}
        <span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-ember bg-ink transition-all duration-300 group-hover:border-amber group-hover:shadow-[0_0_12px_rgba(252,165,10,0.5)]" />
        <span className="absolute left-[5px] top-6 h-[calc(100%+2rem)] w-px bg-edge" />

        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-medium transition-colors group-hover:text-amber">{job.company}</h3>
          <p className="font-mono text-xs text-fog">{job.location}</p>
          <p className="ml-auto rounded-full border border-edge px-2.5 py-0.5 font-mono text-xs text-amber">{job.period}</p>
        </div>
        <p className="mt-1 text-sm text-fog">{job.role}</p>

        <ul className="mt-4 space-y-2.5">
          {shown.map((pt, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-snow/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
              {pt}
            </li>
          ))}
        </ul>

        {job.points.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 font-mono text-xs text-fog transition-colors hover:text-amber"
          >
            {expanded ? '[- collapse]' : `[+ ${job.points.length - 2} more]`}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2 pb-10">
          {job.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-fog"
            >
              {s}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow='pipeline.fit("career")' title="Experience">
      <div>
        {experience.map((job, i) => (
          <Job key={job.company} job={job} index={i} />
        ))}
      </div>
    </Section>
  );
}
