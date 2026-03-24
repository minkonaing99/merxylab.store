import { useEffect, useRef, useState } from 'react';
import './StarBorder.css';

export default function StarBorder({
  as: Component = 'div',
  className = '',
  contentClassName = '',
  color = '#59d7ff',
  speed = '5s',
  thickness = 1,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const stopTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current);
      }
    };
  }, []);

  const parseDurationMs = (value) => {
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value !== 'string') {
      return 6000;
    }
    const trimmed = value.trim();
    if (trimmed.endsWith('ms')) {
      const ms = Number.parseFloat(trimmed);
      return Number.isFinite(ms) ? ms : 6000;
    }
    if (trimmed.endsWith('s')) {
      const seconds = Number.parseFloat(trimmed);
      return Number.isFinite(seconds) ? seconds * 1000 : 6000;
    }
    const fallback = Number.parseFloat(trimmed);
    return Number.isFinite(fallback) ? fallback : 6000;
  };

  const handleMouseEnter = (event) => {
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }

    setIsAnimating(true);
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event) => {
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
    }

    stopTimerRef.current = setTimeout(() => {
      setIsAnimating(false);
      stopTimerRef.current = null;
    }, parseDurationMs(speed));

    onMouseLeave?.(event);
  };

  return (
    <Component
      className={`star-border-container ${isAnimating ? 'star-border-container--active' : ''} ${className}`.trim()}
      style={{
        padding: `${thickness}px`,
        ...(style || {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={`inner-content ${contentClassName}`.trim()}>{children}</div>
    </Component>
  );
}
