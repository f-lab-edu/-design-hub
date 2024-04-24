import {
  Children,
  ComponentProps,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
} from "react";
import { TabsContext } from "./tabs-context";
import { TabsPanel } from "./tabs-panel";

type TabsPanelsProps = HTMLAttributes<HTMLDivElement>;

type TabPanel = ComponentProps<typeof TabsPanel>;

export const TabsPanels = forwardRef<HTMLDivElement, TabsPanelsProps>(
  function TabsPanels(
    props: TabsPanelsProps,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    const tabsContext = useContext(TabsContext);

    const { children, ...rest } = props;

    if (!tabsContext) {
      throw new Error("Tabs.Panels must be rendered within a Tabs.Root.");
    }

    return (
      <div ref={ref} {...rest}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as ReactElement<TabPanel>, {
            index,
            id: `tabpanel-${index}`,
          });
        })}
      </div>
    );
  }
);
