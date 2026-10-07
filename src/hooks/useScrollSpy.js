import { useEffect, useState } from 'react';

// Returns the id of the section currently in view, plus scroll progress (0–1).
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const line = window.scrollY + 120;
      let current = null;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      });
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY >= max - 4) current = ids[ids.length - 1];
      setActive(current);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return { active, progress };
}
