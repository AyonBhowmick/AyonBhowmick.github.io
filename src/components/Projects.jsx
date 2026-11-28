'use client';

import { useState } from 'react';
import { projects } from '../data/portfolio.js';
import { shotUrl } from '../lib/shots.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import Lightbox from './Lightbox.jsx';
import Schema from './Schema.jsx';

function Project({ p, featured, onOpen }) {
  const cover = p.shots[0];
  return (
    <article className={`card card-hover flex flex-col p-4 sm:p-5 ${featured ? 'md:col-span-2 md:grid md:grid-cols-[1.25fr_1fr] md:items-center md:gap-8' : ''}`}>
      {cover ? (
        <button type="button" className="cover" onClick={() => onOpen(p, 0)}
                aria-label={`Open ${p.shots.length} screenshots of ${p.title}`}>
          <img src={shotUrl(cover.src, true)} alt="" width={cover.w} height={cover.h} loading="lazy" decoding="async"
               className={cover.contain ? 'contain' : ''} />
          {p.shots.length > 1 && <span className="cover-count"><Icon name="expand" className="h-3.5 w-3.5" />{p.shots.length} screenshots</span>}
        </button>
      ) : (
        <Schema tables={p.schema} />
      )}

      <div className={`flex flex-1 flex-col px-1 pt-5 ${featured ? 'md:py-2 md:pt-0' : ''}`}>
        <div className="flex flex-wrap gap-1.5 text-xs" aria-label="Type and technologies">
          <span className="chip !bg-accent/20 !border-accent/45 font-semibold">{p.kind}</span>
          {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <h3 className="mt-3 text-xl font-semibold"><a href={`/projects/${p.slug}/`} className="hover:text-accent">{p.title}</a></h3>
        <p className="mt-2 text-[15px] leading-relaxed text-fg/80">{p.description}</p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-[.5em] h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-accent to-accent2" aria-hidden="true" />{h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 text-sm">
          <a href={`/projects/${p.slug}/`} className="link inline-flex items-center gap-2">
            Details <Icon name="arrowRight" className="h-4 w-4" />
            <span className="sr-only">about {p.title}</span>
          </a>
          <a href={p.repo} target="_blank" rel="noopener" className="link inline-flex items-center gap-2">
            <Icon name="github" className="h-4 w-4" /> GitHub
            <span className="sr-only">for {p.title}</span>
          </a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener" className="link inline-flex items-center gap-2">
              <Icon name="external" className="h-4 w-4" /> Live demo
              <span className="sr-only">of {p.title}</span>
            </a>
          )}
          {p.video && (
            <a href={p.video} target="_blank" rel="noopener" className="link inline-flex items-center gap-2">
              <Icon name="play" className="h-4 w-4" /> Gameplay video
              <span className="sr-only">video of {p.title} on YouTube</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [viewer, setViewer] = useState(null); // { project, index }
  return (
    <Section id="projects" number="03" label="Projects" title="Things I've built"
             intro="Course and personal projects in software, data science and deep learning. All the code is on GitHub.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => <Project key={p.title} p={p} featured={i === 0 || (i === projects.length - 1 && projects.length % 2 === 0)} onOpen={(project, index) => setViewer({ project, index })} />)}
      </div>
      {viewer && (
        <Lightbox viewer={viewer} onIndex={(index) => setViewer((v) => ({ ...v, index }))} onClose={() => setViewer(null)} />
      )}
    </Section>
  );
}
