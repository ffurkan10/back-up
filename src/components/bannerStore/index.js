import React from "react";
import Style from "./style.module.scss";

const BannerStore = ({ title, image1, image2 }) => {
  return (
    <div className="container">
      <div className={Style.banner}>
        <div className={Style.title}>
          <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        </div>
        <div className={Style.imageBox}>
          <a href="/">
            <img src={image1} alt="app-store" />
          </a>
          <a href="/">
            <img src={image2} alt="google-play" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerStore;
