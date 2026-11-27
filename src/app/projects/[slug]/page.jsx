import { notFound } from 'next/navigation';
import { projects } from '../../../data/portfolio.js';
import Gallery from '../../../components/Gallery.jsx';
import Schema from '../../../components/Schema.jsx';
import Icon from '../../../components/Icon.jsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const image = p.shots[0] ? `/img/projects/${p.shots[0].src}.webp` : '/og.jpg';
  return {
    title: p.title,
    description: `${p.description} Built with ${p.tech.join(', ')}.`,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: p.title, description: p.description, url: `/projects/${p.slug}/`, images: [image] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="glow dots-bg pb-20 pt-28 sm:pt-36">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <a href="/#projects" className="inline-flex items-center gap-1.5 hover:text-fg">
            <Icon name="chevronLeft" className="h-4 w-4" /> All projects
          </a>
        </nav>

        <div className="mt-6 flex flex-wrap gap-1.5 text-xs">
          <span className="chip !bg-accent/20 !border-accent/45 font-semibold">{p.kind}</span>
          {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"><span className="h-accent">{p.title}</span></h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-fg/85">{p.description}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            {p.shots.length > 0 ? <Gallery project={p} /> : <Schema tables={p.schema} />}
          </div>
          <aside className="card h-fit p-6">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] text-fg/85">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="mt-[.55em] h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-accent to-accent2" aria-hidden="true" />{h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href={p.repo} target="_blank" rel="noopener" className="btn btn-primary">
                <Icon name="github" className="h-4 w-4" /> Source code on GitHub
              </a>
              {p.video && (
                <a href={p.video} target="_blank" rel="noopener" className="btn btn-ghost">
                  <Icon name="play" className="h-4 w-4" /> Watch gameplay video
                </a>
              )}
            </div>
          </aside>
        </div>

        <nav aria-label="More projects" className="mt-16 grid gap-4 border-t border-line/10 pt-8 sm:grid-cols-2">
          <a href={`/projects/${prev.slug}/`} className="card card-hover p-5">
            <p className="text-xs uppercase tracking-wider text-muted">← Previous project</p>
            <p className="font-display mt-1 font-semibold">{prev.title}</p>
          </a>
          <a href={`/projects/${next.slug}/`} className="card card-hover p-5 sm:text-right">
            <p className="text-xs uppercase tracking-wider text-muted">Next project →</p>
            <p className="font-display mt-1 font-semibold">{next.title}</p>
          </a>
        </nav>
      </div>
    </article>
  );
}
