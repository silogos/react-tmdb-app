import { useEffect, useRef } from "react";

function usePrev<T>(value: T) {
  const prev = useRef<T>(value);
  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
}

export default usePrev;
