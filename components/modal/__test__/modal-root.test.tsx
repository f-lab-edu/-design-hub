import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ModalRoot } from "../modal-root";
import userEvent from "@testing-library/user-event";

describe("ModalRoot", () => {
  it("isOpen 이 true 이면 children 을 렌더링한다", () => {
    render(<ModalRoot isOpen={true}>Modal Content</ModalRoot>);
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  it("isOpen 이 false 이면 children 을 렌더링하지 않는다", () => {
    render(<ModalRoot isOpen={false}>Modal Content</ModalRoot>);
    const modalElement = screen.queryByRole("dialog");
    expect(modalElement).not.toBeInTheDocument();
  });

  it("closeOnClickDim 가 true 이면 dim 을 클릭할때 모달이 닫힌다", () => {
    const onClose = vi.fn();

    render(
      <ModalRoot isOpen={true} onClose={onClose} closeOnClickDim>
        Modal Content
      </ModalRoot>
    );
    const dimElement = screen.getByRole("dialog");
    dimElement.click();
    expect(onClose).toHaveBeenCalled();
  });

  it("esc 키를 누르면 onClose 가 호출된다", () => {
    const onClose = vi.fn();
    render(
      <ModalRoot isOpen={true} onClose={onClose}>
        Modal Content
      </ModalRoot>
    );
    const modalElement = screen.getByRole("dialog");
    modalElement.focus();
    userEvent.keyboard("{esc}");
    expect(onClose).toHaveBeenCalled();
  });
});
