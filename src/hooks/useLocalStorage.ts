import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (err) {
      console.error(`Error while reading localStorage item with key=${key}:`, err);
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error(`Error while setting localStorage item with key=${key}:`, err);
    }
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
