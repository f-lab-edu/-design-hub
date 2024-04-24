import { type ChangeEvent, useCallback, useState } from "react";

interface Props {
  allowClear: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = ({ allowClear, onChange }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange?.(event);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    setValue("");
    onChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [onChange]);

  const showClearButton = allowClear && value.length > 0;

  return { value, handleChange, handleClear, showClearButton };
};
