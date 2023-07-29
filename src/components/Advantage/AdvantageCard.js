import React from "react";
import style from "./Advantage.module.css";

export default function AdvantageCard({ image, text }) {
  return (
    <li className={style.advantage_card}>
      <img className={style.advantage_card_icon} src={image} />
      <p className={style.advantage_card_text}>{text}</p>
    </li>
  );
}
