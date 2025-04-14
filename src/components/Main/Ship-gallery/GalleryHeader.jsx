import style from './shipGallery.module.scss';
import Button from '../About/Button';
import { useState } from 'react';
import Modal from './Modal';

const GalleryHeader = ({
  modalVisible,
  setModalVisible,
  displayVisibleCard,
  cardVisible,
  handleVisibleCard,
  arr,
  img,
  setImg,
  descr,
  setDescr,
  title,
  setTitle,
  addCardHandler
}) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
    handleVisibleCard(arr);
  };
  const handleHide = () => {
    setShowAll(false);
    handleVisibleCard(displayVisibleCard);
  };
  return (
    <div className={style.galleryHeader}>
      <h2>
        Публикации
        <span>{arr.length - cardVisible.length}</span>
      </h2>
      <Button
        onClick={() => setModalVisible(true)}
        className={style.galleryHeader__btn}
      >
        Добавить карточку
      </Button>
      {showAll ? (
        <Button onClick={handleHide} className={style.galleryHeader__public}>
          Скрыть
        </Button>
      ) : (
        <Button onClick={handleShowAll} className={style.galleryHeader__public}>
          Все публикации
        </Button>
      )}
      {modalVisible && (
        <Modal
          img={img}
          setImg={setImg}
          descr={descr}
          setDescr={setDescr}
          title={title}
          setTitle={setTitle}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addCardHandler={addCardHandler}
        />
      )}
    </div>
  );
};

export default GalleryHeader;
