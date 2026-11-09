import { about } from '../data/portfolio.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <Section id="about" number="01" label="About" title="Career goal">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-[65ch] space-y-4 text-[16.5px] leading-relaxed text-fg/85">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="card h-fit p-6 sm:p-7">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-accent2" aria-hidden="true" /> Right now
          </p>
          <ul className="mt-5 space-y-3.5 text-[15px] text-fg/85">
            {about.now.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-accent2/15 text-accent2">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
