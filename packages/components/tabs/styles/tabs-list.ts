import { SerializedStyles, css } from "@emotion/react";
import { TabsDirection } from "../types";

export const listBaseStyle = css({
    display: "flex",
    boxSizing: "border-box",
})

export const getDirectionStyle = (direction: TabsDirection='horizontal') => {
    const DIRECTION_MAP: Record<TabsDirection, SerializedStyles> = {
        horizontal: css({
            flexDirection: "row",
        }),
        vertical: css({
            flexDirection: "column",
        })
    }
    return DIRECTION_MAP[direction];
}