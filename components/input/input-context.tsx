import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useMemo,
  useState,
} from "react";

import { type InputSizeSet, type InputVariant } from "./types";

interface InputContextType {
  size: InputSizeSet;
  setSize: Dispatch<SetStateAction<InputSizeSet>>;
  variant: InputVariant;
  setVariant: Dispatch<SetStateAction<InputVariant>>;
  hasPrefix: boolean;
  setHasPrefix: Dispatch<SetStateAction<boolean>>;
  hasSuffix: boolean;
  setHasSuffix: Dispatch<SetStateAction<boolean>>;
  hasAddonBefore: boolean;
  setHasAddonBefore: Dispatch<SetStateAction<boolean>>;
  hasAddonAfter: boolean;
  setHasAddonAfter: Dispatch<SetStateAction<boolean>>;
}

export const InputContext = createContext<InputContextType | null>(null);

const InputProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<InputSizeSet>("md");

  const [variant, setVariant] = useState<InputVariant>("outline");

  const [hasPrefix, setHasPrefix] = useState<boolean>(false);

  const [hasSuffix, setHasSuffix] = useState<boolean>(false);

  const [hasAddonBefore, setHasAddonBefore] = useState<boolean>(false);

  const [hasAddonAfter, setHasAddonAfter] = useState<boolean>(false);

  const ContextValue = useMemo(
    () => ({
      size,
      setSize,
      variant,
      setVariant,
      hasPrefix,
      setHasPrefix,
      hasSuffix,
      setHasSuffix,
      hasAddonBefore,
      setHasAddonBefore,
      hasAddonAfter,
      setHasAddonAfter,
    }),
    [size, variant, hasPrefix, hasSuffix, hasAddonBefore, hasAddonAfter]
  );

  return (
    <InputContext.Provider value={ContextValue}>
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;
