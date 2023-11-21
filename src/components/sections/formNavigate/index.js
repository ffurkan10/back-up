import React from "react";
import Style from "./style.module.scss";
import success from "../../../assets/icons/success.svg";
import cn from "classnames";
import Button from "../../button";

const FormNavigate = () => {
  return (
    <div className={cn("container", Style.custom)}>
      <div className={Style.successContainer}>
        <div className={Style.card}>
          <img src={success} alt="success" />
          <h1>Başarıyla Gönderildi</h1>
          <p>En kısa sürede tarafınıza dönüş yapılacaktır.</p>
        </div>
        <div className={Style.btn}>
          <Button href="/">Anasayfaya Dönmek İçin Tıklayınız.</Button>
        </div>
      </div>
    </div>
  );
};

export default FormNavigate;
