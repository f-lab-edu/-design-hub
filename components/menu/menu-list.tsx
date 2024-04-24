/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { AnimatePresence, motion } from "framer-motion";
import {
  Children,
  ComponentProps,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { defaultAnimationVariants } from "../../../theme/foundations/animation";
import { MenuContext } from "./menu-context";
import {
  getNavDirectionStyles,
  listBaseStyles,
  navBaseStyles,
} from "./styles/menu-list";

type AnimatePresenceProps = ComponentProps<typeof AnimatePresence>;

type MenuListProps<C extends ElementType = "ul"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * whether to disable animation
       * @default false
       */
      disableAnimation?: boolean;
      /**
       * @description AnimatePresence props
       */
      animatePresenceProps?: AnimatePresenceProps;
    }
  >;

export const MenuList = forwardRef(function MenuList<
  C extends ElementType = "ul",
>(props: MenuListProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, disableAnimation, style, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const Component = disableAnimation ? as || "ul" : motion(as || "ul");

  const combinedNavStyle = useMemo(() => {
    return style
      ? [
          navBaseStyles,
          getNavDirectionStyles(menuContext?.direction || "vertical"),
          style,
        ]
      : [
          navBaseStyles,
          getNavDirectionStyles(menuContext?.direction || "vertical"),
        ];
  }, [style, navBaseStyles]);

  const combinedListStyle = useMemo(() => {
    return style ? [listBaseStyles, style] : listBaseStyles;
  }, [style, listBaseStyles]);

  if (!menuContext) {
    throw new Error("MenuList should be used within a MenuRoot");
  }

  return (
    <>
      {menuContext?.isOpen && (
        <nav css={combinedNavStyle}>
          <Component
            role="menu"
            animate={!disableAnimation ? "animate" : undefined}
            exit={!disableAnimation ? "exit" : undefined}
            initial={!disableAnimation ? "initial" : undefined}
            variants={!disableAnimation ? defaultAnimationVariants : undefined}
            css={combinedListStyle}
            ref={ref}
            {...rest}
          >
            {Children.map(children, (child, idx) => {
              return cloneElement(child as ReactElement, {
                handleChange: () => {
                  menuContext.changeCurrent(idx);
                  menuContext.onSelect?.(idx);
                },
                isSelected: menuContext.current === idx,
              });
            })}
          </Component>
        </nav>
      )}
    </>
  );
});
