import { ReactNode, createContext, useMemo, useState } from "react";
import { TabsDirection, TabsSizeSet } from "./types";

type TabsContextProps = Omit<TabsProviderProps, "children">;

export const TabsContext = createContext<TabsContextProps | null>(null);

interface TabsProviderProps {
  children: ReactNode;
  size?: TabsSizeSet;
  current?: number;
  direction?: TabsDirection;
}

export const TabsProvider = ({
  children,
  size,
  current,
  direction = "horizontal",
}: TabsProviderProps) => {
  const [internalCurrent, onCurrentChange] = useState(current ?? 0);

  const ContextValue = useMemo(
    () => ({
      size,
      current: current ?? internalCurrent,
      onCurrentChange,
      direction,
    }),
    [size, current, direction, current, onCurrentChange, internalCurrent]
  );

  return (
    <TabsContext.Provider value={ContextValue}>{children}</TabsContext.Provider>
  );
};
