import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";
import { type ButtonSizeSet } from "../types";

export const getSize = (size: ButtonSizeSet = "md"): SerializedStyles => {
  return SIZE_MAP[size];
};

const XsmallSize = css({
  fontSize: foundations.fontSizes.xs,
  paddingBlockStart: foundations.space[1],
  paddingBlockEnd: foundations.space[1],
});

const SmallSize = css({
  fontSize: foundations.fontSizes.sm,
  paddingBlockStart: foundations.space[2],
  paddingBlockEnd: foundations.space[2],
});

const MediumSize = css({
  fontSize: foundations.fontSizes.md,
  paddingBlockStart: foundations.space[3],
  paddingBlockEnd: foundations.space[3],
});

const LargeSizes = css({
  fontSize: foundations.fontSizes.lg,
  paddingBlockStart: foundations.space[4],
  paddingBlockEnd: foundations.space[4],
});

export const SIZE_MAP: Record<ButtonSizeSet, SerializedStyles> = {
  xs: XsmallSize,
  sm: SmallSize,
  md: MediumSize,
  lg: LargeSizes,
};
