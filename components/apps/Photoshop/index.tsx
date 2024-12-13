import React, { useEffect } from "react";

const Fallout: React.FC = () => {
  useEffect(() => {
    window.open("https://www.photopea.com/", "_blank");
  }, []);

  return null; // No UI rendered
};

export default Fallout;