import { skills } from '../data/portfolio.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';

export default function Skills() {
  return (
    <Section id="skills" number="04" label="Skills" title="Tools I work with" tint>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="card card-hover p-6">
            <div className="flex items-center gap-3">
              <span className="icon-badge"><Icon name={g.icon} /></span>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
