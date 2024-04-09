import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

{/*<img src="img/diary.svg" alt="Diary"/>*/
}
{/*<img src="img/book.svg" alt="Diary"/>*/
}
{/*<img src="img/folder.svg" alt="Diary"/>*/
}
{/*<img src="img/rabbot.svg" alt="Diary"/>*/
}
{/*<img src="img/trouble.svg" alt="Diary"/>*/
}
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
        href: 'Study/OpenAPI/book/openAPI와스웨거를활용한실전API설계/01'

    },
    {
        title: 'workLog',
        Svg: require('../../static/img/rabbot.svg').default,
        description: (
            <>
                daily work log
            </>
        ),
        href: 'Daily/2024-03/daily/2024/03/18'
    },
    {
        title: 'troubleShooting',
        Svg: require('../../static/img/trouble.svg').default,
        description: (
            <>
                Overcoming obstacles
            </>
        ),
        href: 'Study/TroubleShooting/TroubleShooting/ElasticSearch연결안됨'
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
