import style from "./Project.module.scss";

export const ProjectWrapper = ({ children }) => {
  return <div className={style.project__wrapper}>{children}</div>;
};
