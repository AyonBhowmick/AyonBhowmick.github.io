import { useRef } from 'react';
import { profile, stats } from '../data/portfolio.js';
import { asset } from '../asset.js';
import Reveal from './Reveal.jsx';
import Typed from './Typed.jsx';
import CountUp from './CountUp.jsx';
import Icon from './Icon.jsx';

export default function Hero() {
  const tilt = useRef(null);

  // The portrait leans a little toward the cursor.
  function onMove(e) {
    const el = tilt.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
  }
  function onLeave() {
    const el = tilt.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }

  return (
    <section id="home" className="ambient grid-bg pb-16 pt-28 sm:pt-36">
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>

      <div className="mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent2/30 bg-accent2/10 px-3 py-1.5 text-xs font-medium text-accent2">
            <span className="pulse inline-block h-2 w-2 rounded-full bg-accent2" />
            {profile.status}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.nameLines[0]}<br />{profile.nameLines[1]} <span className="name-grad">{profile.nameAccent}</span>
          </h1>
          <p className="role-typed">
            <span className="text-muted">{profile.typedPrefix}</span>{' '}
            <Typed words={profile.typedWords} />
          </p>
          <p className="font-mono mt-3 text-sm text-muted sm:text-[15px]">{profile.tagline}</p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-fg/85">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              View Projects <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href={asset(profile.cv)} target="_blank" rel="noopener" className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="btn-ghost grid h-10 w-10 place-items-center rounded-full"><Icon name="github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="btn-ghost grid h-10 w-10 place-items-center rounded-full"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="btn-ghost grid h-10 w-10 place-items-center rounded-full"><Icon name="mail" /></a>
          </div>
        </Reveal>

        <Reveal className="order-1 mx-auto mb-8 w-full max-w-[300px] sm:max-w-[340px] lg:order-2 lg:mb-0 lg:max-w-[380px]" delay={120}>
          <div className="tilt" ref={tilt} onPointerMove={onMove} onPointerLeave={onLeave}>
            <div className="portrait">
              <img src={asset(profile.photo)} alt={`Portrait of ${profile.name}`} width="720" height="900"
                   className="relative aspect-[4/5] w-full rounded-[24px] object-cover shadow-2xl" />
              <div className="code-card absolute -bottom-10 -left-3 w-[74%] p-3.5 sm:-left-10 sm:w-[70%]" aria-hidden="true">
                <div className="dots mb-2 flex gap-1.5">
                  <span style={{ background: '#ff5f57' }} /><span style={{ background: '#febc2e' }} /><span style={{ background: '#28c840' }} />
                </div>
                <div><span className="k">const</span> ayon = {'{'}</div>
                {profile.codeCard.map(([key, value], i) => (
                  <div className="pl-4" key={key}>{key}: <span className="s">"{value}"</span>{i < profile.codeCard.length - 1 ? ',' : ''}</div>
                ))}
                <div>{'}'}<span className="p">;</span></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-site px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="card stat-card p-5" delay={i * 70}>
              <dt className="text-xs uppercase tracking-wider text-muted">{s.label}</dt>
              {s.text ? (
                <dd className="font-display mt-1 text-2xl font-bold"><span className="stat-num">{s.text}</span></dd>
              ) : (
                <dd className="font-display mt-1 text-3xl font-bold tabular-nums">
                  <CountUp value={s.value} decimals={s.decimals} />
                  <span className="text-base font-semibold text-muted">{s.suffix}</span>
                </dd>
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
