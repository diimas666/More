import style from './Background.module.scss';
import slide1 from './assets/img/ship-1.png';
import slide2 from './assets/img/ship-2.jpg';
import slide3 from './assets/img/ship-3.jpg';
import slide4 from './assets/img/ship-4.jpg';
import slide5 from './assets/img/ship-5.jpg';

export const Background = ({ children, currentIndex }) => {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <div
      className={style.background}
      style={{
        backgroundImage: `url(${slides[currentIndex]})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >
      {children}
    </div>
  );
};
