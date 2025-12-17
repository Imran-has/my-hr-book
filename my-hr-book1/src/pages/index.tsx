import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// A simple, thematic SVG component for the hero section
function HeroRobotSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--ifm-color-primary-dark)', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'var(--ifm-color-primary-light)', stopOpacity:1}} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Base */}
      <circle cx="150" cy="260" r="30" fill="url(#grad1)" />
      {/* Arm Segment 1 */}
      <rect x="140" y="150" width="20" height="110" rx="10" fill="url(#grad1)" transform="rotate(15, 150, 260)" />
      {/* Joint */}
      <circle cx="150" cy="150" r="15" fill="white" stroke="var(--ifm-color-primary)" strokeWidth="4" />
      {/* Arm Segment 2 */}
      <rect x="142" y="70" width="16" height="80" rx="8" fill="url(#grad1)" transform="rotate(-25, 150, 150)" />
      {/* Gripper */}
      <path d="M120 70 L130 50 L140 70 Z" fill="url(#grad1)" transform="rotate(-25, 150, 150)" filter="url(#glow)" />
    </svg>
  );
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Read the Introduction
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <HeroRobotSvg />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="An introduction to Physical AI & Humanoid Robotics, where digital intelligence learns to move.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}