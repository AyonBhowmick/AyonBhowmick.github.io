import { useState } from 'react';
import { publications, researchAreas } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import Card from './Card.jsx';
import SectionHeading from './SectionHeading.jsx';
import Icon from './Icon.jsx';

function citation(p) {
  const authors = p.authors.length > 1
    ? `${p.authors.slice(0, -1).join(', ')}, and ${p.authors[p.authors.length - 1]}`
    : p.authors[0];
  return `${authors}, "${p.title}," ${p.venue}, ${p.pages}, doi: ${p.doi}.`;
}

function Publication({ paper, index }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(citation(paper));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) { /* clipboard blocked: the citation is still readable on the card */ }
  }

  return (
    <Card as="li" className="pub-card p-6 sm:p-7" delay={index * 70}>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-accent2/15 px-2.5 py-1 font-semibold text-accent2">{paper.badge}</span>
        <span className="font-mono text-muted">{paper.venueShort}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">{paper.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {paper.authors.map((a, i) => (
          <span key={a}>
            {a === paper.me ? <strong className="text-fg">{a}</strong> : a}
            {i < paper.authors.length - 2 ? ', ' : i === paper.authors.length - 2 ? ', and ' : '. '}
          </span>
        ))}
        <em>{paper.venue}</em>, {paper.pages}.
      </p>
      <p className="font-mono mt-2 break-all text-xs text-muted">doi: {paper.doi}</p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <a href={paper.url} target="_blank" rel="noopener" className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
          Read on IEEE Xplore <Icon name="external" className="h-4 w-4" />
        </a>
        <button type="button" onClick={copy} className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
          <Icon name={copied ? 'check' : 'copy'} className="h-4 w-4" /> {copied ? 'Copied' : 'Copy citation'}
        </button>
      </div>
    </Card>
  );
}

export default function Research() {
  return (
    <section id="research" className="tint py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal>
          <SectionHeading number="04" eyebrow="Research" title="Publications & research areas" />
          <div className="mt-6 flex flex-wrap gap-2">
            {researchAreas.map((area) => <span className="chip" key={area}>{area}</span>)}
          </div>
        </Reveal>

        <ol className="mt-10 space-y-4">
          {publications.map((paper, i) => <Publication paper={paper} index={i} key={paper.doi} />)}
        </ol>
      </div>
    </section>
  );
}
