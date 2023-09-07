import type { Meta, StoryObj } from "@storybook/react";
import PersonalInfo from "./index";

const meta: Meta<typeof PersonalInfo> = {
  component: PersonalInfo,
  args: {
    className: "w-full",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PersonalInfo>;

export const Default: Story = {};
