import style from './Slider.module.scss';
import Button from '../About/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
const Slider = ({ onChangeSlide, prev, next }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [0, 1, 2, 3, 4];

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    onChangeSlide(newIndex);
  };
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    onChangeSlide(newIndex);
  };
  return (
    <div className={style['slider-buttons']}>
      <Button className={'prev'} onClick={prevSlide}>
        <FaArrowLeft />
      </Button>
      <Button className={'next'} onClick={nextSlide}>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Slider;
