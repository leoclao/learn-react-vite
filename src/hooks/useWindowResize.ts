/**
 * Custom React hook that tracks the window size by updating the state whenever the window is resized.
 * 
 * @returns An object containing the width and height of the window
 */
import { useCallback, useEffect, useState } from 'react';

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
}