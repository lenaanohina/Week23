import React from "react";
import "./tariff.css";

const Tariff = ({ name, price, speed, traffic }) => {
  const cardClassName = price === 550 ? "card card_red" : "card";
  const priceClassName =
    price === 550 ? "card-price card-price_red" : "card-price";
  const titleClassName =
    price === 550 ? "card-title card-title_red" : "card-title";
  return (
    <div className={cardClassName}>
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
