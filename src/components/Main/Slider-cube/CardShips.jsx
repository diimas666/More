import style from '../About/About.module.scss';
const CardShips = ({ ship }) => {
  return (
    <div className={style.wrapper}>
      {ship.map(({ id, title, cargoCapacity, iceClass, azipodCount,icePassability, img }) => (
        <div className={style['card-flex']} key={id}>
            <h2>{title}</h2>
            <div className={style["card-flex_block"]}>
                <div>
                    <div className={style.block}>
                        <p>Грузовместимость: </p>
                        <span>{cargoCapacity}</span>
                    </div>
                    <div className={style.block}>
                        <p>Ледопроходимость: </p>
                        <span>{icePassability}</span>
                    </div>
                    <div className={style.block}>
                        <p>Ледовый класс: </p>
                        <span>{iceClass}</span>
                    </div>
                    <div className={style.block}>
                        <p>Число «Азиподов»: </p>
                        <span>{azipodCount}</span>
                    </div>
                </div>
                <div className={style.block}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CardShips;
