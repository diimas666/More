import style from './History.module.scss';
import logo from '../../../assets/img/company.png';
import { useState } from 'react';
import Info from './Info';
const Company = ({ history }) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleActive = (id) => {
    setActiveButton(id);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.company}>
        <div className={style.company__history}>
          <h2>История компании</h2>
          {history.map(({ id, title, description }) =>
            activeButton === id ? (
              <div key={id} className={style.company__info}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ) : null
          )}
        </div>
        <div className={style.company__wrap}>
          <div className={style.company__images}>
            <img src={logo} alt="logo" />
            {history.map(({ id }) => (
              <button
                key={id}
                className={`${style[`btn${id}`]} ${
                  activeButton === id ? style.active : style['not-active']
                }`}
                onClick={() => handleActive(id)}
              >
                <span></span>
              </button>
            ))}
          </div>
          <Info id={"1"} title={"Etiam hendrerit aliquam mattis mauris at orci."} />
          <Info id={"2"} title={"Risus integer ultrices tincidunt massa."} />
          <Info id={"3"} title={"Scelerisque lorem semper facilisi auctor metus eros in. Feugiat."} />
          <Info id={"4"} title={"Nec id diam varius laoreet volutpat arcu tempus."} />
        </div>
      </div>
    </div>
  );
};

export default Company;