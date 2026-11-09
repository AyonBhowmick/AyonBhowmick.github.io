import { skills } from '../data/portfolio.js';
import Section from './Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" number="04" label="Skills" title="Tools I work with">
      <dl className="divide-y divide-[rgb(var(--line)/.09)] border-y hairline">
        {skills.map((g) => (
          <div key={g.title} className="grid gap-3 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
            <dt className="pt-1 font-semibold">{g.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
