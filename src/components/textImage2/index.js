import React from "react";
import Style from "./style.module.scss";

const TextImage2 = ({ title, desc, text, image }) => {
  return (
    <div className="container">
      <div className={Style.textImage}>
        <div className={Style.left}>
          <h3>{title}</h3>
          <br />
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
        <div className={Style.right}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={Style.text}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default TextImage2;
