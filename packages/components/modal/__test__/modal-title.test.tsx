import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "..";

describe("ModalTitle", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Title>제목입니다</Modal.Title>
      </Modal.Root>
    );
    expect(screen.getByText("제목입니다")).toBeInTheDocument();
  });
});
