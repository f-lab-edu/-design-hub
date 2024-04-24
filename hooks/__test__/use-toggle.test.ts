import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "../use-toggle";
import {describe, it, expect} from 'vitest';

describe("useToggle", () => {
    it("인자로 넘겨준 defaultValue 로 초기화된다.", () => {
        const { result } = renderHook(() => useToggle(true));

        expect(result.current.isOpen).toBe(true);
    });

    it("인자를 넘기지 않으면 defaultValue 가 false 로 초기화된다.", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.isOpen).toBe(false);
    });

    it("toggle 함수를 호출하면 boolean 값을 반대로 변경한다.", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.isOpen).toBe(false);

        act(() => {
            result.current.toggle();
        });

        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.toggle();
        });

        expect(result.current.isOpen).toBe(false);
    });

    it("changeIsOpen 함수를 호출해서 값을 직접 변경할 수도 있다.", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.isOpen).toBe(false);

        act(() => {
            result.current.changeIsOpen(true);
        });

        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.changeIsOpen(false);
        });

        expect(result.current.isOpen).toBe(false);
    });
});
