import React from "react";
import style from "./Service.module.scss";

export default function ServiceCard({ title, body, image, alt }) {
  return (
    <li className={style.service_list_item}>
      <img src={image} alt={alt} className={style.service_img} />
      <div className={style.service_description}>
        <a className={style.service_link}>{title}</a>
        <p className={style.service_text}>{body}</p>
      </div>
    </li>
  );
}
