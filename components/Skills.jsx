import Section from './Section';
import Reveal from './Reveal';
import { skills, education, certifications } from '@/data/profile';

export default function Skills() {
  return (
    <Section id="skills" eyebrow='embeddings.index("skills")' title="Skills & credentials">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 90}>
            <div className="card h-full p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber">
                {s.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-edge px-2 py-1 text-[13px] text-snow/80 transition-colors hover:border-amber/50 hover:text-snow"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={180}>
          <div className="card h-full p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber">
              Education & certifications
            </h3>
            <ul className="mt-3 space-y-2">
              {education.map((e) => (
                <li key={e.school} className="text-[13px] leading-snug">
                  <span className="text-snow/90">{e.degree}</span>
                  <span className="text-fog"> — {e.school}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1.5 border-t border-edge pt-4">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2.5 text-[13px] text-snow/75">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-magma" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
