import { marquee } from '../data/portfolio.js';

// Scrolling strip of technologies. The list is repeated so the loop is seamless.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...marquee, ...marquee].map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  );
}
