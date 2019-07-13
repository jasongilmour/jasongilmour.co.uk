import React from 'react';
import styles from './Home.module.scss';

const Home = props => {
    return (
        <div className={styles.pageContainer}>
            <h1>
                <span className={`${styles.initial} ${styles.letter}`}>J</span>
                <span className={styles.letter}>a</span>
                <span className={styles.letter}>s</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>n</span>{' '}
                <span className={`${styles.initial} ${styles.letter}`}>R</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>b</span>
                <span className={styles.letter}>e</span>
                <span className={styles.letter}>r</span>
                <span className={styles.letter}>t</span>{' '}
                <span className={`${styles.initial} ${styles.letter}`}>G</span>
                <span className={styles.letter}>i</span>
                <span className={styles.letter}>l</span>
                <span className={styles.letter}>m</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>u</span>
                <span className={styles.letter}>r</span>
            </h1>
            <article className="page intro">
                <h2>Pragmatic Digital Product Design.</h2>
                <p>
                    With over 5 years experience in creating digital products
                    for some of the biggest and smallest companies in the world,
                    I can be an asset on any team working in the digital product
                    design space.
                </p>
                <p>
                    Having trained as a Graphic Designer, honed my digital
                    skills through a desire to see my designs come to life, and
                    to understand everything that’s needed to&hellip;{' '}
                    <button type="button">read more.</button>
                </p>
            </article>
            <article className={`${styles.page} ${styles.services}`}>
                <h2>Services.</h2>
                <ul className={styles.serviceList}>
                    <li>Product</li>
                    <li>Design</li>
                    <li>Strategy</li>
                    <li>UX & UI</li>
                    <li>Prototyping</li>
                    <li>Frontend</li>
                </ul>
            </article>
            <article className={`${styles.page} ${styles.projects}`}>
                <h2>Projects.</h2>
                <ul className={styles.projectList}>
                    <li>HailTo</li>
                    <li>Hallmark</li>
                    <li>Storyteller</li>
                </ul>
            </article>
            <article className={`${styles.page} ${styles.contact}`}>
                <h2>Contact.</h2>
                <div className={styles.contactDetails}>
                    <div>Jason Gilmour Design & Consulting</div>
                    <div>BCCN 3854926540</div>
                    <div>hello@jasongilmour.co.uk</div>
                    <div>+1 (604) 500 8985</div>
                </div>
                <div className={styles.contactAddress}>
                    <div>319 West Hastings Street #400,</div>
                    <div>Vancouver, BC</div>
                    <div>Canada</div>
                    <div>V6B 1H6</div>
                </div>
            </article>
        </div>
    );
};

export default Home;
