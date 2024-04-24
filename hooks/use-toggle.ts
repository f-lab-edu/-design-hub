import { useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
    const [isOpen, changeIsOpen] = useState(defaultValue || false);
    const toggle = () => changeIsOpen((prev) => !prev);

    return {isOpen, toggle, changeIsOpen}
}