import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';
import { asset } from '../asset.js';
import Icon from './Icon.jsx';

export default function Navbar({ theme, onToggleTheme, active }) {
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img src={asset(profile.avatar)} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-accent/40" />
          <span className="font-display truncate text-[15px] font-semibold">{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-4 text-sm md:flex lg:gap-7">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a className={`nav-link ${active === l.id ? 'active' : ''}`} href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={asset(profile.cv)} target="_blank" rel="noopener" className="btn-primary hidden rounded-full px-4 py-2 text-sm font-semibold lg:inline-flex">Resume</a>
          <button type="button" onClick={onToggleTheme} className="btn-ghost grid h-10 w-10 place-items-center rounded-full"
                  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button type="button" onClick={() => setOpen((o) => !o)} className="btn-ghost grid h-10 w-10 place-items-center rounded-full md:hidden"
                  aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2 text-[15px]">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a className="block rounded-lg px-3 py-2 hover:bg-accent/10" href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="block rounded-lg px-3 py-2 font-semibold text-accent hover:bg-accent/10" href={asset(profile.cv)} target="_blank" rel="noopener">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
