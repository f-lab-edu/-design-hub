/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useMemo } from "react";
import { modalHeaderBaseStyle } from "../styles/modal-header";

type ModalTitleProps<C extends ElementType = "h1"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalTitle = forwardRef(function ModalTitle<
  C extends ElementType = "h1",
>(props: ModalTitleProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, ...rest } = props;

  const Component = as || "h1";

  const combinedStyles = useMemo(() => {
    if (style) return [modalHeaderBaseStyle, style];
    return modalHeaderBaseStyle;
  }, [style]);

  return (
    <Component ref={ref} css={combinedStyles} {...rest}>
      {children}
    </Component>
  );
});
