/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { ModalContext } from "./modal-context";
import { getModalBodySizeStyles } from "./styles/modal-body";

type ModalBodyProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalBody = forwardRef(function ModalBody<
  C extends ElementType = "div",
>(props: ModalBodyProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, ...rest } = props;
  const Component = as || "div";

  const modalContext = useContext(ModalContext);

  const cominedStyles = useMemo(() => {
    if (style) return [getModalBodySizeStyles(modalContext?.size), style];
    return [getModalBodySizeStyles(modalContext?.size)];
  }, [style, modalContext?.size]);

  if (!modalContext)
    throw new Error("Modal.Body must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={cominedStyles} {...rest}>
      {children}
    </Component>
  );
});
