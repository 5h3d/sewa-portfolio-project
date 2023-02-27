import React, { useState, useEffect } from "react";
// import "./Eye.css";

const Eye = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackMouse = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", trackMouse);

    return () => {
      window.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  const eyeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <div className="eye">
      <div className="eyeball" style={eyeStyle}></div>
      <div className="eye-reflection"></div>
    </div>
  );
};

export default Eye