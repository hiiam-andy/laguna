import React from "react";
import MyButton from "../UI/MyButton";
import style from "./Placement.module.scss";

export default function PlacementCard({ image, name, place, price }) {
  return (
    <li className={style.placement_card_item}>
      <img src={image} className={style.placement_card_img} />

      <div className={style.placement_card_description}>
        <div className={style.placement_card_price_rate}>
          <p className={style.placement_card_info}>
            от <strong className={style.price}>{price}</strong> / ночь
          </p>
          <div className={style.placement_card_rate}>alt=звёзды</div>
        </div>
        <div className={style.placement_card_place}>
          <p className={style.placement_card_info_name}>{name}</p>
          <p className={style.placement_card_info_place}>{place}</p>
          <MyButton>Номера</MyButton>
        </div>
      </div>
    </li>
  );
}
