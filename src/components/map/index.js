import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import wallet from "../../assets/icons/wallet.svg";
import location from "../../assets/icons/location.svg";
import truck from "../../assets/icons/truck-icon.svg";
import lift from "../../assets/icons/industry.svg";
import cn from "classnames";
import GoogleMapSection from "../googleMap/GoogleMap";

const MapCard = ({ data, isCheck, bosaltmaLatLang, yukelemeLatLang }) => {
  return (
    <div className={Style.mapCard}>
      <div className={Style.google}>
        <GoogleMapSection
          bosaltmaLatLang={bosaltmaLatLang}
          yukelemeLatLang={yukelemeLatLang}
        />
      </div>

      <p className={Style.title}>Yüke İlişkin Detaylar</p>
      <div className={Style.location}>
        <div className={Style.card}>
          <img src={location} alt="" />
          <div className={Style.feature}>
            <span>Yükleme: {data[0]?.yuklemeTarih}</span>
            <p>{data[1]?.nereden}</p>
          </div>
        </div>

        <span className={Style.line}></span>

        <div className={cn(Style.card, Style.finish)}>
          <img src={location} alt="" />
          <p>Boşaltma: {data[2]?.nereye}</p>
        </div>
      </div>

      <div className={Style.card}>
        <img src={truck} alt="" />
        <div className={Style.feature}>
          <p>{data[3]?.aracTuru}</p>
        </div>
      </div>

      <div className={Style.card}>
        <img src={lift} alt="" />
        <div className={Style.feature}>
          {/* {data[4]?.komple === true && <p>Komple</p>}
          {data[5]?.parca === true && <p>Parça</p>} */}
          <p>{isCheck}</p>
          <p>{data[5]?.yukTuru}</p>
          <p>{data[6]?.agirlik}</p>
          <p>{data[7]?.message}</p>
        </div>
      </div>

      <div className={Style.card}>
        <img src={wallet} alt="" />
        <div className={Style.feature}>
          <p>{data[8]?.fiyat}</p>
          <p>{data[9]?.odeme}</p>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
