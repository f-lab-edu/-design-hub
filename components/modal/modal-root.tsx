/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  ComponentProps,
  ElementType,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import { useScrollLock } from "../../../hooks/use-scroll-lock";
import { Portal } from "../portal";
import { AnimatePresence, motion } from "framer-motion";
import { dimmedStyle } from "./styles/modal-root";
import { ModalProvider } from "./modal-context";
import { useKeyDown } from "../../../hooks/use-key-down";
import { defaultAnimationVariants } from "../../../theme/foundations/animation";

type AnimatePresenceMode = ComponentProps<typeof AnimatePresence>;

type ModalRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The children to render into the `container`.
       * @default document.body
       */
      portalContainer?: Element | DocumentFragment | null;
      /**
       * If `true`, the children will be rendered in place instead of being portaled.
       */
      disablePortal?: boolean;
      /**
       * If `true`, the modal will be open.
       */
      isOpen: boolean;
      /**
       * The wrapper element to render the modal into.
       * @default component/Portal
       */
      wrapper?: (children: ReactNode) => ReactElement;
      /**
       * @description AnimatePresence props
       * @default { mode: 'wait' }
       */
      animatePresenceProps?: AnimatePresenceMode;
      /**
       * whether to close the modal when dim is clicked
       */
      closeOnClickDim?: boolean;
      /**
       * Callback when dim is clicked
       */
      onClose: () => void;
      /**
       * Whether to disable animation
       */
      disableAnimation?: boolean;
    }
  >;

export const ModalRoot = forwardRef(function ModalRoot<
  C extends ElementType = "div",
>(props: ModalRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    isOpen,
    animatePresenceProps,
    closeOnClickDim = true,
    onClose,
    portalContainer,
    disablePortal,
    disableAnimation = false,
    ...rest
  } = props;

  const Component = disableAnimation ? as || "div" : motion(as || "div");

  useScrollLock(isOpen);

  useKeyDown({ callBackFn: onClose });

  const onClickDimDefault: MouseEventHandler = (e): void => {
    if (e.target === e.currentTarget) onClose();
  };

  const modalRoot = (
    <Component
      role="dialog"
      animate={!disableAnimation ? "animate" : undefined}
      exit={!disableAnimation ? "exit" : undefined}
      initial={!disableAnimation ? "initial" : undefined}
      css={dimmedStyle}
      variants={!disableAnimation ? defaultAnimationVariants : undefined}
      ref={ref}
      onClick={onClickDimDefault}
      {...rest}
    >
      {children}
    </Component>
  );

  return (
    <Portal portalContainer={portalContainer} disablePortal={disablePortal}>
      {isOpen && (
        <ModalProvider onClose={onClose}>
          {disableAnimation ? (
            modalRoot
          ) : (
            <AnimatePresence {...animatePresenceProps}>
              {modalRoot}
            </AnimatePresence>
          )}
        </ModalProvider>
      )}
    </Portal>
  );
});
