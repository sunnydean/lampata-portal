import { type RefObject, useEffect, useState } from "react";

interface UseOneShotIntersectionOptions {
  disabled?: boolean;
  rootMargin?: string;
}

export function useOneShotIntersection<T extends Element>(
  ref: RefObject<T | null>,
  {
    disabled = false,
    rootMargin = "0px",
  }: UseOneShotIntersectionOptions = {},
) {
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || disabled || hasIntersected) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, hasIntersected, ref, rootMargin]);

  return hasIntersected;
}
