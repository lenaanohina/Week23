// import React from "react";
import React, { useState } from "react";
import "./tariff.css";

const Tariff = ({ name, price, speed, traffic }) => {
  const priceClassName =
    price === 550 ? "card-price card-price_red" : "card-price";
  const titleClassName =
    price === 550 ? "card-title card-title_red" : "card-title";

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    setIsSelected(!isSelected);
  };
  const cardClassName = `card${isSelected ? " card_selected" : ""}`;
  return (
    <div className={cardClassName} onClick={handleSelectClick}>
      <h2 className={titleClassName}>{name}</h2>
      <div className={priceClassName}>
        <span>{price}</span>руб/мес
      </div>
      <div className="card-speed">{speed}</div>
      <div className="card-traffic">{traffic}</div>
    </div>
  );
};

export default Tariff;
