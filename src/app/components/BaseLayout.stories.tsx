import type { Meta, StoryObj } from "@storybook/react";
import BaseLayout from "./BaseLayout";
import Hero from "./Hero";

const meta: Meta<typeof BaseLayout> = {
  title: "Layout/BaseLayout",
  component: BaseLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => (
    <BaseLayout>
      <Hero />
    </BaseLayout>
  ),
};
