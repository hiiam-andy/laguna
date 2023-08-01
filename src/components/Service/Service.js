import React from "react";
import ServiceCard from "./ServiceCard";

import style from "./Service.module.scss";
import data from "./serviceData";

export default function Service() {
  return (
    <section className="service">
      <div className={["container", style.service_container].join(" ")}>
        <h1 className={["section-heading", style.service_heading].join(" ")}>
          Услуги
        </h1>
        <ul className={style.service_list}>
          {data.map((card) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              body={card.body}
              image={card.image}
              alt={card.alt}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
