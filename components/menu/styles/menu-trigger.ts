import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const triggerBaseStyle = css({
    display: "flex",
    gap: '8px',
    alignItems: "center",
    justifyContent: "space-between",
    height: foundations.sizes[10],
    minWidth: foundations.sizes[10],
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    border: `1px solid transparent`,
    borderRadius: foundations.radii.md,
    background: foundations.colors.gray[200],
    paddingLeft: foundations.space[4],
    paddingRight: foundations.space[4],
    appearance: "none",
    fontSize: foundations.fontSizes.md,
    fontWeight: foundations.fontWeights.semibold,
    color: "inherit",
    textDecoration: "none",
    textAlign: "left",
    lineHeight: "inherit",
    boxSizing: "border-box",
    "@media(hover:hover)": {
        "&:hover:enabled": {
          opacity: 0.8,
        },
      },
      ":focus": {
        backgroundColor: foundations.colors.gray[400],
      },
    "&:disabled": {
        cursor: "not-allowed",
    },
});