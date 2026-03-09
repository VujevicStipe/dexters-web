'use client';

import DotGrid from '../../components/dot-grid/DotGrid';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.canvas}>
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