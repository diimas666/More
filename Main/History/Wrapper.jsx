import style from "./History.module.scss";

export const Wrapper = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
