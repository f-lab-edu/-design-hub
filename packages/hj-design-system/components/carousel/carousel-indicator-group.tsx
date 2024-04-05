import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { useCarousel } from "./carousel-context";

type CarouselIndicatorGroupProps = HTMLAttributes<HTMLDivElement>;

export const CarouselIndicatorGroup = forwardRef(
  function CarouselIndicatorGroup(
    props: CarouselIndicatorGroupProps,
    ref?: ForwardedRef<HTMLDivElement>
  ) {
    const { children, ...rest } = props;

    useCarousel();

    return (
      <div ref={ref} {...rest}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return null;
          }
          return cloneElement(child as ReactElement, {
            index,
          });
        })}
      </div>
    );
  }
);
