import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const inputBaseStyle = css({
    position: 'relative',
    padding: foundations.sizes["2.5"],
    borderRadius: foundations.radii.md,
    border: `1px solid ${foundations.colors.gray[300]}`,
    outline: 'none',
    ":focus": {
        borderColor: foundations.colors.gray[600]
    },
})