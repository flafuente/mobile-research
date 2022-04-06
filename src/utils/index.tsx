import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export type colorResolver = {
  waiting: string
  rejected: string
  approved: string
}

export const statusColorResolver = (value: keyof colorResolver): string => {
  const resolver = {
    'waiting': '#1e88e5',
    'rejected': '#f4511e',
    'approved': '#43a047'
  }
  return (resolver.hasOwnProperty(value)) ? resolver[value] : '#FFF';
}
export const colors = {
  'white': '#FFF',
  'accented': '#5050FE',
  'accentedLight': '#F4F4FB',
  'primaryText': '#4F4F4F',
  'secondaryText': '#A0A2AE',
}