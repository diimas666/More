import './assets/styles/main.scss';
import { Background } from './Background';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Slider from './components/Main/Slider/Slider';
import News from './components/Main/News/News.jsx';
import { Container } from './Container';
import Wrapper from './components/Main/History/Wrapper.jsx';
import GalleryHeader from './components/Main/Ship-gallery/GalleryHeader.jsx';
import Company from './components/Main/History/Company.jsx';
import { historyShip } from './components/Main/History/history.js';
import { useState } from 'react';
import GalleryCard from './components/Main/Ship-gallery/GalleryCard.jsx';
import { galleryArr } from './components/Main/Ship-gallery/galleryArr.js';
import { v4 as randomId } from 'uuid';

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // modal
  const [modalVisible, setModalVisible] = useState(false);
  // card
  const displayVisibleCard = galleryArr.slice(0, 4);
  const [cardVisible, setCardVisible] = useState(displayVisibleCard);
  const handleVisibleCard = (arr) => setCardVisible(arr);
  const [arr, setArr] = useState(galleryArr);

  // INPUT
  const [img, setImg] = useState('');
  const [descr, setDescr] = useState('');
  const [title, setTitle] = useState('');
  const date = new Date().toLocaleDateString('RU-ru', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  // функция добавления карточки
  const addCardHandler = () => {
    if (img && descr && title) {
      const newObject = {
        image: img,
        description: descr,
        title,
        id: randomId(),
        date,
      };
      const updateObject = setArr((prev) => [...prev, newObject]);
      setImg('');
      setDescr('');
      setTitle('');
      setModalVisible(false);
      return updateObject;
    } else {
      alert('Пусто..');
    }
    
  };

 

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  const classeS = {
    prev: ['prev'],
    next: ['next'],
  };
  return (
    <>
      <Background currentIndex={currentIndex}>
        <Container>
          <Header />
          <About />
          <Slider onChangeSlide={handleSlideChange} {...classeS} />
        </Container>
      </Background>
      <Container>
        <News />
      </Container>
      <Wrapper>
        <Container>
          <Company history={historyShip} />
        </Container>
      </Wrapper>
      <Container>
        <GalleryHeader
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          displayVisibleCard={displayVisibleCard}
          cardVisible={cardVisible}
          handleVisibleCard={handleVisibleCard}
          arr={arr}
          img={img}
          setImg={setImg}
          descr={descr}
          setDescr={setDescr}
          title={title}
          setTitle={setTitle}
          addCardHandler={addCardHandler}
          // date={date}
        />
        <GalleryCard cardArray={cardVisible} />
      </Container>
    </>
  );
};
