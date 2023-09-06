import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup, Input } from "./index";
import { HomeIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  args: {
    sizes: "small",
    className: "w-96",
  },
  argTypes: {
    sizes: {
      control: "select",
      options: ["small", "large"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Placeholder here" className="pr-9" />
      <p className="absolute right-2 left-auto text-gray">Apply</p>
    </InputGroup>
  ),
};

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
      <Input placeholder="Placeholder here" className="pl-8" />
    </InputGroup>
  ),
};
