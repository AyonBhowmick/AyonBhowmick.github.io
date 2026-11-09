import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

const KEY = 'ayon-theme';

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked: theme still switches */ }
}

// Highlights the nav link of the section on screen. Uses IntersectionObserver,
// so nothing runs on every scroll event.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = navLinks.map((l) => l.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[13px] font-bold text-[rgb(var(--accent-fg))]">{profile.initials}</span>
          <span className="whitespace-nowrap text-[15px]">{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a className="nav-link" href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            Resume
          </a>
          <button type="button" onClick={toggleTheme} className="icon-btn" aria-label="Switch between light and dark theme">
            <span className="icon-moon"><Icon name="moon" className="h-[18px] w-[18px]" /></span>
            <span className="icon-sun"><Icon name="sun" className="h-[18px] w-[18px]" /></span>
          </button>
          <button type="button" onClick={() => setOpen((o) => !o)} className="icon-btn md:hidden"
                  aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            <Icon name={open ? 'close' : 'menu'} className="h-[18px] w-[18px]" />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t hairline bg-[rgb(var(--bg))] px-4 pb-4 md:hidden">
        <ul className="mx-auto flex max-w-site flex-col pt-2 text-[16px]">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a className="block rounded-lg px-3 py-3 hover:bg-accent/10" href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a className="block rounded-lg px-3 py-3 font-semibold text-accent hover:bg-accent/10" href={profile.cv} target="_blank" rel="noopener">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
