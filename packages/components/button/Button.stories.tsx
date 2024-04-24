import React, { type ComponentProps } from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

type Args = ComponentProps<typeof Button>;

export const Basic = (props: Args) => <Button {...props} />;
Basic.argTypes = {
  children: {
    control: "text",
    type: { name: "ReactNode", required: false },
  },
};
Basic.args = {
  children: "Button",
};

export const Variants = (props: Args) => (
  <>
    <Button {...props} variant="solid" colorScheme="pink">
      solid
    </Button>
    <Button {...props} variant="outline" colorScheme="pink">
      outline
    </Button>
    <Button {...props} variant="ghost" colorScheme="pink">
      ghost
    </Button>
    <Button {...props} variant="link" colorScheme="pink">
      solid
    </Button>
  </>
);
Variants.argTypes = {
  children: { type: "string" },
};
Variants.args = {
  children: "Button",
};

export const Sizes = (props: Args) => (
  <>
    <Button {...props} size="xs">
      xs button
    </Button>
    <Button {...props} size="sm">
      sm button
    </Button>
    <Button {...props} size="md">
      md button
    </Button>
    <Button {...props} size="lg">
      lg button
    </Button>
  </>
);

export const ColorSchemes = (props: Args) => (
  <>
    <Button {...props} colorScheme="red">
      red
    </Button>
    <Button {...props} colorScheme="orange">
      orange
    </Button>
    <Button {...props} colorScheme="yellow">
      yellow
    </Button>
    <Button {...props} colorScheme="green">
      green
    </Button>
    <Button {...props} colorScheme="blue">
      blue
    </Button>
    <Button {...props} colorScheme="purple">
      purple
    </Button>
    <Button {...props} colorScheme="pink">
      pink
    </Button>

    <Button {...props} colorScheme="teal">
      teal
    </Button>
    <Button {...props} colorScheme="gray">
      gray
    </Button>
  </>
);

export const Disabled = (props: Args) => (
  <>
    <Button {...props} disabled>
      disabled
    </Button>
    <Button {...props} disabled variant="outline">
      disabled
    </Button>
  </>
);

export const Width = (props: Args) => (
  <>
    <Button {...props} width="full">
      full
    </Button>
    <Button {...props}>auto</Button>
  </>
);

export const WithAddon = (props: Args) => (
  <>
    <Button {...props} leftAddon={<div>🐶</div>}>
      Left Icon
    </Button>
    <Button {...props} rightAddon={<div>🐶</div>}>
      Right Icon
    </Button>
    <Button {...props} leftAddon={<div>🐶</div>} rightAddon={<div>😾</div>}>
      Left Icon and Right Icon
    </Button>
  </>
);
