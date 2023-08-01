import React from "react";
import style from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <section className="section-contacts">
      <div className={["container", style.section_container].join(" ")}>
        <h1 className={["section-heading", style.contacts_heading].join(" ")}>
          Контакты
        </h1>
        <div className={style.contacts_container}>
          <div className={style.contacts_list_info}>
            <ul className={style.contacts_list}>
              <li className={style.contact_item}>
                <strong className={style.contacts_heading}>Адрес</strong>
                <div className="section-contacts-info">
                  Москва, улица Юности, дом 5 строение 4, офис 2
                </div>
              </li>
              <li className={style.contact_item}>
                <strong className={style.contacts_heading}>Телефоны</strong>
                <div className="section-contacts-info">
                  <a href="tel:+74995356434" className={style.contacts_link}>
                    +7 499 535-64-34
                  </a>
                  <br />
                  <a href="tel:+74950050544" className={style.contacts_link}>
                    +7 495 005-05-44
                  </a>
                </div>
              </li>
              <li className={style.contact_item}>
                <strong className={style.contacts_heading}>Email</strong>
                <div className="section-contacts-info">
                  <a
                    href="mailto:lg.oona@mail.ru"
                    className={style.contacts_link}
                  >
                    lg.oona@mail.ru
                  </a>
                  <p className="contacts-link__adv">по вопросам бронирования</p>
                  <a
                    href="mailto:hotels.ln@mail.ru"
                    className={style.contacts_link}
                  >
                    hotels.ln@mail.ru
                  </a>
                  <p className="contacts-link__adv">
                    по вопросам сотрудничества
                  </p>
                </div>
              </li>
              <li className={style.contact_item}>
                <strong className={style.contacts_heading}>График</strong>
                <div className="section-contacts-info">
                  Понедельник-пятница, с 10:00 до 19:00
                </div>
              </li>
            </ul>

            <a href="" className={style.contact_btn}>
              Построить маршрут
            </a>
          </div>

          <img className={style.contact_img} />
        </div>
      </div>
    </section>
  );
}
