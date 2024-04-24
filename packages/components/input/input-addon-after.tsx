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

import { getAddonSizeStyles, inputAddonBaseStyle } from "./styles/input-addon";
import { InputContext } from "./input-context";

type InputAddonAfterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputAddonAfter = forwardRef(function InputAddonAfter<
  C extends ElementType = "div",
>(props: InputAddonAfterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, children, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const addonBeforeStyle = css({
    borderRadius: "0 6px 6px 0",
  });

  const styles = useMemo(
    () => [
      inputAddonBaseStyle,
      addonBeforeStyle,
      getAddonSizeStyles(inputContext?.size),
      style,
    ],
    [style, inputContext?.size, addonBeforeStyle]
  );

  useEffect(() => {
    inputContext?.setHasAddonAfter(Boolean(children));
    return () => inputContext?.setHasAddonAfter(false);
  }, [children, inputContext]);

  return (
    <Component css={styles} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default InputAddonAfter;
