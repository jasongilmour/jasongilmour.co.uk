import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => {
    const { img, shortDesc, slug, title } = props;
    return (
        <div className={classnames(styles.projectCard, styles[slug])}>
            <div className={styles.projectInfo}>
                <h3>{title}</h3>
                {shortDesc}
            </div>
            {img && (
                <div className={styles.projectImage}>
                    <img src={img} alt={title} />
                </div>
            )}
            {/* <script type="application/ld+json">
                {
                    '@context': 'http://schema.org',
                    '@type': 'CreativeWork',
                    '@id': 'https://jasongilmour.co.uk/projects/hailto,
                    'name': 'HailTo',
                    'url': 'https://jasongilmour.co.uk/img/projects/hailto',
                    'image': [
                    ],
                    'author': [
                        {
                            'name': 'Jason Gilmour',
                            'url': 'https://jasongilmour.co.uk',
                            'sameAs': [
                                'https://www.twitter.com/jasongilmour94',
                                'https://www.linkedin.com/in/jason-gilmour-1805b474',
                                'https://github.com/jasongilmour',
                                'https://medium.com/@jasongilmour94',
                                'https://www.toptal.com/designers/resume/jason-gilmour'
                            ]
                        }
                    ]
                }
            </script> */}
        </div>
    );
};

ProjectCard.propTypes = {
    img: PropTypes.string,
    shortDesc: PropTypes.node,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
    img: '',
    shortDesc: '',
};

export default ProjectCard;
