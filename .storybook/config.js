import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withKnobs } from '@storybook/addon-knobs';
import 'styles/app.scss';

addDecorator(StoryRouter());

configure(require.context('../src', true, /\.story\.(js|jsx|mdx)$/), module);
