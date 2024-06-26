import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <img src="img/minddong.svg" alt="Code Banner" style={{height:"500px"}}/>
        </header>

    );
}

function HomepageBody() {
    return (
        <div className="bodyContainer">
            <div className="imgContainer">
                {/*<img className="drawingBody" src="img/myDrawing.png" alt="Drawing Body"/>*/}
                {/*<img src="img/diary.svg" alt="Diary"/>*/}
                {/*<img src="img/book.svg" alt="Diary"/>*/}
                {/*<img src="img/folder.svg" alt="Diary"/>*/}
                {/*<img src="img/rabbot.svg" alt="Diary"/>*/}
                {/*<img src="img/trouble.svg" alt="Diary"/>*/}
                <div>

                </div>
            </div>
        </div>
    );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <HomepageBody/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
