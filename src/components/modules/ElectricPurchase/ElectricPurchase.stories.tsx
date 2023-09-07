import type { Meta, StoryObj } from "@storybook/react";
import ElectricPurchase from "./index";

const meta: Meta<typeof ElectricPurchase> = {
  component: ElectricPurchase,
  args: {
    className: "w-full max-w-[500px]",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ElectricPurchase>;

export const Default: Story = {};
