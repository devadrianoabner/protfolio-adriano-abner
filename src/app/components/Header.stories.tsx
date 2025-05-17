import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
