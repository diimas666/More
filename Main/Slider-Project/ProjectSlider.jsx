import { sliderProject } from "./sliderProject";
import { ProjectCard } from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import style from "./Project.module.scss";

export const ProjectSlider = ({ swiperRef }) => {
  return (
    <div className={style.slider}>
      <Swiper
        ref={swiperRef}
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
      >
        {sliderProject.map(({ id, img, title, descr }) => (
          <SwiperSlide key={id}>
            <ProjectCard img={img} title={title} descr={descr} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
