import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './ProjectCard';

// import imgSrc from

storiesOf('Components|ProjectCard', module)
    .add('default', () => (
        <ProjectCard title="ProjectCard" slug="project-card" />
    ))
    .add('with info', () => (
        <ProjectCard
            img={process.env.PUBLIC_URL + '/img/projects/hailto/cover.png'}
            shortDesc="Harness the relationship between your talent and their fans to amplify your message"
            slug="hailto"
            title="HailTo"
        />
    ));
