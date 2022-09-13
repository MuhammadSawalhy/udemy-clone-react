// source: https://www.30secondsofcode.org/react/s/use-intersection-observer

import { useEffect, useState } from "react";

export default function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
