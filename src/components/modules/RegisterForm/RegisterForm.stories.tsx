import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./index";

const meta: Meta<typeof RegisterForm> = {
  component: RegisterForm,
  args: {
    className: "w-full max-w-[500px]",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
