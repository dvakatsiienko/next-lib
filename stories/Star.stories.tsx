/* Core */
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

/* Components */
import { Star as BaseStar } from '../src/Star';

const meta: ComponentMeta<typeof BaseStar> = {
    title: 'Star',
    component: BaseStar,
    argTypes: {
        color: {
            defaultValue: 'blue',
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export const Star: ComponentStory<typeof BaseStar> = (props) => {
    return <BaseStar {...props} />;
};
// Star.storyName = 'I am the primary';

// export const Default = Template.bind({});

// Default.args = {};

export default meta;
