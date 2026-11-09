import { achievements, education } from '../data/portfolio.js';
import Section from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" number="05" label="Education" title="Education & achievements">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ol className="timeline space-y-10 pl-8">
          {education.map((e) => (
            <li key={e.degree} className="relative">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="font-mono text-xs text-accent2">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
              <p className="text-[15px] text-fg/80">{e.school}</p>
              <p className="mt-2 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold tabular-nums">{e.result}</p>
            </li>
          ))}
        </ol>
        <div className="card h-fit p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Certifications &amp; membership</h3>
          <ul className="mt-5 space-y-5">
            {achievements.map((a) => (
              <li key={a.title} className="activity">
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-muted">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
