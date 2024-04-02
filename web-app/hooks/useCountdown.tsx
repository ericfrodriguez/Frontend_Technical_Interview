import { useEffect, useState } from "react";

export function useCountdown(seconds: number, onEnd: () => void) {
  let [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    function tick() {
      setRemaining(remaining - 1);
    }

    const countdown = setInterval(tick, 1000);

    if (remaining < 0) {
      clearInterval(countdown);
      onEnd();
    }

    return () => clearInterval(countdown);
  }, [remaining, onEnd]);

  return remaining > 0 ? remaining : 0;
}