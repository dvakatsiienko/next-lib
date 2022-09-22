/* Core */
import React from 'react';
import { type Meta, type Story } from '@storybook/react';

/* Components */
import { Button, ButtonProps } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
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

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export default meta;
