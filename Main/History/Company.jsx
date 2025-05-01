import style from "./History.module.scss";
import logo from "../../../assets/img/history.png";
import { Button } from "../About/Button";
import { Info } from "./Info";
import { useState } from "react";

export const Company = ({ history }) => {
  const [activeButton, setActivButton] = useState(1);

  const handleActive = (id) => setActivButton(id);

  return (
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
          <img src={logo} alt="history" />
          {history.map(({ id }) => (
            <Button
              key={id}
              onClick={() => handleActive(id)}
              className={`${style[`btn${id}`]} ${
                activeButton === id ? style.active : style["not-active"]
              }`}
            >
              <span></span>
            </Button>
          ))}
        </div>
        <Info
          id={"1"}
          title={"Etiam hendrerit aliquam mattis mauris at orci."}
        />
        <Info id={"2"} title={"Risus integer ultrices tincidunt massa."} />
        <Info
          title={
            "Scelerisque lorem semper facilisi auctor metus eros in. Feugiat."
          }
          id={"3"}
        />
        <Info
          id={"4"}
          title={"Nec id diam varius laoreet volutpat arcu tempus."}
        />
      </div>
    </div>
  );
};
