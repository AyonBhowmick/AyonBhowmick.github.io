import { useState } from 'react';
import { contact, profile } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

const box = 'rounded-xl border border-line/15 bg-bg/60 p-4';

export default function Contact() {
  const [label, setLabel] = useState('Copy');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setLabel('Copied');
    } catch (e) {
      setLabel('Select & copy');
    }
    setTimeout(() => setLabel('Copy'), 1800);
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal className="card relative overflow-hidden p-6 sm:p-10">
          <div className="ambient pointer-events-none absolute inset-0" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="min-w-0">
              <SectionHeading number="06" eyebrow="Contact" title={contact.heading} />
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-fg/85">{contact.text}</p>
              <a href={`mailto:${profile.email}`} className="btn-primary mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Icon name="mail" className="h-4 w-4" /> Email me
              </a>
            </div>

            <ul className="grid min-w-0 gap-3">
              <li className={box}>
                <p className="text-xs uppercase tracking-wider text-muted">Email</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono select-all break-all text-[15px]">{profile.email}</span>
                  <button type="button" onClick={copyEmail} className="btn-ghost rounded-full px-3 py-1 text-xs font-semibold">{label}</button>
                </div>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener" className={`${box} contact-link block`}>
                  <p className="text-xs uppercase tracking-wider text-muted">LinkedIn</p>
                  <p className="mt-1 flex items-center justify-between gap-2 text-[15px]">{profile.linkedinLabel} <Icon name="external" className="h-4 w-4 text-muted" /></p>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener" className={`${box} contact-link block`}>
                  <p className="text-xs uppercase tracking-wider text-muted">GitHub</p>
                  <p className="mt-1 flex items-center justify-between gap-2 text-[15px]">{profile.githubLabel} <Icon name="external" className="h-4 w-4 text-muted" /></p>
                </a>
              </li>
              <li className={box}>
                <p className="text-xs uppercase tracking-wider text-muted">Location</p>
                <p className="mt-1 text-[15px]">{profile.location}</p>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
