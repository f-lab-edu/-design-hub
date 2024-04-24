import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";
import { type InputSizeSet, type InputVariant } from "../types";
import { BACKGROUND_MAP, HEIGHT_MAP, PADDING_MAP } from "./base-input";

export const inputAffixBaseStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  objectFit: "contain",
  boxSizing: "border-box",
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  svg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export const getAffixSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const padding = PADDING_MAP[size];
  return css({
    height,
    padding,
  });
};

export const getAffixVariantStyles = (variant: InputVariant = "outline") => {
  const background = BACKGROUND_MAP[variant];
  const border = BORDER_MAP[variant];
  return css(css({ background }), border);
};

const BORDER_MAP: Record<InputVariant, SerializedStyles> = {
  outline: css({
    border: `1px solid ${foundations.colors.gray[100]}`,
  }),
  filled: css({
    border: "none",
  }),
  flushed: css({
    borderBottom: `1px solid ${foundations.colors.gray[100]}`,
  }),
  unstyled: css({
    border: "none",
  }),
};
