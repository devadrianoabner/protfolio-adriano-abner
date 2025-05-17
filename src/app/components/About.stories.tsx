// src/app/components/About.stories.tsx
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import About from "./About";

export default {
  title: "Components/About",
  component: About,
} as Meta<typeof About>;

const Template: StoryFn<typeof About> = () => <About />;

export const Default = Template.bind({});
