/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { CarouselProvider } from "./carousel-context";
import { rootBaseStyle } from "./style/carousel-root";
import { css } from "@emotion/react";

type CarouselRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The current index of the carousel.
   */
  current?: number;
};

export const CarouselRoot = forwardRef(function CarouselRoot(
  props: CarouselRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, current, style, ...rest } = props;

  const styles = useMemo(() => {
    if (style) return css(rootBaseStyle, { ...style });
    return rootBaseStyle;
  }, [style]);

  return (
    <CarouselProvider current={current}>
      <div ref={ref} aria-roledescription="carousel" css={styles} {...rest}>
        {children}
      </div>
    </CarouselProvider>
  );
});
