import React from "react";
import data from "./placementData";
import PlacementCard from "./PlacementCard";
import style from "./Placement.module.scss";

export default function Placement() {
  return (
    <section className="section-placement">
      <div className="container placement_container">
        <h1 className={["section-heading", style.placement_heading].join(" ")}>
          Размещение
        </h1>
        <ul className={style.placement_list}>
          {data.map((card) => (
            <PlacementCard
              key={card.id}
              image={card.image}
              price={card.price}
              name={card.name}
              place={card.place}
            />
          ))}

          <li className={style.placement_item_more}>
            <button className={style.placement_item_more_btn}>
              Посмотреть все варианты
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
