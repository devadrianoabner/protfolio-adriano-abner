import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Puzzle from "./Puzzel";

const meta: Meta<typeof Puzzle> = {
  title: "Components/Puzzle",
  component: Puzzle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Puzzle>;

export const Default: Story = {
  render: () => <Puzzle />,
};
