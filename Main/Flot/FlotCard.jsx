import style from "./Flot.module.scss";
import { Button } from "../About/Button";

export const FlotCard = ({ title, t1, t2, t3, t4, img, id }) => {
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
          <img src={img} alt={`Flot-${id}`} />
        </div>
      </div>
    </div>
  );
};
