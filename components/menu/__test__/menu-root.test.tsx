import { fireEvent, render, screen } from "@testing-library/react";
import { MenuRoot } from "../menu-root";
import { describe, it, expect, vi } from "vitest";
import { Menu } from "..";

describe("MenuRoot", () => {
  it("children 을 렌더링한다", () => {
    render(
      <MenuRoot>
        <div>Child 1</div>
        <div>Child 2</div>
      </MenuRoot>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("defaultOpen prop 이 true 로 전달되면 children 을 렌더링한다", () => {
    render(
      <MenuRoot defaultOpen>
        <div>Child 1</div>
        <div>Child 2</div>
      </MenuRoot>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("onSelect prop 이 전달되면 사용자가 선택한 아이템의 index 를 전달한다", () => {
    const onSelect = vi.fn();

    render(
      <Menu.Root onSelect={(idx: number) => onSelect(idx)}>
        <Menu.Trigger>click here</Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
        </Menu.List>
      </Menu.Root>
    );

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const menuItem = screen.getByText("Item 1");
    fireEvent.click(menuItem);

    expect(onSelect).toHaveBeenCalledWith(0);
  });
});
