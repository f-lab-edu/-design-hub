import { fireEvent, render, screen } from "@testing-library/react";
import { Menu } from "../index";
import { describe, it, expect, vi } from "vitest";

describe("Menu.Trigger", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>Menu Trigger</Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
        </Menu.List>
      </Menu.Root>
    );

    const menuTrigger = screen.getByText("Menu Trigger");
    expect(menuTrigger).toBeInTheDocument();
  });

  it("onClick 이벤트가 발생하면 사용자가 넘겨준 onClick 이벤트 핸들러가 실행되고, 메뉴 아이템이 보여야 한다", () => {
    const userCustomOnclick = vi.fn();

    render(
      <Menu.Root>
        <Menu.Trigger onClick={userCustomOnclick}>Click Me</Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
        </Menu.List>
      </Menu.Root>
    );

    fireEvent.click(screen.getByText("Click Me"));
    expect(userCustomOnclick).toHaveBeenCalledTimes(1);

    const menuItem = screen.getByText("Item 1");
    expect(menuItem).toBeInTheDocument();
  });

  it("ModalRoot 로 랩핑하지 않으면 오류가 발생한다", () => {
    expect(() => render(<Menu.Trigger>Click Me</Menu.Trigger>)).toThrowError();
  });
});
