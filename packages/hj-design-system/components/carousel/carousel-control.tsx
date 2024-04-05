/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { useCarousel } from "./carousel-context";
import { css } from "@emotion/react";
import { controlBaseStyle } from "./style/carousel-control";

type CarouselControlProps = HTMLAttributes<HTMLDivElement>;

export const CarouselControl = forwardRef(function CarouselControl(
  props: CarouselControlProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, style, ...rest } = props;
  useCarousel();

  const styles = useMemo(() => {
    if (style) return css(controlBaseStyle, { ...style });
    return controlBaseStyle;
  }, [style]);

  return (
    <div ref={ref} css={styles} {...rest}>
      {children}
    </div>
  );
});
