/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef } from "react";

import {
  type PolymorphicComponentProp,
  type PolymorphicRef,
} from "components/polymorphic";

import InputProvider from "./input-context";
import { rootBaseStyles } from "./styles";

type InputGroupProps<C extends ElementType> = PolymorphicComponentProp<C>;

const InputGroup = forwardRef(function InputGroup<
  C extends ElementType = "div",
>(props: InputGroupProps<C>, ref?: PolymorphicRef<C>) {
  const Component = props.as || "div";
  return (
    <InputProvider>
      <Component ref={ref} css={rootBaseStyles} {...props} />
    </InputProvider>
  );
});

export default InputGroup;
