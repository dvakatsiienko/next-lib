/* Core */
import React from 'react';
import type { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';

/* Components */
import { Button } from '../src/Button';

const meta: ComponentMeta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        type: {
            defaultValue: 'button',
        },
        disabled: {
            defaultValue: false,
            type: 'boolean',
        },
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

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <>
            <Button {...args} />
            <Button {...args} variant='secondary' />
        </>
    );
};
// Template.storyName = 'I am the primary';

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'PRIMARY',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secodnary',
    children: 'SECONDARY',
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'primary',
    children: 'DISABLED',
    disabled: true,
};

export default meta;
