'use client';
import { useEffect, useState } from 'react';
import DotGrid from '../../components/dot-grid/DotGrid';
import LiquidEther from '../../components/liquid-ether/LiquidEther';
import styles from './Hero.module.css';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.canvas}>
        {isMobile ? (
          <DotGrid
            dotSize={4}
            gap={11}
            baseColor="#023400"
            activeColor="#116d07"
            proximity={60}
            shockRadius={120}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        ) : (
          <LiquidEther
            colors={['#40fb20', '#12b500', '#a8ff92']}
            mouseForce={22}
            cursorSize={55}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={5}
            resolution={0.45}
            isBounce={false}
            autoDemo
            autoSpeed={0.1}
            autoIntensity={0.4}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        )}
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Formula{' '}za vašu<br />online vidljivost.
          </h1>
          <p className={styles.sub}>
            Gradimo web stranice, mobilne aplikacije i SEO strategije koje donose stvarne rezultate — ne samo lijep izgled.
          </p>
        </div>
      </div>
    </section>
  );
}