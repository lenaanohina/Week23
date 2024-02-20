import React from "react";
import Tariff from "./Tariff";
import "./tariffList.css";

const TariffList = () => {
  const tariffs = [
    {
      id: 1,
      name: "Безлимитный 300",
      price: 300,
      speed: "до 10 Мбит/сек",
      traffic: "Объем включённого трафика не ограничен",
    },
    {
      id: 2,
      name: "Безлимитный 450",
      price: 450,
      speed: "до 50 Мбит/сек",
      traffic: "Объем включённого трафика не ограничен",
    },
    {
      id: 3,
      name: "Безлимитный 550",
      price: 550,
      speed: "до 100 Мбит/сек",
      traffic: "Объем включённого трафика не ограничен",
    },
    {
      id: 4,
      name: "Безлимитный 1000",
      price: 1000,
      speed: "до 200 Мбит/сек",
      traffic: "Объем включённого трафика не ограничен",
    },
  ];

  return (
    <div className="card-container">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={tariff.id}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          traffic={tariff.traffic}
        />
      ))}
    </div>
  );
};

export default TariffList;
