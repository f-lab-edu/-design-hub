/** @jsxImportSource @emotion/react */

import {
  cloneElement,
  type CSSProperties,
  isValidElement,
  type ReactElement,
} from "react";

import { combineStyles } from "../button/styles/button-addon";
import { type ButtonSizeSet } from "./types";

interface ButtonAddonProps {
  /**
   * The size of the icon.
   * @default md
   */
  size?: ButtonSizeSet;
  /**
   * The icon displayed in the button.
   * @type ReactElement
   */
  children: ReactElement;
  /**
   * The styles of the icon.
   */
  addonStyles?: CSSProperties;
}

const ButtonAddon = (props: ButtonAddonProps) => {
  const { size, addonStyles, children, ...rest } = props;

  const _children = isValidElement(children)
    ? cloneElement<any>(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <span css={[combineStyles(size, addonStyles)]} {...rest}>
      {_children}
    </span>
  );
};

export default ButtonAddon;
