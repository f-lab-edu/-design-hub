import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Portal from "../portal";

describe("Portal", () => {
  it("Portal 컴포넌트가 정의되어 있어야 한다", () => {
    const { container } = render(<Portal />);
    expect(container).toBeDefined();
  });

  it("Portal 컴포넌트는 children 을 렌더링한다", () => {
    render(
      <Portal>
        <div>Portal</div>
      </Portal>
    );
    expect(screen.getByText("Portal")).toBeInTheDocument();
  });

  it("portalContainer 속성으로 전달된 엘리먼트에 children 을 렌더링한다", () => {
    const container = document.createElement("div");
    container.id = "selected-container";

    document.body.appendChild(container);

    if (container !== null) {
      render(
        <Portal portalContainer={document.getElementById("selected-container")}>
          <div>Portal Content</div>
        </Portal>
      );
    }

    expect(document.querySelector("#selected-container div")).toContainHTML(
      "Portal Content"
    );
  });

  it("disablePortal 속성이 true 이면 원래 위치에 children 을 렌더링한다", () => {
    render(
      <>
        <Portal disablePortal>
          <div>Portal</div>
        </Portal>
        <div>나는 포탈 아래에 있어용</div>
      </>
    );

    const portalText = screen.getByText("Portal");
    const belowText = screen.getByText("나는 포탈 아래에 있어용");

    expect(
      portalText.compareDocumentPosition(belowText) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
