import { useCallback, useEffect, useRef } from 'react';

interface UseFocusParams {
  onFocusCallback?: (() => void) | (() => Promise<void>);
  onFocusOutCallback?: (() => void) | (() => Promise<void>);
  threshold?: number;
  rootMargin?: string;
}

export default function useFocus<T extends HTMLElement>({
  onFocusCallback,
  onFocusOutCallback,
  threshold,
  rootMargin,
}: UseFocusParams) {
  const elementRef = useRef<T>(null);

  const handleScroll: IntersectionObserverCallback = useCallback(([entry]) => {
    const { current } = elementRef;
    if (current) {
      if (
        entry.isIntersecting &&
        onFocusCallback &&
        typeof onFocusOutCallback === 'function'
      ) {
        onFocusCallback();
      } else {
        if (onFocusOutCallback && typeof onFocusCallback === 'function') {
          onFocusOutCallback();
        }
      }
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = elementRef;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: threshold || 0.1,
        rootMargin: rootMargin || '0px 0px 0px 0px',
      });

      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return elementRef;
}
