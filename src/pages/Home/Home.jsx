import React from 'react';
// import { Waypoint } from 'react-waypoint';
import { ProjectCard } from 'components';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <main>
            <h1 className={styles.jrg}>
                <div className={styles.word}>
                    <div
                        className={`${styles.initial} ${styles.j} ${styles.letter}`}
                    >
                        J
                    </div>
                    <div className={styles.letter}>a</div>
                    <div className={styles.letter}>s</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>n</div>{' '}
                </div>
                <div className={styles.word}>
                    <div
                        className={`${styles.initial} ${styles.r} ${styles.letter}`}
                    >
                        R
                    </div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>b</div>
                    <div className={styles.letter}>e</div>
                    <div className={styles.letter}>r</div>
                    <div className={styles.letter}>t</div>{' '}
                </div>
                <div className={styles.word}>
                    <div
                        className={`${styles.initial} ${styles.g} ${styles.letter}`}
                    >
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
                    <div className={styles.introBackgroundContainer}>
                        <img
                            src="/img/page-backgrounds/background-intro.svg"
                            alt=""
                            role="presentation"
                        />
                    </div>
                    <div className="row">
                        <div className="col offset-lg-1 col-lg-4 offset-xl-3 col-xl-3">
                            <h2 className={`${styles.introHeadline}`}>
                                Pragmatic
                                <br /> Digital Product
                                <br /> Design.
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-lg-1 col-lg-4 offset-xl-3 col-xl-2">
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
                                <button
                                    type="button"
                                    className="unstyled link strong"
                                >
                                    read more.
                                </button>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            {/* <Waypoint
                key={1}
                onEnter={console.log('2 enter')}
                onLeave={console.log('2 leave ')}
                debug
                scrollableAncestor={window}
            >
                <div>here</div>
            </Waypoint> */}
            <article
                className={`${styles.page} ${styles.services}`}
                id="services"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text section-header">
                            Services.
                        </h2>
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
            <article
                className={`${styles.page} ${styles.projects}`}
                id="projects"
            >
                <h2
                    className={`gradient-text section-header ${styles.projectsHeadline}`}
                >
                    Projects.
                </h2>
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/hailto/cover.png'
                    }
                    shortDesc="Harness the relationship between your talent and their fans to amplify your message."
                    slug="hailto"
                    title="HailTo"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/hailto/cover.png'
                    }
                    layout="B"
                    shortDesc="Daily is a beautifully focused app that provides a straightforward aid for forming good habits. It does this by helping you keep track of what you do each day and how often you do it."
                    slug="daily"
                    title="Daily"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/hailto/cover.png'
                    }
                    shortDesc="Building a toolkit for better products and better process."
                    slug="cms-design-system"
                    title="CMS Design System"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/hailto/cover.png'
                    }
                    layout="B"
                    shortDesc="While employed by Storm Ideas, I was tasked with redesigning the agency website and updating its aesthetics in 2018."
                    slug="storm-ideas"
                    title="Storm Ideas"
                />
            </article>

            <article
                className={`${styles.page} ${styles.contact}`}
                id="contact"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text section-header">
                            Contact.
                        </h2>
                        <div className={styles.contactDetails}>
                            <div>Jason Gilmour Design & Consulting</div>
                            <div>
                                <a href="mailto:hello@jasongilmour.co.uk">
                                    hello@jasongilmour.co.uk
                                </a>
                            </div>
                            <div>
                                <a href="tel:+16045008985">+44 7949 01 9596</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Home;
