/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { TabsContext } from "./tabs-context";
import { getSizeStyle } from "./styles/tabs-tab";

type TabsPanelProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      id?: string;
      index?: number;
    }
  >;

export const TabsPanel = forwardRef(function TabsPanel<
  C extends ElementType = "div",
>(props: TabsPanelProps<C>, ref?: PolymorphicRef<C>) {
  const tabsContext = useContext(TabsContext);

  const { as, id, index, style, ...rest } = props;

  const Component = as || "div";

  const combinedStyles = useMemo(() => {
    if (style) return [getSizeStyle(tabsContext?.size), style];
    return [getSizeStyle(tabsContext?.size)];
  }, [style, tabsContext?.size]);

  if (!tabsContext) {
    throw new Error("Tabs.Panel must be rendered within a Tabs.Root.");
  }

  return (
    <>
      {tabsContext.current === index && (
        <Component
          id={id}
          ref={ref}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${index}`}
          css={combinedStyles}
          {...rest}
        />
      )}
    </>
  );
});
