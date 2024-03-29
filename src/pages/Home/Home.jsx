import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { Colors, Grid } from 'components';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
        <Colors />
        <Grid />
        <div className={styles.badgeContainer}>
            {/* <img src={`${process.env.PUBLIC_URL}/img/badge.svg`} alt="" role="presentation" className={styles.badge} /> */}
        </div>
        <main className={styles.container}>
            <div className={styles.headlines}>
                <h1 className={styles.jrg}>
                    <div className={styles.word}>
                        <span className={styles.letter}>J</span>
                        <span className={styles.letter}>a</span>
                        <span className={styles.letter}>s</span>
                        <span className={styles.letter}>o</span>
                        <span className={styles.letter}>n</span>{' '}
                    </div>
                    <div className={styles.word}>
                        <span className={styles.letter}>R</span>
                        <span className={styles.letter}>o</span>
                        <span className={styles.letter}>b</span>
                        <span className={styles.letter}>e</span>
                        <span className={styles.letter}>r</span>
                        <span className={styles.letter}>t</span>{' '}
                    </div>
                    <div className={styles.word}>
                        <span className={styles.letter}>G</span>
                        <span className={styles.letter}>i</span>
                        <span className={styles.letter}>l</span>
                        <span className={styles.letter}>m</span>
                        <span className={styles.letter}>o</span>
                        <span className={styles.letter}>u</span>
                        <span className={styles.letter}>r</span>
                    </div>
                </h1>
                <h2>Pragmatic Product Design.</h2>
            </div>
            <div className={styles.blurb}>
                <p>Formerly the Head of Product Design at <a href="https://www.getstoryteller.com/" target="_blank" rel="noopener noreferrer">Storyteller</a> and <a href="https://stormideas.com/" target="_blank" rel="noopener noreferrer">Storm Ideas</a>, I am driven by a passion for craftsmanship and innovation. I enjoy working hand-in-hand with a small but mighty team to deliver products and features that not only drive real value but are also loved by users.</p>
                <p>With a versatile skill set spanning product, UX and visual design to front-end development, I understand the intricate details and dedication required to bring great products to life. I am motivated by the thrill of turning ideas into tangible outcomes and have had the privilege of being a part of the journey from inception to launch and beyond for products such as HailTo and Storyteller.</p>
            </div>
            <div className={styles.contact}>
                <p>Edinburgh, Scotland.</p>
                <p>
                    <a
                        href="mailto:hello@jasongilmour.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.email}
                    >
                        hello@jasongilmour.co.uk
                    </a>
                </p>
                <p>
                    <a
                        href="tel:+447949019596"
                        className={styles.phone}
                    >
                        +44 7949 01 9596
                    </a>
                </p>
                <div className={styles.social}>
                    <a
                        className={styles.socialLink}
                        href="https://www.linkedin.com/in/jasongilmour/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/ui/icon-linkedin.svg`}
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://www.toptal.com/designers/resume/jason-gilmour#incorporate-only-acute-mobile-app-designers"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/ui/icon-toptal.svg`}
                            alt="Toptal"
                        />
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://github.com/jasongilmour"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/ui/icon-github.svg`}
                            alt="Github"
                        />
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://twitter.com/jasongilmour94"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/ui/icon-twitter.svg`}
                            alt="Twitter"
                        />
                    </a>
                </div>
            </div>
            <JsonLd
                item={{
                    '@context': 'http://schema.org',
                    '@type': 'Person',
                    name: 'Jason Gilmour',
                    disambiguatingDescription:
                        'Head of Product Design at Storyteller',
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
        </main>
    </>
  );
};

export default Home;
