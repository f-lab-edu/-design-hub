/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  Children,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
} from "react";
import { ComboboxContext } from "./combobox-context";
import { AnimatePresenceProps, motion } from "framer-motion";
import { defaultAnimationVariants } from "../../../theme/foundations/animation";
import { listBaseStyle } from "./styles/combobox-list";

type ComboboxListProps<C extends ElementType = "ul"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * whether to disable animation
       * @default false
       */
      disableAnimation?: boolean;
      /**
       * AnimatePresence props using framer-motion
       */
      animatePresenceProps?: AnimatePresenceProps;
    }
  >;

export const ComboboxList = forwardRef(function ComboboxList<
  C extends ElementType = "ul",
>(props: ComboboxListProps<C>, ref: PolymorphicRef<C>) {
  const {
    as,
    children,
    disableAnimation,
    animatePresenceProps,
    style,
    ...rest
  } = props;

  const comboboxContext = useContext(ComboboxContext);

  const Copmonent = disableAnimation ? as || "ul" : motion(as || "ul");

  const styles = useMemo(() => {
    return style ? [listBaseStyle, style] : listBaseStyle;
  }, [listBaseStyle, style]);

  if (!comboboxContext) {
    throw new Error("Combobox.List should be used within a Combobox.Root");
  }

  return (
    <>
      {comboboxContext.isOpen && (
        <Copmonent
          ref={ref}
          role="listbox"
          animate={!disableAnimation ? "animate" : undefined}
          variants={!disableAnimation ? defaultAnimationVariants : undefined}
          tabIndex={0}
          css={styles}
          {...rest}
        >
          {Children.map(children, (child, index) => {
            if (!isValidElement(child)) return null;
            return child.props.value
              .toLowerCase()
              .includes(comboboxContext.current?.toLowerCase())
              ? cloneElement(child as ReactElement, {
                  handleChange: comboboxContext.changeCurrent,
                  index,
                })
              : null;
          })}
        </Copmonent>
      )}
    </>
  );
});
