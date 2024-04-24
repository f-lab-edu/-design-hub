import { css } from "@emotion/react";
import  zIndices  from '../../../../theme/foundations/z-index';

export const dimmedStyle = css({
    position: 'fixed',
    zIndex: zIndices.modal,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0 0 0 / 75%)',
});