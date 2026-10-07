import { about } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-site gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="min-w-0">
          <SectionHeading number="01" eyebrow="About" title={about.heading} />
          <div className="mt-6 max-w-[65ch] space-y-4 text-[16px] leading-relaxed text-fg/85">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>

        <Reveal as="aside" className="card focus-card h-fit p-6 sm:p-7" delay={120}>
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="pulse inline-block h-2 w-2 rounded-full bg-accent2" />
            Currently focused on
          </p>
          <ul className="mt-5 space-y-3.5 text-[15px] text-fg/85">
            {about.focus.map((f) => (
              <li className="flex gap-3" key={f}>
                <span className="tick"><Icon name="check" className="h-3.5 w-3.5" /></span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
