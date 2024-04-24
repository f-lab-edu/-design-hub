import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";

export const modalControlBaseStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "4px"
})

export const closeButtonBoxStyles = css({
    all: 'unset',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '24px',
    height: '24px',
    padding: foundations.space[2],
    cursor: "pointer",
    borderRadius: foundations.radii.md,
    transition: "background-color 0.2s",
    "&:hover": {
        backgroundColor: foundations.colors.gray[100],
    },
});