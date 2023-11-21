import React from "react";
import Style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../card";
import { Link } from "react-router-dom";
import cn from "classnames";

const SectoralNews = ({ title, data, isMobile }) => {
  return (
    <section className={Style.sector}>
      <div className={Style.header}>
        <div className="container">
          <Link to="/sektorel-haberler">
            <h3>{title}</h3>
          </Link>
        </div>
      </div>

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
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          560: {
            slidesPerView: 1,
            spaceBetween: 0,
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
        {data?.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className={Style.itemName}>
                <Link
                  state={data.filter((item) => item.id === item.id)}
                  to={`/haber/${item.id}`}
                >
                  <img
                    src={isMobile ? item?.mobileImage : item?.image}
                    alt=""
                  />
                  <div className={Style.textBox}>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: isMobile ? item?.mobileTitle : item?.title,
                      }}
                    ></h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SectoralNews;
