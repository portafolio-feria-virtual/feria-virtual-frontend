import { useState, useEffect, useMemo } from 'react';

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = useMemo(
      () => setTimeout(() => setDebouncedValue(value), delay || 500),
      [value, delay]
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
