/** @jsxImportSource @emotion/react */

import {
  cloneElement,
  type CSSProperties,
  type ElementType,
  forwardRef,
  isValidElement,
  type ReactElement,
} from "react";

import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import Button from "./Button";
import {
  type ButtonColorScheme,
  type ButtonSizeSet,
  type ButtonVariants,
} from "./types";

type IconButtonProps<C extends ElementType = "button"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The label for the button.
       */
      "aria-label": string;
      /**
       * The icon to be used in the button.
       * @type ReactElement
       */
      icon?: ReactElement;
      /**
       * The size of the button.
       * @default md
       */
      size?: ButtonSizeSet;
      /**
       * The color scheme of the button.
       * @default blue
       */
      colorScheme?: ButtonColorScheme;
      /**
       * The variant of the button.
       * @default solid
       */
      variant?: ButtonVariants;
      /**
       * The styles of the button.
       */
      styles?: CSSProperties;
    }
  >;

const IconButton = forwardRef(function IconButton<
  C extends ElementType = "button",
>(props: IconButtonProps<C>, ref?: PolymorphicRef<C>) {
  const { icon, children, "aria-label": ariaLabel, ...rest } = props;

  const element = icon || children;

  const _children = isValidElement(element)
    ? cloneElement(element as any, {
        "aria-hidden": true,
        focusable: false,
      })
    : null;

  return (
    <Button ref={ref} aria-label={ariaLabel} {...rest}>
      {_children}
    </Button>
  );
});

export default IconButton;
