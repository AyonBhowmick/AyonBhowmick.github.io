import { useEffect, useRef, useState } from 'react';
import { projectFilters, projects } from '../data/portfolio.js';
import { asset } from '../asset.js';
import Reveal from './Reveal.jsx';
import Card from './Card.jsx';
import SectionHeading from './SectionHeading.jsx';
import Lightbox from './Lightbox.jsx';
import Icon from './Icon.jsx';

const categoryLabel = Object.fromEntries(projectFilters.map((f) => [f.id, f.label]));

// Swipeable screenshot strip with arrows and dots. Clicking a screenshot opens it full screen.
function Slider({ project, onOpen }) {
  const track = useRef(null);
  const [shots, setShots] = useState(project.shots);
  const [index, setIndex] = useState(0);
  const many = shots.length > 1;

  function scrollTo(i) {
    const el = track.current;
    if (!el) return;
    const n = shots.length;
    const next = (i + n) % n;
    el.scrollTo({ left: next * el.clientWidth });
  }

  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIndex(Math.round(el.scrollLeft / el.clientWidth)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  // A screenshot that fails to load is dropped; if none are left the placeholder shows.
  const drop = (src) => setShots((list) => list.filter((s) => s.src !== src));

  if (shots.length === 0) {
    return (
      <div className="shot">
        <div className="shot-placeholder">
          <div>
            <p className="font-display text-lg font-semibold">{project.title}</p>
            <p className="font-mono mt-1 text-xs text-muted">{project.tech.join(' · ')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shot">
      <div className="slides" ref={track}>
        {shots.map((s, i) => (
          <button type="button" className="slide" key={s.src} onClick={() => onOpen(shots, i)}
                  aria-label={`Open screenshot: ${s.alt}`}>
            <img src={asset(s.src)} alt={`${project.title}: ${s.alt}`} loading={i === 0 ? 'eager' : 'lazy'}
                 style={s.contain ? { objectFit: 'contain' } : undefined} onError={() => drop(s.src)} />
          </button>
        ))}
      </div>
      <span className="shot-zoom" aria-hidden="true"><Icon name="expand" className="h-4 w-4" /></span>
      {many && (
        <>
          <button type="button" className="slide-btn prev" aria-label="Previous screenshot" onClick={() => scrollTo(index - 1)}><Icon name="chevronLeft" className="h-4 w-4" /></button>
          <button type="button" className="slide-btn next" aria-label="Next screenshot" onClick={() => scrollTo(index + 1)}><Icon name="chevronRight" className="h-4 w-4" /></button>
          <div className="dots-nav">
            {shots.map((s, i) => (
              <button type="button" key={s.src} className={i === index ? 'on' : ''} aria-label={`Screenshot ${i + 1} of ${shots.length}`}
                      aria-current={i === index} onClick={() => scrollTo(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [viewer, setViewer] = useState(null); // { title, shots, index }
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading number="03" eyebrow="Projects" title="Things I've built" />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button type="button" key={f.id} onClick={() => setFilter(f.id)} aria-pressed={filter === f.id}
                      className={`filter-btn rounded-full px-4 py-2 text-sm ${filter === f.id ? 'active' : ''}`}>
                {f.label}
                <span className="filter-count">{f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visible.map((p, i) => (
            <Card key={p.title} className="project-card flex flex-col p-5" delay={(i % 2) * 90}>
              <Slider project={p} onOpen={(shots, index) => setViewer({ title: p.title, shots, index })} />
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="chip chip-solid">{categoryLabel[p.category]}</span>
                {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">{p.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li className="flex gap-2.5" key={h}><span className="bullet" aria-hidden="true" />{h}</li>
                ))}
              </ul>
              <a href={p.repo} target="_blank" rel="noopener" className="repo-link mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent">
                <Icon name="github" className="h-4 w-4" /> View on GitHub <Icon name="arrowRight" className="arrow h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>

      {viewer && (
        <Lightbox title={viewer.title} shots={viewer.shots} index={viewer.index}
                  onIndex={(index) => setViewer((v) => ({ ...v, index }))} onClose={() => setViewer(null)} />
      )}
    </section>
  );
}
