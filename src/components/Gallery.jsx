'use client';

import { useState } from 'react';
import { shotUrl } from '../lib/shots.js';
import Lightbox from './Lightbox.jsx';
import Icon from './Icon.jsx';

// All screenshots of one project as a grid; clicking one opens the full-screen viewer.
export default function Gallery({ project }) {
  const [index, setIndex] = useState(null);
  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {project.shots.map((s, i) => (
          <li key={s.src}>
            <button type="button" className="cover card-hover" onClick={() => setIndex(i)} aria-label={`Open screenshot: ${s.alt}`}>
              <img src={shotUrl(s.src, true)} alt={`${project.title}: ${s.alt}`} width={s.w} height={s.h}
                   loading={i < 2 ? 'eager' : 'lazy'} decoding="async" className={s.contain ? 'contain' : ''} />
              <span className="cover-count"><Icon name="expand" className="h-3.5 w-3.5" />{s.alt}</span>
            </button>
          </li>
        ))}
      </ul>
      {index !== null && (
        <Lightbox viewer={{ project, index }} onIndex={setIndex} onClose={() => setIndex(null)} />
      )}
    </>
  );
}
