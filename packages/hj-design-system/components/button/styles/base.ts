import { css } from "@emotion/react";

import { foundations } from "../../../../theme/foundations";

export const base = css({
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: foundations.radii.md,
  backgroundColor: foundations.colors.blue[500],
  paddingInlineStart: foundations.space[4],
  paddingInlineEnd: foundations.space[4],
  color: foundations.colors.white,
  fontWeight: foundations.fontWeights.semibold,
});
