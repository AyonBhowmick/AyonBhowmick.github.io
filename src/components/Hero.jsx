import { facts, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto grid max-w-site items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_340px] lg:gap-16">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border hairline bg-[rgb(var(--panel))] px-3 py-1.5 text-[13px] font-medium">
            <span className="dot" aria-hidden="true" /> {profile.status}
          </p>
          <h1 className="font-serif mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-accent sm:text-xl">{profile.role}</p>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg/80 sm:text-lg">{profile.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-primary">
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <Icon name="mail" className="h-4 w-4" /> Email me
            </a>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="icon-btn"><Icon name="github" className="h-[18px] w-[18px]" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="icon-btn"><Icon name="linkedin" className="h-[18px] w-[18px]" /></a>
          </div>
        </div>

        <figure className="order-first mx-auto w-full max-w-[220px] md:order-none md:max-w-none">
          <img src="/img/profile.webp" srcSet="/img/profile-480.webp 480w, /img/profile.webp 720w"
               sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 220px"
               alt={`Portrait of ${profile.name}`} width="720" height="900" fetchpriority="high" decoding="async"
               className="aspect-[4/5] w-full rounded-2xl border hairline object-cover" />
          <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted md:justify-start">
            <Icon name="pin" className="h-4 w-4" /> {profile.location}
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-14 max-w-site px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-[rgb(var(--line)/.09)] lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col bg-[rgb(var(--panel))] p-5 sm:p-6">
              <dt className="order-2 mt-1 text-sm font-medium">{f.label}</dt>
              <dd className="order-1 font-serif text-4xl font-semibold tabular-nums tracking-tight">{f.value}</dd>
              <dd className="order-3 mt-0.5 text-[13px] text-muted">{f.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
