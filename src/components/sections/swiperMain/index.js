import React from "react";
import Style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../button";
import cn from "classnames";
import { Navigation } from "swiper/modules";

const SwiperMain = ({
  title,
  image,
  data,
  tabletTitle,
  isTablet,
  isMobile,
}) => {
  return (
    <section className={Style.swiperContainer}>
      <div className="container">
        <div className={Style.top}>
          <h2
            dangerouslySetInnerHTML={{ __html: isTablet ? tabletTitle : title }}
          ></h2>
          <img src={image} alt="" />
        </div>
      </div>

      <Swiper
        navigation={isMobile && true}
        modules={[Navigation]}
        loop
        grabCursor
        breakpoints={{
          1700: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          560: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          260: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        // spaceBetween={20}
        allowTouchMove={true}
        className={cn("swiper-landing", Style.swipper)}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className={Style.itemName}>
                {isMobile ? (
                  <p
                    dangerouslySetInnerHTML={{ __html: item?.mobileTitle }}
                  ></p>
                ) : (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: isTablet ? item.title : item?.bigTitle,
                    }}
                  ></p>
                )}

                <div className={Style.btn}>
                  <Button swiper>
                    {item?.buttonText}
                    {/* <img src={item?.icon} alt="" /> */}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwiperMain;
