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

        </header>

    );
}

function HomepageBody() {
    return (
        <div className="bodyContainer">
            <div className="imgContainer">
                <img className="drawingBody" src="img/myDrawing.png" alt="Drawing Body"/>
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
