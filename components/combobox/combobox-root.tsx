import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { ComboboxProvider } from "./combobox-context";

type ComboboxRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The current selected option index.
   */
  current?: string;
};

export const ComboboxRoot = forwardRef(function ComboboxRoot(
  props: ComboboxRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, current, ...rest } = props;

  return (
    <ComboboxProvider current={current}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </ComboboxProvider>
  );
});
