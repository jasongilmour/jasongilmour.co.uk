import React from 'react';
import styles from './Home.module.scss';
import { ProjectCard } from 'components';

const Home = () => {
    return (
        <main>
            <h1 className={styles.jrg}>
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.letter}`}>
                        J
                    </div>
                    <div className={styles.letter}>a</div>
                    <div className={styles.letter}>s</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>n</div>{' '}
                </div>
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.letter}`}>
                        R
                    </div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>b</div>
                    <div className={styles.letter}>e</div>
                    <div className={styles.letter}>r</div>
                    <div className={styles.letter}>t</div>{' '}
                </div>
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.letter}`}>
                        G
                    </div>
                    <div className={styles.letter}>i</div>
                    <div className={styles.letter}>l</div>
                    <div className={styles.letter}>m</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>u</div>
                    <div className={styles.letter}>r</div>
                </div>
            </h1>
            <div className={styles.pageBorder}>
                <article className={`${styles.page} ${styles.intro}`}>
                    <div className="row">
                        <div className="col offset-lg-3 col-lg-3">
                            <h2 className={styles.introHeadline}>
                                Pragmatic
                                <br /> Digital Product
                                <br /> Design.
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-lg-3 col-lg-2">
                            <p>
                                With over 5 years experience in creating digital
                                products for some of the biggest and smallest
                                companies in the world, I can be an asset on any
                                team working in the digital product design
                                space.
                            </p>
                            <p>
                                Having trained as a Graphic Designer, honed my
                                digital skills through a desire to see my
                                designs come to life, and to understand
                                everything that’s needed to&hellip;{' '}
                                <button type="button">read more.</button>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <article className={`${styles.page} ${styles.services}`}>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text">Services.</h2>
                        <ul className={styles.serviceList}>
                            <li>Product</li>
                            <li>Design</li>
                            <li>Strategy</li>
                            <li>UX & UI</li>
                            <li>Prototyping</li>
                            <li>Frontend</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className={`${styles.page} ${styles.projects}`}>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text">Projects.</h2>
                    </div>
                </div>
                <ProjectCard
                    shortDesc="Harness the relationship between your talent and their fans to amplify your message"
                    slug="hailto"
                    title="HailTo"
                />
            </article>
            <div className={styles.pageBorder}>
                <article className={`${styles.page} ${styles.contact}`}>
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h2 className="gradient-text">Contact.</h2>
                            <p className={styles.contactDetails}>
                                <div>Jason Gilmour Design & Consulting</div>
                                <div>BCCN 3854926540</div>
                                <div>
                                    <a href="mailto:hello@jasongilmour.co.uk">
                                        hello@jasongilmour.co.uk
                                    </a>
                                </div>
                                <div>
                                    <a href="tel:+16045008985">
                                        +1 (604) 500 8985
                                    </a>
                                </div>
                            </p>
                            <p className={styles.contactAddress}>
                                <div>319 West Hastings Street #400,</div>
                                <div>Vancouver, BC</div>
                                <div>Canada</div>
                                <div>V6B 1H6</div>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Home;
