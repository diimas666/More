import style from './shipGallery.module.scss';
import Button from '../About/Button';
import { useState } from 'react';
import Modal from './Modal';

const GalleryHeader = ({ modalVisible, setModalVisible }) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  const handleHide = () => {
    setShowAll(false);
  };
  return (
    <div className={style.galleryHeader}>
      <h2>
        Публикации
        <span>1</span>
      </h2>
      <Button
        onClick={() => setModalVisible(true)}
        className={style.galleryHeader__btn}
      >
        Добавить карточку
      </Button>
      {showAll ? (
        <Button onClick={handleHide} className={style.galleryHeader__public}>Скрыть</Button>
      ) : (
        <Button onClick={handleShowAll} className={style.galleryHeader__public}>Все публикации</Button>
      )}
      {modalVisible && <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
    </div>
  );
};

export default GalleryHeader;
