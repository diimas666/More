import style from "./Footer.module.scss";
import logo from "../../../assets/img/logo.svg";
import { Button } from "../About/Button";
import { useState } from "react";

const Content = ({ title, t1, t2, t3, t4, t5, t6 }) => {
  const [state, setState] = useState(true);
  return (
    <div className={style.wrapper}>
      <Button onClick={() => setState((prev) => !prev)}>{title}</Button>
      {state ? (
        <>
          <p>{t1}</p>
          <p>{t2}</p>
          <p>{t3}</p>
          <p>{t4}</p>
          <p>{t5}</p>
          <p>{t6}</p>
        </>
      ) : (
        <h3>пусто.....</h3>
      )}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__logo}>
        <img src={logo} alt="footer" />
      </div>
      <div className={style.footer__block}>
        <Content
          title={"О компании"}
          t1={"Профиль компании"}
          t2={"История"}
          t3={"Совет директоров"}
          t4={"Контакты"}
        />
        <Content
          title={"флот"}
          t1={"Виды деятельности"}
          t2={"Устойчивое развитие"}
          t3={"Безопасность и качество"}
          t4={"Защита окружающей среды"}
          t5={"Социальная ответственность"}
        />
        <Content
          title={"Инвесторам"}
          t1={"Акции"}
          t2={"Отчеты и результаты"}
          t3={"Раскрытие информации"}
          t4={"Корпоративное управление"}
          t5={"Аналитики"}
          t6={"Контакты для инвесторов"}
        />
        <div className={style.footer__contact}>
          <p className={style.footer__contact__one}>
            191186, Санкт-Петербург, Невский переулок, д. 3, офис 10-25
          </p>
          <p className={style.footer__contact__city}>
            125047, Москва, Покровская площадь, д.3, к. 5,стр 1
          </p>
          <a className={style.footer__contact__tel} href="tel:(+74951234567)">
            +7 (495) 123-45-67
          </a>
          <a
            className={style.footer__contact__mail}
            href="mailto:info@lead-group.ru)"
          >
            info@lead-group.ru
          </a>
        </div>
      </div>
    </footer>
  );
};
