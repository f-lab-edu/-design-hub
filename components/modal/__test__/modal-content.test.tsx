import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "../index";

describe("ModalContent", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal.Root>
    );
    const modalContent = screen.getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
