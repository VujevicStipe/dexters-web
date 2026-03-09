'use client';

import { useEffect, useState } from 'react';
import TextPressure from '../text-pressure/TextPressure';
import styles from './Footer.module.css';

export default function Footer() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <footer className={styles.footer}>

      <div className={styles.bigText}>
        {isMobile ? (
          <span className={styles.bigTextStatic}>DEXTER</span>
        ) : (
          <TextPressure
            text="DEXTER"
            fontFamily="Compressa VF"
            fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="rgba(255,255,255,0.06)"
            strokeColor="#1ee600"
            minFontSize={120}
          />
        )}
      </div>


      <div className={styles.cta}>
        <p className={styles.ctaSub}>Spremi za sljedeći korak?</p>
        <h2 className={styles.ctaTitle}>Povežimo se.</h2>
        <a href="/kontakt" className={styles.ctaBtn}>
          Kontaktiraj nas
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <div className={styles.brand}>
          <span className={styles.brandName}>DEXTER&apos;S WEB</span>
          <span className={styles.brandTagline}>Formula za vašu online vidljivost.</span>
        </div>

        <nav className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupLabel}>Navigacija</span>
            <a href="#work" className={styles.link}>Work</a>
            <a href="#services" className={styles.link}>Services</a>
            <a href="#about" className={styles.link}>About</a>
            <a href="#blog" className={styles.link}>Blog</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupLabel}>Kontakt</span>
            <a href="mailto:info@dextersweb.com" className={styles.link}>info@dextersweb.com</a>
            <span className={styles.link}>Split, Hrvatska</span>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupLabel}>Social</span>
            <a href="#" className={styles.link}>LinkedIn</a>
            <a href="#" className={styles.link}>Instagram</a>
            <a href="#" className={styles.link}>GitHub</a>
          </div>
        </nav>
      </div>

      <div className={styles.copyright}>
        <span>© {new Date().getFullYear()} Dexter&apos;s Web. Sva prava pridržana.</span>
      </div>

    </footer>
  );
}