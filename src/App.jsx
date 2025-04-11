import './assets/styles/main.scss';
import { Background } from './Background';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Slider from './components/Main/Slider/Slider';
import News from './components/Main/News/News.jsx';
import { Container } from './Container';
import  Wrapper from './components/Main/History/Wrapper.jsx';
import  Company  from './components/Main/History/Company.jsx';
import { historyShip } from './components/Main/History/history.js';
import { useState } from 'react';

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    </>
  );
};
