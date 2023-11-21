import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";
import Card from "../../card";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsSection = ({
  detailImage,
  data,
  isMobile,
  allNews,
  imageMobile,
  isTablet,
  TabletBanner,
}) => {
  console.log("value", allNews);
  return (
    <div className={Style.newsSection}>
      <div className={cn("container", Style.customTop)}>
        <div className={Style.detailContainer}>
          <div className={Style.imageBox}>
            {!isMobile && !isTablet ? <img src={detailImage} alt="" /> : ""}
            {!isMobile && isTablet ? <img src={TabletBanner} alt="" /> : ""}
            {isMobile && isTablet ? <img src={imageMobile} alt="" /> : ""}
          </div>
          <div className={Style.card}>
            <div className={Style.detailCard}>
              {data?.map((item) => (
                <div className={Style.cardContent}>
                  <h3 dangerouslySetInnerHTML={{ __html: item?.title }}></h3>
                  <p dangerouslySetInnerHTML={{ __html: item?.desc }}></p>
                  <img src={item?.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={Style.otherNews}>
        <div className={cn(Style.swiperNews)}>
          <div className={Style.swiperContainer}>
            {/* <div className="container">
              <h3 className={Style.title}>Sektörel Haberler</h3>
            </div> */}

            <Swiper
              loop
              // spaceBetween={0}
              centeredSlides={true}
              // navigation
              navigation={isMobile && true}
              breakpoints={{
                1700: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
                560: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                260: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              allowTouchMove={true}
              className={cn("swiper-landing", "sectorel-swiper", Style.swipper)}
            >
              {allNews?.map((item) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className={Style.itemName}>
                      <Link
                        state={data.filter((item) => item.id === item.id)}
                        to={`/haber/${item.id}`}
                      >
                        <img
                          src={isMobile ? item?.imageMobile : item?.image}
                          alt=""
                        />
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: isMobile ? item?.mobileTitle : item?.title,
                          }}
                        ></h3>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
