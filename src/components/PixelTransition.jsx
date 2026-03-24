import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

export default function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {},
  disabled = false
}) {
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);
  const enterTimerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);
  const [isActive, setIsActive] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    if (disabled || prefersReducedMotion) return undefined;

    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row += 1) {
      for (let col = 0; col < gridSize; col += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [disabled, gridSize, pixelColor, prefersReducedMotion]);

  useEffect(() => {
    if (disabled || prefersReducedMotion || !containerRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [disabled, prefersReducedMotion]);

  const animatePixels = (activate) => {
    if (disabled || prefersReducedMotion || !isVisibleRef.current) return;
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    delayedCallRef.current?.kill();

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  useEffect(() => {
    return () => {
      delayedCallRef.current?.kill();
      if (enterTimerRef.current) {
        clearTimeout(enterTimerRef.current);
      }
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);

  const handleEnter = () => {
    if (disabled || prefersReducedMotion || !isVisibleRef.current) return;
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    if (isActive || enterTimerRef.current) return;
    enterTimerRef.current = setTimeout(() => {
      animatePixels(true);
      enterTimerRef.current = null;
    }, 1000);
  };

  const handleLeave = () => {
    if (disabled || prefersReducedMotion) return;
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    if (!isActive || once || leaveTimerRef.current) return;
    leaveTimerRef.current = setTimeout(() => {
      animatePixels(false);
      leaveTimerRef.current = null;
    }, 1000);
  };

  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (!once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`.trim()}
      style={style}
      onMouseEnter={!disabled && !isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!disabled && !isTouchDevice ? handleLeave : undefined}
      onClick={!disabled && isTouchDevice ? handleClick : undefined}
      onFocus={!disabled && !isTouchDevice ? handleEnter : undefined}
      onBlur={!disabled && !isTouchDevice ? handleLeave : undefined}
      tabIndex={disabled ? -1 : 0}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default" aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive || disabled}>
        {secondContent}
      </div>
      {!disabled && <div className="pixelated-image-card__pixels" ref={pixelGridRef} />}
    </div>
  );
}
