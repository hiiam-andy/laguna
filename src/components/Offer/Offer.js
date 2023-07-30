import React from "react";
import style from "./Offer.module.css";
import data from "./offerData";
import OfferCard from "./OfferCard";

export default function Offer() {
  let offerCards = data.map((el, index) => {
    const greedClass = `offer${index + 1}`;
    return (
      <OfferCard
        key={el.id}
        title={el.title}
        image={el.image}
        price={el.price}
        greedClass={greedClass}
      />
    );
  });

  return (
    <section className="section-offer">
      <div className={["container", style.offer_container].join(" ")}>
        <h1 className={style.offer_heading}>Спецпредложения</h1>

        <ul className={style.offer_list}>{offerCards}</ul>
      </div>
    </section>
  );
}
