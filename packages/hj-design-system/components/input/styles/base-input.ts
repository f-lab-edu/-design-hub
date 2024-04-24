import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";
import { type InputAddonProps, type InputAffixProps } from "../base-input";
import { type InputSizeSet, type InputVariant } from "../types";

export const baseStyle = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  minWidth: "0",
  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  border: `1px solid ${foundations.colors.gray[100]}`,
  outline: "none",
  boxSizing: "border-box",
});

export const getSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const fontSize = FONT_SIZE_MAP[size];
  const padding = PADDING_MAP[size];
  return css({
    height,
    fontSize,
    padding,
  });
};

export const HEIGHT_MAP: Record<InputSizeSet, string> = {
  xs: foundations.space[6],
  sm: foundations.space[8],
  md: foundations.space[10],
  lg: foundations.space[12],
};

export const FONT_SIZE_MAP: Record<InputSizeSet, string> = {
  xs: foundations.fontSizes.xs,
  sm: foundations.fontSizes.sm,
  md: foundations.fontSizes.md,
  lg: foundations.fontSizes.lg,
};

export const PADDING_MAP: Record<InputSizeSet, string> = {
  xs: `0 ${foundations.space[2]}`,
  sm: `0 ${foundations.space[3]}`,
  md: `0 ${foundations.space[4]}`,
  lg: `0 ${foundations.space[5]}`,
};

export const getVariantStyles = (variant: InputVariant = "outline") => {
  return css(BORDER_MAP[variant], css({ background: BACKGROUND_MAP[variant] }));
};

const BORDER_MAP: Record<InputVariant, SerializedStyles> = {
  outline: css({
    border: `1px solid ${foundations.colors.gray[100]}`,
  }),
  filled: css({
    border: "1px solid transparent",
  }),
  flushed: css({
    border: "none",
    borderBottom: `1px solid ${foundations.colors.gray[100]}`,
  }),
  unstyled: css({
    border: "none",
  }),
};

export const BACKGROUND_MAP: Record<InputVariant, string> = {
  outline: "transparent",
  filled: foundations.colors.gray[100],
  flushed: "transparent",
  unstyled: "transparent",
};

export const styleWithAffix = (affix?: InputAffixProps) => {
  if (affix?.prefix && affix?.suffix) {
    return css({
      borderLeft: "none",
      borderRight: "none",
    });
  }
  if (affix?.prefix) {
    return css({
      borderLeft: "none",
    });
  }
  if (affix?.suffix) {
    return css({
      borderRight: "none",
    });
  }
  return css({
    borderRadius: "6px",
  });
};

export const styleWithAddon = (addon?: InputAddonProps) => {
  if (addon?.before && addon?.after) {
    return css({
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    });
  }
  if (addon?.before) {
    return css({
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    });
  }
  if (addon?.after) {
    return css({
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    });
  }
};
