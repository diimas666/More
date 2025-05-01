import style from './FlotCard.module.scss';
import Button  from '../About/Button';
const FlotCard = ({id,title,img,t1,t2,t3,t4}) => {
    return ( 
        <div className={style["flot-wrapper"]}>
            <div className={style.flot}>
                <div className={style.flot__content}>
                    <Button>Устойчивое развитие</Button>
                    <h2>{title}</h2>
                    <div className={style.flot__descr}>
                        <p>{t1}</p>
                        <p>{t2}</p>
                        <p>{t3}</p>
                        <p>{t4}</p>
                    </div>
                </div>
                <div className={style.flot__images}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
     );
}
 
export default FlotCard;