import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "../index";

describe("ModalBody", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Body>Modal Body</Modal.Body>
      </Modal.Root>
    );
    const modalContent = screen.getByText("Modal Body");
    expect(modalContent).toBeInTheDocument();
  });
});
