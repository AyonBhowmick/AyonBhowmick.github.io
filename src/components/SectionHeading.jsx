// Small numbered label + big title used at the top of every section.
export default function SectionHeading({ number, eyebrow, title }) {
  return (
    <div>
      <p className="eyebrow"><span className="eyebrow-num">{number}</span>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl"><span className="h-accent">{title}</span></h2>
    </div>
  );
}
