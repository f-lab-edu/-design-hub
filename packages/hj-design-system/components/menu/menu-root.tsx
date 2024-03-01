/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { Children, ElementType, forwardRef, useMemo } from "react";
import { MenuProvider } from "./menu-context";
import { rootBaseStyles } from "./styles/menu-root";

export type Direction = "vertical" | "horizontal";

type MenuRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The direction of the menu
       * @default "vertical"
       */
      direction?: Direction;
      /**
       * If ture, the menu will be opened by default
       * @default false
       */
      defaultOpen?: boolean;
    }
  >;

const MINIMUM_CHILDREN_COUNT = 2;

export const MenuRoot = forwardRef(function MenuRoot<
  C extends ElementType = "div",
>(props: MenuRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    style,
    direction = "vertical",
    defaultOpen,
    ...rest
  } = props;
  const Component = as || "div";

  const combinedStyle = useMemo(() => {
    const baseStyles = [rootBaseStyles];
    return style ? [baseStyles, style] : baseStyles;
  }, [style, rootBaseStyles, direction]);

  if (Children.count(children) < MINIMUM_CHILDREN_COUNT) {
    throw new Error(
      `MenuRoot should have at least ${MINIMUM_CHILDREN_COUNT} children. Did you forget to add MenuTrigger, MenuList?`
    );
  }

  return (
    <MenuProvider direction={direction} defaultOpen={defaultOpen}>
      <Component ref={ref} css={combinedStyle} {...rest}>
        {children}
      </Component>
    </MenuProvider>
  );
});
