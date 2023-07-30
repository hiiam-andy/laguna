import React from "react";
import { useNavigate } from "react-router";
import { ACCOUNT_ROUTE, MAIN_ROUTE } from "../../pages/PAGES";

import LOGO from "../../img/logo.svg";

import style from "./Header.module.css";
import Navigation from "./Navigation";
import MyButton from "../UI/MyButton";

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

        <nav className={style.header_nav}>
          <Navigation />
          <div className={style.btn}>
            <MyButton>Хочу тур</MyButton>
            <MyButton style={{ marginLeft: "40px" }}>Обратный звонок</MyButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
