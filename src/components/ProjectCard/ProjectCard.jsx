import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => {
    const { shortDesc, slug, title } = props;
    return (
        <div className={styles.projectCard}>
            <h3>{title}</h3>
            {shortDesc && (
                <p>
                    {shortDesc} <Link to={`/${slug}`}>More</Link>
                </p>
            )}
        </div>
    );
};

ProjectCard.defaultProps = {
    shortDesc: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
    shortDesc: '',
};

export default ProjectCard;
