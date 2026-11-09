import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t hairline py-8">
      <div className="mx-auto flex max-w-site flex-col gap-2 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {__BUILD_YEAR__} {profile.name}</p>
        <a href="#top" className="hover:text-fg">Back to top ↑</a>
      </div>
    </footer>
  );
}
