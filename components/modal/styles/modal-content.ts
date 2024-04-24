import { SerializedStyles, css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";
import { ModalSizeSet } from "../types";

export const modalContentBaseStyle = css({
    width: '100%',
    maxHeight: '80dvh',
    marginTop: foundations.space[16],
    marginBottom: foundations.space[16],
    background: foundations.colors.white,
    overflowY: 'scroll',
})

export const getSizeStyles = (size: ModalSizeSet='md'): SerializedStyles => {
    const maxWidth = MAX_WIDTH_MAP[size];
    const padding = PADDING_MAP[size];
    const border = BORDER_MAP[size];
    return css(maxWidth, padding, border)
}

const PADDING_MAP: Record<ModalSizeSet, SerializedStyles> = {
    xs: css({
        padding: foundations.space[4],
    }),
    sm: css({
        padding: foundations.space[5],
    }),
    md: css({
        padding: foundations.space[6],
    }),
    lg: css({
        padding: foundations.space[7],
    }),
}


const BORDER_MAP: Record<ModalSizeSet, SerializedStyles> = {
    xs: css({
        borderRadius: foundations.radii.sm,
    }),
    sm: css({
        borderRadius: foundations.radii.md,
    }),
    md: css({
        borderRadius: foundations.radii.md,
    }),
    lg: css({
        borderRadius: foundations.radii.lg,
    }),
}

const MAX_WIDTH_MAP: Record<ModalSizeSet, SerializedStyles> = {
    xs: css({
        maxWidth: foundations.sizes.xs,
    }),
    sm: css({
        maxWidth: foundations.sizes.sm,
    }),
    md: css({
        maxWidth: foundations.sizes.md,
    }),
    lg: css({
        maxWidth: foundations.sizes.lg,
    }),
}