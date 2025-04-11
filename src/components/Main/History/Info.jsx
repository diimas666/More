import style from './History.module.scss';
const Info = ({title, id}) => {
    return (
        <div className={style.info}>
            <div className={style.info__block}>
                <input type="checkbox"  id={id} />
                <label htmlFor={id}>{title}</label>
            </div>
        </div>
      );
}
 
export default Info;