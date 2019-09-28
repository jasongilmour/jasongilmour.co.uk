import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Navigation from './Navigation';

export default {
    title: 'Components|Navigation',
    component: Navigation,
    decorators: [withKnobs],
};

export const Default = () => (
    <Navigation>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Project</a>
        <a href="/">Contact</a>
    </Navigation>
);
