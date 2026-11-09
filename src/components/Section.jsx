// Section wrapper: numbered eyebrow, big title with a gradient underline, optional intro.
export default function Section({ id, number, label, title, intro, tint = false, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-24 ${tint ? 'tint' : ''}`}>
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <p className="eyebrow"><span className="eyebrow-num">{number}</span>{label}</p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"><span className="h-accent">{title}</span></h2>
        {intro && <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
