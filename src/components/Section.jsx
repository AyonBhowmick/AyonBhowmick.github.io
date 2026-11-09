// Every section: a small numbered label on the left, content on the right (on wide screens).
export default function Section({ id, number, label, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t hairline py-16 sm:py-24 ${className}`}>
      <div className="mx-auto grid max-w-site gap-8 px-4 sm:px-6 lg:grid-cols-[200px_1fr] lg:gap-12">
        <p className="label pt-2">{number} · {label}</p>
        <div className="min-w-0">
          <h2 id={`${id}-title`} className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">{intro}</p>}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
