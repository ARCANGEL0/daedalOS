import React, { useEffect } from "react";

const Fallout: React.FC = () => {
  useEffect(() => {
    window.open("https://arcangel0.github.io/robco", "_blank");
  }, []);

  return null; // No UI rendered
};

export default Fallout;