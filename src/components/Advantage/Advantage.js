import React from "react";
import data from "./advantageData";
import AdvantageCard from "./AdvantageCard";

import style from "./Advantage.module.scss";

export default function Advantage() {
  return (
    <section className="section-advantage">
      <div className={["container", style.advantage_container].join(" ")}>
        <h1 className={["section-heading", style.advantage_heading].join(" ")}>
          Преимущества
        </h1>
        <ul className={style.advantage_list}>
          {data.map((card) => (
            <AdvantageCard
              key={card.text}
              image={card.image}
              text={card.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
