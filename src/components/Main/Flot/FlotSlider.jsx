import style from './FlotCard.module.scss';
import FlotCard from './FlotCard';
import { flot } from './flot';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { EffectFlip } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import  Button from '../About/Button';
import 'swiper/css';
import 'swiper/css/effect-flip';

const FlotSlider = () => {
  return (
    <div className={style.slider}>
      <Button className={style.slider__prev}>
        <FaArrowLeft />
      </Button>
      <Swiper
        className={style.swiper}
        effect="flip"
        grabCursor={true}
        modules={[EffectFlip, Navigation]}
        loop={true}
        navigation={{
            prevEl:`.${style.slider__prev}`,
            nextEl:`.${style.slider__next}`,
        }}
      >
        {flot.map(({ id, img, title, t1, t2, t3, t4 }) => (
          <SwiperSlide key={id}>
            <FlotCard id={id} title={title} t1={t1} t2={t2} t3={t3} t4={t4} img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className={style.slider__next}>
        <FaArrowRight  />
      </Button>
    </div>
  );
};

export default FlotSlider;
