import style from "./Project.module.scss";
import { Button } from "../About/Button";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const HeaderProject = ({ swiperRef }) => {
  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };
  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };
  return (
    <div className={style.header}>
      <h2>Проекты</h2>
      <div className={style.header__block}>
        <p>все проекты</p>
        <div className={style.header__buttons}>
          <Button onClick={handlePrevClick}>
            <FaArrowLeft />
          </Button>
          <Button onClick={handleNextClick}>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
