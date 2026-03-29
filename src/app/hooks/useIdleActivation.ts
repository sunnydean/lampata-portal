import { useEffect, useState } from "react";

type IdleCallbackHandle = number;
type IdleCallback = (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void;

interface IdleWindow extends Window {
  cancelIdleCallback?: (handle: IdleCallbackHandle) => void;
  requestIdleCallback?: (callback: IdleCallback, options?: { timeout: number }) => IdleCallbackHandle;
}

export function useIdleActivation(timeout = 900) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(() => {
        setIsActive(true);
      }, { timeout });

      return () => {
        idleWindow.cancelIdleCallback?.(handle);
      };
    }

    const handle = window.setTimeout(() => {
      setIsActive(true);
    }, 1);

    return () => {
      window.clearTimeout(handle);
    };
  }, [timeout]);

  return isActive;
}
