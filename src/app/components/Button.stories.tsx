import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  fullWidth: true,
};
