import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Combobox } from ".";

describe("Combobox", () => {
  it("combobox 를 렌더링한다", () => {
    render(
      <Combobox.Root>
        <Combobox.Input />
        <Combobox.List>
          <Combobox.Option value="Option 1" />
          <Combobox.Option value="Option 2" />
          <Combobox.Option value="Option 3" />
        </Combobox.List>
      </Combobox.Root>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("combobox 를 클릭하면 옵션 리스트를 렌더링한다", () => {
    render(
      <Combobox.Root>
        <Combobox.Input />
        <Combobox.List>
          <Combobox.Option value="Option 1" />
          <Combobox.Option value="Option 2" />
          <Combobox.Option value="Option 3" />
        </Combobox.List>
      </Combobox.Root>
    );

    fireEvent.focus(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    expect(screen.getAllByRole("option").length).toBe(3);
  });

  it("option 을 클릭하면 선택된 option 이 input 에 렌더링된다", () => {
    render(
      <Combobox.Root>
        <Combobox.Input />
        <Combobox.List>
          <Combobox.Option value="Option 1" />
          <Combobox.Option value="Option 2" />
          <Combobox.Option value="Option 3" />
        </Combobox.List>
      </Combobox.Root>
    );

    fireEvent.focus(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Option 2"));
    expect(screen.getByRole("combobox")).toHaveValue("Option 2");
  });

  it("엔터키를 누르면 선택된 option 이 input 에 렌더링된다", () => {
    render(
      <Combobox.Root>
        <Combobox.Input />
        <Combobox.List>
          <Combobox.Option value="Option 1" />
          <Combobox.Option value="Option 2" />
          <Combobox.Option value="Option 3" />
        </Combobox.List>
      </Combobox.Root>
    );

    fireEvent.focus(screen.getByRole("combobox"));
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "ArrowDown" });
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "Enter" });
    waitFor(() => {
      expect(screen.getByRole("combobox")).toHaveValue("Option 1");
    });
  });
});
