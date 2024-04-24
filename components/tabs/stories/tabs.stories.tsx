import React, { ComponentProps } from "react";
import { Tabs } from "../index";

export default {
  title: "Components/Tabs",
  component: Tabs.Root,
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

type Args = Pick<ComponentProps<typeof Tabs.Root>, "size" | "direction">;

const Template = ({ size, direction }: Args) => (
  <Tabs.Root size={size} direction={direction}>
    <Tabs.List>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
      <Tabs.Tab disabled>Disabled Tab</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>Content 1</Tabs.Panel>
      <Tabs.Panel>Content 2</Tabs.Panel>
      <Tabs.Panel>Content 3</Tabs.Panel>
      <Tabs.Panel>Content 4</Tabs.Panel>
    </Tabs.Panels>
  </Tabs.Root>
);

export const Default = Template.bind({});

export const Controlled = () => {
  const [current, setCurrent] = React.useState(0);

  return (
    <Tabs.Root current={current}>
      <Tabs.List>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Content 1</Tabs.Panel>
        <Tabs.Panel>Content 2</Tabs.Panel>
        <Tabs.Panel>Content 3</Tabs.Panel>
      </Tabs.Panels>
    </Tabs.Root>
  );
};
