// Combobox.stories.tsx
import React, { ComponentProps } from "react";
import { Combobox } from ".";

export default {
  title: "Components/Combobox",
  component: Combobox,
};

type Args = ComponentProps<typeof Combobox.Root>;

const Template = (args: Args) => (
  <Combobox.Root {...args}>
    <Combobox.Input aria-placeholder="select an option" />
    <Combobox.List>
      <Combobox.Option value="Option 1" />
      <Combobox.Option value="Option 2" />
      <Combobox.Option value="Option 3" />
    </Combobox.List>
  </Combobox.Root>
);

export const Default = Template.bind({});
