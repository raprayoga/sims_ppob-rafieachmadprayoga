import type { Meta, StoryObj } from "@storybook/react";
import TopupForm from "./index";

const meta: Meta<typeof TopupForm> = {
  component: TopupForm,
  args: {
    className: "w-full",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TopupForm>;

export const Default: Story = {};
