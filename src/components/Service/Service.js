import React from "react";
import style from "./Service.module.css";
import ServiceCard from "./ServiceCard";

import { data } from "./serviceData";

export default function Service() {
  return (
    <section className="service">
      <div className={["container", style.service_container].join(" ")}>
        <h1 className={style.section_heading}>Услуги</h1>
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
