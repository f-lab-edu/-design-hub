import { renderHook } from "@testing-library/react-hooks";
import { useKeyDown } from "../use-key-down";
import {describe, it, expect, vi} from 'vitest'
import userEvent from "@testing-library/user-event";

describe("useKeyDown", () => {
    it("ESC 키를 누르면 callBackFn 를 호출한다", () => {
        const callBackFn = vi.fn();
        renderHook(() => useKeyDown({ callBackFn }));

        userEvent.keyboard("{esc}");

        expect(callBackFn).toHaveBeenCalled();
    });

    it("ESC 키가 누른 것이 아니면 callBackFn 을 호출하지 않는다.", () => {
        const callBackFn = vi.fn();
        renderHook(() => useKeyDown({ callBackFn }));

        userEvent.keyboard("{enter}");

        expect(callBackFn).not.toHaveBeenCalled();
    });
});
