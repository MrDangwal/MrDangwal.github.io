import Section from './Section';
import Reveal from './Reveal';
import { about } from '@/data/profile';

export default function About() {
  return (
    <Section id="about" eyebrow='context.load("about")' title="About">
      <div className="max-w-3xl space-y-5">
        {about.map((para, i) => (
          <Reveal key={i} delay={i * 100}>
            <p className="text-base leading-relaxed text-snow/85 sm:text-lg">{para}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
