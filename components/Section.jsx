import Reveal from './Reveal';

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-wrap scroll-mt-24 px-5 py-20 sm:py-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
