import { css } from "@emotion/react";
import { ArrowDirection } from "../arrow-icon";

const DIRECTION_DEGREE: Record<ArrowDirection, number> = {
    left: 0,
    right: 180,
    up: 90,
    down: 270,
  } as const;

export const getDirectionStyles = (direction: ArrowDirection) => css({
    transform: `rotate(${DIRECTION_DEGREE[direction]}deg)`
});