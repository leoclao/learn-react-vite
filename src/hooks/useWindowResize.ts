import { useEffect, useState } from "react";

/**
 * Custom React hook that tracks the window size by updating the state whenever the window is resized.
 * 
 * @returns An object containing the width and height of the window
 */
export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}