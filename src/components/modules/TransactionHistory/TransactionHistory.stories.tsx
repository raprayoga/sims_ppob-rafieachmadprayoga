import type { Meta, StoryObj } from "@storybook/react";
import TransactionHistory from "./index";

const meta: Meta<typeof TransactionHistory> = {
  component: TransactionHistory,
  args: {
    className: "w-full max-w-[500px]",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TransactionHistory>;

export const Default: Story = {};
