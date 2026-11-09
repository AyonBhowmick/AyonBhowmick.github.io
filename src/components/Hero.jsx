import { facts, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <section id="top" className="glow dots-bg pb-16 pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="pill"><i aria-hidden="true" />{profile.status}</p>
          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            {profile.nameMain} <span className="grad-text">{profile.nameAccent}</span>
          </h1>
          <p className="font-display mt-5 text-lg font-semibold text-muted sm:text-2xl">
            {profile.role[0]}<span className="hidden sm:inline"> · </span> <span className="grad-text block sm:inline">{profile.role[1]}</span>
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-fg/85">{profile.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">View projects <Icon name="arrowRight" className="h-4 w-4" /></a>
            <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-ghost"><Icon name="download" className="h-4 w-4" /> Download CV</a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="icon-btn"><Icon name="github" className="h-[18px] w-[18px]" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="icon-btn"><Icon name="linkedin" className="h-[18px] w-[18px]" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn"><Icon name="mail" className="h-[18px] w-[18px]" /></a>
            <span className="ml-1 hidden items-center gap-1.5 text-sm text-muted sm:inline-flex"><Icon name="pin" className="h-4 w-4" />{profile.location}</span>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[250px] pb-12 sm:max-w-[320px] lg:order-2 lg:max-w-[360px] lg:pb-0">
          <div className="portrait">
            <img src="/img/profile.webp" srcSet="/img/profile-480.webp 480w, /img/profile.webp 720w"
                 sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 260px"
                 alt={`Portrait of ${profile.name}`} width="720" height="900" fetchpriority="high" decoding="async"
                 className="aspect-[4/5] w-full rounded-[24px] object-cover" />
            <div className="code-card -bottom-12 -left-6 w-[74%] !text-[11px] sm:-bottom-8 sm:-left-10 sm:w-[72%] sm:!text-[12.5px]" aria-hidden="true">
              <div className="code-dots mb-1.5 flex gap-1.5">
                <span style={{ background: '#ff5f57' }} /><span style={{ background: '#febc2e' }} /><span style={{ background: '#28c840' }} />
              </div>
              <div><span className="k">const</span> ayon = {'{'}</div>
              {profile.codeCard.map(([k, v], i) => (
                <div className="pl-4" key={k}>{k}: <span className="s">{v}</span>{i < profile.codeCard.length - 1 ? ',' : ''}</div>
              ))}
              <div>{'}'}<span className="p">;</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-site px-4 sm:px-6 lg:mt-20">
        <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="card stat flex flex-col p-5">
              <dt className="order-2 mt-1 text-sm font-medium text-fg/90">{f.label}</dt>
              <dd className="font-display order-1 text-3xl font-bold tabular-nums sm:text-4xl"><span className="stat-num">{f.value}</span></dd>
              <dd className="order-3 mt-0.5 text-[13px] text-muted">{f.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
