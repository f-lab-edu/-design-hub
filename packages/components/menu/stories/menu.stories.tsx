import React, { ComponentProps } from "react";
import { Menu } from "../index";
import { ArrowIcon } from "components/icon";

export default {
  title: "Components/Menu",
  component: Menu.Root,
};

type Args = ComponentProps<typeof Menu.Root>;

const Template = (args: Args) => (
  <Menu.Root {...args}>
    <Menu.Trigger rightAddon={<ArrowIcon />}>Toggle Menu</Menu.Trigger>
    <Menu.List>
      <Menu.Item>Menu Item 1</Menu.Item>
      <Menu.Item>Menu Item 2</Menu.Item>
      <Menu.Item>Menu Item 3</Menu.Item>
    </Menu.List>
  </Menu.Root>
);

export const Default = Template.bind({});
