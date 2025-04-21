import style from './Project.module.scss';
const ProjectWrapper = ({ children }) => {
  return <div className={style.project__wrapper}>{children}</div>;
};

export default ProjectWrapper;
