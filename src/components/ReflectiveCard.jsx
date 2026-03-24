import { useEffect, useRef } from 'react';
import './ReflectiveCard.css';

export function ReflectiveCard({
  eyebrow,
  title,
  copy,
  buttonLabel,
  buttonHref = '#channels',
  handle,
  roleLabel = 'Telegram Channel',
  handleLabel = 'Telegram ID',
  videoSrc,
  accent = 'blue',
  style,
}) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!videoSrc || !cardRef.current || !videoRef.current || prefersReducedMotion) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 1 || hasPlayedRef.current) {
          return;
        }

        hasPlayedRef.current = true;
        videoRef.current.play().catch(() => {});
        observer.disconnect();
      },
      { threshold: 1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [prefersReducedMotion, videoSrc]);

  return (
    <article ref={cardRef} className={`reflective-card reflective-card--${accent}`} style={style}>
      <div className="reflective-card__base" />
      <div className="reflective-card__video">
        {videoSrc ? (
          <video ref={videoRef} className="reflective-card__video-media" src={videoSrc} muted playsInline preload="none" />
        ) : null}
      </div>
      <div className="reflective-card__noise" />
      <div className="reflective-card__sheen" />
      <div className="reflective-card__border" />

      <div className="reflective-card__content">
        <header className="reflective-card__header">
          <span className="reflective-card__eyebrow">{eyebrow}</span>
          <span className="reflective-card__status">LIVE</span>
        </header>

        <div className="reflective-card__body">
          <div className="reflective-card__identity">
            <h3>{title}</h3>
            <p className="reflective-card__role">{roleLabel}</p>
          </div>

          <div className="reflective-card__footer-card">
            <div className="reflective-card__meta">
              <span className="reflective-card__label">{handleLabel}</span>
              <strong>{handle}</strong>
            </div>
          </div>
        </div>

        <a href={buttonHref} className="button button--primary reflective-card__button">
          {buttonLabel}
        </a>
      </div>
    </article>
  );
}
