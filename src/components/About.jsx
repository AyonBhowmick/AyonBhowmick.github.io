import { about } from '../data/portfolio.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <Section id="about" number="01" label="About" title="Career goal">
      <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[65ch] space-y-4 text-[17px] leading-relaxed text-fg/85">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="panel h-fit p-6">
          <h3 className="text-sm font-semibold">Right now</h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-snug text-fg/85">
            {about.now.map((n) => (
              <li key={n} className="flex gap-3">
                <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent" />{n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
