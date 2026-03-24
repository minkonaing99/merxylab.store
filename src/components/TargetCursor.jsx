import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

export default function TargetCursor({
  targetSelector = '.cursor-target',
  spinDuration = 2,
  hideDefaultCursor = false,
  hoverDuration = 0.2,
  parallaxOn = true,
}) {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const dotRef = useRef(null);
  const spinTl = useRef(null);
  const activeTargetRef = useRef(null);
  const leaveHandlerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const targetCornerPositionsRef = useRef(null);
  const activeStrengthRef = useRef({ current: 0 });
  const tickerFnRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobile = (hasTouchScreen && isSmallScreen) || mobileRegex.test(userAgent.toLowerCase());

    if (isMobile || !cursorRef.current) {
      return undefined;
    }

    const constants = {
      borderWidth: 3,
      cornerSize: 12,
    };

    const cursor = cursorRef.current;
    const corners = Array.from(cursor.querySelectorAll('.target-cursor-corner'));
    cornersRef.current = corners;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    gsap.set(cursor, { opacity: 0 });

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      spinTl.current?.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    };

    const moveCursor = (x, y) => {
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const cleanupTarget = (target) => {
      if (leaveHandlerRef.current && target) {
        target.removeEventListener('mouseleave', leaveHandlerRef.current);
      }
      leaveHandlerRef.current = null;
    };

    createSpinTimeline();

    tickerFnRef.current = () => {
      if (!targetCornerPositionsRef.current || !cursorRef.current || !cornersRef.current) {
        return;
      }

      const strength = activeStrengthRef.current.current;
      if (strength === 0) {
        return;
      }

      const cursorX = gsap.getProperty(cursorRef.current, 'x');
      const cursorY = gsap.getProperty(cursorRef.current, 'y');

      cornersRef.current.forEach((corner, index) => {
        const currentX = gsap.getProperty(corner, 'x');
        const currentY = gsap.getProperty(corner, 'y');
        const targetX = targetCornerPositionsRef.current[index].x - cursorX;
        const targetY = targetCornerPositionsRef.current[index].y - cursorY;
        const finalX = currentX + (targetX - currentX) * strength;
        const finalY = currentY + (targetY - currentY) * strength;
        const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;

        gsap.to(corner, {
          x: finalX,
          y: finalY,
          duration,
          ease: duration === 0 ? 'none' : 'power1.out',
          overwrite: 'auto',
        });
      });
    };

    const moveHandler = (event) => moveCursor(event.clientX, event.clientY);

    const mouseDownHandler = () => {
      if (!dotRef.current) {
        return;
      }

      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursor, { scale: 0.9, duration: 0.2 });
    };

    const mouseUpHandler = () => {
      if (!dotRef.current) {
        return;
      }

      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const scrollHandler = () => {
      if (!activeTargetRef.current || !cursorRef.current) {
        return;
      }

      const mouseX = gsap.getProperty(cursorRef.current, 'x');
      const mouseY = gsap.getProperty(cursorRef.current, 'y');
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTargetRef.current ||
          elementUnderMouse.closest(targetSelector) === activeTargetRef.current);

      if (!isStillOverTarget && leaveHandlerRef.current) {
        leaveHandlerRef.current();
      }
    };

    const enterHandler = (event) => {
      let current = event.target;
      let target = null;

      while (current && current !== document.body) {
        if (current.matches?.(targetSelector)) {
          target = current;
          break;
        }
        current = current.parentElement;
      }

      if (!target || activeTargetRef.current === target) {
        return;
      }

      if (activeTargetRef.current) {
        cleanupTarget(activeTargetRef.current);
      }

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }

      activeTargetRef.current = target;
      corners.forEach((corner) => gsap.killTweensOf(corner));

      gsap.killTweensOf(cursor, 'rotation');
      spinTl.current?.pause();
      gsap.set(cursor, { rotation: 0 });
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.12,
        ease: 'power2.out',
        overwrite: true,
      });

      const rect = target.getBoundingClientRect();
      const cursorX = gsap.getProperty(cursor, 'x');
      const cursorY = gsap.getProperty(cursor, 'y');

      targetCornerPositionsRef.current = [
        { x: rect.left - constants.borderWidth, y: rect.top - constants.borderWidth },
        { x: rect.right + constants.borderWidth - constants.cornerSize, y: rect.top - constants.borderWidth },
        {
          x: rect.right + constants.borderWidth - constants.cornerSize,
          y: rect.bottom + constants.borderWidth - constants.cornerSize,
        },
        { x: rect.left - constants.borderWidth, y: rect.bottom + constants.borderWidth - constants.cornerSize },
      ];

      gsap.ticker.add(tickerFnRef.current);

      gsap.to(activeStrengthRef.current, {
        current: 1,
        duration: hoverDuration,
        ease: 'power2.out',
      });

      corners.forEach((corner, index) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current[index].x - cursorX,
          y: targetCornerPositionsRef.current[index].y - cursorY,
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      leaveHandlerRef.current = () => {
        gsap.ticker.remove(tickerFnRef.current);

        activeTargetRef.current = null;
        targetCornerPositionsRef.current = null;
        gsap.set(activeStrengthRef.current, { current: 0, overwrite: true });
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.12,
          ease: 'power2.out',
          overwrite: true,
        });

        const positions = [
          { x: -constants.cornerSize * 1.5, y: -constants.cornerSize * 1.5 },
          { x: constants.cornerSize * 0.5, y: -constants.cornerSize * 1.5 },
          { x: constants.cornerSize * 0.5, y: constants.cornerSize * 0.5 },
          { x: -constants.cornerSize * 1.5, y: constants.cornerSize * 0.5 },
        ];

        corners.forEach((corner, index) => {
          gsap.to(corner, {
            x: positions[index].x,
            y: positions[index].y,
            duration: 0.3,
            ease: 'power3.out',
          });
        });

        resumeTimeoutRef.current = setTimeout(() => {
          if (!activeTargetRef.current && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(cursorRef.current, 'rotation');
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: 'none',
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }

          resumeTimeoutRef.current = null;
        }, 50);

        cleanupTarget(target);
      };

      target.addEventListener('mouseleave', leaveHandlerRef.current);
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseover', enterHandler, { passive: true });
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
      gsap.ticker.remove(tickerFnRef.current);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }

      if (activeTargetRef.current) {
        cleanupTarget(activeTargetRef.current);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [hideDefaultCursor, hoverDuration, parallaxOn, spinDuration, targetSelector]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
}
