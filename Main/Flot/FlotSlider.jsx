import { FlotCard } from "./FlotCard";
import { flot } from "./flot";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { EffectFlip } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Button } from "../About/Button";
import "swiper/css";
import "swiper/css/effect-flip";
import style from "./Flot.module.scss";

export const FlotSlider = () => {
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
          prevEl: `.${style.slider__prev}`,
          nextEl: `.${style.slider__next}`
        }}
        speed={700}
      >
        {flot.map(({ title, t1, t2, t3, t4, img, id }) => (
          <SwiperSlide key={id}>
            <FlotCard
              img={img}
              title={title}
              id={id}
              t1={t1}
              t2={t2}
              t3={t3}
              t4={t4}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className={style.slider__next}>
        <FaArrowRight />
      </Button>
    </div>
  );
};
