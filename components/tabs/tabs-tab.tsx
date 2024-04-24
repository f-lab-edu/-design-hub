/** @jsxImportSource @emotion/react */

import {
  ComponentProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { TabsContext, TabsProvider } from "./tabs-context";
import { getSizeStyle, tabBaseStyle } from "./styles/tabs-tab";
import { css } from "@emotion/react";

type TabChangeHandler = ComponentProps<typeof TabsProvider>["onCurrentChange"];

type TabsTabProps = HTMLAttributes<HTMLButtonElement> & {
  handleChange?: TabChangeHandler;
  index?: number;
  id?: string;
  disabled?: boolean;
};

export const TabsTab = forwardRef(function TabsTab(
  props: TabsTabProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const { handleChange, index, onClick, id, disabled, style, ...rest } = props;

  const tabsContext = useContext(TabsContext);

  const combinedStyles = useMemo(() => {
    return style
      ? css(tabBaseStyle, getSizeStyle(tabsContext?.size), { ...style })
      : [tabBaseStyle, getSizeStyle(tabsContext?.size)];
  }, [style, tabsContext?.size]);

  if (!tabsContext) {
    throw new Error("Tabs.Tab must be rendered within a Tabs.Root.");
  }

  return (
    <button
      disabled={disabled}
      role="tab"
      tabIndex={tabsContext?.current === index ? 0 : -1}
      aria-selected={tabsContext?.current === index}
      aria-disabled={disabled}
      id={id}
      ref={ref}
      onClick={(e) => {
        if (index !== undefined) {
          handleChange?.(index);
        }
        onClick?.(e);
      }}
      css={combinedStyles}
      {...rest}
    />
  );
});
