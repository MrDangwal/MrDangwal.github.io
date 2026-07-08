import Image from 'next/image';
import Section from './Section';
import Reveal from './Reveal';
import { about, profile } from '@/data/profile';
import portrait from '@/public/abhishek.jpg';

export default function About() {
  return (
    <Section id="about" eyebrow='context.load("about")' title="About">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        {/* portrait framed like an object-detection output */}
        <Reveal className="mx-auto w-full max-w-[340px] lg:mx-0">
          <div className="group relative">
            {/* heat glow behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-magma/40 via-ember/25 to-amber/30 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
            />
            <div className="relative overflow-hidden rounded-xl border border-edge bg-panel">
              <Image
                src={portrait}
                alt="Portrait of Abhishek Dangwal"
                className="w-full grayscale-[35%] transition-[filter] duration-700 group-hover:grayscale-0"
              />

              {/* scanner sweep */}
              <div aria-hidden="true" className="scanline inset-x-0 h-14" />

              {/* detection corner brackets */}
              <span aria-hidden="true" className="absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-amber/80" />
              <span aria-hidden="true" className="absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-amber/80" />
              <span aria-hidden="true" className="absolute bottom-11 left-2 h-5 w-5 border-b-2 border-l-2 border-amber/80" />
              <span aria-hidden="true" className="absolute bottom-11 right-2 h-5 w-5 border-b-2 border-r-2 border-amber/80" />

              {/* confidence label bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-amber/25 bg-ink/85 px-3 py-2 font-mono text-[11px] backdrop-blur-sm">
                <span className="text-amber">person: 0.998</span>
                <span className="text-fog">lead_data_scientist</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* bio + quick facts */}
        <div>
          <div className="max-w-3xl space-y-5">
            {about.map((para, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base leading-relaxed text-snow/85 sm:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <div className="mt-9 border-t border-edge/70 pt-7">
              <p className="font-mono text-xs text-fog">
                <span className="text-ember">$</span> whoami <span className="text-fog/50">--verbose</span>
              </p>
              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 font-mono text-sm sm:grid-cols-2">
                <div className="flex gap-3">
                  <dt className="shrink-0 text-fog">location</dt>
                  <dd className="text-snow/90">{profile.location}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0 text-fog">current</dt>
                  <dd className="text-snow/90">Freecharge — Lead DS</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0 text-fog">focus</dt>
                  <dd className="text-snow/90">Agentic AI · RAG · VLMs</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0 text-fog">status</dt>
                  <dd className="flex items-center gap-2 text-snow/90">
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                    </span>
                    open to hard problems
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
