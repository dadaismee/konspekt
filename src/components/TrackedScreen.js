import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

export const METRIKA_ID = 95261148;

const getThreshold = (height) => {
  if (height < 300) return 0.3;
  if (height < 500) return 0.4;
  return 0.5;
};

const TrackedScreen = ({ id, children }) => {
  const ref = useRef(null);
  const [threshold, setThreshold] = useState(0.5);

  useLayoutEffect(() => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      setThreshold(getThreshold(height));
    }
  }, []);

  const handleEnter = (entry) => {
    // console.log(`[TrackedScreen] onViewportEnter: ${id}`, entry?.isIntersecting);

    const storageKey = `screen_${id}_views`;
    const prev = Number(window.sessionStorage.getItem(storageKey) || 0);
    const next = prev + 1;
    window.sessionStorage.setItem(storageKey, String(next));

    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "screen_view", {
        screen_id: id,
        view_num: next,
      });
      console.log(`[Metrika] screen_view: ${id}, view_num: ${next}`);
    } else {
      console.log(`[Metrika] (no ym) screen_view: ${id}, view_num: ${next}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      onViewportEnter={handleEnter}
      viewport={{ amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default TrackedScreen;
