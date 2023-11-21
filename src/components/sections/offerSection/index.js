import React, { useState } from "react";
import Style from "./style.module.scss";
import OfferForm from "../offerForm";

const OfferSection = () => {
  return (
    <div className="container">
      <div className={Style.formSection}>
        <OfferForm />
      </div>

      <div className={Style.map}></div>
    </div>
  );
};

export default OfferSection;
