import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
    title: 'Components|Button',
    component: Button,
    decorators: [withKnobs],
};

export const Solid = () => (
    <div>
        <div style={{ margin: 20 }}>
            <Button color="primary">Primary</Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="secondary">Secondary</Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="success">Success</Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="danger">Danger</Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="warning">Warning</Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="link">Link</Button>
        </div>
    </div>
);
export const Outline = () => (
    <div>
        <div style={{ margin: 20 }}>
            <Button color="primary" outline>
                Primary
            </Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="secondary" outline>
                Secondary
            </Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="success" outline>
                Success
            </Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="danger" outline>
                Danger
            </Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="warning" outline>
                Warning
            </Button>
        </div>
        <div style={{ margin: 20 }}>
            <Button color="link" outline>
                Link
            </Button>
        </div>
    </div>
);
export const WithKnobs = () => (
    <Button
        color={select(
            'color',
            ['primary', 'secondary', 'success', 'danger', 'warning', 'link'],
            'primary'
        )}
        unstyled={boolean('unstyled', false)}
    >
        {text('cta', 'Click me!')}
    </Button>
);
