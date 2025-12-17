import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// --- Custom Thematic SVG Components ---

const EmbodiedAIIcon = () => (
  <svg className={styles.featureSvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" fill="none" stroke="var(--ifm-color-primary)" strokeWidth="4"/>
    <path d="M35,35 L65,65 M65,35 L35,65" stroke="var(--ifm-color-primary-dark)" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="8" fill="var(--ifm-color-primary-lightest)"/>
  </svg>
);

const ControlSystemsIcon = () => (
  <svg className={styles.featureSvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="45" width="60" height="10" rx="2" fill="var(--ifm-color-primary)"/>
    <circle cx="30" cy="50" r="5" fill="white"/>
    <circle cx="70" cy="50" r="5" fill="white"/>
    <path d="M30,50 Q50,30 70,50" fill="none" stroke="var(--if-color-primary-dark)" strokeWidth="2" strokeDasharray="5,5"/>
    <path d="M70,50 Q50,70 30,50" fill="none" stroke="var(--ifm-color-primary-dark)" strokeWidth="2" strokeDasharray="5,5"/>
  </svg>
);

const PerceptionIcon = () => (
  <svg className={styles.featureSvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ifm-color-primary)" strokeWidth="4"/>
    <circle cx="50" cy="50" r="10" fill="var(--ifm-color-primary-dark)"/>
    <path d="M20,50 L80,50 M50,20 L50,80" stroke="var(--ifm-color-primary-light)" strokeWidth="2" strokeDasharray="2,2"/>
  </svg>
);


// --- Feature List Definition ---

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Embodied Intelligence',
    Svg: EmbodiedAIIcon,
    description: (
      <>
        Discover how AI models are being integrated into physical systems,
        allowing robots to learn, adapt, and interact with the real world.
      </>
    ),
  },
  {
    title: 'Advanced Control Systems',
    Svg: ControlSystemsIcon,
    description: (
      <>
        Dive deep into the control theories and algorithms that enable complex
        movements, from stable walking to precise manipulation.
      </>
    ),
  },
  {
    title: 'Perception & Navigation',
    Svg: PerceptionIcon,
    description: (
      <>
        Explore the hardware and software behind robotic senses, including
        computer vision, LiDAR, and SLAM for autonomous navigation.
      </>
    ),
  },
];


// --- Main Component ---

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}