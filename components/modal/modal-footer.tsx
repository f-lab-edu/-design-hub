/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { modalFooterBaseStyle } from "./styles/modal-footer";
import { ModalContext } from "./modal-context";

type ModalFooterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalFooter = forwardRef(function ModalFooter<
  C extends ElementType = "div",
>(props: ModalFooterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, ...rest } = props;
  const Component = as || "div";

  const modalContext = useContext(ModalContext);

  const combinedStyles = useMemo(() => {
    if (style) return [modalFooterBaseStyle, style];
    return modalFooterBaseStyle;
  }, [style]);

  if (!modalContext)
    throw new Error("Modal.Footer must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={combinedStyles} {...rest}>
      {children}
    </Component>
  );
});
