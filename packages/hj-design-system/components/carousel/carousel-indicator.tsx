import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type CarouselIndicatorProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * The index of the slide.
   */
  index?: number;
};

export const CarouselIndicator = forwardRef(function CarouselIndicator(
  props: CarouselIndicatorProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  return <button ref={ref} {...props} />;
});
