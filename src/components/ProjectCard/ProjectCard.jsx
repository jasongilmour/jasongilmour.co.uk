import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => {
    const { img, shortDesc, slug, title } = props;
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectInfo}>
                <h3>{title}</h3>
                {shortDesc && (
                    <p>
                        {shortDesc}&hellip; <Link to={`/${slug}`}>More</Link>
                    </p>
                )}
            </div>
            {img && (
                <img src={img} alt={title} className={styles.projectImage} />
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
