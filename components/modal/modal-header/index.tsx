/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { ModalContext } from "../modal-context";
import { modalHeaderBaseStyle } from "../styles/modal-header";

type ModalHeaderProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalHeader = forwardRef(function ModalHeader<
  C extends ElementType = "div",
>(props: ModalHeaderProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, ...rest } = props;

  const Component = as || "div";

  const modalContext = useContext(ModalContext);

  const combinedStyles = useMemo(() => {
    if (style) return [modalHeaderBaseStyle, style];
    return modalHeaderBaseStyle;
  }, [style]);

  if (!modalContext)
    throw new Error("Modal.Header must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={combinedStyles} {...rest}>
      {children}
    </Component>
  );
});
