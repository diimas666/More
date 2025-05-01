import { CardShips } from "./CardShips";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

export const SliderShips = ({ ship }) => {
  return (
    <Swiper
      modules={[Navigation, EffectCube]}
      effect="cube"
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev"
      }}
      speed={300}
      // cubeEffect={{
      //   shadow: false,
      //   slideShadows: false
      // }}
    >
      {ship.map((obj) => (
        <SwiperSlide key={obj.id}>
          <CardShips ship={[obj]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
