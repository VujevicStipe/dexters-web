'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/app/data/projects';
import styles from './Work.module.css';
import BeforeAfter from '../before-after/BeforeAfter';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

    cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: cards[i + 1],
            start: 'top 90%',
            end: 'top 30%',
            scrub: 2,
            onUpdate: (self) => {
              gsap.set(card, {
                opacity: 1 - self.progress,
                scale: 1 - (self.progress * 0.02),
              });
            },
            onLeaveBack: () => {
              gsap.set(card, { opacity: 1, scale: 1 });
            }
          });
        }

        if (i > 0) {
          gsap.fromTo(card,
            { yPercent: 4, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                end: 'top 40%',
                scrub: 1,
              }
            }
          );
        }

      const imgMain = card.querySelector(`.${styles.imgMain}`);
      const imgSecondary = card.querySelector(`.${styles.imgSecondary}`);

      if (imgMain) {
        gsap.from(imgMain, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
          }
        });
      }

      if (imgSecondary) {
        gsap.from(imgSecondary, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
          }
        });
      }
    });
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Work</p>
        <h2 className={styles.title}>Digitalna rješenja koja<br />smo izgradili</h2>
      </div>

      <div ref={containerRef} className={styles.container}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>

            <div className={styles.images}>
              <div className={styles.imgMain}>
                <BeforeAfter
                  before={project.imgBefore}
                  after={project.imgAfter}
                  alt={project.title}
                />
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoRight}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <a href={project.href} className={styles.cta}>
                  Pogledaj
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
              <div 
                className={styles.imgSecondary}
                onMouseEnter={e => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={e => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                {project.videoFeature ? (
                  <>
                    <img src={project.imgFeature} alt={project.title} className={styles.imgFeatureImg} draggable={false} />
                    <video 
                      className={styles.featureVideo}
                      src={project.videoFeature}
                      muted
                      loop
                      playsInline
                    />
                  </>
                ) : (
                  <img src={project.imgFeature} alt={project.title} className={styles.imgFeatureImg} draggable={false} />
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}