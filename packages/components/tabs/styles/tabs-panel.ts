import { SerializedStyles, css } from "@emotion/react";
import { TabsSizeSet } from "../types";
import { foundations } from "../../../../theme/foundations";

export const getSizeStyle = (size: TabsSizeSet = 'md') => {
    const padding = PADDING_MAP[size];
    const fontSize = FONT_SIZE_MAP[size];
    return css(padding, fontSize);
}

const PADDING_MAP: Record<TabsSizeSet, SerializedStyles> = {
    sm: css({
        padding: foundations.space[4],
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
    })
} 