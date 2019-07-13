import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

storiesOf('Components|Navigation', module).add('with text', () => (
    <Navigation>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Project</a>
        <a href="/">Contact</a>
    </Navigation>
));
