import { achievements, education } from '../data/portfolio.js';
import Section from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" number="05" label="Education" title="Education & achievements">
      <div className="grid gap-12 xl:grid-cols-[1.4fr_1fr]">
        <ol className="divide-y divide-[rgb(var(--line)/.09)] border-y hairline">
          {education.map((e) => (
            <li key={e.degree} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-5">
              <div className="min-w-0">
                <p className="font-mono text-[13px] text-muted">{e.period}</p>
                <h3 className="mt-1 font-semibold">{e.degree}</h3>
                <p className="text-[15px] text-fg/75">{e.school}</p>
              </div>
              <p className="text-sm font-semibold tabular-nums text-accent sm:pt-6">{e.result}</p>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="label">Certifications & membership</h3>
          <ul className="mt-4 space-y-4">
            {achievements.map((a) => (
              <li key={a.title} className="border-l-2 border-accent pl-4">
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
