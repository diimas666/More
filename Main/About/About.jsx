import style from "./About.module.scss";
import { Button } from "./Button";
import { SliderShips } from "../Slider-cube/SliderShips";
import { ships } from "../Slider-cube/ships";

export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__info}>
        <h1>Первый в мире ледокольный газовоз</h1>
        <p>
          Et elementum penatibus lacinia eget ut amet lorem. Id lectus magna
          quis odio in. In mi vitae ultrices et luctus eu gravida tincidunt
          cras. Quisque pellentesque mollis ut sed.
        </p>
        <Button type="button" className={style.about__btn}>
          Подробнее
        </Button>
      </div>
      <div className={style.about__card}>
        <SliderShips ship={ships} />
      </div>
    </section>
  );
};
