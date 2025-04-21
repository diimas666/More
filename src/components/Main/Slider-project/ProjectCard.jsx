import style from './Project.module.scss';
import Button from '../About/Button';
import { text } from './sliderProject';
import { useState } from 'react';
const ProjectCard = ({ img, descr, title }) => {
  const [state, setState] = useState(false);
  return (
    <div className={style.wrapper}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className={style.images}
      >
        <div className={style.images__info}>
          <h2>{title}</h2>
          <h3>{descr}</h3>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content__grid}>
          <div className={style.content__card}>
            <div className={style.content__block}>
              <b>130 000</b>
              <span>тонн</span>
            </div>
            <p>вес бетонного основания платформы</p>
          </div>
          <div className={style.content__card}>
            <div className={style.content__block}>
              <b>3,3</b>
              <span>узла</span>
            </div>
            <p>составила скорость буксировки платформы </p>
          </div>

          <div className={style.content__card}>
            <div className={style.content__block}>
              <b>41</b>
              <span>m</span>
            </div>
            <p>высота каждой колонны</p>
          </div>
          <div className={style.content__card}>
            <div className={style.content__block}>
              <b>15</b>
              <span>судов</span>
            </div>
            <p>проектная команда</p>
          </div>
        </div>
        <Button
          onClick={() => setState((prev) => !prev)}
          className={style.content__btn}
        >
          {state ? 'Закрыть' : 'Подробнее'}
        </Button>
        {state && <p className={style.content__title}>{text}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
