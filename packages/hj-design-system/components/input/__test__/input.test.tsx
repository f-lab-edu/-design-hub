import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Input from "../input";

describe("Input", () => {
  it("Input 컴포넌트를 렌더링한다", () => {
    render(<Input />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("사용자가 입력한 값을 value 로 가진다", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "Hello, World!");
    expect(inputElement).toHaveValue("Hello, World!");
  });

  it("disabled 속성이 true 이면 value 는 빈 문자열이다", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "Hello, World!");
    expect(inputElement).toHaveValue("");
  });

  it("addon before, after 컴포넌트를 렌더링한다", () => {
    render(
      <Input
        addon={{
          before: <Input.AddonBefore>https</Input.AddonBefore>,
          after: <Input.AddonAfter>.com</Input.AddonAfter>,
        }}
      />,
    );
    const addonBefore = screen.getByText("https");
    const addonAfter = screen.getByText(".com");
    expect(addonBefore).toBeInTheDocument();
    expect(addonAfter).toBeInTheDocument();
  });

  it("prefix, suffix 컴포넌트를 렌더링한다", () => {
    const PrefixIcon = () => <span>PrefixIcon</span>;
    const SuffixIcon = () => <span>SuffixIcon</span>;
    render(
      <Input
        affix={{
          prefix: (
            <Input.Prefix>
              <PrefixIcon />
            </Input.Prefix>
          ),
          suffix: (
            <Input.Suffix>
              <SuffixIcon />
            </Input.Suffix>
          ),
        }}
      />,
    );
    const prefix = screen.getByText("PrefixIcon");
    const suffix = screen.getByText("SuffixIcon");
    expect(prefix).toBeInTheDocument();
    expect(suffix).toBeInTheDocument();
  });
});
