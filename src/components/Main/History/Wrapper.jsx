import style from './History.module.scss';
const Wrapper = ({children}) => {
    return ( 
        <div className={style.wrapper}>{children}</div>
     );
}
 
export default Wrapper;