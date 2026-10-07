import { useEffect, useState } from 'react';

// Types and deletes each word in turn. Shows the first word, static, if the
// visitor prefers reduced motion.
export default function Typed({ words }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let w = 0, i = words[0].length, deleting = true, timer;
    function tick() {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let wait = deleting ? 38 : 75;
      if (!deleting && i === word.length) { deleting = true; wait = 1700; }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; wait = 350; }
      timer = setTimeout(tick, wait);
    }
    timer = setTimeout(tick, 1700);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className="name-grad">{text}</span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}
