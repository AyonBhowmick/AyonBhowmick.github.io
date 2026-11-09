import { useState } from 'react';
import { contact, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

const row = 'flex items-center justify-between gap-4 border-b hairline py-4';

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
    <section id="contact" aria-labelledby="contact-title" className="border-t hairline py-16 sm:py-24">
      <div className="mx-auto grid max-w-site gap-10 px-4 sm:px-6 lg:grid-cols-[200px_1fr] lg:gap-12">
        <p className="label pt-2">06 · Contact</p>
        <div className="grid min-w-0 gap-10 xl:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="contact-title" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{contact.heading}</h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-fg/80">{contact.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary"><Icon name="mail" className="h-4 w-4" /> Email me</a>
              <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-ghost"><Icon name="download" className="h-4 w-4" /> Download CV</a>
            </div>
          </div>

          <ul className="min-w-0 border-t hairline text-[15px]">
            <li className={row}>
              <div className="min-w-0">
                <p className="label">Email</p>
                <p className="mt-1 break-all font-medium">{profile.email}</p>
              </div>
              <button type="button" onClick={copyEmail} className="btn btn-ghost flex-none !px-3.5 !py-2 !text-[13px]" aria-live="polite">
                <Icon name={label === 'Copied' ? 'check' : 'copy'} className="h-4 w-4" /> {label}
              </button>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener" className={`${row} group`}>
                <div><p className="label">LinkedIn</p><p className="mt-1 font-medium group-hover:text-accent">{profile.linkedinLabel}</p></div>
                <Icon name="external" className="h-4 w-4 flex-none text-muted" />
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener" className={`${row} group`}>
                <div><p className="label">GitHub</p><p className="mt-1 font-medium group-hover:text-accent">{profile.githubLabel}</p></div>
                <Icon name="external" className="h-4 w-4 flex-none text-muted" />
              </a>
            </li>
            <li className={row}>
              <div><p className="label">Location</p><p className="mt-1 font-medium">{profile.location}</p></div>
            </li>
            <li className="pt-4 text-sm text-muted">{contact.references}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
