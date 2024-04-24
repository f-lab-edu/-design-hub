import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const listBaseStyle = css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: foundations.space[4],
    marginInlineStart: foundations.space[2],
    padding: foundations.space[2],
    width: '250px',
    height: '300px',
    overflow: 'scroll',
    listStyle: 'none',
    background: foundations.colors.white,
    borderRadius: foundations.radii.md,
    border: `1px solid ${foundations.colors.gray[300]}`,
})