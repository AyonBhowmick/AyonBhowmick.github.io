import { skills } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import Card from './Card.jsx';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

export default function Skills() {
  return (
    <section id="skills" className="tint py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal><SectionHeading number="02" eyebrow="Skills" title="Tools I work with" /></Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Card key={group.title} className="p-6" delay={(i % 3) * 70}>
              <div className="flex items-center gap-3">
                <span className="icon-badge"><Icon name={group.icon} /></span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
