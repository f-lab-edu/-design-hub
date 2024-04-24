import { css } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";
import { type InputSizeSet } from "../types";
import { FONT_SIZE_MAP, HEIGHT_MAP, PADDING_MAP } from "./base-input";

export const inputAddonBaseStyle = css({
  flex: "0 0 auto",
  width: "auto",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  background: foundations.colors.gray[100],
});

export const getAddonSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const padding = PADDING_MAP[size];
  const fontSize = FONT_SIZE_MAP[size];
  return css({
    height,
    padding,
    fontSize,
  });
};
