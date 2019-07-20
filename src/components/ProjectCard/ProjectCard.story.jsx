import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './ProjectCard';

storiesOf('Components|ProjectCard', module).add('with text', () => (
    <ProjectCard title="ProjectCard" />
));