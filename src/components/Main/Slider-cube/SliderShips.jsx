import CardShips from './CardShips';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
const SliderShips = ({ ship }) => {
  return (
    <Swiper
      modules={[Navigation, EffectCube]}
      effect="cube"
      slidesPerView={1}
      loop={true}
      speed={300}
      navigation={{
        nextEl:".next",
        prevEl:".prev"
      }}
    >
        {ship.map((obj) => <SwiperSlide key={obj.id}>
            <CardShips ship={[obj]} />
        </SwiperSlide>)}
    </Swiper>
  );
};

export default SliderShips;
