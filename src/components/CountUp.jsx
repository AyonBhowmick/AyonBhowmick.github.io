import { useEffect, useRef, useState } from 'react';

// Counts from 0 to "value" the first time it scrolls into view.
export default function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || !('IntersectionObserver' in window)) return undefined;
    let frame;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      let start = null;
      const step = (t) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / 1200, 1);
        setShown(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <span ref={ref} className="stat-num">{shown.toFixed(decimals)}</span>;
}
