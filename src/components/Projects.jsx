import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolio.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';

const img = (name, small) => `/img/projects/${name}${small ? '-sm' : ''}.webp`;

// Full-screen screenshot viewer built on <dialog>: Esc closes, focus stays inside,
// arrow keys move between screenshots.
function Lightbox({ viewer, onIndex, onClose }) {
  const ref = useRef(null);
  const { project, index } = viewer;
  const shots = project.shots;
  const shot = shots[index];
  const many = shots.length > 1;
  const go = (d) => onIndex((index + d + shots.length) % shots.length);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function onKey(e) {
    if (!many) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  }

  return (
    <dialog ref={ref} className="lightbox" aria-label={`${project.title} screenshots`}
            onClose={onClose} onKeyDown={onKey} onClick={(e) => { if (e.target === e.currentTarget) ref.current.close(); }}>
      <button type="button" className="lb-btn right-3 top-3" aria-label="Close" onClick={() => ref.current.close()} autoFocus>
        <Icon name="close" />
      </button>
      {many && (
        <>
          <button type="button" className="lb-btn left-3 top-1/2 z-10 -translate-y-1/2" aria-label="Previous screenshot" onClick={() => go(-1)}><Icon name="chevronLeft" /></button>
          <button type="button" className="lb-btn right-3 top-1/2 z-10 -translate-y-1/2" aria-label="Next screenshot" onClick={() => go(1)}><Icon name="chevronRight" /></button>
        </>
      )}
      <figure>
        <img key={shot.src} src={img(shot.src)} alt={`${project.title}: ${shot.alt}`} />
        <figcaption className="text-center text-sm">
          <span className="font-semibold">{project.title}</span>
          <span className="opacity-70"> · {shot.alt}</span>
          {many && <span className="font-mono ml-3 text-xs opacity-70">{index + 1} / {shots.length}</span>}
        </figcaption>
      </figure>
    </dialog>
  );
}

// Small table diagram for projects that are a database design.
function Schema({ tables }) {
  return (
    <div className="cover schema" role="img" aria-label={`Database tables: ${tables.join(', ')}`}>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {tables.map((t, i) => (
          <div key={t} className="flex items-center gap-2.5">
            <div className="schema-table text-left">
              <p className="px-2.5 py-1 text-[11px] font-semibold">{t}</p>
              <p className="font-mono px-2.5 pt-1.5 text-[10px] text-muted">id PK</p>
              <p className="font-mono px-2.5 pb-1.5 text-[10px] text-muted">{i === 0 ? 'name' : 'ref_id FK'}</p>
            </div>
            {i < tables.length - 1 && <span className="hidden h-px w-3 bg-[rgb(var(--line)/.3)] sm:block" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Project({ p, featured, onOpen }) {
  const cover = p.shots[0];
  return (
    <article className={`card card-hover flex flex-col p-4 sm:p-5 ${featured ? 'md:col-span-2 md:grid md:grid-cols-[1.25fr_1fr] md:items-center md:gap-8' : ''}`}>
      {cover ? (
        <button type="button" className="cover" onClick={() => onOpen(p, 0)}
                aria-label={`Open ${p.shots.length} screenshots of ${p.title}`}>
          <img src={img(cover.src, true)} alt="" width={cover.w} height={cover.h} loading="lazy" decoding="async"
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
        <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-fg/80">{p.description}</p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-[.5em] h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-accent to-accent2" aria-hidden="true" />{h}
            </li>
          ))}
        </ul>
        <a href={p.repo} target="_blank" rel="noopener" className="link mt-auto inline-flex items-center gap-2 pt-5 text-sm">
          <Icon name="github" className="h-4 w-4" /> View on GitHub <Icon name="arrowRight" className="h-4 w-4" />
          <span className="sr-only">for {p.title} on GitHub</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [viewer, setViewer] = useState(null); // { project, index }
  return (
    <Section id="projects" number="03" label="Projects" title="Things I've built"
             intro="Course and personal projects across desktop, web, databases and graphics. All the code is on GitHub.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => <Project key={p.title} p={p} featured={i === 0} onOpen={(project, index) => setViewer({ project, index })} />)}
      </div>
      {viewer && (
        <Lightbox viewer={viewer} onIndex={(index) => setViewer((v) => ({ ...v, index }))} onClose={() => setViewer(null)} />
      )}
    </Section>
  );
}
