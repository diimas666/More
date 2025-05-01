import style from "./Footer.module.scss";

export const FooterWrapper = ({ children }) => {
  return <div className={style.footer__wrapper}>{children}</div>;
};
