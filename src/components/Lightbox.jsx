import { useEffect, useRef } from 'react';
import { asset } from '../asset.js';
import Icon from './Icon.jsx';

// Full-screen screenshot viewer. Arrow keys move, Esc closes.
export default function Lightbox({ title, shots, index, onIndex, onClose }) {
  const closeRef = useRef(null);
  const many = shots.length > 1;
  const go = (dir) => onIndex((index + dir + shots.length) % shots.length);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && many) go(1);
      else if (e.key === 'ArrowLeft' && many) go(-1);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const shot = shots[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`} onClick={onClose}>
      <button ref={closeRef} type="button" className="lb-btn lb-close" aria-label="Close" onClick={onClose}><Icon name="close" /></button>
      {many && (
        <>
          <button type="button" className="lb-btn lb-prev" aria-label="Previous screenshot" onClick={(e) => { e.stopPropagation(); go(-1); }}><Icon name="chevronLeft" /></button>
          <button type="button" className="lb-btn lb-next" aria-label="Next screenshot" onClick={(e) => { e.stopPropagation(); go(1); }}><Icon name="chevronRight" /></button>
        </>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img key={shot.src} src={asset(shot.src)} alt={`${title}: ${shot.alt}`} />
        <figcaption>
          <span className="font-display font-semibold">{title}</span>
          <span className="text-muted"> · {shot.alt}</span>
          {many && <span className="font-mono ml-3 text-xs text-muted">{index + 1} / {shots.length}</span>}
        </figcaption>
      </figure>
    </div>
  );
}
