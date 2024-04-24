/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { TabsSizeSet, TabsDirection } from "./types";
import { TabsProvider } from "./tabs-context";
import { css } from "@emotion/react";
import { rootBaseStyle, getDirectionStyle } from "./styles/tabs-root";

type TabsRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The size of the tabs.
   * @default "md"
   */
  size?: TabsSizeSet;
  /**
   * The current selected tab index.
   * @default 0
   */
  current?: number;
  /**
   * The direction of the tabs.
   * @default "horizontal"
   */
  direction?: TabsDirection;
};

export const TabsRoot = forwardRef(function TabsRoot(
  props: TabsRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const {
    children,
    size = "md",
    current,
    direction = "horizontal",
    style,
    ...rest
  } = props;

  const combinedStyles = useMemo(
    () =>
      style
        ? css(rootBaseStyle, getDirectionStyle(direction), { ...style })
        : [rootBaseStyle, getDirectionStyle(direction)],
    [style, direction]
  );

  return (
    <TabsProvider size={size} current={current} direction={direction}>
      <div ref={ref} css={combinedStyles} {...rest}>
        {children}
      </div>
    </TabsProvider>
  );
});
