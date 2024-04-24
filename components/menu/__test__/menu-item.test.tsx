import { render, screen } from "@testing-library/react";
import { Menu } from "../index";
import { describe, it, expect } from "vitest";

describe("MenuItem", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>click me</Menu.Trigger>
        <Menu.Item>
          <span>Menu Item</span>
        </Menu.Item>
      </Menu.Root>
    );

    expect(screen.getByText("Menu Item")).toBeInTheDocument();
  });

  it("as prop 에 전달한 elemnt type 을 가진다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>click me</Menu.Trigger>
        <Menu.Item as="a" href="/">
          Menu Item
        </Menu.Item>
      </Menu.Root>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("MenuRoot 로 랩핑하지 않으면 오류가 발생한다", () => {
    expect(() =>
      render(
        <Menu.Item>
          <span>Menu Item</span>
        </Menu.Item>
      )
    ).toThrowError();
  });
});
