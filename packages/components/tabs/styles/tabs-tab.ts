import { SerializedStyles, css } from "@emotion/react";
import { TabsSizeSet } from "../types";
import { foundations } from "../../../../theme/foundations";

export const tabBaseStyle = css({
    all: 'unset',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    userSelect: "none",
    whiteSpace: "nowrap",
    textDecoration: "none",
    color: foundations.colors.gray[700],
    transition: "color 0.2s",
    backgroundColor: "transparent",
    borderBottom: `2px solid ${foundations.colors.gray[200]}`,
    cursor: "pointer",
    "&:hover": {
        color: foundations.colors.gray[300],
    },
    "&[aria-selected='true']": {
        color: foundations.colors.blue[300],
        borderBottomColor: foundations.colors.blue[300],
    },
    "&[aria-disabled='true']": {
        cursor: "not-allowed",
        color: foundations.colors.gray[200]
    },
});

export const getSizeStyle = (size: TabsSizeSet ='md') => {
    const padding = PADDING_MAP[size];
    const fontSize = FONT_SIZE_MAP[size];
    return css(padding, fontSize);
}


const PADDING_MAP: Record<TabsSizeSet, SerializedStyles> = {
    sm: css({
        padding:foundations.space[4],
    }),
    md: css({
        padding: foundations.space[5]
    }),
    lg: css({
        padding: foundations.space[6]
    })
}

const FONT_SIZE_MAP: Record<TabsSizeSet, SerializedStyles> = {
    sm: css({
        fontSize: foundations.fontSizes.sm
    }),
    md: css({
        fontSize: foundations.fontSizes.md
    }),
    lg: css({
        fontSize: foundations.fontSizes.lg
    }),
}