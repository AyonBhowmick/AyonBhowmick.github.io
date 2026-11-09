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
    <button type="button" onClick={copy} className="btn btn-ghost !px-3.5 !py-2 !text-[13px]">
      <Icon name={done ? 'check' : 'copy'} className="h-4 w-4" /> {done ? 'Copied' : 'Copy citation'}
    </button>
  );
}

function Paper({ paper, n }) {
  return (
    <li className="panel p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="label !text-fg/60">[{n}]</span>
        <span className="badge">{paper.badge}</span>
      </div>
      <h3 className="font-serif mt-3 text-xl font-semibold leading-snug sm:text-[1.4rem]">{paper.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        <Authors list={paper.authors} me={paper.me} />. <em>{paper.venue}</em>, {paper.place}.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        {paper.doi && (
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener" className="btn btn-primary !px-3.5 !py-2 !text-[13px]">
            Read on IEEE Xplore <Icon name="external" className="h-4 w-4" />
          </a>
        )}
        <CopyCitation paper={paper} />
        {paper.doi && <span className="font-mono break-all text-xs text-muted">doi: {paper.doi}</span>}
      </div>
    </li>
  );
}

function WorkList({ title, items }) {
  return (
    <div>
      <h3 className="label">{title}</h3>
      <ul className="mt-4 divide-y divide-[rgb(var(--line)/.09)] border-y hairline">
        {items.map((w) => (
          <li key={w.title} className="py-5">
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
    <Section id="research" number="02" label="Research" title="Publications"
             intro="Most of my research applies machine learning to health, energy and finance, and explains its predictions with tools like SHAP and Grad-CAM.">
      <ol className="space-y-4">
        {publications.map((p, i) => <Paper key={p.title} paper={p} n={i + 1} />)}
      </ol>

      <div className="mt-14 grid gap-12 xl:grid-cols-[1.5fr_1fr]">
        <WorkList title="Under peer review" items={underReview} />
        <div className="space-y-12">
          <WorkList title="In preparation" items={inPreparation} />
          <div>
            <h3 className="label">Research interests</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {researchInterests.map((r) => <li key={r} className="tag">{r}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
