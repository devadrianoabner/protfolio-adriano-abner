import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});
