// Small table diagram for projects that are a database design.
export default function Schema({ tables }) {
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

