import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "../index";

describe("ModalFooter", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Modal.Root isOpen>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal.Root>
    );
    const modalContent = screen.getByText("Modal Footer");
    expect(modalContent).toBeInTheDocument();
  });
});
