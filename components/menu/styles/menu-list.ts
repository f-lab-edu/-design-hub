import { css } from "@emotion/react";
import { foundations } from "../../../../theme/foundations";
import { Direction } from "../menu-root";

export const navBaseStyles = css({
    position: 'absolute',
    zIndex: foundations.zIndices.dropdown,
    maxWidth: 'max-content',
    width: '100%',
})

export const listBaseStyles = css({
    listStyle: 'none',
    margin:0,
    paddingLeft: 0,
    borderRadius:foundations.radii.md,
    border: `1px solid ${foundations.colors.gray[300]}`,
    overflow: 'hidden', 
})

export const getNavDirectionStyles = (direction: Direction) => {
    const top = direction === 'vertical' ? css({top:'100%'}): css({top:0});
    const left = direction === 'vertical' ? css({left:0}): css({left:'100%'});
    const margin = direction === 'vertical' ? css({margin: '4px 0'}): css({margin: '0 4px'});
    return [top,left,margin];
}