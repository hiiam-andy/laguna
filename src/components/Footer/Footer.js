import React from "react";
import { ReactComponent as GROUP } from "../../img/Group.svg";
import { ReactComponent as VK } from "../../img/VK.svg";
import { ReactComponent as OK } from "../../img/ok.svg";

import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={["container", style.footer_container].join(" ")}>
        <div className={style.footer_info}>
          <p className={style.footer_info_text}>
            © 2012–2020 Управляющая компания Объединённой сети «Лагуна Хотелс»
          </p>
          <p className={style.footer_info_text}>
            Представленная на сайте информация носит справочный характер <br />{" "}
            и не является публичной офертой
          </p>
          <a className={style.footer_link}>Пользовательское соглашение</a>
        </div>
        <div className={style.footer_right}>
          <div className={style.footer_contacts}>
            <p className={style.footer_adress}>
              11710, улица Юности, дом 5 строение 4, офис 2
            </p>
            <ul>
              <li>
                <a href="tel:+74995356434" className={style.footer_link}>
                  +7 499 535-64-34
                </a>
                <br />
                <a href="tel:+74950050544" className={style.footer_link}>
                  +7 495 005-05-44
                </a>
              </li>
              <li>
                <a href="mailto:lg.oona@mail.ru" className={style.footer_link}>
                  lg.oona@mail.ru
                </a>
                <br />
                <a
                  href="mailto:hotels.ln@mail.ru"
                  className={style.footer_link}
                >
                  hotels.ln@mail.ru
                </a>
              </li>
            </ul>
          </div>
          <ul className={style.footer_social_logo}>
            <li className={style.footer_social_item}>
              <a className={style.footer_social_link}>
                <GROUP className={style.footer_social_icon} />
              </a>
            </li>
            <li className={style.footer_social_item}>
              <a className={style.footer_social_link}>
                <OK className={style.footer_social_icon} />
              </a>
            </li>
            <li className={style.footer_social_item}>
              <a className={style.footer_social_link}>
                <VK className={style.footer_social_icon} />
              </a>
            </li>
          </ul>

          <span className={style.footer_img}></span>
        </div>
      </div>
    </footer>
  );
}
