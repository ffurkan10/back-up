import React from "react";
import Style from "./style.module.scss";
import cn from "classnames";
import BannerStore from "../bannerStore";

const TextImage = ({
  title,
  text,
  text2,
  list,
  image,
  desc,
  bottom,
  carriers,
  about,
  background,
  buttonText,
  icon,
  gold,
  store,
  storeImage2,
  storeImage1,
  storeTitle,
  normalImage,
  load,
  transport,
}) => {
  return (
    <div
      className={cn(
        background && Style.background,
        store && Style.store,
        normalImage && Style.normalImage,
        load && Style.load,
        gold && Style.goldContainer,
        transport && Style.transport
      )}
    >
      <div className="container">
        <div
          className={cn(
            Style.textImage,
            about && Style.aboutContainer,
            gold && Style.goldSection
          )}
        >
          <div className={cn(Style.left, bottom && Style.customContainer)}>
            {title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>}
            <p>{desc}</p>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
            {list && <span dangerouslySetInnerHTML={{ __html: list }}></span>}
            {text2 && <span dangerouslySetInnerHTML={{ __html: text2 }}></span>}
          </div>

          {image && (
            <div className={cn(Style.right)}>
              <div className={Style.imageBox}>
                <img src={image} alt="computer" />
              </div>
              {background && (
                <div className={Style.buttonCard}>
                  <a href="/">
                    {buttonText} <img src={icon} alt="" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {store && (
        <BannerStore
          image2={storeImage2}
          image1={storeImage1}
          title={storeTitle}
        />
      )}
    </div>
  );
};

export default TextImage;
