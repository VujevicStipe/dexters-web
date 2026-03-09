'use client';

import { useState, useRef } from 'react';
import TextPressure from '../text-pressure/TextPressure';
import styles from './Navbar.module.css';

const WORK_ITEMS = [
  { label: 'Prizma Tracker', sub: 'GPS tracking sustav', href: '#' },
  { label: 'AMG PVC Stolarija', sub: 'Korporativna web stranica', href: '#' },
  { label: 'Antikvarijat Judita', sub: 'E-commerce redesign', href: '#' },
  { label: 'KONTROL', sub: 'Flyer distribucija', href: '#' },
];

const SERVICES_ITEMS = [
  { label: 'Web dizajn & razvoj', sub: 'Next.js, React, GSAP', href: '#' },
  { label: 'Mobilne aplikacije', sub: 'React Native, Expo', href: '#' },
  { label: 'SEO optimizacija', sub: 'Tehničko SEO, GSC', href: '#' },
  { label: 'Backend & API', sub: 'Firebase, Node.js', href: '#' },
];

interface DropdownItem {
  label: string;
  sub: string;
  href: string;
}

function Dropdown({ items, desc }: { items: DropdownItem[]; desc: string }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownInner}>
        <div className={styles.dropdownLeft}>
          <div className={styles.dropdownImg}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <p className={styles.dropdownDesc}>{desc}</p>
        </div>
        <div className={styles.dropdownRight}>
          {items.map((item, i) => (
            <a key={i} href={item.href} className={styles.dropdownLink}>
              <span className={styles.dropdownLinkLabel}>{item.label}</span>
              <span className={styles.dropdownLinkSub}>{item.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMobile = (name: string) => {
    setMobileExpanded(prev => prev === name ? null : name);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.card}>

          <a href="/" className={styles.logo}>
            <TextPressure
              text="DEXTER'S&nbsp;WEB"
              flex={false}
              alpha={false}
              stroke={false}
              width={false}
              weight
              italic={false}
              textColor="#ffffff"
              strokeColor="#1ee600"
              minFontSize={32}
            />
          </a>

          <ul className={styles.links}>
            <li onMouseEnter={() => open('work')} onMouseLeave={scheduleClose}>
              <button className={`${styles.linkBtn} ${activeMenu === 'work' ? styles.linkBtnActive : ''}`}>
                Work
                <svg viewBox="0 0 24 24" className={`${styles.chevron} ${activeMenu === 'work' ? styles.chevronOpen : ''}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </li>
            <li onMouseEnter={() => open('services')} onMouseLeave={scheduleClose}>
              <button className={`${styles.linkBtn} ${activeMenu === 'services' ? styles.linkBtnActive : ''}`}>
                Services
                <svg viewBox="0 0 24 24" className={`${styles.chevron} ${activeMenu === 'services' ? styles.chevronOpen : ''}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </li>
            <li><a href="#about" className={styles.linkBtn}>About</a></li>
            <li><a href="#blog" className={styles.linkBtn}>Blog</a></li>
          </ul>

          <a href="#contact" className={`${styles.cta} ${styles.ctaDesktop}`}>Kontakt</a>

          <button
            className={styles.burger}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Menu"
          >
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineTop : ''}`} />
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineMid : ''}`} />
            <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLineBot : ''}`} />
          </button>

        </div>

        <div
          className={`${styles.dropdownWrap} ${activeMenu === 'work' ? styles.dropdownWrapOpen : ''}`}
          onMouseEnter={() => open('work')}
          onMouseLeave={scheduleClose}
        >
          <Dropdown items={WORK_ITEMS} desc="Odabrani projekti — web stranice, mobilne aplikacije i GPS sustavi." />
        </div>

        <div
          className={`${styles.dropdownWrap} ${activeMenu === 'services' ? styles.dropdownWrapOpen : ''}`}
          onMouseEnter={() => open('services')}
          onMouseLeave={scheduleClose}
        >
          <Dropdown items={SERVICES_ITEMS} desc="Web razvoj, mobilne aplikacije, SEO i backend." />
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileInner}>

          <div className={styles.mobileNav}>
            <div className={styles.mobileItem}>
              <button className={styles.mobileBtn} onClick={() => toggleMobile('work')}>
                <span>Work</span>
                <svg viewBox="0 0 24 24" className={`${styles.chevron} ${mobileExpanded === 'work' ? styles.chevronOpen : ''}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {mobileExpanded === 'work' && (
                <div className={styles.mobileSubmenu}>
                  {WORK_ITEMS.map((item, i) => (
                    <a key={i} href={item.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                      <span>{item.label}</span>
                      <span className={styles.mobileSubLinkSub}>{item.sub}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.mobileItem}>
              <button className={styles.mobileBtn} onClick={() => toggleMobile('services')}>
                <span>Services</span>
                <svg viewBox="0 0 24 24" className={`${styles.chevron} ${mobileExpanded === 'services' ? styles.chevronOpen : ''}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {mobileExpanded === 'services' && (
                <div className={styles.mobileSubmenu}>
                  {SERVICES_ITEMS.map((item, i) => (
                    <a key={i} href={item.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                      <span>{item.label}</span>
                      <span className={styles.mobileSubLinkSub}>{item.sub}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className={styles.mobileBtn} onClick={() => setMobileOpen(false)}>About</a>
            <a href="#blog" className={styles.mobileBtn} onClick={() => setMobileOpen(false)}>Blog</a>
          </div>

          <div className={styles.mobileBottom}>
            <a href="#contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>Kontakt</a>
            <span className={styles.mobileLocation}>Split, Hrvatska</span>
          </div>

        </div>
      </div>
    </>
  );
}