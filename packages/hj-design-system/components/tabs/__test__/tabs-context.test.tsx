import { type FC, useContext } from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { TabsContext, TabsProvider } from "../tabs-context";

describe("fds/components/tabs/tabs-context", () => {
  test("TabsProvider 는 children을 렌더링한다", () => {
    render(<TabsProvider>children</TabsProvider>);

    const childElement = screen.getByText("children");
    expect(childElement).toBeInTheDocument();
  });

  test("TabsProvider는 children 에 context value를 전달한다", () => {
    const TestComponent: FC = () => {
      const context = useContext(TabsContext);
      expect(context).not.toBeNull();
      return null;
    };

    render(
      <TabsProvider>
        <TestComponent />
      </TabsProvider>
    );
  });

  test("TabsProvider 는 onChangeCurrent 와 current prop 을 받을 수 있다.", () => {
    const onChangeCurrent = vi.fn();

    render(
      <TabsProvider onChangeCurrent={onChangeCurrent} current={4}>
        <TabsContext.Consumer>
          {(context): null => {
            expect(context).not.toBeNull();
            expect(context?.onChangeCurrent).toBe(onChangeCurrent);
            expect(context?.current).toBe(4);
            return null;
          }}
        </TabsContext.Consumer>
      </TabsProvider>
    );
  });
});
