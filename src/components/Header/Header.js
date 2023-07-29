import React from "react";
import { useNavigate } from "react-router";
import { ACCOUNT_ROUTE, MAIN_ROUTE } from "../../pages/PAGES";

import LOGO from "../../img/logo.svg";

import style from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={["container", style.header_container].join(" ")}>
        <div className={style.header_top}>
          <div className={style.header_top_left}>
            <a className={style.logo}>
              <img
                src={LOGO}
                alt="logo"
                className={style.logo_image}
                onClick={() => navigate(MAIN_ROUTE)}
              />
            </a>
            <a href="tel:+74953225448" className={style.header_phone}>
              +7 495 322-54-48
            </a>
          </div>
          <a
            className={style.header_account_link}
            onClick={() => navigate(ACCOUNT_ROUTE)}
          >
            Личный кабинет
          </a>
        </div>
        <div className={style.header_bottom}>
          <nav className={style.header_nav}>
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
          </nav>
          <div className={style.btn}>
            <button className={style.header_btn}>Хочу тур</button>
            <button className={style.header_btn}>Обратный звонок</button>
          </div>
        </div>
      </div>
    </header>
  );
}
