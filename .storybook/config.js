import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import 'styles/app.scss';

const req = require.context('../src', true, /.story.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(StoryRouter());

configure(loadStories, module);
