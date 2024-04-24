import { ReactNode, createContext, useMemo, useState } from "react";
import { useToggle } from "../../../hooks/use-toggle";
import { Direction } from "./menu-root";

interface MenuContextValue {
  /**
   * The open state of the menu
   * @default false
   */
  isOpen: boolean;
  /**
   * Change the open state of the menu
   */
  toggle: () => void;
  /**
   * The current index of the menu
   */
  current: number;
  /**
   * change the current index of the menu
   */
  changeCurrent: (value: number) => void;
  /**
   * The direction of the menu
   * @default "vertical"
   */
  direction?: Direction;
  /**
   * If ture, the menu will be opened by default
   */
  defaultOpen?: boolean;
  /**
   * Change the open state of the menu
   */
  changeIsOpen: (value: boolean) => void;
  /**
   * callback to perform custom action when the menu is opened
   * invoked with the id of the item.
   * @param index - the index of the selected item, starting from 0
   */
  onSelect?: (index: number) => void;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
  children: ReactNode;
  /**
   * The direction of the menu
   * @default "vertical"
   */
  direction?: Direction;
  /**
   * If ture, the menu will be opened by default
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * callback to perform custom action when the menu is opened
   * invoked with the id of the item.
   * @param index - the index of the selected item, starting from 0
   */
  onSelect?: (index: number) => void;
}

export const MenuProvider = ({
  children,
  direction,
  defaultOpen,
  onSelect,
}: MenuProviderProps) => {
  const { isOpen, toggle, changeIsOpen } = useToggle(defaultOpen || false);

  const [current, changeCurrent] = useState<number>(0);

  const ContextValue = useMemo(
    () => ({
      isOpen,
      toggle,
      changeIsOpen,
      current,
      changeCurrent,
      direction,
      defaultOpen,
      onSelect,
    }),
    [isOpen, current, direction, defaultOpen]
  );

  return (
    <MenuContext.Provider value={ContextValue}>{children}</MenuContext.Provider>
  );
};
