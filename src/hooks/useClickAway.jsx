import { useEffect, useRef } from 'react';

const events = ['mousedown', 'tocuhstart'];

export function useClickAway(handler) {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = e => {
      !element.contains(e.target) && handler(e);
    };

    for (const event of events) {
      document.addEventListener(event, handleEvent);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, handleEvent);
      }
    };
  });

  return ref;
}
