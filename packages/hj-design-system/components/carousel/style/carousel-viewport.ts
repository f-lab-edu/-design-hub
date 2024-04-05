import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const viewportBaseStyle = css({
    position: "relative",
    boxSizing: "border-box",
    overflowX: "hidden",
    scrollSnapType: "x mandatory",
    '-webkit-overflow-scrolling': 'touch',  
    scrollbarWidth: 'none',
    border: `1px solid ${foundations.colors.gray[300]}`,
    borderRadius: foundations.radii.md
})