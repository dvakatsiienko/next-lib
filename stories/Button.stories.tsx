/* Core */
import React from 'react';
import type { ComponentMeta, ComponentStory, Story, DecoratorFn } from '@storybook/react';

/* Components */
import { Button, ButtonProps } from '../src/Button';

const withLayout: DecoratorFn = (Story) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 240px', marginRight: 16 }}>{Story()}</div>
            <div style={{ display: 'flex', flex: '1 1 auto' }}>CONTENT</div>
        </div>
    );
};

const meta: ComponentMeta<typeof Button> = {
    title: 'Button',
    component: Button,
    decorators: [withLayout],
    argTypes: {
        variant: {
            defaultValue: 'primary',
        },
        children: {
            defaultValue: 'Click',
            type: 'string',
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

const Template: ComponentStory<typeof Button> = (props) => {
    return <Button {...props} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export default meta;
