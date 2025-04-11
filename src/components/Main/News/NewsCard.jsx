import style from './News.module.scss';
import Button from '../About/Button';

const NewsCard = ({ news }) => {
  return (
    <div className={style['news-card']}>
      {news.map(({ date, title, description, bg }) => (
        <div className={style['news-wrapper']} key={bg}>
          <div className={style['image-overlay']} />
          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className={style['image-background']}
          />
          <Button className={style['news-button']}>{date}</Button>
          <div className={style['news-title-block']}>
            <p className={style.title}>{title}</p>
            <p className={style.descr}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
