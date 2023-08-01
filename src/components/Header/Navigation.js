import React from "react";
import style from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <ul className={style.header_nav_list}>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>О нас</a>
      </li>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>Услуги</a>
      </li>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>Преимущества</a>
      </li>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>Размещение</a>
      </li>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>Блог</a>
      </li>
      <li className={style.header_nav_item}>
        <a className={style.header_nav_link}>Контакты</a>
      </li>
    </ul>
  );
}
