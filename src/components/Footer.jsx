import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

const iconBtn = 'btn-ghost grid h-9 w-9 place-items-center rounded-full';

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-10">
      <div className="mx-auto flex max-w-site flex-col items-center gap-4 px-4 text-center text-sm text-muted sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div>
          <p className="font-display text-base font-semibold text-fg">{profile.name}</p>
          <p className="mt-1">© {new Date().getFullYear()} · Built with React &amp; Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className={iconBtn}><Icon name="github" className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={iconBtn}><Icon name="linkedin" className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconBtn}><Icon name="mail" className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
