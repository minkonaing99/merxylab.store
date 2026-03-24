import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'span',
  startDelay = 0,
  onLetterAnimationComplete,
}) {
  const ref = useRef(null);

  const letters = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    if (!ref.current) return undefined;

    const chars = ref.current.querySelectorAll('.split-char');
    if (!chars.length) return undefined;

    const tween = gsap.fromTo(
      chars,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        delay: startDelay,
        onComplete: () => {
          onLetterAnimationComplete?.();
        },
      },
    );

    return () => {
      tween.kill();
    };
  }, [delay, duration, ease, from, onLetterAnimationComplete, startDelay, to, text]);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        textAlign,
      }}
    >
      {letters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="split-char"
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}
