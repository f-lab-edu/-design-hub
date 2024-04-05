import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const triggerBaseStyle = css({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: 'transparent',
    border: `1px solid ${foundations.colors.gray[300]}`,
    borderRadius: foundations.radii.md,
    "@media (hover: hover)": {
        "&:hover": {
            background: foundations.colors.gray[100],
        }
    },
    ":active": {
        background: foundations.colors.gray[300],
    }
})