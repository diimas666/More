import style from "./Background.module.scss";

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
