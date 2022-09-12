import { useEffect, useState } from "react";

const carouselBreakPoints = [
  { minWidth: 1300, cardsCount: 5 },
  { minWidth: 950, cardsCount: 4 },
  { minWidth: 750, cardsCount: 3 },
  { minWidth: 510, cardsCount: 2 },
  { minWidth: 480, cardsCount: 1 },
];

export default function useCardsCount() {
  const [cardsCount, setCardsCount] = useState(() => {
    for (const breakPoint of carouselBreakPoints) {
      if (window.innerWidth >= breakPoint.minWidth) {
        return breakPoint.cardsCount;
      }
    }
  });

  useEffect(() => {
    const setBreakPoint = () => {
      for (const breakPoint of carouselBreakPoints) {
        if (window.innerWidth >= breakPoint.minWidth) {
          setCardsCount(breakPoint.cardsCount);
          break;
        }
      }
    };

    window.addEventListener("resize", setBreakPoint);

    return () => window.removeEventListener("resize", setBreakPoint);
  }, []);

  return cardsCount;
}
