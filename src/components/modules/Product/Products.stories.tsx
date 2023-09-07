import type { Meta, StoryObj } from "@storybook/react";
import Products from "./index";

const meta: Meta<typeof Products> = {
  component: Products,
  args: {
    className: "w-full max-w-[500px]",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Products>;

export const Default: Story = {};
