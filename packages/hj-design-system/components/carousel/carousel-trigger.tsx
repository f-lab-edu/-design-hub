/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { useCarousel } from "./carousel-context";
import { css } from "@emotion/react";
import { triggerBaseStyle } from "./style/carousel-trigger";

type ControlType = "prev" | "next";

type CarouselTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  type: ControlType;
};

export const CarouselTrigger = forwardRef(function CarouselTrigger(
  props: CarouselTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { type, onClick, style, ...rest } = props;

  const context = useCarousel();

  const handleClick = () => {
    if (type === "prev") {
      context.changeCurrent(Math.max(0, context.current - 1));
    } else {
      context.changeCurrent(Math.min(context.total - 1, context.current + 1));
    }
  };

  const styles = useMemo(() => {
    if (style) return css(triggerBaseStyle, { ...style });
    return triggerBaseStyle;
  }, [style]);

  return (
    <button
      css={styles}
      ref={ref}
      onClick={(e) => {
        handleClick();
        if (onClick) {
          onClick(e);
        }
      }}
      {...rest}
    />
  );
});
