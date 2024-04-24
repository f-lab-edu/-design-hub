/** @jsxImportSource @emotion/react */

import {
  type ElementType,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import {
  getAffixSizeStyles,
  getAffixVariantStyles,
  inputAffixBaseStyle,
} from "./styles";

type InputSuffixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputSuffix = forwardRef(function InputSuffix<
  C extends ElementType = "div",
>(props: InputSuffixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, children, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const getSuffixBorderStyles = (hasAddonAfter?: boolean) => {
    const baseBorders = css({
      borderLeft: "none",
      borderTopRightRadius: "6px",
      borderBottomRightRadius: "6px",
    });

    if (hasAddonAfter) {
      return css({
        borderLeft: "none",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      });
    }

    return baseBorders;
  };

  const styles = useMemo(
    () => [
      inputAffixBaseStyle,
      getAffixSizeStyles(inputContext?.size),
      getAffixVariantStyles(inputContext?.variant),
      getSuffixBorderStyles(inputContext?.hasAddonAfter),

      style,
    ],
    [
      style,
      inputContext?.size,
      inputContext?.variant,
      inputContext?.hasAddonAfter,
    ]
  );

  useEffect(() => {
    inputContext?.setHasSuffix(Boolean(children));
    return () => inputContext?.setHasSuffix(false);
  }, [children, inputContext]);

  return (
    <Component css={styles} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default InputSuffix;
