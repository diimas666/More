import Button from '../About/Button';
import style from './shipGallery.module.scss';
import { IoClose } from 'react-icons/io5';

const Modal = ({ setModalVisible, modalVisible }) => {
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
            <input type="url" placeholder="https://" />
          </div>
          <div className={style.modal__wrap}>
            <span>Описание</span>
            <input type="text" placeholder="Описание" />
          </div>
          <div className={style.modal__wrap}>
            <span>Заголовок</span>
            <input type="text" placeholder="Заголовок" />
          </div>
        </div>
        <div className={style.buttons}>
          <Button className={style.buttons__btn1}>Добавить карточку</Button>
          <Button onClick={() => setModalVisible(false)} className={style.buttons__btn2}>Отмена</Button>
          <Button className={style.buttons__btn3}>Случайная карточка</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
