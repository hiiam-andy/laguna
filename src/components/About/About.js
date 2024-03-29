import React from "react";
import style from "./About.module.scss";

export default function About() {
  return (
    <section className="section-about">
      <div className={["container", style.about_container].join(" ")}>
        <h1 className={["section-heading", style.about_heading].join(" ")}>
          О нас
        </h1>
        <p className={style.about_text}>
          Идейные соображения высшего порядка, а также сложившаяся структура
          организации влечёт за собой процесс внедрения и модернизации системы
          обучения кадров, соответствует насущным потребностям. Идейные
          соображения высшего порядка, а также дальнейшее развитие различных
          форм деятельности представляет собой интересный эксперимент проверки
          системы обучения кадров, соответствует насущным потребностям. Равным
          образом сложившаяся структура организации требуют определения
          и уточнения существенных финансовых и административных условий.
        </p>
      </div>
    </section>
  );
}
