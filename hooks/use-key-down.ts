import { useEffect } from "react";

interface UseKeyDownProps {
    callBackFn: () => void;
}

export const useKeyDown = ({callBackFn}: UseKeyDownProps) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            callBackFn();
          }
        };
            document.addEventListener("keydown", handleKeyDown);
    
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };

      }, [callBackFn]);
    }