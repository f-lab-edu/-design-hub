import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { ModalSizeSet } from "./types";

interface ModalContextProps {
  size: ModalSizeSet;
  setSize: Dispatch<SetStateAction<ModalSizeSet>>;
  onClose: () => void;
}
export const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProviderProps {
  children: ReactNode;
  onClose: () => void;
}

export const ModalProvider = ({ children, onClose }: ModalProviderProps) => {
  const [size, setSize] = useState<ModalSizeSet>("md");

  const ContextValue = useMemo(
    () => ({ size, setSize, onClose }),
    [size, onClose]
  );

  return (
    <ModalContext.Provider value={ContextValue}>
      {children}
    </ModalContext.Provider>
  );
};
