import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Carousel } from ".";
import userEvent from "@testing-library/user-event";

describe("Carousel", () => {
  it("Carousel를 렌더링한다.", () => {
    render(
      <Carousel.Root>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder" />
            </Carousel.Item>
          </Carousel.ItemGroup>
        </Carousel.Viewport>
      </Carousel.Root>
    );

    const slide = screen.queryAllByRole("tabpanel");
    expect(slide).toHaveLength(3);
  });

  it("버튼으로 슬라이드를 넘길 수 있다.", () => {
    render(
      <Carousel.Root>
        <Carousel.Control>
          <Carousel.Trigger type="prev">앞으로</Carousel.Trigger>
          <Carousel.Trigger type="next">뒤로</Carousel.Trigger>
        </Carousel.Control>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://via.placeholder.com/500" alt="placeholder3" />
            </Carousel.Item>
          </Carousel.ItemGroup>
        </Carousel.Viewport>
      </Carousel.Root>
    );

    const prevButton = screen.getByText("앞으로");
    const nextButton = screen.getByText("뒤로");
    const slide = screen.queryAllByRole("tabpanel");

    userEvent.click(nextButton);
  });
});
``;
