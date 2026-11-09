import { useState } from 'react';
import { contact, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

const row = 'contact-row block p-4';

export default function Contact() {
  const [label, setLabel] = useState('Copy');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setLabel('Copied');
    } catch (e) {
      setLabel('Press Ctrl+C');
    }
    setTimeout(() => setLabel('Copy'), 1800);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="contact-card glow relative overflow-hidden p-6 sm:p-10">
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="min-w-0">
              <p className="eyebrow"><span className="eyebrow-num">06</span>Contact</p>
              <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"><span className="h-accent">{contact.heading}</span></h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-fg/85">{contact.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary"><Icon name="mail" className="h-4 w-4" /> Email me</a>
                <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-ghost"><Icon name="download" className="h-4 w-4" /> Download CV</a>
              </div>
              <p className="mt-6 text-sm text-muted">{contact.references}</p>
            </div>

            <ul className="grid min-w-0 gap-3">
              <li className={row}>
                <p className="text-xs uppercase tracking-wider text-muted">Email</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono select-all break-all text-[15px]">{profile.email}</span>
                  <button type="button" onClick={copyEmail} className="btn btn-ghost !px-3 !py-1.5 !text-xs" aria-live="polite">
                    <Icon name={label === 'Copied' ? 'check' : 'copy'} className="h-3.5 w-3.5" /> {label}
                  </button>
                </div>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener" className={row}>
                  <p className="text-xs uppercase tracking-wider text-muted">LinkedIn</p>
                  <p className="mt-1 flex items-center justify-between gap-2 text-[15px]">{profile.linkedinLabel} <Icon name="external" className="h-4 w-4 text-muted" /></p>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener" className={row}>
                  <p className="text-xs uppercase tracking-wider text-muted">GitHub</p>
                  <p className="mt-1 flex items-center justify-between gap-2 text-[15px]">{profile.githubLabel} <Icon name="external" className="h-4 w-4 text-muted" /></p>
                </a>
              </li>
              <li className={row}>
                <p className="text-xs uppercase tracking-wider text-muted">Location</p>
                <p className="mt-1 text-[15px]">{profile.location}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
