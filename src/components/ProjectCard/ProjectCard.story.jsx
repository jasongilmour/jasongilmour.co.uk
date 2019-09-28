import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ProjectCard from './ProjectCard';

export default {
    title: 'Components|ProjectCard',
    component: ProjectCard,
    decorators: [withKnobs],
};

export const Default = () => (
    <ProjectCard title="ProjectCard" slug="project-card" />
);

export const WithInfo = () => (
    <ProjectCard
        img={process.env.PUBLIC_URL + '/img/projects/hailto/cover.png'}
        shortDesc="Harness the relationship between your talent and their fans to amplify your message"
        slug="hailto"
        title="HailTo"
    />
);
