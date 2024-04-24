import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const optionBaseStyle = css({
    padding: foundations.space[2],  
    fontSize: foundations.fontSizes.md,
    color: foundations.colors.black,
    borderRadius: foundations.radii.md,
    ":hover": {
        background: foundations.colors.blue[200],
    },
})

export const getSelectedStyle = (isSelected: boolean) => {
    return css({
        background: isSelected ? foundations.colors.blue[400] : "transparent",
    })
}