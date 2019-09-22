import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Components|Button', module)
    .addDecorator(withKnobs)
    .add('solid', () => (
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
    ))
    .add('outline', () => (
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
    ))
    .add('with knobs', () => (
        <Button
            color={select(
                'color',
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'link',
                ],
                'primary'
            )}
            unstyled={boolean('unstyled', false)}
        >
            {text('cta', 'Click me!')}
        </Button>
    ));
