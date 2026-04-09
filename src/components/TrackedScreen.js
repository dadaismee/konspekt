import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";

export const METRIKA_ID = 95261148;

const getThreshold = (height) => {
  if (height < 300) return 0.3;
  if (height < 500) return 0.4;
  return 0.5;
};

export const getCurrentScreen = () => {
  if (typeof window !== "undefined" && window.__currentScreen) {
    return window.__currentScreen;
  }
  return null;
};

const TrackedScreen = ({ id, children }) => {
  const ref = useRef(null);
  const timerRef = useRef(null);
  const [threshold, setThreshold] = useState(0.5);
  const [viewed, setViewed] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      setThreshold(getThreshold(height));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleEnter = (entry) => {
    if (viewed) return;

    window.__currentScreen = id;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setViewed(true);

      const storageKey = `screen_${id}_views`;
      const prev = Number(window.sessionStorage.getItem(storageKey) || 0);
      const next = prev + 1;
      window.sessionStorage.setItem(storageKey, String(next));

      if (typeof window.ym !== "undefined") {
        window.ym(METRIKA_ID, "reachGoal", "screen_view", {
          screen_id: id,
          view_num: next,
        });
      }
    }, 2000);
  };

  const handleLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      onViewportEnter={handleEnter}
      onViewportLeave={handleLeave}
      viewport={{ amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default TrackedScreen;