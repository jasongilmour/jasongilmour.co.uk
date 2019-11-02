import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import { ProjectCard } from 'components';

import styles from './Home.module.scss';

const Home = () => {
    const [startVisible, setStartVisible] = useState(true);
    const [servicesVisible, setServicesVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const startEnter = () => {
        setStartVisible(true);
    };

    const startLeave = () => {
        setStartVisible(false);
    };

    const servicesEnter = () => {
        setServicesVisible(true);
    };

    const servicesLeave = () => {
        setServicesVisible(false);
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
            <div className={styles.pageBorder}>
                <article
                    className={`${styles.page} ${styles.about}`}
                    id="about"
                >
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
                                <br /> Design.
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-lg-1 col-lg-4 offset-xl-3 col-xl-2">
                            <p>
                                I am an experienced Digital Product Designer
                                with a talent for UX, strategy, and creating
                                innovative solutions from first principles.
                            </p>
                            <p>
                                I have a consistent record of leading successful
                                projects throughout my career, taking products
                                from zero to one and onwards with a high degree
                                of ownership, pragmatism, professionalism and
                                pride in my work.
                            </p>
                            <p>
                                I offer a variety of{' '}
                                <Link smooth to="/#services">
                                    services
                                </Link>{' '}
                                on a freelance basis, honed over the years
                                through various{' '}
                                <Link smooth to="/#projects">
                                    successful projects
                                </Link>
                                . Please{' '}
                                <a
                                    href="mailto:hello@jasongilmour.co.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    get in touch
                                </a>{' '}
                                if you'd like to work with me.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <article
                className={classnames(styles.page, styles.services, {
                    [styles.out]: !servicesVisible,
                })}
                id="services"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text section-header">
                            Services.
                        </h2>
                        <Waypoint
                            key={2}
                            onEnter={() => servicesEnter()}
                            onLeave={() => servicesLeave()}
                            topOffset="30%"
                        >
                            <ul className={styles.serviceList}>
                                <li className={styles.service}>Product</li>
                                <li className={styles.service}>Design</li>
                                <li className={styles.service}>Strategy</li>
                                <li className={styles.service}>UX & UI</li>
                                <li className={styles.service}>Prototyping</li>
                                <li className={styles.service}>Frontend</li>
                            </ul>
                        </Waypoint>
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
                    shortDesc="Harness the relationship between your talent and their fans to amplify your message"
                    slug="hailto"
                    title="HailTo"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL + '/img/projects/daily/cover.png'
                    }
                    layout="B"
                    shortDesc="Daily is a beautifully focused app that provides a straightforward aid for forming good habits. It does this by helping you keep track of what you do each day and how often you do it"
                    slug="daily"
                    title="Daily"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/storm-sdk/cover.png'
                    }
                    shortDesc="Building a toolkit for better products and better process"
                    slug="cms-design-system"
                    title="CMS Design System"
                />
                <ProjectCard
                    img={
                        process.env.PUBLIC_URL +
                        '/img/projects/storm-ideas/cover.png'
                    }
                    layout="B"
                    shortDesc="While employed by Storm Ideas, I was tasked with redesigning the agency website and updating its aesthetics in 2018"
                    slug="storm-ideas"
                    title="Storm Ideas"
                />
            </article>
            <article
                className={classnames(styles.page, styles.contact, {
                    [styles.out]: !contactVisible,
                })}
                id="contact"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h2 className="gradient-text section-header">
                            Contact.
                        </h2>
                        <Waypoint
                            key={2}
                            onEnter={() => contactEnter()}
                            onLeave={() => contactLeave()}
                            topOffset="40%"
                        >
                            <div className={styles.contactDetails}>
                                <div>Jason Gilmour Design & Consulting.</div>
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
                                        href="tel:+16045008985"
                                        className={styles.phone}
                                    >
                                        +44 7949 01 9596
                                    </a>
                                </div>
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Home;
