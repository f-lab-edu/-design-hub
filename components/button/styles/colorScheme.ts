import { type ElementType } from "react";

import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";
import {
  type ButtonColorScheme,
  type ButtonProps,
  type ButtonVariants,
} from "../types";

type ColorSchemeWithVariant = {
  [variant in ButtonVariants]: SerializedStyles;
};

const createSolidColorScheme = (color: ButtonColorScheme) => {
  const baseColor = foundations.colors[color];
  return css({
    color: foundations.colors.white,
    border: "none",
    backgroundColor: baseColor[500],
    ":disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    "@media(hover:hover)": {
      "&:hover:enabled": {
        backgroundColor: baseColor[600],
      },
    },
    ":active:enabled": {
      backgroundColor: baseColor[700],
    },
  });
};

const createOutlineColorScheme = (color: ButtonColorScheme) => {
  const baseColor = foundations.colors[color];

  return css({
    color: baseColor[500],
    border: `1px solid ${baseColor[500]}`,
    backgroundColor: "transparent",
    ":disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    "@media(hover:hover)": {
      "&:hover:enabled": {
        color: foundations.colors.white,
        backgroundColor: baseColor[500],
      },
    },
    ":active:enabled": {
      backgroundColor: baseColor[600],
    },
  });
};

const createGhostColorScheme = (color: ButtonColorScheme) => {
  const baseColor = foundations.colors[color];
  return css({
    color: baseColor[600],
    border: "none",
    backgroundColor: "transparent",
    ":disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    "@media(hover:hover)": {
      "&:hover:enabled": {
        color: baseColor[500],
        backgroundColor: baseColor[50],
      },
    },
    ":active:enabled": {
      backgroundColor: baseColor[100],
    },
  });
};

const createLinkColorScheme = (color: ButtonColorScheme) => {
  const baseColor = foundations.colors[color];
  return css({
    color: baseColor[500],
    border: "none",
    backgroundColor: "transparent",
    ":disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    "@media(hover:hover)": {
      "&:hover:enabled": {
        color: baseColor[600],
        textDecoration: "underline",
      },
    },
    ":active:enabled": {
      color: baseColor[700],
    },
  });
};

const BUTTON_COLOR_SCHEME_MAP: Record<
  ButtonColorScheme,
  ColorSchemeWithVariant
> = {
  blue: {
    solid: createSolidColorScheme("blue"),
    outline: createOutlineColorScheme("blue"),
    ghost: createGhostColorScheme("blue"),
    link: createLinkColorScheme("blue"),
  },
  gray: {
    solid: createSolidColorScheme("gray"),
    outline: createOutlineColorScheme("gray"),
    ghost: createGhostColorScheme("gray"),
    link: createLinkColorScheme("gray"),
  },
  teal: {
    solid: createSolidColorScheme("teal"),
    outline: createOutlineColorScheme("teal"),
    ghost: createGhostColorScheme("teal"),
    link: createLinkColorScheme("teal"),
  },
  green: {
    solid: createSolidColorScheme("green"),
    outline: createOutlineColorScheme("green"),
    ghost: createGhostColorScheme("green"),
    link: createLinkColorScheme("green"),
  },
  red: {
    solid: createSolidColorScheme("red"),
    outline: createOutlineColorScheme("red"),
    ghost: createGhostColorScheme("red"),
    link: createLinkColorScheme("red"),
  },
  orange: {
    solid: createSolidColorScheme("orange"),
    outline: createOutlineColorScheme("orange"),
    ghost: createGhostColorScheme("orange"),
    link: createLinkColorScheme("orange"),
  },
  yellow: {
    solid: createSolidColorScheme("yellow"),
    outline: createOutlineColorScheme("yellow"),
    ghost: createGhostColorScheme("yellow"),
    link: createLinkColorScheme("yellow"),
  },
  pink: {
    solid: createSolidColorScheme("pink"),
    outline: createOutlineColorScheme("pink"),
    ghost: createGhostColorScheme("pink"),
    link: createLinkColorScheme("pink"),
  },
  purple: {
    solid: createSolidColorScheme("purple"),
    outline: createOutlineColorScheme("purple"),
    ghost: createGhostColorScheme("purple"),
    link: createLinkColorScheme("purple"),
  },
};

export const getColorScheme = (
  colorScheme: Pick<
    ButtonProps<ElementType>,
    "colorScheme"
  >["colorScheme"] = "blue",
  variant: Pick<ButtonProps<ElementType>, "variant">["variant"] = "solid",
) => BUTTON_COLOR_SCHEME_MAP[colorScheme][variant];
