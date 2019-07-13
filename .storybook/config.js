import { configure } from '@storybook/react';
import 'styles/app.scss';

const req = require.context('../src', true, /.story.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
