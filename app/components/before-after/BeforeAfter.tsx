'use client';

import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BeforeAfter.module.css';

gsap.registerPlugin(ScrollTrigger);

interface BeforeAfterProps {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfter({ before, after, alt = '' }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const afterImgRef = useRef<HTMLImageElement>(null);
  const isHovering = useRef(false);
  const isAnimating = useRef(true);
  const autoAnim = useRef<gsap.core.Tween | null>(null);
  const position = useRef(0);

  const setPosition = useCallback((pct: number) => {
    console.log('setPosition', pct, dividerRef.current, afterImgRef.current);
    position.current = pct;
    if (dividerRef.current) {
      dividerRef.current.style.left = `${pct}%`;
    }
    if (afterImgRef.current) {
      afterImgRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const proxy = { val: 0 };

    autoAnim.current = gsap.to(proxy, {
      val: 65,
      duration: 2,
      ease: 'power2.inOut',
      paused: true,
      onUpdate: () => {
        if (!isHovering.current) setPosition(proxy.val);
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    ScrollTrigger.create({
      trigger: container,
      start: 'top 60%',
      onEnter: () => {
        if (!isHovering.current) autoAnim.current?.play();
      },
    });

    return () => {
      autoAnim.current?.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, [setPosition]);

    const onMouseEnter = useCallback(() => {
    console.log('hover', isAnimating.current);
    if (isAnimating.current) return;
    isHovering.current = true;
    }, []);

  const onMouseLeave = useCallback(() => {
    isHovering.current = false;
    const proxy = { val: position.current };
    gsap.to(proxy, {
      val: 65,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => setPosition(proxy.val),
    });
  }, [setPosition]);

    const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (isAnimating.current) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 0), 100);
    setPosition(pct);
    }, [setPosition]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = Math.min(Math.max(((e.touches[0].clientX - rect.left) / rect.width) * 100, 0), 100);
    setPosition(pct);
  }, [setPosition]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <img src={before} alt={`${alt} before`} className={styles.imgBefore} draggable={false} />

      <img
        ref={afterImgRef}
        src={after}
        alt={`${alt} after`}
        className={styles.imgAfter}
        draggable={false}
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      />

      <div ref={dividerRef} className={styles.divider} style={{ left: '0%' }}>
        <div className={styles.line} />
        <div className={styles.handle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
        <div className={styles.line} />
      </div>

      <span className={styles.labelBefore}>Nakon</span>
      <span className={styles.labelAfter}>Prije</span>
    </div>
  );
}