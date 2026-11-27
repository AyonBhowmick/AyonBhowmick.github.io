export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="glow grid min-h-[70vh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="eyebrow justify-center"><span className="eyebrow-num">404</span>Not found</p>
        <h1 className="mt-4 text-4xl font-bold">This page doesn&apos;t exist</h1>
        <a href="/" className="btn btn-primary mt-8">Back to the portfolio</a>
      </div>
    </section>
  );
}
