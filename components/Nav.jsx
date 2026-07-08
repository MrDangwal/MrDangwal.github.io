'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-5 py-3">
        <a href="#top" className="font-mono text-sm text-snow">
          <span className="text-ember">~/</span>dangwal
        </a>

        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-fog transition-colors hover:text-amber">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-edge px-3 py-1.5 font-mono text-xs text-snow transition-colors hover:border-amber/50 hover:text-amber"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        <button
          className="sm:hidden font-mono text-sm text-fog"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-edge/60 px-5 py-3 sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-fog hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
