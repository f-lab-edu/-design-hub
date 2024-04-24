import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import IconButton from "./IconButton";

describe("IconButton", () => {
  it("버튼에 ReactElement 를 렌더링한다", () => {
    render(<IconButton aria-label="Test Button" icon={<span>🚀</span>} />);

    const button = screen.getByRole("button", { name: "Test Button" });
    const icon = screen.getByText("🚀");

    expect(button).toContainElement(icon);
  });
});
