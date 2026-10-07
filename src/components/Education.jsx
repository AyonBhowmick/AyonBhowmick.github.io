import { activities, education } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto grid max-w-site gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0">
          <Reveal><SectionHeading number="05" eyebrow="Education" title="Where I've studied" /></Reveal>

          <ol className="timeline relative mt-10 space-y-10 pl-8">
            {education.map((e, i) => (
              <Reveal as="li" className="relative" key={e.degree} delay={i * 90}>
                <span className="timeline-dot" />
                <p className="font-mono text-xs text-accent2">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-[15px] text-fg/80">{e.school}</p>
                <p className="mt-2 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold tabular-nums">{e.result}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal as="aside" className="card h-fit p-6 sm:p-7" delay={120}>
          <h3 className="text-lg font-semibold">Certifications &amp; Activities</h3>
          <ul className="mt-5 space-y-5">
            {activities.map((a) => (
              <li key={a.title} className="activity">
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-muted">{a.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
