import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'review',
        Svg: require('../../static/img/diary.svg').default,
        description: (
            <>
                what's in my TIL?
            </>
        ),
        href: 'blog'
    },
    {
        title: 'studyLog',
        Svg: require('../../static/img/book.svg').default,
        description: (
            <>
                in Progress
            </>
        ),
        href: 'Study/Intro'

    },
    {
        title: 'workLog',
        Svg: require('../../static/img/rabbot.svg').default,
        description: (
            <>
                daily work log
            </>
        ),
        href: 'WorkLog/Intro'
    },
    {
        title: 'troubleShooting',
        Svg: require('../../static/img/trouble.svg').default,
        description: (
            <>
                Overcoming obstacles
            </>
        ),
        href: 'TroubleShooting/Intro'
    }
];

function Feature({Svg, title, description, href}) {
    return (
        <div className={clsx('col col--3')} onClick={() => window.location.href = href}>
            <div className={styles.featureBox}>
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
