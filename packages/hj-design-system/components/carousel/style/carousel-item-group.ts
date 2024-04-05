import { css } from "@emotion/react";

export const itemGroupBaseStyle = css({
    width: '100%',
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    boxSizing: "border-box",
})

export const getTransformStyle = (current: number, itemWidth: number) => ({
    transform: `translateX(-${current * itemWidth}px)`,
    transition: "transform 0.5s ease-in-out",
});