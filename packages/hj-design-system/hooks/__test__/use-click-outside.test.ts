import { renderHook } from '@testing-library/react-hooks';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useClickOutSide } from '../use-click-outside';
import { act } from 'react-dom/test-utils';

describe('useClickOutSide', () => {
  let targetElement: HTMLDivElement;
  let onClickOutside: () => void;

  beforeEach(() => {
    targetElement = document.createElement('div');
    document.body.appendChild(targetElement);
    onClickOutside = vi.fn();
  });

  afterEach(() => {
    document.body.removeChild(targetElement);
  });

  it('target 요소 외부 영역을 클릭하면 onClickOutside 함수가 호출되어야 한다', () => {
    renderHook(() => 
      useClickOutSide({
        targetRef: { current: targetElement },
        onClickOutside,
      })
    );

    act(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onClickOutside).toHaveBeenCalled();
  });

  it('target 요소 내부 영역을 클릭하면 onClickOutside 함수는 호출되지 않는다', () => {

    renderHook(() => 
      useClickOutSide({
        targetRef: { current: targetElement },
        onClickOutside,
      })
    );

    act(() => {
      targetElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
