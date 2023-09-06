import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./InputGroup";
import { Container, Input } from "./index";
import { HomeIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

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

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Button
        className="h-full w-36 rounded-none"
        theme="green"
        variant="filled"
      >
        Button1
      </Button>
      <Input placeholder="Placeholder here" />
      <Button
        className="h-full w-36 rounded-none"
        theme="primary"
        variant="filled"
      >
        Button2
      </Button>
    </InputGroup>
  ),
};

export const ButtonVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Placeholder here" />
      <Button
        className="h-full w-36 rounded-none"
        theme="primary"
        variant="filled"
      >
        Button
      </Button>
    </InputGroup>
  ),
};

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Container>Email</Container>
      <Input placeholder="Placeholder here" />
    </InputGroup>
  ),
};

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Container className="p-5">
        <HomeIcon className="w-4 stroke-2 text-gray" />
      </Container>
      <Input placeholder="Placeholder here" />
    </InputGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Placeholder here" disabled />
      <Button
        className="h-full w-36 rounded-none"
        theme="primary"
        variant="filled"
      >
        Gunakan
      </Button>
    </InputGroup>
  ),
};
