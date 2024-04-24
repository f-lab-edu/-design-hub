/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { MenuContext } from "./menu-context";
import { isSelectedStyle, itemBaseStyles } from "./styles/menu-item";

type MenuItemProps<C extends ElementType = "li"> =
  PolymorphicComponentPropsWithRef<C>;

export const MenuItem = forwardRef(function MenuItem<
  C extends ElementType = "li",
>(props: MenuItemProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, isSelected, onClick, handleChange, ...rest } =
    props;

  const menuContext = useContext(MenuContext);

  const Component = as || "li";

  const combinedStyle = useMemo(() => {
    return style
      ? [itemBaseStyles, isSelectedStyle(isSelected), style]
      : [itemBaseStyles, isSelectedStyle(isSelected)];
  }, [style, itemBaseStyles, isSelected]);

  if (!menuContext) {
    throw new Error("MenuItem should be used within a MenuRoot");
  }

  return (
    <Component
      ref={ref}
      css={combinedStyle}
      onClick={() => {
        handleChange();
        onClick?.();
      }}
      {...rest}
    >
      {children}
    </Component>
  );
});
