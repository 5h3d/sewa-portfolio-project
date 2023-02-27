import React, { useState, useEffect } from "react";
// import "./DustParticles.css";

const DustParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.floor(Math.random() * 10 + 1);
      const particle = { x, y, size };
      setParticles((prevParticles) => [...prevParticles, particle]);
    };

    const intervalId = setInterval(createParticle, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="dust-particles">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="dust-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DustParticles;
