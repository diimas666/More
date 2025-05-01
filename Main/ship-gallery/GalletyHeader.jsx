import style from "./shipGallery.module.scss";
import { Button } from "../About/Button";
import { Modal } from "./Modal";
import { useState } from "react";

export const GalletyHeader = ({
  setModalVisible,
  modalVisible,
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
  addCardHandler,
  handleRandomCard
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
    <div className={style.galletyHeader}>
      <h2>
        Публикации <span>{arr.length - cardVisible.length}</span>
      </h2>
      <Button
        onClick={() => setModalVisible((prev) => !prev)}
        className={style.galletyHeader__btn}
      >
        Добавить карточку
      </Button>
      {showAll ? (
        <Button onClick={handleHide} className={style.galletyHeader__public}>
          скрыть
        </Button>
      ) : (
        <Button onClick={handleShowAll} className={style.galletyHeader__public}>
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
          handleRandomCard={handleRandomCard}
        />
      )}
    </div>
  );
};
