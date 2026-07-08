import Reveal from './Reveal';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-edge/70">
      <div className="mx-auto max-w-wrap px-5 py-20 sm:py-24">
        <Reveal>
          <p className="eyebrow">response.send(&quot;contact&quot;)</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-xl text-fog">
            Open to conversations about AI/ML engineering, agentic systems, and
            hard production problems. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-gradient-to-r from-magma via-ember to-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-edge px-5 py-2.5 font-mono text-sm text-snow transition-colors hover:border-amber/50 hover:text-amber"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-edge px-5 py-2.5 font-mono text-sm text-snow transition-colors hover:border-amber/50 hover:text-amber"
            >
              LinkedIn ↗
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

        <div className="mt-16 flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-fog/70">
            © {new Date().getFullYear()} {profile.name} · built with Next.js · deployed on GitHub Pages
          </p>
          <a
            href="#top"
            className="font-mono text-xs text-fog/70 transition-colors hover:text-amber"
          >
            [ ↑ top ]
          </a>
        </div>
      </div>
    </footer>
  );
}
