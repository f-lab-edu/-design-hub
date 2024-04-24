/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useEffect, useMemo } from "react";
import { ComboboxContext } from "./combobox-context";
import { getSelectedStyle, optionBaseStyle } from "./styles/combobox-option";

type ComboboxOptionProps<C extends ElementType = "li"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The value of the option
       */
      value: string;
      /**
       * change handler
       */
      handleChange?: (index: string) => void;
    }
  >;

export const ComboboxOption = forwardRef(function ComboboxOption<
  C extends ElementType = "li",
>(props: ComboboxOptionProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, handleChange, onClick, value, index, style, ...rest } =
    props;
  const Component = as || "li";
  const comboboxContext = useContext(ComboboxContext);

  const combinedStyles = useMemo(() => {
    const baseStyles = [
      optionBaseStyle,
      getSelectedStyle(comboboxContext?.currentIndex === index),
    ];
    return style ? [baseStyles, style] : baseStyles;
  }, [optionBaseStyle, style]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const optionElements = document.querySelectorAll("[role='option']");
      const activeElement = comboboxContext
        ? optionElements[comboboxContext.currentIndex]
        : null;
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "auto", block: "nearest" });
      }
    });
  }, []);

  if (!comboboxContext) {
    throw new Error("Combobox.Item should be used within a Combobox.Root");
  }

  return (
    <Component
      ref={ref}
      role="option"
      onClick={(e) => {
        handleChange?.(value);
        onClick?.(e);
        comboboxContext.changeIsOpen(false);
      }}
      tabIndex={-1}
      css={combinedStyles}
      {...rest}
    >
      {value}
      {children}
    </Component>
  );
});
