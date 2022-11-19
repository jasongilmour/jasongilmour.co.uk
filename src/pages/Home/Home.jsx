import React from 'react';
import { JsonLd } from 'react-schemaorg';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.content}>
        <h1 className={styles.jrg}>
            <div className={styles.word}>
                <div className={styles.letter}>J</div>
                <div className={styles.letter}>a</div>
                <div className={styles.letter}>s</div>
                <div className={styles.letter}>o</div>
                <div className={styles.letter}>n</div>{' '}
            </div>
            <div className={styles.word}>
                <div className={styles.letter}>R</div>
                <div className={styles.letter}>o</div>
                <div className={styles.letter}>b</div>
                <div className={styles.letter}>e</div>
                <div className={styles.letter}>r</div>
                <div className={styles.letter}>t</div>{' '}
            </div>
            <div className={styles.word}>
                <div className={styles.letter}>G</div>
                <div className={styles.letter}>i</div>
                <div className={styles.letter}>l</div>
                <div className={styles.letter}>m</div>
                <div className={styles.letter}>o</div>
                <div className={styles.letter}>u</div>
                <div className={styles.letter}>r</div>
            </div>
        </h1>
        <h2>Pragmatic Product Design.</h2>
        <p>I'm the Head of Product Design at <a href="https://www.getstoryteller.com/" target="_blank" rel="noopener noreferrer">Storyteller</a> and driven by craft and innovation.
        I love collaborating with my small but mighty team to ship products and features that create real value and are loved by their users.</p>
        <p>I have experience with everything from product, UX and visual design to front-end development so I know exactly what it takes to ship great products. I'm motivated by
        seeing my work go from idea to launch and onwards - and I've been lucky enough to be involved with products like HailTo and Storyteller from their inception.</p>
        <article id="contact">
            <div className={styles.contactDetails}>
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
        </article>
    </main>
  );
};

export default Home;
