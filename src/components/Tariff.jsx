import React from "react";
import "./tariff.css";

const Tariff = ({ name, price, speed, traffic }) => {
  const cardStyle = {
    fontWeight: price === 550 ? "bold" : "normal",
    transform: price === 550 ? "scale(1.15)" : "normal",
  };
  return (
    <div className="card" style={cardStyle}>
      <h2 className="card-title">{name}</h2>
      <div className="card-price">
        <span>{price}</span>руб/мес
      </div>
      <div className="card-speed">{speed}</div>
      <div className="card-traffic">{traffic}</div>
    </div>
  );
};

export default Tariff;
