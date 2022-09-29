/* Core */
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';

/* Components */
import { Button, ButtonProps } from '../src/Button';

const meta: ComponentMeta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
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
    const [variant, setVariant] = useState<ButtonProps['variant']>('primary');
    const toggle = () => setVariant(variant === 'primary' ? 'secondary' : 'primary');

    return (
        <>
            <Button {...args} variant={variant} onClick={toggle} />
            <Button {...args} variant='secondary' />
        </>
    );
};
// Template.storyName = 'I am the primary';

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'PRIMARY',
    onClick: () => console.log('test'),
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
