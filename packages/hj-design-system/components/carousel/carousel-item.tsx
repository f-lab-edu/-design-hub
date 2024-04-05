/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, HTMLAttributes, forwardRef, useMemo } from "react";
import { useCarousel } from "./carousel-context";
import { itemBaseStyle } from "./style/carousel-item";
import { css } from "@emotion/react";

type CarouselItemProps<C extends ElementType = "div"> = HTMLAttributes<C> &
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The index of the item.
       */
      index?: number;
    }
  >;

export const CarouselItem = forwardRef(function CarouselItem<
  C extends ElementType = "div",
>(props: CarouselItemProps<C>, ref?: PolymorphicRef<C>) {
  const { index, style, ...rest } = props;

  useCarousel();

  const styles = useMemo(() => {
    if (style) return css(itemBaseStyle, { ...style });
    return itemBaseStyle;
  }, [style]);

  return (
    <div
      aria-roledescription="slide"
      role="tabpanel"
      aria-label={index}
      ref={ref}
      css={styles}
      {...rest}
    />
  );
});
