import { SerializedStyles, css } from "@emotion/react";
import { TabsDirection } from "../types";

export const rootBaseStyle = css({
    display: "flex",
});

export const getDirectionStyle = (direction: TabsDirection = 'horizontal') => {
    const DIRECTION_MAP: Record<TabsDirection, SerializedStyles> = {
        horizontal: css({
            flexDirection: "column",
        
        }),
        vertical: css({
            flexDirection: "row",
        })
    
    }
    return css(DIRECTION_MAP[direction]);

}