import Button from '../About/Button';
import style from './shipGallery.module.scss';
import { IoClose } from 'react-icons/io5';

const Modal = ({
  setModalVisible,
  modalVisible,
  img,
  setImg,
  descr,
  setDescr,
  title,
  setTitle,
  addCardHandler
}) => {
  return (
    <>
      <div
        onClick={() => setModalVisible(false)}
        className={style.modal__overlay}
      />
      <div className={style.modal}>
        <Button className={style.modal__close}>
          {' '}
          <IoClose onClick={() => setModalVisible(false)} />
        </Button>
        <h2>Внесите свою карточку</h2>
        <p>Добавьте вашу карточку, чтобы открыть мир новых возможностей </p>
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
            <span>Заголовок</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Заголовок"
            />
          </div>
        </div>
        <div className={style.buttons}>
          <Button onClick={addCardHandler} className={style.buttons__btn1}>Добавить карточку</Button>
          <Button
            onClick={() => setModalVisible(false)}
            className={style.buttons__btn2}
          >
            Отмена
          </Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
