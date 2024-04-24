import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Button from "./Button";

describe("Button", () => {
  it("정의되어 있어야 한다", () => {
    expect(Button).toBeDefined();
  });

  it("버튼을 렌더링한다", () => {
    render(<Button>버튼임</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("children을 렌더링한다", () => {
    render(<Button>이것은 버튼입니다</Button>);
    expect(screen.getByText("이것은 버튼입니다")).toBeInTheDocument();
  });

  it("클릭하면 onClick 이벤트 핸들러를 실행한다", () => {
    const onClickMock = vi.fn();

    render(<Button onClick={onClickMock}>Click me</Button>);

    userEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("disabled 속성이 true이면 클릭할 수 없다", () => {
    const onClickMock = vi.fn();

    render(
      <Button onClick={onClickMock} disabled>
        Click me
      </Button>,
    );

    userEvent.click(screen.getByText("Click me"));
    expect(onClickMock).not.toHaveBeenCalled();
  });
});

describe("as", () => {
  it("as 속성에 a를 넣으면 a 태그로 렌더링한다", () => {
    render(
      <Button as="a" href="https://f-lab.kr">
        이건 링크임
      </Button>,
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});

describe("ButtonAddon", () => {
  it("leftAddon을 렌더링한다", () => {
    render(<Button leftAddon={<span>leftIcon</span>}>버튼임</Button>);
    expect(screen.getByText("leftIcon")).toBeInTheDocument();
  });

  it("rightAddon을 렌더링한다", () => {
    render(<Button rightAddon={<span>rightIcon</span>}>버튼임</Button>);
    expect(screen.getByText("rightIcon")).toBeInTheDocument();
  });
});
