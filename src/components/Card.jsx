import Reveal from './Reveal.jsx';

// Card with the hover glow that follows the cursor.
export default function Card({ className = '', children, ...rest }) {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
  return (
    <Reveal as="article" className={`card card-hover ${className}`} onPointerMove={onMove} {...rest}>
      {children}
    </Reveal>
  );
}
