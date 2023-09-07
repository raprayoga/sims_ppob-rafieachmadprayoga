import type { Meta, StoryObj } from "@storybook/react";
import Banners from "./index";

const meta: Meta<typeof Banners> = {
  component: Banners,
  args: {
    className: "w-full max-w-[500px]",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Banners>;

export const Default: Story = {};
