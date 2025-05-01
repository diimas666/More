import style from "./shipGallery.module.scss";

export const GalleryCard = ({ cardArray }) => {
  return (
    <div className={style.wrapper}>
      {cardArray.map(({ id, description, image, title, date }) => (
        <div key={id} className={style.card}>
          <div className={style.card__image}>
            <img src={image} alt={`Image${id}`} />
          </div>
          <div className={style.card__block}>
            <p className={style.card__date}>{date}</p>
            <p className={style.card__descr}>{description}</p>
            <p className={style.card__title}>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
