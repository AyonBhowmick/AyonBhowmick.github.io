import { useState } from 'react';
import { inPreparation, publications, researchInterests, underReview } from '../data/portfolio.js';
import Section from './Section.jsx';
import Icon from './Icon.jsx';

function Authors({ list, me }) {
  return list.map((a, i) => (
    <span key={a}>
      {a === me ? <strong className="font-semibold text-fg">{a}</strong> : a}
      {i < list.length - 2 ? ', ' : i === list.length - 2 ? ', and ' : ''}
    </span>
  ));
}

function citation(p) {
  const a = p.authors;
  const authors = a.length > 1 ? `${a.slice(0, -1).join(', ')}, and ${a[a.length - 1]}` : a[0];
  return `${authors}, "${p.title}," ${p.venue}, ${p.place}${p.doi ? `, doi: ${p.doi}` : ''}.`;
}

function CopyCitation({ paper }) {
  const [done, setDone] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(citation(paper));
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch (e) { /* clipboard blocked: the citation is still on the page */ }
  }
  return (
    <button type="button" onClick={copy} className="btn btn-ghost !px-4 !py-2.5 !text-[13px]">
      <Icon name={done ? 'check' : 'copy'} className="h-4 w-4" /> {done ? 'Copied' : 'Copy citation'}
    </button>
  );
}

function Paper({ paper, n }) {
  return (
    <li className="card card-hover paper p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-mono text-muted">[{n}]</span>
        <span className={`status ${paper.status === 'published' ? 'status-pub' : 'status-acc'}`}>{paper.badge}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">{paper.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <Authors list={paper.authors} me={paper.me} />. <em>{paper.venue}</em>, {paper.place}.
      </p>
      {paper.doi && <p className="font-mono mt-2 break-all text-xs text-muted">doi: {paper.doi}</p>}
      <div className="mt-5 flex flex-wrap gap-2.5">
        {paper.doi && (
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener" className="btn btn-primary !px-4 !py-2.5 !text-[13px]">
            Read on IEEE Xplore <Icon name="external" className="h-4 w-4" />
          </a>
        )}
        <CopyCitation paper={paper} />
      </div>
    </li>
  );
}

function WorkList({ title, status, items }) {
  return (
    <div className="card p-6 sm:p-7">
      <h3 className="flex items-center gap-2 text-base font-semibold">
        {title} <span className={`status ${status === 'review' ? 'status-acc' : 'status-rev'}`}>{items.length}</span>
      </h3>
      <ul className="mt-2 divide-y divide-[rgb(var(--line)/.1)]">
        {items.map((w) => (
          <li key={w.title} className="py-4">
            <p className="font-medium leading-snug">{w.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              <Authors list={w.authors} me="A. K. B. Ovi" /> · {w.venue}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Research() {
  return (
    <Section id="research" number="02" label="Research" title="Publications & research" tint
             intro="Most of my research applies machine learning to health, energy and finance, and explains its predictions with tools like SHAP and Grad-CAM.">
      <div className="flex flex-wrap gap-2">
        {researchInterests.map((r) => <span key={r} className="chip">{r}</span>)}
      </div>
      <ol className="mt-8 space-y-4">
        {publications.map((p, i) => <Paper key={p.title} paper={p} n={i + 1} />)}
      </ol>
      <div className="mt-4 grid items-start gap-4 lg:grid-cols-[1.6fr_1fr]">
        <WorkList title="Under peer review" status="review" items={underReview} />
        <WorkList title="In preparation" status="prep" items={inPreparation} />
      </div>
    </Section>
  );
}
