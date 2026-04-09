const METRIKA_ID = 95261148;

export const useTrackClick = () => {
  const trackClick = (goalName, params = {}) => {
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", goalName, params);
      console.log(`[Metrika] click: ${goalName}`, params);
    } else {
      console.log(`[Metrika] (no ym) click: ${goalName}`, params);
    }
  };

  return {
    trackClick,
  };
};