import React, { useState } from 'react';
import { JsonLd } from 'react-schemaorg';
import classnames from 'classnames';
import { Waypoint } from 'react-waypoint';
import { HashLink as Link } from 'react-router-hash-link';
import { ProjectCard } from 'components';

import styles from './Home.module.scss';

const Home = () => {
    const [startVisible, setStartVisible] = useState(true);
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const startEnter = () => {
        setStartVisible(true);
    };

    const startLeave = () => {
        setStartVisible(false);
    };

    const skillsEnter = () => {
        setSkillsVisible(true);
    };

    const skillsLeave = () => {
        setSkillsVisible(false);
    };

    const contactEnter = () => {
        setContactVisible(true);
    };

    const contactLeave = () => {
        setContactVisible(false);
    };

    return (
        <main>
            <h1
                className={classnames(styles.jrg, {
                    [styles.out]: !startVisible,
                })}
            >
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.j}`}>J</div>
                    <div className={styles.letter}>a</div>
                    <div className={styles.letter}>s</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>n</div>{' '}
                </div>
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.r}`}>R</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>b</div>
                    <div className={styles.letter}>e</div>
                    <div className={styles.letter}>r</div>
                    <div className={styles.letter}>t</div>{' '}
                </div>
                <div className={styles.word}>
                    <div className={`${styles.initial} ${styles.g}`}>G</div>
                    <div className={styles.letter}>i</div>
                    <div className={styles.letter}>l</div>
                    <div className={styles.letter}>m</div>
                    <div className={styles.letter}>o</div>
                    <div className={styles.letter}>u</div>
                    <div className={styles.letter}>r</div>
                </div>
            </h1>
            <Waypoint
                key={1}
                onEnter={() => startEnter()}
                onLeave={() => startLeave()}
                topOffset={-40}
            />
            <div className={styles.pageBorder} id="about">
                <article className={`${styles.page} ${styles.about}`}>
                    <div className={styles.aboutBackgroundContainer}>
                        <img
                            src="/img/page-backgrounds/background-intro.svg"
                            alt=""
                            role="presentation"
                        />
                    </div>
                    <div className="row">
                        <div className="col offset-lg-1 col-lg-4 offset-xl-3 col-xl-3">
                            <h2 className={`${styles.aboutHeadline}`}>
                                Pragmatic
                                <br /> Digital Product
                                <br /> Designer.
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-lg-1 col-lg-4 offset-xl-3 col-xl-2">
                            <p>
                                I am an experienced Digital Product
                                Designer with a talent for UX, strategy, and
                                creating innovative solutions from first
                                principles.
                            </p>
                            <p>
                                I have a consistent record of leading successful
                                projects throughout my career, taking products
                                from zero to one and onwards with a high degree
                                of ownership, pragmatism, professionalism and
                                pride in my work.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <article
                className={`${styles.page} ${styles.projects}`}
                id="portfolio"
            >
                <h2
                    className={`gradient-text section-header ${styles.projectsHeadline}`}
                >
                    Portfolio
                </h2>
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/hailto/cover.png'
                    }
                    shortDesc={
                        <>
                            <p>
                                The HailTo App serves up official assets for TV
                                stars so they can promote their own shows in an
                                effective, coordinated way on social media.
                            </p>
                            <div>
                                <a
                                    href="https://medium.com/@jasongilmour94/designing-hailto-c08225062352"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary project-link"
                                >
                                    Case study
                                </a>
                            </div>
                        </>
                    }
                    slug="hailto"
                    title="HailTo"
                />
                {/* <ProjectCard
                    img={
                        process.env.PUBLIC_URL + '/img/projects/daily/cover.png'
                    }
                    layout="B"
                    shortDesc="Daily is a beautifully focused app that provides a straightforward aid for forming good habits. It does this by helping you keep track of what you do each day and how often you do it"
                    slug="daily"
                    title="Daily"
                /> */}
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/storm-ideas/cover.png'
                    }
                    layout="B"
                    shortDesc={
                        <>
                            <p>
                                While employed by Storm Ideas in 2018, I was
                                tasked with redesigning the agency website and
                                refreshing the aesthetics.
                            </p>
                            <div>
                                <a
                                    href="https://stormideas.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary project-link"
                                >
                                    Website
                                </a>
                                <a
                                    href="https://www.toptal.com/designers/resume/jason-gilmour#project=storm-ideas-agency-website&image=1#incorporate-only-acute-mobile-app-designers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-secondary project-link"
                                >
                                    Learn more
                                </a>
                            </div>
                        </>
                    }
                    slug="storm-ideas"
                    title="Storm Ideas"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/storm-sdk/cover.png'
                    }
                    shortDesc={
                        <p>
                            Building a toolkit for better products, and better
                            processes.
                            <br />
                            Case study coming soon.
                        </p>
                    }
                    slug="cms-design-system"
                    title="CMS Design System"
                />
            </article>
            <Waypoint
                key={2}
                onEnter={() => contactEnter()}
                onLeave={() => contactLeave()}
                topOffset="40%"
            >
                <article
                    className={classnames(styles.page, styles.contact, {
                        [styles.out]: !contactVisible,
                    })}
                    id="contact"
                >
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h2 className="gradient-text section-header">
                                Contact
                            </h2>
                            <div className={styles.contactDetails}>
                                <div>Jason Gilmour</div>
                                <div>Edinburgh, Scotland.</div>
                                <div>
                                    <a
                                        href="mailto:hello@jasongilmour.co.uk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.email}
                                    >
                                        hello@jasongilmour.co.uk
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="tel:+447949019596"
                                        className={styles.phone}
                                    >
                                        +44 7949 01 9596
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <JsonLd
                        item={{
                            '@context': 'http://schema.org',
                            '@type': 'Person',
                            name: 'Jason Gilmour',
                            disambiguatingDescription:
                                'Digital Product Designer',
                            image: 'https://jasongilmour.co.uk/img/ui/face.jpg',
                            url: 'https://jasongilmour.co.uk',
                            sameAs: [
                                'https://www.twitter.com/jasongilmour94',
                                'https://www.linkedin.com/in/jason-gilmour-1805b474',
                                'https://github.com/jasongilmour',
                                'https://medium.com/@jasongilmour94',
                                'https://www.toptal.com/designers/resume/jason-gilmour',
                            ],
                        }}
                    />
                </article>
            </Waypoint>
        </main>
    );
};

export default Home;
