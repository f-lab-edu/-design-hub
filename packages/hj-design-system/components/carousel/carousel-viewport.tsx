/** @jsxImportSource @emotion/react */

import {
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useCarousel } from "./carousel-context";
import { css } from "@emotion/react";
import { viewportBaseStyle } from "./style/carousel-viewport";
import { CarouselViewportProvider } from "./carousel-viewport-context";
import { mergeRefs } from "../../utils/mergeRefs";

type CarouselViewportProps = HTMLAttributes<HTMLDivElement>;

export const CarouselViewport = forwardRef(function CarouselViewport(
  props: CarouselViewportProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, style, ...rest } = props;

  useCarousel();

  const { carouselRef, carouselWidth } = useViewport();

  const styles = useMemo(() => {
    if (style) return css(viewportBaseStyle, { ...style });
    return viewportBaseStyle;
  }, [style]);

  return (
    <CarouselViewportProvider width={carouselWidth}>
      <div ref={mergeRefs([ref, carouselRef])} css={styles} {...rest}>
        {children}
      </div>
    </CarouselViewportProvider>
  );
});

const useViewport = () => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateCarouselWidth = () => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.clientWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateCarouselWidth);
    updateCarouselWidth();
    return () => {
      window.removeEventListener("resize", updateCarouselWidth);
    };
  }, []);

  return { carouselRef, carouselWidth };
};
