import style from "./shipGallery.module.scss";
import { IoClose } from "react-icons/io5";
import { Button } from "../About/Button";

export const Modal = ({
  setModalVisible,
  modalVisible,
  img,
  setImg,
  descr,
  setDescr,
  title,
  setTitle,
  addCardHandler,
  handleRandomCard
}) => {
  return (
    <>
      <div
        onClick={() => setModalVisible(false)}
        className={style["modal-overlay"]}
      />
      <div className={style.modal}>
        <Button
          onClick={() => setModalVisible(false)}
          className={style.modal__close}
        >
          <IoClose />
        </Button>
        <h2>Внесите свою карточку</h2>
        <p>Добавьте вашу карточку, чтобы открыть мир новых возможностей.</p>
        <div className={style.modal__block}>
          <div className={style.modal__wrap}>
            <span>Изображение</span>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="url"
              placeholder="https://"
            />
          </div>
          <div className={style.modal__wrap}>
            <span>Описание</span>
            <input
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
              type="text"
              placeholder="Описание"
            />
          </div>
          <div className={style.modal__wrap}>
            <span>Заголовое</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Заголовое"
            />
          </div>
        </div>
        <div className={style.buttons}>
          <Button onClick={addCardHandler} className={style.buttons__btn1}>
            Добавить карточку
          </Button>
          <Button
            onClick={() => setModalVisible(false)}
            className={style.buttons__btn2}
          >
            Отмена
          </Button>
          <Button onClick={handleRandomCard} className={style.buttons__btn3}>
            Случайная карточка
          </Button>
        </div>
      </div>
    </>
  );
};
