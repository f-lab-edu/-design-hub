import { renderHook } from '@testing-library/react-hooks';
import { useScrollLock } from '../use-scroll-lock';
import { describe, it, expect } from 'vitest';

describe('useScrollLock', () => {
    it('shouldScrollLock 이 true 이면 overflow 의 값이 hidden 이다', () => {
        renderHook(() => useScrollLock(true));

        expect(document.body.style.overflow).toBe('hidden');
    });

    it('shouldLock 이 false 이면 기존의 overflow 값을 가진다', () => {

        const originalStyle = window.getComputedStyle(document.body).overflow;

        renderHook(() => useScrollLock(false));

        expect(document.body.style.overflow).toBe(originalStyle);
    });
});
