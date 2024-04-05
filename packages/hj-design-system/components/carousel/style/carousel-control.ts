import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const controlBaseStyle = css({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: '8px',
    zIndex: foundations.zIndices.overlay
})