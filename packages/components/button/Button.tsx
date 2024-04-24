/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useMemo } from "react";

import { css } from "@emotion/react";
import { type PolymorphicRef } from "components/polymorphic";

import { foundations } from "../../../theme/foundations";
import ButtonAddon from "./ButtonAddon";
import { base, getColorScheme, getSize, getWidth } from "./styles";
import { type ButtonProps } from "./types";

const Button = forwardRef(function Button<C extends ElementType = "button">(
  {
    variant = "solid",
    size,
    children,
    width,
    colorScheme,
    as,
    leftAddon,
    rightAddon,
    addonStyles,
    onClick,
    disabled,
    styles,
    ...rest
  }: ButtonProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "button";

  const buttonStyle = useMemo(() => {
    const defaultStyles = [
      base,
      getSize(size),
      getWidth(width),
      getColorScheme(colorScheme, variant),
    ];

    return styles ? [...defaultStyles, css({ ...styles })] : defaultStyles;
  }, [colorScheme, size, styles, variant, width]);

  const contentProps = {
    size,
    variant,
    colorScheme,
    leftAddon,
    rightAddon,
    addonStyles,
    children,
    ref,
  };

  return (
    <Component
      css={buttonStyle}
      ref={ref}
      size={size}
      variant={variant}
      width={width}
      colorScheme={colorScheme}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent {...contentProps} />
    </Component>
  );
});

type ButtonContentProps = Pick<
  ButtonProps<ElementType>,
  | "leftAddon"
  | "rightAddon"
  | "children"
  | "addonStyles"
  | "size"
  | "variant"
  | "colorScheme"
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftAddon, rightAddon, children, addonStyles, size } = props;

  const MARGIN_SIZE_MAP = {
    xs: foundations.space[1],
    sm: foundations.space[2],
    md: foundations.space[3],
    lg: foundations.space[4],
  };

  return (
    <>
      {leftAddon && (
        <ButtonAddon
          size={size}
          addonStyles={{
            marginRight: MARGIN_SIZE_MAP[size || "md"],
            ...addonStyles,
          }}
        >
          {leftAddon}
        </ButtonAddon>
      )}
      {children}
      {rightAddon && (
        <ButtonAddon
          size={size}
          addonStyles={{
            marginLeft: MARGIN_SIZE_MAP[size || "md"],
            ...addonStyles,
          }}
        >
          {rightAddon}
        </ButtonAddon>
      )}
    </>
  );
};

export default Button;
