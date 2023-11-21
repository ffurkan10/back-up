import React from "react";
import Style from "./style.module.scss";
import image from "../../assets/404.png";
import cn from "classnames";

const NotFound = () => {
  return (
    <div className={cn("container", Style.custom)}>
      <div className={Style.notFound}>
        <div className={Style.imageBox}>
          <img src={image} alt="" />
        </div>
        <div className={Style.textBox}>
          <h1>
            <span>Sanırım</span>
            <br />
            Ters Yöne Girdiniz
          </h1>
          <p>
            Sanırım bu sayfa ile ilgili bir şeyler ters gitti, ama doğru
            adrestesiniz.
          </p>
          <p>Lütfen diğer seçenekleri deneyin.</p>
          <p>
            <a href="/">Anasayfa</a>ya dönmek için tıkla
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
