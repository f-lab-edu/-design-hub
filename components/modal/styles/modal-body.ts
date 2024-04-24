import { SerializedStyles, css } from "@emotion/react";
import { ModalSizeSet } from "../types";
import { foundations } from "../../../../theme/foundations";

export const getModalBodySizeStyles = (size: ModalSizeSet='md'): SerializedStyles => {
    const fontSize = FONT_SIZE_MAP[size];
    return css(fontSize);
}

const FONT_SIZE_MAP: Record<ModalSizeSet, SerializedStyles> = {
    xs: css({
        fontSize: foundations.fontSizes.xs,
    }),
    sm: css({
        fontSize: foundations.fontSizes.sm,
    }),
    md: css({
        fontSize: foundations.fontSizes.md,
    }),
    lg: css({
        fontSize: foundations.fontSizes.lg,
    }),
}