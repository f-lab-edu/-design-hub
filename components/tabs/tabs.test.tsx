import { describe, it, expect, vi } from "vitest";
import { Tabs } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  it("Tabs 컴포넌트를 렌더링한다", () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
          <Tabs.Tab disabled>Disabled Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
          <Tabs.Panel>Content 4</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("사용자가 선택한 탭을 표시한다", () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);

    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("current prop 으로 선택한 탭을 표시한다", () => {
    render(
      <Tabs.Root current={0}>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("disabled 된 탭은 클릭할 수 없다", () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab disabled>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab2 = screen.getByText("Tab 2");
    userEvent.click(tab2);

    expect(screen.queryByText("Content 2")).toBeNull();
  });

  it("탭을 선택할때 전달받은 onClick 함수가 호출된다", () => {
    const onClick = vi.fn();

    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab onClick={onClick}>Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab = screen.getByText("Tab 1");
    userEvent.click(tab);

    expect(onClick).toHaveBeenCalled();
  });

  it('키보드 이벤트를 받아서 "ArrowRight" 이면 다음 탭으로 이동한다', () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowRight" });
    expect(tab2).toHaveFocus();

    fireEvent.keyDown(tab2, { key: "ArrowRight" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowLeft" 이면 이전 탭으로 이동한다', () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowLeft" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowUp" 이면 이전 탭으로 이동한다', () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowDown" });
    expect(tab2).toHaveFocus();

    fireEvent.keyDown(tab2, { key: "ArrowDown" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowDown" 이면 다음 탭으로 이동한다', () => {
    render(
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content 1</Tabs.Panel>
          <Tabs.Panel>Content 2</Tabs.Panel>
          <Tabs.Panel>Content 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowDown" });
    expect(tab2).toHaveFocus();
  });

  it("Tabs.Root 로 감싸지 않으면 에러를 던진다", () => {
    expect(() => {
      render(
        <Tabs.List>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.List>
      );
    }).toThrowError();
  });
});
