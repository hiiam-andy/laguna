import React from "react";
import style from "./Offer.module.css";

export default function Offer() {
  return (
    <section className="section-offer">
      <div className={["container", style.offer_container].join(" ")}>
        <h1 className={style.offer_heading}>Спецпредложения</h1>
        <div className={style.offer_div}>
          <ul className={style.offer_list}>
            <li className={[style.offer_small, style.offer1].join(" ")}>
              <h2 className={style.offer_header}>Мальдивские острова</h2>
              <h3 className={style.offer_price}>от 55 000</h3>
              <a className={style.offer_link}>Подробнее</a>
            </li>
            <li className={[style.offer_small, style.offer2].join(" ")}>
              <h2 className={style.offer_card_header}>
                Горящий <br /> тур на остров Крит
              </h2>
              <h3 className={style.offer_price}>от 30 000</h3>
              <a className={style.offer_link}>Подробнее</a>
            </li>
          </ul>
          <div className={style.offer_big}>
            <h2 className={style.offer_header_big}>Номера категории люкс</h2>
            <h3 className={style.offer_price_big}>от 5 000</h3>
            <a className={style.offer_link}>Подробнее</a>
          </div>
        </div>
      </div>
    </section>
  );
}
