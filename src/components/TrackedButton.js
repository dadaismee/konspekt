import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { METRIKA_ID } from "./TrackedScreen.js";

const TrackedButton = ({ goalName, params = {}, children, ...props }) => {
  const handleClick = () => {
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", goalName, params);
      console.log(`[Metrika] click: ${goalName}`, params);
    } else {
      console.log(`[Metrika] (no ym) click: ${goalName}`, params);
    }
  };

  return (
    <AnchorLink {...props} onClick={handleClick}>
      {children}
    </AnchorLink>
  );
};

export default TrackedButton;