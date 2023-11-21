import React from "react";
import Style from "./style.module.scss";

const AboutCard = ({ title, data, text, image, lastCard }) => {
  return (
    <div className={Style.cardContainer}>
      <div className="container">
        <h3>{title}</h3>
        <div className={Style.cards}>
          <div className={Style.cardList}>
            {data?.map((item) => (
              <div className={Style.list}>
                <img src={item?.image} alt="" />
                <div className={Style.textBox}>
                  <p>{item?.number}</p>
                  <span>{item?.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={Style.last}>
            <img src={image} alt="" />
            <div className={Style.lastCard}>
              <p>{lastCard}</p>
            </div>
          </div>
        </div>

        <p className={Style.lastText}>{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
