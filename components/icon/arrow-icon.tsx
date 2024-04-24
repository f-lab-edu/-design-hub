/** @jsxImportSource @emotion/react */

import { useMemo, ElementType, forwardRef } from "react";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { getDirectionStyles } from "./styles/arrow-icon";

export type ArrowDirection = "down" | "left" | "right" | "up";

type ArrowIconProps<C extends ElementType = "span"> =
  PolymorphicComponentPropsWithRef<C>;

export const ArrowIcon = forwardRef(function ArrowIcon<
  C extends ElementType = "span",
>(props: ArrowIconProps<C>, ref?: PolymorphicRef<C>) {
  const { as, direction = "down", style, ...rest } = props;

  const Component = as || "span";

  const combinedStyles = useMemo(() => {
    return style
      ? [getDirectionStyles(direction), style]
      : getDirectionStyles(direction);
  }, [style, direction]);

  return (
    <Component ref={ref} css={combinedStyles} {...rest}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 5L8 12L15 19" stroke="#343A40" strokeWidth="2" />
      </svg>
    </Component>
  );
});
