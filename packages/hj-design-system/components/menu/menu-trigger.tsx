/** @jsxImportSource @emotion/react */

import { PolymorphicRef } from "components/polymorphic";
import {
  type MouseEvent,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
  forwardRef,
  useContext,
  useMemo,
  useRef,
} from "react";
import { MenuContext } from "./menu-context";
import { triggerBaseStyle } from "./styles/menu-trigger";
import { useClickOutSide } from "../../../hooks/use-click-outside";
import { css } from "@emotion/react";

interface MenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * right addon
   */
  rightAddon?: ReactNode;
}

export const MenuTrigger = forwardRef(function MenuTrigger<
  C extends ElementType = "button",
>(props: MenuTriggerProps, ref?: PolymorphicRef<C>) {
  const { children, onClick, style, rightAddon, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const originalRef = useRef<HTMLButtonElement>(null);

  const menuTriggerRef = ref ? ref : originalRef;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (menuContext) {
      menuContext.toggle();
    }
  };

  const combinedStyle = useMemo(() => {
    return style
      ? css([triggerBaseStyle, { ...style }])
      : css(triggerBaseStyle);
  }, [style, triggerBaseStyle]);

  useClickOutSide({
    enabled: menuContext?.isOpen || !!menuContext?.defaultOpen,
    targetRef: menuTriggerRef,
    onClickOutside: () => menuContext?.changeIsOpen(false),
  });

  if (!menuContext) {
    throw new Error("MenuTrigger should be used within a MenuRoot");
  }

  return (
    <button
      ref={menuTriggerRef}
      onClick={handleClick}
      css={combinedStyle}
      {...rest}
    >
      {children}
      {rightAddon}
    </button>
  );
});
