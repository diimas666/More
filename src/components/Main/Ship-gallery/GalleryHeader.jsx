import style from './shipGallery.module.scss';
import Button from '../About/Button';
import { useState } from 'react';
const GalleryHeader = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className={style.galleryHeader}>
      <h2>
        Публикации
        <span>1</span>
      </h2>
      <Button className={style.galleryHeader__btn}>Добавить карточку</Button>
      {showAll ? (
        <Button className={style.galleryHeader__public}>Скрыть</Button>
      ) : (
        <Button className={style.galleryHeader__public}>Все публикации</Button>
      )}
    </div>
  );
};

export default GalleryHeader;
