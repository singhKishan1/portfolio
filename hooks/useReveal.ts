import { useCallback, useState } from "react";

export function useReveal(threshold = 0.12) {
  const [on, setOn] = useState(false);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setOn(true);
            observer.disconnect();
          }
        },
        { threshold },
      );

      observer.observe(node);
    },
    [threshold],
  );

  return [ref, on] as const;
}
