import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const itemBaseStyles = css({
    paddingInlineStart: foundations.space[4],
    paddingInlineEnd: foundations.space[4],
    paddingTop: foundations.space[1.5],
    paddingBottom: foundations.space[1.5],
    userSelect: "none",
})

export const isSelectedStyle = (isSelected:boolean) => css({
    backgroundColor: isSelected ? foundations.colors.gray[300] : foundations.colors.white,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: foundations.colors.gray[200],
    },
})