import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => {
    const { img, shortDesc, slug, title } = props;
    return (
        <div className={classnames(styles.projectCard, styles[slug])}>
            <div className={styles.projectInfo}>
                <h3>{title}</h3>
                {shortDesc && (
                    <p>
                        {shortDesc}&hellip; <Link to={`/${slug}`}>More</Link>
                    </p>
                )}
            </div>
            {img && (
                <div className={styles.projectImage}>
                    <img src={img} alt={title} />
                </div>
            )}
        </div>
    );
};

ProjectCard.propTypes = {
    img: PropTypes.string,
    shortDesc: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
    img: '',
    shortDesc: '',
};

export default ProjectCard;
