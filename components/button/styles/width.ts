import { type ElementType } from "react";

import { css } from "@emotion/react";

import { type ButtonProps } from "../types";

export const getWidth = (
  width: Pick<ButtonProps<ElementType>, "width">["width"],
) => {
  if (!width) return css({ width: "auto" });
  if (width === "full") return css({ width: "100%" });
  return css({ width });
};
