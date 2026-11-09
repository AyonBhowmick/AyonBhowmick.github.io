import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-10">
      <div className="mx-auto flex max-w-site flex-col items-center gap-4 px-4 text-center text-sm text-muted sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div>
          <p className="font-display text-base font-semibold text-fg">{profile.name}</p>
          <p className="mt-1">© {__BUILD_YEAR__} · Built with React &amp; Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="icon-btn !h-9 !w-9"><Icon name="github" className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="icon-btn !h-9 !w-9"><Icon name="linkedin" className="h-4 w-4" /></a>
          <a href="#top" aria-label="Back to top" className="icon-btn !h-9 !w-9"><Icon name="arrowUp" className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
