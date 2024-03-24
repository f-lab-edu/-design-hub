import { ComponentProps } from "react";
import { Carousel } from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

type Args = ComponentProps<typeof Carousel.Root>;

const Template = (args: Args) => (
  <Carousel.Root {...args}>
    <Carousel.Control style={{ bottom: "0", paddingBottom: "20px" }}>
      <Carousel.Trigger type="prev">앞으로</Carousel.Trigger>
      <Carousel.Trigger type="next">뒤로</Carousel.Trigger>
    </Carousel.Control>

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

export const Default = Template.bind({});
