import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "..";

describe("ModalControls", () => {
  it("기본으로 닫기 버튼을 제공한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Controls />
      </Modal.Root>
    );

    const closeButton = screen.getByRole("button", { name: "닫기" });
    expect(closeButton).toBeInTheDocument();
  });

  it("controlElement 를 렌더링한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Controls controlElements={[<p>뒤로가기</p>]} />
      </Modal.Root>
    );

    const backButton = screen.getByText("뒤로가기");
    expect(backButton).toBeInTheDocument();
  });
});
