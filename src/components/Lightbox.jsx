'use client';

import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { shotUrl } from '../lib/shots.js';

// Full-screen screenshot viewer built on <dialog>: Esc closes, focus stays inside,
// arrow keys move between screenshots.
export default function Lightbox({ viewer, onIndex, onClose }) {
  const ref = useRef(null);
  const { project, index } = viewer;
  const shots = project.shots;
  const shot = shots[index];
  const many = shots.length > 1;
  const go = (d) => onIndex((index + d + shots.length) % shots.length);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function onKey(e) {
    if (!many) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  }

  return (
    <dialog ref={ref} className="lightbox" aria-label={`${project.title} screenshots`}
            onClose={onClose} onKeyDown={onKey} onClick={(e) => { if (e.target === e.currentTarget) ref.current.close(); }}>
      <button type="button" className="lb-btn right-3 top-3" aria-label="Close" onClick={() => ref.current.close()} autoFocus>
        <Icon name="close" />
      </button>
      {many && (
        <>
          <button type="button" className="lb-btn left-3 top-1/2 z-10 -translate-y-1/2" aria-label="Previous screenshot" onClick={() => go(-1)}><Icon name="chevronLeft" /></button>
          <button type="button" className="lb-btn right-3 top-1/2 z-10 -translate-y-1/2" aria-label="Next screenshot" onClick={() => go(1)}><Icon name="chevronRight" /></button>
        </>
      )}
      <figure>
        <img key={shot.src} src={shotUrl(shot.src)} alt={`${project.title}: ${shot.alt}`} />
        <figcaption className="text-center text-sm">
          <span className="font-semibold">{project.title}</span>
          <span className="opacity-70"> · {shot.alt}</span>
          {many && <span className="font-mono ml-3 text-xs opacity-70">{index + 1} / {shots.length}</span>}
        </figcaption>
      </figure>
    </dialog>
  );
}

