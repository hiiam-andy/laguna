import React from "react";
import style from "./OfferCard.module.css";

export default function OfferCard({ title, price, image, greedClass }) {
  return (
    <li className={[style.offer, style[`${greedClass}`]].join(" ")}>
      <img className={style.offer_image} src={image} />
      <img
        className={style.offer_image_gradient}
        src={require("../../img/offerDarken.png")}
      />
      <div className={style.offer_card_content}>
        <h2 className={style.offer_card_header}>{title}</h2>
        <h3 className={style.offer_price}>от {price}</h3>
        <a className={style.offer_link}>Подробнее</a>
      </div>
    </li>
  );
}
