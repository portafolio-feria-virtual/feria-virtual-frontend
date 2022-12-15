import { useState, useEffect, useCallback } from 'react';

type SetValueStorage<T> = React.Dispatch<React.SetStateAction<T>>;

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValueStorage<T>, () => void] => {
  const readValueStorage = useCallback(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState<T>(readValueStorage);

  const setValueStorage: SetValueStorage<T> = valueToStore => {
    try {
      setValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const readValue = readValueStorage();
    if (readValue !== value) {
      setValue(readValue);
    }
  }, [value, setValueStorage]);

  const removeValueStorage = useCallback(() => {
    try {
      setValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [value, setValueStorage, removeValueStorage];
};
