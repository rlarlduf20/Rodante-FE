import { useRef, useEffect, useCallback } from "react";

const useScrollCount = (end: any, start = 0, duration = 3000, delay = 0) => {
  const element = useRef<any>();
  //   const observer = useRef<any>();
  let observer: any;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]: any) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(counter);
            observer.disconnect(element.current);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element]
  );

  useEffect(() => {
    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.9 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
